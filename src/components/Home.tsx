import { Topology } from './Topology'

export const Home = () => (
  <section id="inicio" className="mx-auto max-w-page px-5 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-24">
    <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="mb-6 text-muted">Francisco Menezes, Grande Belo Horizonte</p>
        <h1 className="display text-[clamp(2.4rem,6vw,4.75rem)]">
          Tecnologia, infraestrutura e soluções digitais.
        </h1>
        <p className="mt-8 max-w-prose text-lg text-muted">
          Mais de 20 anos em Tecnologia da Informação, conectando infraestrutura, governança e
          inovação para manter ambientes seguros, eficientes e prontos para evoluir.
        </p>
        <p className="mt-4 max-w-prose text-lg text-muted">
          Também crio soluções digitais e exploro cloud, automação e desenvolvimento de software
          para resolver problemas reais.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#experiencia" className="btn-primary">Ver experiência</a>
          <a href="#contato" className="btn-ghost">Falar comigo</a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[520px]">
        <Topology />
      </div>
    </div>
  </section>
)
