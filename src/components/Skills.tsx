const groups = [
  {
    name: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML e CSS'],
  },
  {
    name: 'Back-end e dados',
    items: ['Node.js', 'MongoDB', 'Firebase', 'APIs REST'],
  },
  {
    name: 'Infra e nuvem',
    items: ['AWS', 'Redes', 'Microsoft 365', 'Git e GitHub'],
  },
]

export const Skills = () => (
  <section id="stack" className="border-t border-line bg-surface">
    <div className="mx-auto max-w-page px-5 py-20 sm:px-8 lg:py-28">
      <h2 className="section-title">Stack</h2>
      <p className="mt-4 max-w-prose text-muted">
        Ferramentas que uso no dia a dia, do navegador ao servidor.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
        {groups.map((group) => (
          <div key={group.name} className="md:px-8 md:first:pl-0 md:last:pr-0">
            <h3 className="text-lg font-semibold">{group.name}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-paper px-3 py-1 text-[0.95rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)
