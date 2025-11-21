import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Website Widget',
    desc: 'Captures leads and room info',
  },
  {
    title: 'Instant Calculations',
    desc: 'Sizes rooms at 150 W/m²',
  },
  {
    title: 'Smart Equipment Selection',
    desc: 'Split/multi-split chosen from catalogs',
  },
  {
    title: 'Send & Automate',
    desc: 'Branded quote + automated follow-up',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F6FAFF] overflow-hidden">
      {/* soft parallax lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#0D6EFD22] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-[#000A5A] mb-12 text-center"
        >
          How Quotestack works
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: 'easeOut' }}
              className="rounded-2xl border bg-white p-6 shadow-[0_10px_30px_-12px_rgba(13,110,253,0.2)] hover:shadow-[0_20px_45px_-12px_rgba(13,110,253,0.25)] transition-shadow"
              style={{ borderColor: '#E6F0FF' }}
            >
              <div className="h-12 w-12 rounded-xl mb-4" style={{ background: 'linear-gradient(135deg, #0D6EFD22, #55B4E622)' }} />
              <h3 className="font-semibold text-[#000A5A] mb-1">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
