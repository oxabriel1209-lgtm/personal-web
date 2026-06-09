import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Internship from './components/Internship'
import Projects from './components/Projects'
import PapersAndAwards from './components/PapersAndAwards'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Internship />
      <Projects />
      <PapersAndAwards />
      <Skills />
      <Contact />
    </main>
  )
}
