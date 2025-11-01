import { GraduationCap, FileText, Building2, Briefcase } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Timeline() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const milestones = [
    {
      icon: GraduationCap,
      institution: 'London School of Economics',
      role: 'MSc Finance (Distinction)',
      description: 'At LSE, Igor earned distinction among the brightest minds in global finance, mastering corporate valuation and asset pricing — a foundation that would define his precision-driven approach to business.',
      period: 'Academic Excellence',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: FileText,
      institution: 'Deloitte CEE HQ',
      role: 'Valuation & Modelling',
      description: 'In Prague, Igor honed his analytical edge at one of the world\'s leading consulting firms, delivering complex valuations that would shape multi-million euro decisions across Central and Eastern Europe.',
      period: 'Prague, Czech Republic',
      color: 'from-green-600 to-green-700'
    },
    {
      icon: Building2,
      institution: 'Goldman Sachs',
      role: 'Investment Professional',
      description: 'At the pinnacle of global finance, Igor navigated sophisticated investment strategies for high-net-worth clients, cementing his reputation as a trusted advisor in asset and wealth management.',
      period: 'London, United Kingdom',
      color: 'from-slate-700 to-slate-900'
    },
    {
      icon: Briefcase,
      institution: 'Agrofert Group',
      role: 'M&A Manager',
      description: 'Leading transactions across a €10 billion conglomerate spanning 200+ companies, Igor orchestrated strategic deals that reshaped industries and unlocked unprecedented value.',
      period: '€10B+ Enterprise',
      color: 'from-amber-600 to-yellow-700'
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            A Journey of Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Each milestone represents not just a position, but a transformation — building expertise that redefines what's possible in finance and strategy.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 via-slate-300 to-amber-600" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-16 last:mb-0 transition-all duration-1000 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="inline-block">
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${milestone.color} text-white text-xs font-semibold rounded-sm mb-3`}>
                        {milestone.period}
                      </div>
                      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-slate-900 mb-2">
                        {milestone.institution}
                      </h3>
                      <h4 className="text-lg font-semibold text-amber-600 mb-3">
                        {milestone.role}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-2/12 flex justify-center">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-amber-600 flex items-center justify-center shadow-lg group hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-7 h-7 text-amber-600 group-hover:rotate-12 transition-transform`} />
                    </div>
                  </div>

                  <div className="w-5/12" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
