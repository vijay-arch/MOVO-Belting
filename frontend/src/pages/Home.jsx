import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    
    {
      title: 'Material Handling Systems',
      subtitle: 'Precision Power Transmission',
      description: 'At Movobelting Industries, we manufacture every type of conveyor using advanced engineering designs and complete in-house equipment ensuring superior quality, faster delivery, and reliable performance',
      features: ['Engineered for reliability', 'Built to last', 'Performance you can trust'],
    },
    {
      title: 'System Integrations and Automation',
      subtitle: '',
      description: 'Movobelting Industries proudly works under the technical expertise and industry experience of our parent company, SS Automation. Their continued support strengthens our ability to deliver high-performance advanced automation solutions',
      features: ['Reliable power distribution and protection', 'Modular and scalable panel architecture', 'Centralized monitoring and control'],
    },
    {
      title: 'Complete Belting Solutions',
      subtitle: 'Advanced Conveying Solutions',
      description: 'For specific requirements, we collaborate with our trusted vendors and trade conveyor belts on a B2B basis, ensuring high-quality products and dependable supply.',
      features: ['Engineered for long service life', 'End-to-end solution reliability', 'Quality tested, field proven'],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
        {/* Animated Gears */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
            <svg className="gear-animate" viewBox="0 0 100 100">
              <path
                d="M50,10 L54,20 L46,20 Z M90,50 L80,54 L80,46 Z M50,90 L46,80 L54,80 Z M10,50 L20,46 L20,54 Z"
                fill="white"
              />
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="8" />
              <circle cx="50" cy="50" r="15" fill="white" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-10 w-24 h-24 opacity-10">
            <svg className="gear-animate-reverse" viewBox="0 0 100 100">
              <path
                d="M50,10 L54,20 L46,20 Z M90,50 L80,54 L80,46 Z M50,90 L46,80 L54,80 Z M10,50 L20,46 L20,54 Z"
                fill="white"
              />
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="8" />
              <circle cx="50" cy="50" r="15" fill="white" />
            </svg>
          </div>
        </div>

        {/* Slider Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <div className="fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-200">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  {slides[currentSlide].description}
                </p>
                <div className="space-y-2 mb-8">
                  {slides[currentSlide].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/products"
                  className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Conveyor and Belting Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Movobelting Industries provides comprehensive conveyor and belting solutions for diverse industrial
              applications. From conveyor belts to timing belts, modular belts to heavy-duty solutions,
              we offer state-of-the-art products that enhance your production efficiency.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600">Industry-leading belting solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Material Handling Systems',
                description: 'At Movobelting Industries, we manufacture every type of conveyor using advanced engineering designs and complete in-house equipment ensuring superior quality, faster delivery, and reliable performance',
                features: ['Modular conveyor design for flexible layouts', 'High load capacity with smooth material flow', 'Low-maintenance and safety-compliant design'],
              },
              {
                title: 'System Integration and Automation',
                description: 'Movobelting Industries proudly works under the technical expertise and industry experience of our parent company, SS Automation. Their continued support strengthens our ability to deliver high-performance advanced automation solutions',
                features: ['Custom electrical control panel solutions', 'PLC-based control and automation architecture', 'Seamless integration of conveyors, drives, and sensors'],
              },
              {
                title: 'Complete belt Solutions',
                description: 'Comprehensive range of specialized conveyor belts for every application and For specific requirements, we collaborate with our trusted vendors and trade conveyor belts on a B2B basis, ensuring high-quality products and dependable supply.',
                features: ['Wide range of industrial conveyor belts', 'Resistant to heat, oil, and chemicals', 'Long service life with minimal downtime', 'Application-specific belt material selection'],
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  <span>View Details</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industrial Applications</h2>
            <p className="text-lg text-gray-600">Serving diverse industries worldwide</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Food Processing',
              'Steel Industry',
              'Tobacco',
              'Airport/Logistics',
              'Marble & Tiles',
              'Pharmaceuticals',
              'Textiles',
              'Manufacturing',
            ].map((application, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900">{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for customized belting solutions
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
