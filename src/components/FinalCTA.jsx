import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D6EFD, #000A5A)' }} />
      <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(60rem 20rem at 50% 0%, rgba(255,255,255,0.3), transparent 60%)' }} />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-white"
        >
          Quote faster. Win more.
        </motion.h2>
        <p className="mt-4 text-blue-100">Everything you need to capture leads, price AC installs, and automate follow-up.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[#000A5A] font-semibold bg-white shadow-lg">
            Start Free Demo <ArrowRight className="h-4 w-4" />
          </a>
          <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold border border-white/30 hover:bg-white/10 transition">
            <Phone className="h-4 w-4" /> Book a Call
          </button>
        </div>
      </div>
    </section>
  )
}
