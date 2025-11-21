import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', price: '$39', features: ['Instant quotes', 'Email follow-ups', 'Basic analytics'] },
  { name: 'Pro', price: '$89', features: ['Everything in Starter', 'SMS automation', 'Equipment catalogs', 'CRM'] },
  { name: 'Business', price: '$149', features: ['Everything in Pro', 'Custom branding', 'Priority support', 'Advanced controls'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A] mb-12 text-center">Simple pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => {
            const featured = p.name === 'Pro'
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: featured ? -10 : -6 }}
                className={`relative rounded-2xl border p-6 bg-white shadow-sm ${featured ? 'ring-2' : ''}`}
                style={{ borderColor: '#E6F0FF', ringColor: featured ? '#0D6EFD' : undefined }}
              >
                {featured && (
                  <div className="absolute -inset-1 rounded-2xl opacity-60 -z-10 blur-xl"
                       style={{ background: 'linear-gradient(135deg, rgba(13,110,253,0.2), rgba(0,10,90,0.2))' }} />
                )}
                <div className="text-sm font-medium text-[#0D6EFD]">{p.name}</div>
                <div className="mt-2 text-4xl font-extrabold text-[#000A5A]">{p.price}<span className="text-lg font-medium text-slate-500">/mo</span></div>
                <ul className="mt-6 space-y-2 text-slate-600">
                  {p.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <button className={`mt-8 w-full rounded-xl px-4 py-3 font-semibold text-white shadow-lg`}
                        style={{ background: featured ? 'linear-gradient(135deg, #0D6EFD, #55B4E6)' : '#0D6EFD' }}>
                  Start Free Demo
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
