import { Topology } from './Topology'

export const Home = () => (
  <section id="inicio" className="mx-auto max-w-page px-5 pb-20 pt-14 sm:px-8 lg:pb-28 lg:pt-24">
    <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <p className="mb-6 text-muted">Francisco Menezes, Grande Belo Horizonte</p>
        <h1 className="display text-[clamp(2.6rem,7vw,5.4rem)]">
          Da infraestrutura ao código.
        </h1>
        <p className="mt-8 max-w-prose text-lg text-muted">
          Cuido de redes e servidores desde 2009. Hoje também construo aplicações web
          completas com React, Next.js, Node.js e TypeScript, pensando desde a interface
          até onde o sistema vai rodar.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projetos" className="btn-primary">Ver projetos</a>
          <a href="#contato" className="btn-ghost">Falar comigo</a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[520px]">
        <Topology />
      </div>
    </div>
  </section>
)
