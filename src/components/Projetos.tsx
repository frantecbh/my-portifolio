import { FaGithub } from 'react-icons/fa'
import { projects, hostOf } from '../data/data'

const corporativos = [
  {
    name: 'Migração do Power BI',
    text: 'Migração dos painéis do Power BI Report Server para o Power BI 365, com bases vindas do ERP.',
  },
  {
    name: 'Curadoria da base de ativos',
    text: 'Revisão do CMDB cruzando dados do SCCM e da base de funcionários, junto ao time de Asset.',
  },
  {
    name: 'Cluster de Operations',
    text: 'Estruturação de um fórum periódico da equipe de TI para acompanhar os projetos maiores.',
  },
]

const solucoes = [
  {
    name: 'MidiaAbordo',
    text: 'Plataforma SaaS para motoristas de aplicativo venderem anúncios em um tablet atrás do banco, com planos, pagamentos e relatórios.',
    url: 'https://midiabordo.com.br',
  },
]

export const Projetos = () => (
  <section id="projetos" className="border-t border-line">
    <div className="mx-auto max-w-page px-5 py-20 sm:px-8 lg:py-28">
      <h2 className="section-title">Projetos</h2>

      <h3 className="mt-12 text-xl font-semibold">Corporativos</h3>
      <ul className="mt-5 grid gap-4 md:grid-cols-3">
        {corporativos.map((p) => (
          <li key={p.name} className="rounded-2xl border border-line bg-surface p-6">
            <p className="text-lg font-semibold">{p.name}</p>
            <p className="mt-2 text-muted">{p.text}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-14 text-xl font-semibold">Soluções digitais</h3>
      <ul className="mt-5 grid gap-4 md:grid-cols-2">
        {solucoes.map((p) => (
          <li key={p.name} className="flex flex-col rounded-2xl border border-line-strong bg-surface p-6">
            <p className="font-display text-2xl font-extrabold tracking-tight">{p.name}</p>
            <p className="mt-2 flex-1 text-muted">{p.text}</p>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-signal underline-offset-4 hover:underline"
            >
              <span aria-hidden className="h-2 w-2 rounded-full bg-led" />
              {hostOf(p.url)}
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mt-14 text-xl font-semibold">Projetos de estudo</h3>
      <p className="mt-2 max-w-prose text-muted">
        Aplicações menores que fiz durante a pós-graduação e cursos. Todas estão no ar.
      </p>
      <ul className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <img
                src={project.image}
                alt={`Tela do projeto ${project.name}`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <p className="mt-4 font-semibold">{project.name}</p>
            <p className="mt-1 text-[0.95rem] text-muted">{project.description}</p>
            <div className="mt-3 flex gap-5 text-[0.95rem] font-medium">
              <a href={project.live} target="_blank" rel="noreferrer" className="text-signal underline-offset-4 hover:underline">
                Abrir demo
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
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
