const express = require("express")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")
const { exec } = require("child_process")

const mongoose = require("mongoose")
const Progress = require("./models/Progress")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/elearning")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

io.on("connection", (socket) => {

  console.log("User Connected")

  socket.on("runCode", (code) => {

    exec(
      `node -e "${code.replace(/"/g, '\\"')}"`,
      (error, stdout, stderr) => {

        if (error) {
          socket.emit("codeOutput", stderr)
        } else {
          socket.emit("codeOutput", stdout)
        }

      }
    )

  })

})

app.post("/progress", async (req, res) => {

  const progress = new Progress(req.body)

  await progress.save()

  res.json(progress)

})

app.get("/progress", async (req, res) => {

  const progress = await Progress.find()

  res.json(progress)

})

server.listen(5000, () => {
  console.log("Server running on port 5000")
})