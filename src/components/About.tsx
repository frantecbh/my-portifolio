const timeline = [
  {
    when: '2009',
    title: 'Início na infraestrutura de TI',
    text: 'Suporte, redes e servidores em ambientes corporativos, passando por Stefanini e FCA Fiat Chrysler.',
  },
  {
    when: '2021',
    title: 'Analista de TI na Stellantis Saúde',
    text: 'Infraestrutura, redes, Microsoft 365 e gestão de fornecedores em Betim.',
  },
  {
    when: '2024',
    title: 'Pós-graduação em Desenvolvimento Full Stack',
    text: 'PUC Minas, com foco em React, Next.js, Node.js e TypeScript. Conclusão em 2026.',
  },
  {
    when: 'Agora',
    title: 'Produtos próprios',
    text: 'Desenvolvendo aplicações SaaS, incluindo um painel financeiro e de turnos para motoristas de aplicativo.',
  },
]

export const About = () => (
  <section id="sobre" className="border-t border-line">
    <div className="mx-auto grid max-w-page gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:py-28">
      <div>
        <h2 className="section-title">Sobre</h2>
        <div className="mt-6 max-w-prose space-y-5 text-muted">
          <p>
            Comecei na infraestrutura, mantendo sistemas de pé para quem depende deles todos
            os dias. Essa base mudou a forma como eu desenvolvo: penso em desempenho,
            segurança e operação desde a primeira linha de código.
          </p>
          <p>
            Gosto de construir software que resolve problemas concretos, para pessoas,
            pequenas empresas ou times dentro de grandes organizações.
          </p>
        </div>
      </div>

      <ol className="relative border-l border-line pl-8">
        {timeline.map((item) => (
          <li key={item.title} className="relative pb-10 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-signal"
            />
            <p className="font-mono text-sm text-signal">{item.when}</p>
            <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
)
