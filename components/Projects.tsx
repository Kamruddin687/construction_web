'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  gradient: string;
  stats: string;
  image: string;
}

const projects = [
  {
    title: 'Modern Office Complex',
    category: 'Commercial • 2024',
    gradient: 'from-purple-500 via-purple-600 to-indigo-700',
    stats: '50,000 sq ft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    title: 'Luxury Residential Villa',
    category: 'Residential • 2024',
    gradient: 'from-pink-400 via-pink-500 to-red-500',
    stats: '8,500 sq ft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    title: 'Shopping Center',
    category: 'Commercial • 2023',
    gradient: 'from-blue-400 via-cyan-400 to-cyan-500',
    stats: '75,000 sq ft',
    image: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800&q=80',
  },
  {
    title: 'Industrial Warehouse',
    category: 'Industrial • 2023',
    gradient: 'from-green-400 via-teal-400 to-teal-500',
    stats: '100,000 sq ft',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLDivElement;
            const index = element.getAttribute('data-index');
            if (index) {
              setIsVisible((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 block">Our Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-center text-gray-600 text-xl max-w-2xl mx-auto">
            Excellence in Every Build - Discover Our Award-Winning Work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-card group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer ${
                isVisible.includes(String(index))
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="h-96 relative overflow-hidden">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-colors duration-300"></div>
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="opacity-90 mb-2">{project.category}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">📏 {project.stats}</span>
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
