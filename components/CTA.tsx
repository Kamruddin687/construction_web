export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-500 via-red-600 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold border border-white/20 text-white animate-pulse-slow">
              🚀 Ready to Start?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="text-yellow-300 animate-text-shimmer bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into reality with our expert team. Get a free consultation and quote for your next construction project.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="group px-10 py-5 bg-white hover:bg-gray-100 text-orange-600 rounded-full font-bold text-lg transition-all hover:scale-110 hover:shadow-2xl transform duration-300 flex items-center gap-3"
            >
              Get Free Quote
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <a
              href="tel:+15551234567"
              className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-orange-600 text-white rounded-full font-bold text-lg transition-all hover:scale-110 hover:shadow-2xl transform duration-300 flex items-center gap-3"
            >
              <span className="text-2xl">📞</span>
              Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl font-extrabold text-white mb-2">500+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl font-extrabold text-white mb-2">98%</div>
              <div className="text-white/80 text-sm">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl font-extrabold text-white mb-2">25+</div>
              <div className="text-white/80 text-sm">Awards Won</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl font-extrabold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
