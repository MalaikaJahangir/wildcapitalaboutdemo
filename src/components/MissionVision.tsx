import { Target, Lightbulb, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function MissionVision() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every decision backed by rigorous analysis and deep financial expertise'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Combining cutting-edge AI with proven financial principles'
    },
    {
      icon: Rocket,
      title: 'Impact',
      description: 'Transforming ambition into measurable, sustainable success'
    }
  ];

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-6">
            We Don't Just Consult.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mt-2">
              We Transform.
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            WildCapital is dedicated to unlocking financial potential and strategic innovation for high-impact clients. We partner with visionaries who refuse to settle for ordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 hover:border-amber-600/50 transition-all duration-500 hover:bg-white/10 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-amber-600 to-yellow-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 p-12 bg-gradient-to-r from-amber-600/20 to-yellow-700/20 backdrop-blur-sm rounded-sm border border-amber-600/30 transition-all duration-1000 delay-500 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className="font-['Playfair_Display'] text-3xl text-white text-center italic leading-relaxed">
            "In a world of conventional thinking, we engineer extraordinary outcomes through the marriage of financial mastery and visionary strategy."
          </p>
        </div>
      </div>
    </section>
  );
}
