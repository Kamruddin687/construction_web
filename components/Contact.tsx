'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactInfo {
  icon: string;
  title: string;
  content: string[];
}

const contactInfo = [
  {
    icon: '📍',
    title: 'Address',
    content: ['123 Construction Avenue', 'Your City, State 12345'],
  },
  {
    icon: '📞',
    title: 'Phone',
    content: ['+1 (555) 123-4567'],
  },
  {
    icon: '✉️',
    title: 'Email',
    content: ['info@eaconstruction.com'],
  },
  {
    icon: '🕒',
    title: 'Working Hours',
    content: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 block">Contact Us</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-center text-gray-600 text-xl max-w-2xl mx-auto">
            Let's discuss your next project and turn your vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="group flex gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-500">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-300">{info.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {info.title}
                  </h4>
                  {info.content.map((line, i) => (
                    <p key={i} className="text-gray-600 text-lg">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-2xl border-2 border-orange-500 hover:shadow-3xl transition-shadow duration-300">
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all text-lg peer group-hover:border-orange-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all text-lg group-hover:border-orange-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="relative group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all text-lg group-hover:border-orange-300"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Project Details"
                rows={5}
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all resize-vertical text-lg group-hover:border-orange-300"
              ></textarea>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <button
              type="submit"
              className="group w-full px-8 py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl shadow-orange-500/50 transform duration-300"
            >
              Send Message
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
