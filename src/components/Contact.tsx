import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { links } from '../data/data'

export const Contact = () => (
  <section id="contato" className="border-t border-line bg-ink text-paper">
    <div className="mx-auto grid max-w-page gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
      <div>
        <h2 className="section-title">Vamos conversar</h2>
        <p className="mt-4 max-w-prose text-paper/75">
          Tem um projeto, uma vaga ou uma ideia de produto? Mande uma mensagem e eu respondo
          por e-mail.
        </p>
        <ul className="mt-8 space-y-3">
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 underline-offset-4 hover:underline"
            >
              <FaLinkedin size={20} aria-hidden /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 underline-offset-4 hover:underline"
            >
              <FaGithub size={20} aria-hidden /> GitHub
            </a>
          </li>
        </ul>
      </div>

      <form action={import.meta.env.VITE_GETFORM_URL} method="POST" className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-paper/80">Nome</label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-paper/80">E-mail</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-paper/80">Mensagem</label>
          <textarea id="message" name="message" rows={5} required className="field resize-y" />
        </div>
        <button type="submit" className="btn w-full bg-paper text-ink hover:bg-signal hover:text-paper sm:w-auto">
          Enviar mensagem
        </button>
      </form>
    </div>
  </section>
)
