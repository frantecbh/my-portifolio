import { FaGithub } from 'react-icons/fa'
import { projects, hostOf } from '../data/data'

export const Projetos = () => (
  <section id="projetos" className="border-t border-line">
    <div className="mx-auto max-w-page px-5 py-20 sm:px-8 lg:py-28">
      <h2 className="section-title">Projetos</h2>
      <p className="mt-4 max-w-prose text-muted">
        Aplicações que desenvolvi e publiquei. Todas estão no ar para você testar.
      </p>

      <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-lg border border-line bg-surface"
            >
              <img
                src={project.image}
                alt={`Tela do projeto ${project.name}`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-1 text-muted">{project.description}</p>
                <p className="mt-3 flex items-center gap-2 font-mono text-sm text-muted">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-led" />
                  {hostOf(project.live)}
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-5 text-[0.95rem] font-medium">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-signal underline-offset-4 hover:underline"
              >
                Abrir demo
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink underline-offset-4 hover:underline"
                >
                  <FaGithub aria-hidden /> Ver código
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
