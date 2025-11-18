import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-blue-200/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Kayan Ventures — Facility Intelligence. All rights reserved.</p>
          <p>Based in Amman, Jordan</p>
        </div>
      </footer>
    </div>
  )
}

export default App
