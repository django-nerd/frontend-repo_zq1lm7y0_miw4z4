import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-slate-900">K</div>
          <div className="leading-tight">
            <p className="text-white font-semibold">Kayan Ventures</p>
            <p className="text-xs text-blue-200/80">Facility Intelligence</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-4 py-2 hover:opacity-90 transition-opacity">
            Get in touch
          </a>
        </nav>

        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-blue-100/90 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-4 py-2 w-full text-center">Get in touch</a>
          </div>
        </div>
      )}
    </header>
  )
}
