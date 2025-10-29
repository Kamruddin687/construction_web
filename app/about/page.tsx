import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata = {
  title: "About Us - Engineer Architect Consultancy",
  description: "Learn about our company's history, mission, and the expert team behind our construction and architecture services.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-teal-600 to-cyan-700"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold border border-white/30 mb-6 animate-pulse-slow">
            👥 WHO WE ARE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-text-shimmer bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl md:text-3xl opacity-95 max-w-3xl mx-auto">
            Building Trust, Delivering Excellence
          </p>
        </div>
      </section>

      {/* About Section */}
      <div className="py-20">
        <About />
      </div>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full text-sm font-bold mb-6">
              OUR VALUES
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Mission & <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group p-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-8 text-green-500">🎯</div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  To deliver exceptional construction and architecture services that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group p-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-8 text-blue-500">🌟</div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  To be the leading construction and architecture firm recognized for innovation, excellence, and creating sustainable structures that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-bold mb-6">
              OUR PRINCIPLES
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Core <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental beliefs that drive our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-orange-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">💪</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h4>
                <p className="text-gray-600 leading-relaxed">Honesty and transparency in all our dealings</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">🏅</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h4>
                <p className="text-gray-600 leading-relaxed">Striving for perfection in every project</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-green-500 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h4>
                <p className="text-gray-600 leading-relaxed">Working together for success</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-purple-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-purple-500 group-hover:scale-110 transition-transform duration-300">🌱</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h4>
                <p className="text-gray-600 leading-relaxed">Building for a better tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
