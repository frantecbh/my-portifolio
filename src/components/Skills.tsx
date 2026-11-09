const competencias = [
  { name: 'Infraestrutura corporativa', text: 'Redes, servidores e serviços críticos em ambientes de grande porte.' },
  { name: 'Governança de TI', text: 'Gestão de serviços, ativos e processos para manter a operação previsível.' },
  { name: 'Fornecedores e contratos', text: 'Acompanhamento de níveis de serviço, custos e entregas de parceiros.' },
  { name: 'Continuidade operacional', text: 'Disponibilidade e resposta rápida quando algo sai do esperado.' },
  { name: 'Modernização e nuvem', text: 'Projetos de migração e adoção de cloud com foco no negócio.' },
  { name: 'Soluções digitais', text: 'Ferramentas e produtos web para resolver problemas concretos.' },
]

const tecnologias = [
  {
    name: 'No dia a dia profissional',
    items: ['Microsoft 365', 'Redes corporativas', 'Servidores', 'SCCM', 'Power BI', 'CMDB'],
  },
  {
    name: 'Em desenvolvimento',
    items: ['AWS', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
]

export const Skills = () => (
  <>
    <section id="competencias" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="section-title">Competências</h2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {competencias.map((c) => (
            <li key={c.name} className="bg-paper p-6">
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section id="tecnologias" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-page px-5 py-20 sm:px-8 lg:py-28">
        <h2 className="section-title">Tecnologias</h2>
        <p className="mt-4 max-w-prose text-muted">
          Separadas entre o que uso no trabalho e o que venho estudando e aplicando nos meus
          projetos.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-line">
          {tecnologias.map((group) => (
            <div key={group.name} className="md:px-10 md:first:pl-0 md:last:pr-0">
              <h3 className="text-lg font-semibold">{group.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line bg-paper px-3 py-1 text-[0.95rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)
