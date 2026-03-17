import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import materialHandlingImg from '../assets/material_handling_system.jpeg';
import integrationImg from '../assets/system_intigrtion_automation.jpeg';
import beltingImg from '../assets/complete_belting_solution.jpeg';
import rollerImg from '../assets/industrial_roller_solution.jpeg';
import itzuLogo from '../assets/itzu_logo.png';
import kingsLogo from '../assets/kings_logo.jpg';
import vegaLogo from '../assets/vega_logo.jpg';
import jubilanLogo from '../assets/jubilan_logo.png';
import ufiLogo from '../assets/ufi_logo.png';
import adityaaMilkLogo from '../assets/adityaa_milk_logo.png';
import jpeeLogo from '../assets/jpee_logo.jpeg';
import syngentaLogo from '../assets/syngenta_logo.png';
import parleLogo from '../assets/parle_logo.png';
import cdeLogo from '../assets/cde_logo.png';
import knkKartsLogo from '../assets/knk_karts_logo.jpg';
import tahmarLogo from '../assets/tahmar-logo.png';

import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    
    {
      title: 'Material Handling Systems',
      subtitle: 'Complete Conveyor Solutions',
      image: materialHandlingImg,
      description: 'At Movobelting Industries, we manufacture all type of conveyor using advanced engineering designs and complete in-house equipment ensuring superior quality, faster delivery, and reliable performance. From belt conveyors to modular systems, we deliver industry-leading material handling solutions.',
      features: ['Engineered for reliability', 'Built to last', 'Performance you can trust'],
    },
    
    {
      title: 'System Integration & Automation',
      subtitle: 'Industry 4.0 Ready Solutions',
      image: integrationImg,
      description: 'Movobelting Industries proudly works under the technical expertise of SS Automation. We deliver high-performance automation solutions with PLC controls, HMI integration, and SCADA systems for complete production optimization.',
      features: ['Advanced control systems', 'Real-time monitoring', 'IoT integration capabilities'],
    },
    {
      title: 'Complete Belting Solutions',
      subtitle: 'Specialized Conveyor Belts',
      image: beltingImg,
      description: 'Comprehensive range of PVC/PU belts, plastic modular belts, specialty belts, and compound balanced weave solutions. Every belt engineered for specific industrial requirements with proven durability.',
      features: ['Engineered for long service life', 'End-to-end solution reliability', 'Quality tested, field proven'],
    },
    {
      title: 'Industrial Rollers & Components',
      subtitle: 'Precision Roller Systems',
      image: rollerImg,
      description: 'Newly expanded category featuring high-performance industrial rollers including troughing idlers, carrying rollers, impact rollers, and specialty components. Engineered for durability and efficiency in the most demanding applications.',
      features: ['Premium quality construction', 'Extended service life', 'Reduced maintenance costs'],
    },
  ];

  const logos = [
    itzuLogo,
    kingsLogo,
    vegaLogo,
    jubilanLogo,
    ufiLogo,
    adityaaMilkLogo,
    jpeeLogo,
    syngentaLogo,
    parleLogo,
    cdeLogo,
    knkKartsLogo,
    tahmarLogo,
  ];
  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, half);
  const row2 = logos.slice(half);
  const marquee1Ref = useRef(null);
  const marquee2Ref = useRef(null);

  useEffect(() => {
    // Measure the width of the duplicated track and set --marquee-width to one copy's width (half)
    if (marquee1Ref.current) {
      const total = marquee1Ref.current.scrollWidth || 0;
      const single = Math.floor(total / 2);
      marquee1Ref.current.style.setProperty('--marquee-width', `${single}px`);
    }
    if (marquee2Ref.current) {
      const total2 = marquee2Ref.current.scrollWidth || 0;
      const single2 = Math.floor(total2 / 2);
      marquee2Ref.current.style.setProperty('--marquee-width', `${single2}px`);
    }
  }, [row1.length, row2.length]);

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
      <section
        className="relative h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>
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
Material Handling Systems & Integration and Automation Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
At MOVOBELTING INDUSTRIES, we specialize in designing and manufacturing advanced conveyor systems and delivering integrated automation solutions that improve efficiency, reduce manpower, and optimize material handling processes across industries.
With deep expertise in conveyor technology and system integration, we provide customized solutions for loading, unloading, packaging, sorting, and production line automation. Our systems are engineered for reliability, low maintenance, and high performance, helping businesses save time, reduce operational costs, and increase productivity.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Material Handling Systems',
                description: 'Advanced conveyor systems including belt, roller, modular, and specialized conveyors. Engineered with precision for reliability and efficiency in all industrial applications.',
                features: ['Belt & Roller Conveyors', 'Modular Systems', 'Specialty Conveyors', 'Custom Designs'],
              },
              {
                title: 'System Integration & Automation',
                description: 'Advanced automation with PLC controls, HMI interfaces, and SCADA systems. Complete production optimization with Industry 4.0 ready solutions.',
                features: ['PLC Control Systems', 'HMI Touchscreens', 'SCADA Solutions', 'IoT Integration'],
              },
              {
                title: 'Belting Solutions',
                description: 'Complete range of PVC/PU belts, plastic modular belts, specialty belts, and compound balanced weave solutions. Every belt meets international quality standards.',
                features: ['PVC/PU Belts', 'Modular Belts', 'Specialty Belts', 'Timing Belts'],
              },
              {
                title: 'Industrial Rollers',
                description: 'High-performance rollers for belt support and material handling. Features troughing idlers, carrying rollers, impact rollers, gravity rollers, and conveyor pulleys.',
                features: ['Troughing Idlers', 'Carrying Rollers', 'Gravity Rollers', 'Conveyor Pulleys'],
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

      {/* Clients / Served Companies (Marquee) */}
      <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Served Clients</h2>
                <p className="text-gray-600">Trusted partners across industries</p>
              </div>
            </div>

            <div className="w-full overflow-hidden px-4 space-y-4">
              <div className="overflow-hidden">
                <div ref={marquee1Ref} className="animate-marquee" style={{ animationDuration: '10s' }}>
                  {row1.concat(row1).map((logo, idx) => (
                    <div key={`r1-${idx}`} className="marquee-item flex-shrink-0 w-32 md:w-36 lg:w-40 flex items-center justify-center">
                      <img src={logo} alt={`client-${idx}`} className="max-h-16 md:max-h-20 lg:max-h-24 object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <div ref={marquee2Ref} className="animate-marquee animate-marquee-reverse" style={{ animationDuration: '9s' }}>
                  {row2.concat(row2).map((logo, idx) => (
                    <div key={`r2-${idx}`} className="marquee-item flex-shrink-0 w-32 md:w-36 lg:w-40 flex items-center justify-center">
                      <img src={logo} alt={`client-2-${idx}`} className="max-h-16 md:max-h-20 lg:max-h-24 object-contain" />
                    </div>
                  ))}
                </div>
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
