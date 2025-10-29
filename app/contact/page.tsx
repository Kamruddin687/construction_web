import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Contact Us - Engineer Architect Consultancy",
  description: "Get in touch with our construction and architecture experts. We're here to help bring your vision to life.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-96 flex items-center justify-center mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold border border-white/30 mb-6 animate-pulse-slow">
            📧 GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-text-shimmer bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-3xl opacity-95 max-w-3xl mx-auto">
            Let's Start Building Your Dream Project Together
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="py-20">
        <Contact />
      </div>

      {/* Map Section (Placeholder) */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full text-sm font-bold mb-6">
              VISIT US
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Visit Our <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Office</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to meet you in person
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl h-96 flex items-center justify-center border-2 border-blue-200 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center p-8">
              <div className="text-9xl mb-6">🗺️</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h3>
              <p className="text-gray-700 text-xl font-semibold mb-2">123 Construction Avenue</p>
              <p className="text-gray-600 text-lg">Your City, State 12345</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+15551234567" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2">
                  <span className="text-2xl">📞</span>
                  Call Now
                </a>
                <a href="mailto:info@eaconstruction.com" className="px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 border-2 border-blue-500 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2">
                  <span className="text-2xl">✉️</span>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full text-sm font-bold mb-6">
              QUICK CONTACT
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Get In <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our team of experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-orange-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300">📞</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Call Us</h3>
                <p className="text-gray-700 text-xl font-bold mb-2">+1 (555) 123-4567</p>
                <p className="text-gray-500 mt-2">Mon-Fri: 8AM - 6PM</p>
                <a href="tel:+15551234567" className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full font-bold transition-all hover:scale-105">
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="group text-center p-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">✉️</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-700 text-xl font-bold mb-2">info@eaconstruction.com</p>
                <p className="text-gray-500 mt-2">24/7 Support</p>
                <a href="mailto:info@eaconstruction.com" className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-full font-bold transition-all hover:scale-105">
                  Send Email
                </a>
              </div>
            </div>
            
            <div className="group text-center p-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-green-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-6 text-green-500 group-hover:scale-110 transition-transform duration-300">💬</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Live Chat</h3>
                <p className="text-gray-700 text-xl font-bold mb-2">Chat with Experts</p>
                <p className="text-gray-500 mt-2">Available Now</p>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-full font-bold transition-all hover:scale-105">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
