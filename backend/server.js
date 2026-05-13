const express = require("express")
const cors = require("cors")
const { exec } = require("child_process")

const app = express()

app.use(cors())
app.use(express.json())

// Home Route
app.get("/", (req, res) => {
  res.send("Code Execution Backend Running")
})

// Code Execution Route
app.post("/run", (req, res) => {

  const code = req.body.code

  exec(`node -e "${code}"`, (error, stdout, stderr) => {

    if (error) {
      return res.json({
        error: stderr
      })
    }

    res.json({
      output: stdout
    })

  })

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})