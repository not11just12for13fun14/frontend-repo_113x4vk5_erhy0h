import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Play, Rocket, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

const brand = {
  blue: '#0D6EFD',
  sky: '#55B4E6',
  navy: '#000A5A',
}

function useParallaxTilt(intensity = 12) {
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateX.set((0.5 - py) * intensity)
    rotateY.set((px - 0.5) * intensity)
  }
  const onMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}

export default function Hero() {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useParallaxTilt(10)

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#E8F3FF]" />

      {/* Soft background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full opacity-30 blur-3xl"
             style={{ background: `radial-gradient(circle at 30% 30%, ${brand.sky}, transparent 60%)` }} />
        <div className="absolute -bottom-32 -right-20 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
             style={{ background: `radial-gradient(circle at 70% 70%, ${brand.blue}, transparent 60%)` }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 sm:pt-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-5"
                 style={{ borderColor: `${brand.sky}33`, color: brand.navy, background: '#F5FAFF' }}>
              <Rocket className="h-3.5 w-3.5" color={brand.blue} />
              Built for HVAC quoting
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
                style={{ color: brand.navy }}>
              Quote smarter. Sell faster.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              AC quoting & automation for HVAC contractors. Simple, fast, and accurate — from lead capture to follow-up.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold shadow-lg shadow-blue-500/20"
                 style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.sky})` }}>
                Start Free Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold border hover:shadow-sm transition-all"
                      style={{ borderColor: `${brand.blue}33`, color: brand.navy }}>
                <Play className="h-4 w-4" color={brand.blue} />
                Watch Product Video
              </button>
            </div>
          </motion.div>

          {/* Floating 3D mockups */}
          <div className="relative">
            <motion.div
              ref={ref}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              style={{ perspective: 1000 }}
              className="relative h-[420px] sm:h-[460px]"
            >
              <motion.div
                style={{ rotateX, rotateY }}
                className="absolute inset-0 [transform-style:preserve-3d]"
              >
                {/* Main dashboard card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="absolute left-1/2 -translate-x-1/2 top-6 w-[85%] rounded-2xl bg-white/90 backdrop-blur border shadow-2xl"
                  style={{ borderColor: '#E6F0FF', boxShadow: `0 20px 50px -12px ${brand.blue}33` }}
                >
                  <div className="p-4 border-b" style={{ borderColor: '#EEF4FF' }}>
                    <div className="h-3 w-24 rounded bg-slate-200" />
                  </div>
                  <div className="p-6 grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Leads</p>
                      <div className="h-20 rounded-xl bg-gradient-to-br from-[#E8F2FF] to-white border" style={{ borderColor: '#EEF4FF' }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Quotes</p>
                      <div className="h-20 rounded-xl bg-gradient-to-br from-[#E8F2FF] to-white border" style={{ borderColor: '#EEF4FF' }} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-2">Follow-ups</p>
                      <div className="h-20 rounded-xl bg-gradient-to-br from-[#E8F2FF] to-white border" style={{ borderColor: '#EEF4FF' }} />
                    </div>
                  </div>
                </motion.div>

                {/* Widget card */}
                <motion.div
                  initial={{ y: 40, opacity: 0, scale: 0.98 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="absolute right-6 top-28 w-56 rounded-xl bg-white border shadow-xl"
                  style={{ borderColor: '#E6F0FF', transform: 'translateZ(60px)', boxShadow: `0 10px 30px -8px ${brand.sky}55` }}
                >
                  <div className="p-4">
                    <div className="h-3 w-20 rounded bg-slate-200 mb-3" />
                    <div className="h-8 rounded-lg bg-gradient-to-r from-[#E8F2FF] to-white border" style={{ borderColor: '#EEF4FF' }} />
                    <div className="h-8 rounded-lg bg-gradient-to-r from-[#E8F2FF] to-white border mt-2" style={{ borderColor: '#EEF4FF' }} />
                    <div className="mt-3 flex justify-end">
                      <div className="h-8 w-20 rounded-lg text-center text-xs font-semibold text-white flex items-center justify-center"
                           style={{ background: `linear-gradient(135deg, ${brand.blue}, ${brand.sky})` }}>
                        Send
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating chips */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -left-2 bottom-10"
                  style={{ transform: 'translateZ(100px)' }}
                >
                  <div className="rounded-full px-3 py-1 text-xs font-medium text-white shadow-lg"
                       style={{ background: `linear-gradient(135deg, ${brand.sky}, ${brand.blue})`, boxShadow: `0 10px 25px -10px ${brand.blue}66` }}>
                    + New Lead
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
