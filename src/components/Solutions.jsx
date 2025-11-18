export default function Solutions() {
  const items = [
    {
      title: 'Commercial Offices',
      points: ['Tenant comfort & IAQ', 'Energy optimization', 'Predictive maintenance']
    },
    {
      title: 'Healthcare & Labs',
      points: ['Critical environment monitoring', 'Compliance dashboards', 'Asset reliability']
    },
    {
      title: 'Industrial & Logistics',
      points: ['Throughput monitoring', 'Condition-based maintenance', 'Utilities management']
    },
    {
      title: 'Retail & Hospitality',
      points: ['Footfall & occupancy', 'Cold-chain monitoring', 'Experience analytics']
    }
  ]

  return (
    <section id="solutions" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Where it applies</h2>
          <p className="mt-3 text-blue-200/80">Purpose-built blueprints for key sectors across the region.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-blue-200/80 list-disc list-inside">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
