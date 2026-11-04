import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { About } from './components/sections/About'
import { Achievements } from './components/sections/Achievements'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

function App() {
  return (
    <div className="site-shell min-h-screen bg-[#101210] text-[#eeefec]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
