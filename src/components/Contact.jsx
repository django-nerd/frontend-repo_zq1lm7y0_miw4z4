import { useState } from 'react'

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
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s talk</h2>
            <p className="mt-3 text-blue-200/80">Tell us about your facilities and goals. We’re based in Amman and work across the region.</p>
            <div className="mt-6 text-blue-100/80 space-y-1 text-sm">
              <p><span className="text-white">Email:</span> hello@kayanventures.com</p>
              <p><span className="text-white">Location:</span> Amman, Jordan</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={onChange} required placeholder="Full name" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
              <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="Email" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
              <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
              <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
            </div>
            <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="How can we help?" className="mt-4 w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" />
            <div className="mt-4 flex items-center gap-3">
              <button type="submit" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity">Send message</button>
              {status?.type === 'loading' && <p className="text-blue-200/80">{status.message}</p>}
              {status?.type === 'success' && <p className="text-emerald-300">{status.message}</p>}
              {status?.type === 'error' && <p className="text-rose-300">{status.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
