import { motion } from 'framer-motion'

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } })
}

export default function Services() {
  const services = [
    { title: 'Facility Intelligence Strategy', desc: 'Roadmaps that align technology, data, and operations to your business goals.' },
    { title: 'IoT & BMS Integration', desc: 'Connect sensors, meters, BMS, and legacy systems into a unified data layer.' },
    { title: 'Energy & Sustainability Analytics', desc: 'Benchmarking, anomaly detection, and optimization to cut costs and emissions.' },
    { title: 'Digital Twin & Visualization', desc: 'Interactive 3D and dashboards for real-time decision-making across assets.' },
    { title: 'Smart FM & Workflow Automation', desc: 'From alerts to actions — automate maintenance and streamline operations.' },
    { title: 'Advisory & Delivery', desc: 'From pilots to scale-up — hands-on implementation with measurable outcomes.' },
  ]

  return (
    <section id="services" className="relative py-20">
      {/* subtle gradient */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(40%_60%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-blue-200/80">A full-stack approach to facility intelligence — strategy, data, and delivery.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08] overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <h3 className="text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
