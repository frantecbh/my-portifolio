import { projects, hostOf } from '../data/data'

/**
 * The real hosts under frantecit.com.br drawn as a small network map.
 * Each node links to the live project.
 */
const nodes = projects.filter((p) => hostOf(p.live).endsWith('frantecit.com.br'))

const ROOT = { x: 8, y: 210, w: 184, h: 46 }
const COL_X = 300
const top = 44
const gap = (420 - top * 2) / Math.max(nodes.length - 1, 1)

export const Topology = () => (
  <figure className="w-full">
    <svg
      viewBox="0 0 520 420"
      className="h-auto w-full"
      role="img"
      aria-labelledby="topo-title"
    >
      <title id="topo-title">
        Mapa dos projetos publicados em subdomínios de frantecit.com.br
      </title>

      {nodes.map((node, i) => {
        const y = top + i * gap
        const x0 = ROOT.x + ROOT.w
        const d = `M ${x0} ${ROOT.y} C ${x0 + 60} ${ROOT.y}, ${COL_X - 70} ${y}, ${COL_X - 6} ${y}`
        return (
          <path
            key={node.id}
            d={d}
            fill="none"
            stroke="rgb(var(--line))"
            strokeWidth={1.5}
            className="topo-link"
            style={{ animationDelay: `${150 + i * 90}ms` }}
          />
        )
      })}

      {/* root host */}
      <g className="topo-node" style={{ animationDelay: '0ms' }}>
        <rect
          x={ROOT.x}
          y={ROOT.y - ROOT.h / 2}
          width={ROOT.w}
          height={ROOT.h}
          rx={6}
          fill="rgb(var(--ink))"
        />
        <text
          x={ROOT.x + ROOT.w / 2}
          y={ROOT.y + 5}
          textAnchor="middle"
          fill="rgb(var(--paper))"
          className="font-mono"
          fontSize={16}
        >
          frantecit.com.br
        </text>
      </g>

      {nodes.map((node, i) => {
        const y = top + i * gap
        const sub = hostOf(node.live).replace('.frantecit.com.br', '')
        return (
          <a
            key={node.id}
            href={node.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`${node.name}: abrir ${hostOf(node.live)}`}
            className="group"
          >
            <g className="topo-node" style={{ animationDelay: `${700 + i * 90}ms` }}>
              <rect
                x={COL_X - 8}
                y={y - 18}
                width={220}
                height={36}
                rx={5}
                fill="rgb(var(--surface))"
                stroke="rgb(var(--line))"
                className="transition-colors group-hover:stroke-[rgb(var(--signal))]"
              />
              <circle cx={COL_X + 8} cy={y} r={4} fill="rgb(var(--led))" className="led-pulse" />
              <text
                x={COL_X + 22}
                y={y + 5}
                fill="rgb(var(--ink))"
                className="font-mono transition-colors group-hover:fill-[rgb(var(--signal))]"
                fontSize={16}
              >
                {sub}
              </text>
            </g>
          </a>
        )
      })}
    </svg>
    <figcaption className="mt-3 text-sm text-muted">
      Projetos no ar agora. Toque em um host para abrir.
    </figcaption>
  </figure>
)
