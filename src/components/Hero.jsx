export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="home">
      <div className="absolute -top-24 -right-24 h-96 w-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-cyan-300/80 bg-white/5 ring-1 ring-white/10 px-3 py-1 rounded-full">Amman, Jordan</p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Facility Intelligence for the Built Environment
            </h1>
            <p className="mt-6 text-lg text-blue-100/80">
              We help real estate owners, operators, and enterprises turn buildings into living systems — combining data, IoT, and analytics to drive efficiency, sustainability, and resilient operations.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-5 py-3 hover:opacity-90 transition-opacity">Start a conversation</a>
              <a href="#services" className="text-blue-100 hover:text-white transition-colors">Explore services →</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4">
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.25),transparent_40%)] grid place-items-center text-center">
                <div>
                  <p className="text-cyan-300/90 text-sm">Kayan Ventures</p>
                  <p className="text-2xl sm:text-3xl font-semibold text-white mt-2">Digital Twins • Smart FM • Energy Analytics</p>
                  <p className="text-blue-200/80 mt-3 max-w-md mx-auto">A modern stack to monitor, predict, and optimize performance across your portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
