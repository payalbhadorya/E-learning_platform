export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-slate-900 text-white">
      <h1 className="text-2xl font-bold text-purple-400">
        CodeSphere
      </h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>Tutorials</li>
        <li>Editor</li>
      </ul>

      <button className="bg-purple-500 px-4 py-2 rounded-lg">
        Login
      </button>
    </nav>
  )
}