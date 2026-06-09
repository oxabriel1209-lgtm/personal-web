import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'

const links = [
  { label: '关于', href: '#about' },
  { label: '经历', href: '#experience' },
  { label: '项目', href: '#projects' },
  { label: '论文', href: '#papers' },
  { label: '技能', href: '#skills' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`container mx-auto px-4 pt-6 pb-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm' : ''}`}>
      <nav className="flex items-center justify-between bg-white border-[3px] border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform"
        >
          <span className="text-white font-bold text-sm">OY</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              className="text-[16px] font-bold leading-[20px] hover:opacity-60 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleClick('#contact') }}
          className="bg-black text-white hover:bg-black/90 rounded-md px-5 h-12 flex items-center justify-center flex-shrink-0 gap-2 font-bold text-sm transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">联系</span>
        </a>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-2xl bg-white border-[3px] border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href) }}
              className="block px-4 py-3 font-bold hover:bg-gray-100 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
          }
        </svg>
      </button>
    </div>
  )
}
