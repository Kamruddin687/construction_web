import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Our Projects - Engineer Architect Consultancy",
  description: "Explore our portfolio of completed construction projects including commercial, residential, and industrial developments.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-red-700"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold border border-white/30 mb-6 animate-pulse-slow">
            🏗️ OUR PORTFOLIO
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-text-shimmer bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl md:text-3xl opacity-95 max-w-3xl mx-auto">
            A Showcase of Excellence in Construction
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <div className="py-20">
        <Projects />
      </div>

      {/* Project Stats */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-bold mb-6">
              OUR ACHIEVEMENTS
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Project <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Statistics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Impressive numbers that reflect our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-orange-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-extrabold text-orange-500 mb-4">500+</div>
                <p className="text-gray-700 font-bold text-lg">Projects Completed</p>
                <p className="text-gray-500 mt-2">Across all sectors</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-extrabold text-blue-500 mb-4">98%</div>
                <p className="text-gray-700 font-bold text-lg">Client Satisfaction</p>
                <p className="text-gray-500 mt-2">Industry leading rating</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-extrabold text-green-500 mb-4">15+</div>
                <p className="text-gray-700 font-bold text-lg">Years Experience</p>
                <p className="text-gray-500 mt-2">In the industry</p>
              </div>
            </div>
            <div className="group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-purple-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-extrabold text-purple-500 mb-4">25+</div>
                <p className="text-gray-700 font-bold text-lg">Awards Won</p>
                <p className="text-gray-500 mt-2">Industry recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
