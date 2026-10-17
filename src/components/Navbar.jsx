import { useState } from 'react'
import { ArrowDownToLine, Menu, Moon, Sun, X } from 'lucide-react'

const cvUrl = `${import.meta.env.BASE_URL}Hajra-Bibi-CV.txt`

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function ButterflyMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className="h-8 w-8">
      <defs>
        <linearGradient id="butterfly-wing-left" x1="4" y1="7" x2="19" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d7c8ff" />
          <stop offset="1" stopColor="#8c72e8" />
        </linearGradient>
        <linearGradient id="butterfly-wing-right" x1="21" y1="9" x2="37" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cbbaff" />
          <stop offset="1" stopColor="#7258d7" />
        </linearGradient>
      </defs>
      <path d="M18.5 17.8C14.9 8.7 6.1 4.4 3.8 8.9c-2.2 4.4 1.6 12.4 11 14.2-5.6 2.8-6.9 8.4-3.5 9.5 3.2 1 7-3.3 8.3-8.1V17.8Z" fill="url(#butterfly-wing-left)" />
      <path d="M21.5 17.8C25.1 8.7 33.9 4.4 36.2 8.9c2.2 4.4-1.6 12.4-11 14.2 5.6 2.8 6.9 8.4 3.5 9.5-3.2 1-7-3.3-8.3-8.1V17.8Z" fill="url(#butterfly-wing-right)" />
      <path d="M20 14.2v13.4" stroke="#5943b4" strokeLinecap="round" strokeWidth="2" />
      <path d="m19 14-2.2-3m4.2 3 2.2-3" stroke="#8c72e8" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  )
}

function Navbar({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101426]/95 text-white shadow-sm shadow-black/5 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[62px] max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#home" aria-label="Hajra Bibi portfolio home" className="flex shrink-0 items-center gap-2.5" onClick={closeMenu}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 shadow-inner shadow-white/10">
            <ButterflyMark />
          </span>
          <span className="font-display text-sm font-bold tracking-tight">My<span className="text-[#b6a2ff]">Portfolio</span></span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold text-[#dedee8] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={cvUrl}
            download="Hajra-Bibi-CV.txt"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b49aff] to-[#9477f0] px-4 py-2.5 text-[11px] font-bold text-[#17142b] shadow-md shadow-[#8b72e6]/20 transition hover:brightness-110"
          >
            Download CV <ArrowDownToLine size={13} />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#101426] px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[#e4e3ed] hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={cvUrl}
              download="Hajra-Bibi-CV.txt"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#a78bfa] px-4 py-3 text-sm font-bold text-[#17142b]"
            >
              Download CV <ArrowDownToLine size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
