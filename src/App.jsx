import Hero from './components/Hero'
import Problems from './components/Problems'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top nav */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-[#E6F0FF]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #0D6EFD, #55B4E6)' }} />
            <div className="font-extrabold tracking-tight" style={{ color: '#000A5A' }}>Quotestack</div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-[#0D6EFD]">How it works</a>
            <a href="#features" className="hover:text-[#0D6EFD]">Features</a>
            <a href="#pricing" className="hover:text-[#0D6EFD]">Pricing</a>
            <a href="#" className="rounded-lg px-3 py-1.5 text-white" style={{ background: 'linear-gradient(135deg, #0D6EFD, #55B4E6)' }}>Start Free Demo</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="problems"><Problems /></div>
        <div id="how"><HowItWorks /></div>
        <div id="features"><Features /></div>
        <Dashboard />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>

      <footer className="py-10 border-t" style={{ borderColor: '#E6F0FF' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} Quotestack</div>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-[#0D6EFD]">Features</a>
            <a href="#pricing" className="hover:text-[#0D6EFD]">Pricing</a>
            <a href="#" className="hover:text-[#0D6EFD]">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
