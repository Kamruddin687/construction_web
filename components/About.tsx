'use client';

import { useEffect, useRef, useState } from 'react';

interface Counts {
  projects: number;
  team: number;
  years: number;
}

export default function About() {
  const [counts, setCounts] = useState<Counts>({ projects: 0, team: 0, years: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { projects: 500, team: 50, years: 15 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.floor(targets.projects * progress),
        team: Math.floor(targets.team * progress),
        years: Math.floor(targets.years * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, increment);
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 block">Who We Are</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              With years of experience in the construction and architecture industry, 
              Engineer Architect Consultancy has established itself as a trusted partner 
              for building projects of all scales.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our team of skilled engineers, architects, and construction professionals 
              work together to deliver exceptional results that exceed client expectations.
            </p>

            {/* Statistics */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6">
              <div className="group text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
                  {counts.projects}+
                </h3>
                <p className="text-gray-700 font-semibold">Projects Completed</p>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-500">
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {counts.team}+
                </h3>
                <p className="text-gray-700 font-semibold">Expert Team</p>
              </div>
              <div className="group text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-500">
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {counts.years}+
                </h3>
                <p className="text-gray-700 font-semibold">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image with Enhanced Design */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Gradient Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main Card */}
              <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                {/* Animated Circles */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <span className="text-9xl animate-bounce-slow drop-shadow-2xl">🏢</span>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
