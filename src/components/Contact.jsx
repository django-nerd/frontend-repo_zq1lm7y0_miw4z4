import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ type: 'success', message: data.message })
      setForm({ name: '', email: '', company: '', phone: '', message: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40%_60%_at_80%_10%,rgba(6,182,212,0.12),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s talk</h2>
            <p className="mt-3 text-blue-200/80">Tell us about your facilities and goals. We’re based in Amman and work across the region.</p>
            <div className="mt-6 text-blue-100/80 space-y-1 text-sm">
              <p><span className="text-white">Email:</span> hello@kayanventures.com</p>
              <p><span className="text-white">Location:</span> Amman, Jordan</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white/5 border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            <div aria-hidden className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={onChange} required placeholder="Full name" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="Email" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
              <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            </div>
            <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="How can we help?" className="mt-4 w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity shadow-[0_0_0_0_rgba(34,211,238,0.5)] hover:shadow-[0_0_40px_10px_rgba(34,211,238,0.15)]">Send message</button>
              {status?.type === 'loading' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-200/80">{status.message}</motion.p>}
              {status?.type === 'success' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-300">{status.message}</motion.p>}
              {status?.type === 'error' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rose-300">{status.message}</motion.p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
