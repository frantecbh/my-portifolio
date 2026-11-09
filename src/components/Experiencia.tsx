const roles = [
  {
    when: '2021 até hoje',
    org: 'Stellantis Saúde',
    title: 'Analista de TI, infraestrutura e serviços',
    text: 'Governança de infraestrutura e serviços de TI em Betim: redes, servidores, Microsoft 365, gestão de fornecedores e contratos, além de projetos de modernização e nuvem.',
  },
  {
    when: 'Antes de 2021',
    org: 'Stefanini e FCA Fiat Chrysler',
    title: 'Infraestrutura de TI corporativa',
    text: 'Operação e suporte de infraestrutura em ambiente industrial de grande porte, com foco em disponibilidade e continuidade dos serviços.',
  },
  {
    when: 'Início da carreira',
    org: 'Ambientes corporativos',
    title: 'Primeiros anos em TI',
    text: 'Base em redes, servidores e atendimento a usuários, que sustenta tudo o que veio depois.',
  },
]

const education = {
  when: '2024 a 2026',
  org: 'PUC Minas',
  title: 'Pós-graduação em Desenvolvimento Full Stack',
}

export const Experiencia = () => (
  <section id="experiencia" className="border-t border-line bg-surface">
    <div className="mx-auto max-w-page px-5 py-20 sm:px-8 lg:py-28">
      <h2 className="section-title">Experiência</h2>

      <ol className="mt-12 max-w-3xl border-l border-line-strong pl-8">
        {roles.map((role) => (
          <li key={role.org} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-signal"
            />
            <p className="text-sm text-signal">{role.when}</p>
            <h3 className="mt-1 font-display text-2xl font-extrabold tracking-tight">{role.org}</h3>
            <p className="mt-0.5 font-medium">{role.title}</p>
            <p className="mt-2 text-muted">{role.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 max-w-3xl rounded-2xl border border-line bg-paper p-6">
        <p className="text-sm text-signal">Formação · {education.when}</p>
        <p className="mt-1 text-lg font-semibold">{education.title}</p>
        <p className="text-muted">{education.org}</p>
      </div>
    </div>
  </section>
)
