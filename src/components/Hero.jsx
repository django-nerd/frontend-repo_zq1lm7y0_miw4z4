import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="home">
      {/* Animated background accents */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 bg-cyan-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Subtle grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.06),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }}>
            <motion.p variants={item} className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-cyan-300/80 bg-white/5 ring-1 ring-white/10 px-3 py-1 rounded-full">
              Amman, Jordan
            </motion.p>
            <motion.h1 variants={item} className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Facility Intelligence for the Built Environment
            </motion.h1>
            <motion.p variants={item} className="mt-6 text-lg text-blue-100/80">
              We help real estate owners, operators, and enterprises turn buildings into living systems — combining data, IoT, and analytics to drive efficiency, sustainability, and resilient operations.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <a href="#contact" className="group inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-5 py-3 transition-all shadow-[0_0_0_0_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_10px_rgba(34,211,238,0.15)]">
                <span className="relative overflow-hidden">
                  <span className="btn-shine" />
                  Start a conversation
                </span>
              </a>
              <a href="#services" className="text-blue-100 hover:text-white transition-colors">Explore services →</a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-6 text-xs text-blue-200/70">
              <div className="h-px w-10 bg-white/20" /> Trusted across offices, healthcare, industrial, and retail
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.25),transparent_40%)] grid place-items-center text-center relative overflow-hidden">
                {/* Floating nodes */}
                <motion.div className="absolute -top-3 -right-3 h-20 w-20 rounded-full bg-cyan-400/20 blur-xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
                <motion.div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-blue-400/20 blur-xl" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 7 }} />

                <div>
                  <p className="text-cyan-300/90 text-sm">Kayan Ventures</p>
                  <p className="text-2xl sm:text-3xl font-semibold text-white mt-2">Digital Twins • Smart FM • Energy Analytics</p>
                  <p className="text-blue-200/80 mt-3 max-w-md mx-auto">A modern stack to monitor, predict, and optimize performance across your portfolio.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
