import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(184, 134, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(184, 134, 11, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1
          className="font-['Playfair_Display'] text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
          style={{
            opacity: 1 - scrollY / 500,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        >
          Innovate. Illuminate. Succeed.
        </h1>

        <p
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{
            opacity: 1 - scrollY / 400,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          Blending bold innovation with deep expertise in strategy, finance, investments, leadership, and AI.
        </p>

        <button
          onClick={scrollToContent}
          className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white font-semibold rounded-sm hover:from-amber-700 hover:to-yellow-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          style={{
            opacity: 1 - scrollY / 300,
          }}
        >
          Explore Our Vision
        </button>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <ChevronDown className="w-8 h-8 text-amber-600" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"
           style={{ top: '80%' }} />
    </section>
  );
}
