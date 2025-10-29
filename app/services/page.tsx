import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Our Services - Engineer Architect Consultancy",
  description: "Comprehensive construction and architecture services including commercial construction, residential projects, and engineering consultancy.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold border border-white/30 mb-6 animate-pulse-slow">
            🔧 OUR EXPERTISE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-text-shimmer bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-3xl opacity-95 max-w-3xl mx-auto">
            Comprehensive Construction & Architecture Solutions Tailored To Your Vision
          </p>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-20">
        <Services />
      </div>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full text-sm font-bold mb-6">
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Why <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to excellence and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group text-center p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-orange-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Award Winning</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Recognized for excellence in construction and design with multiple industry awards.</p>
              </div>
            </div>
            <div className="group text-center p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Fast Delivery</h3>
                <p className="text-gray-600 text-lg leading-relaxed">On-time project completion guaranteed with our efficient project management.</p>
              </div>
            </div>
            <div className="group text-center p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-purple-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-purple-500 group-hover:scale-110 transition-transform duration-300">💎</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Premium Quality</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Only the best materials and craftsmanship for long-lasting results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
