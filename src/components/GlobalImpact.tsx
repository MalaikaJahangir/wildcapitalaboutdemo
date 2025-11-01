import { TrendingUp, CheckCircle, Globe, Layers } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';

export default function GlobalImpact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    {
      icon: TrendingUp,
      value: 5,
      suffix: 'B+',
      label: 'Transactions Facilitated',
      prefix: '€'
    },
    {
      icon: CheckCircle,
      value: 100,
      suffix: '+',
      label: 'Projects Completed',
      prefix: ''
    },
    {
      icon: Globe,
      value: 20,
      suffix: '+',
      label: 'Countries Reached',
      prefix: ''
    },
    {
      icon: Layers,
      value: 15,
      suffix: '+',
      label: 'Industries Served',
      prefix: ''
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Global Impact, Local Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our work spans continents and industries, delivering transformative results that redefine what's possible.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              isInView={isInView}
              delay={index * 150}
            />
          ))}
        </div>

        <div
          className={`mt-16 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="p-8 bg-slate-50 rounded-sm border-l-4 border-amber-600">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Sector Expertise</h3>
            <div className="space-y-2">
              {['Technology & AI', 'Manufacturing', 'Financial Services', 'Real Estate', 'Energy & Resources'].map((sector, i) => (
                <div key={i} className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3" />
                  {sector}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-slate-50 rounded-sm border-l-4 border-slate-900">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Services</h3>
            <div className="space-y-2">
              {['M&A Advisory', 'Valuation & Modelling', 'Investment Strategy', 'Financial Leadership', 'AI Integration'].map((service, i) => (
                <div key={i} className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, suffix, label, prefix, isInView, delay }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      className={`group p-8 bg-slate-50 rounded-sm border border-slate-200 hover:border-amber-600 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-10 h-10 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
      <div className="text-4xl font-bold text-slate-900 mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-slate-600 font-semibold uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
