export default function Services() {
  const services = [
    {
      title: 'Facility Intelligence Strategy',
      desc: 'Roadmaps that align technology, data, and operations to your business goals.',
    },
    {
      title: 'IoT & BMS Integration',
      desc: 'Connect sensors, meters, BMS, and legacy systems into a unified data layer.',
    },
    {
      title: 'Energy & Sustainability Analytics',
      desc: 'Benchmarking, anomaly detection, and optimization to cut costs and emissions.',
    },
    {
      title: 'Digital Twin & Visualization',
      desc: 'Interactive 3D and dashboards for real-time decision-making across assets.',
    },
    {
      title: 'Smart FM & Workflow Automation',
      desc: 'From alerts to actions — automate maintenance and streamline operations.',
    },
    {
      title: 'Advisory & Delivery',
      desc: 'From pilots to scale-up — hands-on implementation with measurable outcomes.',
    },
  ]

  return (
    <section id="services" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-blue-200/80">A full-stack approach to facility intelligence — strategy, data, and delivery.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
