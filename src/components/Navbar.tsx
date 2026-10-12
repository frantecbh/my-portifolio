import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const items = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="font-display text-lg font-bold tracking-tight"
          style={{ fontVariationSettings: "'wdth' 118" }}
          onClick={() => setOpen(false)}
        >
          frantec.it
        </a>

        <ul className="hidden items-center gap-8 text-[0.95rem] text-muted md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line bg-paper px-5 pb-4 md:hidden">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-4 text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
