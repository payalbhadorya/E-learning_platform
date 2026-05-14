const express = require("express")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")
const { exec } = require("child_process")

const app = express()

app.use(cors())
app.use(express.json())

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

server.listen(5000, () => {
  console.log("Server running on port 5000")
})