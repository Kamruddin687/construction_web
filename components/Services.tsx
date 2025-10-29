'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ServiceForm from '@/components/ServiceForm';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: string;
  image: string;
}

const services = [
  {
    icon: '🏗️',
    title: 'Commercial Construction',
    description: 'Expert construction services for commercial buildings, offices, and retail spaces.',
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: '🏠',
    title: 'Residential Projects',
    description: 'Custom home building and renovation services tailored to your needs.',
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: '📐',
    title: 'Architecture Design',
    description: 'Innovative architectural designs that blend functionality with aesthetics.',
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: '🔨',
    title: 'Renovation & Remodeling',
    description: 'Transform your existing space with our expert renovation services.',
    color: 'from-green-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: '🏛️',
    title: 'Project Management',
    description: 'End-to-end project management ensuring timely and budget-friendly delivery.',
    color: 'from-yellow-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: '⚙️',
    title: 'Engineering Consultancy',
    description: 'Professional engineering consultation for structural and civil projects.',
    color: 'from-indigo-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sectionRef = useRef(null);

  const openServiceForm = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsFormOpen(true);
  };

  const closeServiceForm = () => {
    setIsFormOpen(false);
    setSelectedService('');
  };

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

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 block">What We Offer</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-center text-gray-600 text-xl max-w-2xl mx-auto">
            Comprehensive Construction Solutions Tailored To Your Vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              data-index={index}
              onClick={() => openServiceForm(service.title)}
              className={`service-card group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center hover:-translate-y-4 border-2 border-transparent hover:border-orange-500 overflow-hidden cursor-pointer ${
                isVisible.includes(String(index))
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
                            
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-gray-50/30 group-hover:from-white/20 group-hover:to-gray-50/20 transition-all duration-500 rounded-2xl"></div>
                            
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className={`text-7xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500`}>{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-orange-500 font-semibold inline-flex items-center">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServiceForm 
        serviceName={selectedService} 
        isOpen={isFormOpen} 
        onClose={closeServiceForm} 
      />
    </section>
  );
}
