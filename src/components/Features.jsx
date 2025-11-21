import { motion } from 'framer-motion'
import { BarChart3, Mail, Smartphone, Users, Database, Settings, Zap, LineChart } from 'lucide-react'

const items = [
  { title: 'Instant AC quotes', icon: Zap },
  { title: 'Automated emails/SMS', icon: Mail },
  { title: 'Real-time analytics', icon: LineChart },
  { title: 'Customer records', icon: Users },
  { title: 'Website widget', icon: Smartphone },
  { title: 'Equipment catalogs', icon: Database },
  { title: 'Labour & margin controls', icon: Settings },
]

export default function Features() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-[#000A5A] mb-12 text-center"
        >
          Powerful features, simple to use
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border bg-gradient-to-br from-white to-[#F7FAFF] p-6 shadow-sm transition-all"
              style={{ borderColor: '#E6F0FF' }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: 'radial-gradient(600px 200px at 50% 0%, rgba(13,110,253,0.08), transparent 60%)' }} />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl grid place-items-center mb-4"
                     style={{ background: 'linear-gradient(135deg, #E8F2FF, #FFFFFF)', border: '1px solid #E6F0FF' }}>
                  <f.icon className="h-6 w-6" color="#0D6EFD" />
                </div>
                <h3 className="font-semibold text-[#000A5A] mb-1">{f.title}</h3>
                <p className="text-slate-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
