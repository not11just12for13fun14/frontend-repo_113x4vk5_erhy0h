import { motion } from 'framer-motion'
import { Clock, Trophy, Timer, Shield, MailSearch, Rocket } from 'lucide-react'

const items = [
  { title: 'Respond faster', icon: Timer },
  { title: 'Win more jobs', icon: Trophy },
  { title: 'Save admin time', icon: Clock },
  { title: 'Protect margins', icon: Shield },
  { title: 'Never lose a lead', icon: MailSearch },
  { title: 'Grow with automation', icon: Rocket },
]

export default function Benefits() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-[#000A5A] mb-10 text-center"
        >
          Built for HVAC companies
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-xl border p-5 bg-white/80 backdrop-blur"
              style={{ borderColor: '#E6F0FF' }}
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl"
                   style={{ background: 'linear-gradient(135deg, #E8F2FF, #FFFFFF)', border: '1px solid #E6F0FF' }}>
                <b.icon className="h-6 w-6" color="#0D6EFD" />
              </div>
              <div className="font-semibold text-[#000A5A]">{b.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
