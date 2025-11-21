import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Quotestack cut our quote time from hours to minutes. Our team loves it.',
    name: 'James R.',
    role: 'Owner, Arctic Air',
  },
  {
    quote: 'Follow-ups happen automatically. We closed 23% more jobs last quarter.',
    name: 'Sofia M.',
    role: 'Ops Manager, CoolCo',
  },
  {
    quote: 'Super clean, easy to use, and our pricing is finally consistent.',
    name: 'Liam T.',
    role: 'Sales Lead, Breeze HVAC',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F6FAFF]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A] mb-10">Loved by HVAC teams</h2>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-50"
               style={{ background: 'linear-gradient(135deg, rgba(13,110,253,0.15), rgba(85,180,230,0.15))' }} />
          <div className="relative rounded-3xl border bg-white p-10 shadow-xl" style={{ borderColor: '#E6F0FF' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl text-[#000A5A]">“{testimonials[index].quote}”</p>
                <p className="mt-6 text-sm text-slate-600">{testimonials[index].name} — {testimonials[index].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
