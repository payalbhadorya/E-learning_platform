import Editor from "@monaco-editor/react"

export default function CodeEditor() {
  return (
    <div className="p-10 bg-slate-950 min-h-screen text-white">
      
      <h1 className="text-4xl font-bold mb-6">
        Online Code Editor
      </h1>

      <Editor
        height="500px"
        defaultLanguage="javascript"
        defaultValue="// Start coding here..."
        theme="vs-dark"
      />

    </div>
  )
}