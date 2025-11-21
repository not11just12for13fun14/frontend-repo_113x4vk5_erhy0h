import { motion } from 'framer-motion'

const problems = [
  'Slow manual quoting',
  'Lost or forgotten leads',
  'Spreadsheet overload',
  'No follow-up automation',
  'Inconsistent pricing',
]

export default function Problems() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-[#000A5A] mb-10"
        >
          The problems we eliminate
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm hover:shadow-lg transition-shadow"
              style={{ borderColor: '#E6F0FF' }}
            >
              <div className="h-10 w-10 rounded-lg mb-3" style={{ background: 'linear-gradient(135deg, #0D6EFD22, #55B4E622)' }} />
              <p className="text-slate-700 font-medium">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
