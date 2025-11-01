import { Award, GraduationCap, Building2, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function FounderStory() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const achievements = [
    {
      icon: GraduationCap,
      title: 'MSc Finance (Distinction)',
      subtitle: 'London School of Economics'
    },
    {
      icon: Award,
      title: 'Antoine Faure-Grimaud Scholarship',
      subtitle: 'Academic Merit Excellence'
    },
    {
      icon: Building2,
      title: 'Goldman Sachs',
      subtitle: 'Asset & Wealth Management, London'
    },
    {
      icon: TrendingUp,
      title: 'M&A Manager',
      subtitle: 'Agrofert Group — €10B+ Conglomerate'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="inline-block px-4 py-2 bg-amber-50 text-amber-900 text-sm font-semibold rounded-sm mb-4">
              FOUNDER & VISIONARY
            </div>

            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Igor Buinevici
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              From London to Prague, Igor's journey reflects an obsession with excellence — from shaping billion-euro transactions to mentoring future financial leaders.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              His career spans the world's most prestigious institutions, where he has consistently delivered transformative results across valuations, investments, and strategic advisory.
            </p>

            <div className="pt-8 border-l-4 border-amber-600 pl-6 bg-slate-50 py-6">
              <p className="font-['Playfair_Display'] text-2xl text-slate-800 italic">
                "Ordinary is easy. Extraordinary is what we make possible."
              </p>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-slate-900/20 rounded-sm transform rotate-3" />
              <div className="relative bg-slate-900 aspect-[4/5] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-600 to-yellow-700 flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">IB</span>
                    </div>
                    <p className="text-amber-600 font-semibold">Founder, WildCapital</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 bg-slate-50 rounded-sm border border-slate-200 hover:border-amber-600 transition-all duration-300 hover:shadow-lg group ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <Icon className="w-6 h-6 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-sm text-slate-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {achievement.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
