import { useState } from "react"
import Editor from "@monaco-editor/react"
import { io } from "socket.io-client"

const socket = io("http://localhost:5000")

export default function CodeEditor() {

  const [code, setCode] = useState('console.log("Hello")')
  const [output, setOutput] = useState("")

  const runCode = () => {

    socket.emit("runCode", code)

    socket.on("codeOutput", (data) => {
      setOutput(data)
    })

  }

  return (
    <div className="p-10 bg-slate-950 min-h-screen text-white">

      <h1 className="text-5xl font-bold mb-6">
        Real-Time Code Editor
      </h1>

      <Editor
        height="450px"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />

      <button
        onClick={runCode}
        className="bg-blue-600 px-6 py-3 rounded mt-6"
      >
        Run Code
      </button>

      <div className="bg-black p-6 mt-6 rounded">
        <h2 className="text-3xl mb-4">Output:</h2>

        <pre>{output}</pre>
      </div>

    </div>
  )
}