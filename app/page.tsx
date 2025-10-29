import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse-slow">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Your Trusted <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Construction Partner</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional construction services with unmatched quality, innovation, and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-orange-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Award Winning</h3>
                <p className="text-gray-600 leading-relaxed">Recognized for excellence in construction and design with multiple industry awards.</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Fast Delivery</h3>
                <p className="text-gray-600 leading-relaxed">On-time project completion guaranteed with our efficient project management.</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">💎</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Premium Quality</h3>
                <p className="text-gray-600 leading-relaxed">Only the best materials and craftsmanship for long-lasting results.</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-purple-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Expert Team</h3>
                <p className="text-gray-600 leading-relaxed">Skilled professionals with years of experience in the construction industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      <Projects />
      <About />
      
      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full text-sm font-bold mb-6">
              TESTIMONIALS
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">John Doe</h4>
                    <p className="text-gray-500 text-sm">CEO, Tech Corp</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 leading-relaxed italic">
                  "Outstanding work! They completed our office building ahead of schedule with exceptional quality. Highly recommended!"
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-purple-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Sarah Miller</h4>
                    <p className="text-gray-500 text-sm">Homeowner</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 leading-relaxed italic">
                  "They built our dream home exactly as we envisioned. Professional team and excellent communication throughout!"
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    RJ
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Robert Johnson</h4>
                    <p className="text-gray-500 text-sm">Business Owner</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 leading-relaxed italic">
                  "Best construction company I've worked with. Attention to detail and commitment to quality is unmatched!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
