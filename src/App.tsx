import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projetos } from './components/Projetos'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projetos />
        <Contact />
      </main>
      <footer className="text-muted">
        <div className="mx-auto flex max-w-page flex-col gap-2 border-t border-line px-5 py-8 text-sm sm:flex-row sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Francisco Menezes</p>
          <p>Feito com React, TypeScript e Tailwind CSS</p>
        </div>
      </footer>
    </>
  )
}
