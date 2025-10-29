export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center mt-16 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-600 to-purple-900 animate-gradient-shift"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-5xl px-6 animate-fadeInUp">
        <div className="mb-6 inline-block">
          <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold border border-white/20 animate-pulse-slow">
            🏗️ Premium Construction Services
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fadeInUp leading-tight">
          Building <span className="text-yellow-400 animate-text-shimmer bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent">Excellence</span>
          <br />Since Day One
        </h1>
        <p className="text-xl md:text-3xl mb-10 opacity-95 animate-fadeInUp delay-200 font-light">
          Professional Construction & Architecture Services That Transform Dreams Into Reality
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp delay-400">
          <a
            href="#contact"
            className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full font-bold text-lg transition-all hover:scale-110 hover:shadow-2xl shadow-orange-500/50 transform hover:-translate-y-2 duration-300"
          >
            Get A Quote
            <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </a>
          <a
            href="#projects"
            className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-orange-600 text-white rounded-full font-bold text-lg transition-all hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 duration-300"
          >
            View Projects
            <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
