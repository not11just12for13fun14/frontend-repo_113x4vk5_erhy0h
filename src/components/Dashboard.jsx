import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const brandBlue = '#0D6EFD'

export default function Dashboard() {
  const controls = useAnimation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) {
      controls.start('show')
    }
  }, [visible, controls])

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#F6FAFF] to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full opacity-30 blur-3xl"
             style={{ background: `radial-gradient(circle at 50% 50%, ${brandBlue}, transparent 60%)` }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#000A5A] mb-12">Your command center</h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5, margin: '-100px', onChange: (inView) => setVisible(inView) }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-4xl rounded-2xl bg-white border shadow-2xl p-8"
          style={{ borderColor: '#E6F0FF', boxShadow: '0 30px 80px -20px rgba(13,110,253,0.25)' }}
        >
          {/* KPIs with count up */}
          <div className="grid grid-cols-3 gap-6 text-left">
            {[
              { label: 'Leads', to: 1280 },
              { label: 'Quotes Sent', to: 642 },
              { label: 'Win Rate', to: 62 },
            ].map((k) => (
              <div key={k.label}>
                <p className="text-xs text-slate-500 mb-1">{k.label}</p>
                <CountUp to={k.to} suffix={k.label === 'Win Rate' ? '%' : ''} trigger={visible} />
              </div>
            ))}
          </div>

          {/* Bars growing */}
          <div className="mt-8 grid grid-cols-6 gap-3 h-28 items-end">
            {[16, 30, 22, 40, 26, 48].map((h, i) => (
              <motion.div
                key={i}
                variants={{ show: { height: `${h * 2}%` } }}
                initial={{ height: 0 }}
                animate={controls}
                transition={{ type: 'spring', stiffness: 80, damping: 18, delay: i * 0.05 }}
                className="rounded-md bg-gradient-to-t from-[#DDEBFF] to-[#A8C9FF]"
              />
            ))}
          </div>

          {/* Line drawing */}
          <svg className="mt-10 w-full" viewBox="0 0 600 120">
            <motion.path
              d="M0 90 C 80 50, 120 110, 200 70 S 320 60, 400 80 S 520 40, 600 60"
              fill="transparent"
              stroke={brandBlue}
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={visible ? { pathLength: 1 } : {}}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

function CountUp({ to, duration = 1.2, suffix = '', trigger }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start
    const d = duration * 1000
    const step = (t) => {
      if (!start) start = t
      const p = Math.min((t - start) / d, 1)
      setVal(Math.floor(p * to))
      if (p < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [to, duration, trigger])
  return (
    <div className="text-3xl font-bold text-[#000A5A]">{val}{suffix}</div>
  )
}
