import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Complete Belting Solution',
      subtitle: 'PVC/PU/PE Conveyor Belts',
      description: 'Wide range of Light Duty & Heavy-Duty applications',
      features: ['Material: PVC, PU, PE', 'Thickness: 0.8-9.0mm', 'Multiple Plies Available'],
    },
    {
      title: 'Timing Belts & Pulleys',
      subtitle: 'Precision Power Transmission',
      description: 'High-quality timing belts with metric and inch pitches',
      features: ['AT10, AT20, HTD5M, HTD8M', 'Linear or Endless Options', 'Stainless Steel, Kevlar Cords'],
    },
    {
      title: 'Plastic Modular Belts',
      subtitle: 'Advanced Conveying Solutions',
      description: 'Ideal for food and industrial products',
      features: ['Chemical Resistant', 'Minimal Friction', 'Easy Maintenance'],
    },
    {
      title: 'Material Handling Systems',
      subtitle: 'End-to-End Solutions',
      description: 'Complete automation for your production line',
      features: ['Belt Conveyors', 'Chain Conveyors', 'Industrial Automation'],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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
              Complete Belting Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Movobelting Industries provides comprehensive belting solutions for diverse industrial
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
                title: 'Conveyor Belts',
                description: 'PVC/PU/PE belts for light and heavy-duty applications',
                features: ['0.8-9.0mm thickness', 'Multiple plies', 'Various colors & patterns'],
              },
              {
                title: 'Timing Belts',
                description: 'Precision power transmission solutions',
                features: ['Metric & inch pitches', 'High-quality materials', 'Custom options'],
              },
              {
                title: 'Modular Belts',
                description: 'Advanced plastic modular belting systems',
                features: ['Chemical resistant', 'Low friction', 'Easy maintenance'],
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
