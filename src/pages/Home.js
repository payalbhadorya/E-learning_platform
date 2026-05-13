import CodeEditor from "../components/CodeEditor.js"
import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js"
import Features from "../components/Features.js"
import Footer from "../components/Footer.js"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CodeEditor />
      <Footer />
    </>
  )
}