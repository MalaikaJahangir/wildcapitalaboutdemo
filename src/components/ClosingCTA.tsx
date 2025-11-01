import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function ClosingCTA() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,134,11,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(184,134,11,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to Elevate Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mt-2">
              Financial Strategy?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            WildCapital empowers visionaries to transform ambition into measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white font-semibold rounded-sm hover:from-amber-700 hover:to-yellow-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-sm border-2 border-white/20 hover:bg-white/20 hover:border-amber-600 transition-all duration-300">
              Download Our Brochure
            </button>
          </div>

          <div className="pt-12 border-t border-white/10">
            <p className="text-slate-400 mb-6">Connect with Igor Buinevici</p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:contact@wildcapital.com"
                className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-600/50 rounded-sm transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Email</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-600/50 rounded-sm transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-slate-500 text-sm">
            © 2025 WildCapital. Defining excellence in finance and strategy.
          </p>
        </div>
      </div>
    </section>
  );
}
