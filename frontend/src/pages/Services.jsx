import React from 'react';
import { Settings, Wrench, Cpu, Eye, Menu } from 'lucide-react';
import conveyorImg from '../assets/conveyor_system_design_installation.jpeg';
import automationImg from '../assets/advance_automation_solutoin.jpeg';
import beltImg from '../assets/custom_belt_solution_support.jpeg';
import rollerImg from '../assets/industrial_roller_solution.jpeg';
import maintenanceImg from '../assets/maintainance_support.jpeg';
import integrationImg from '../assets/system_intigration_optimization.jpeg';

const Services = () => {
  const services = [
    {
      icon: <Wrench size={48} />,
      category: '★ MATERIAL HANDLING SYSTEMS ★',
      title: 'Conveyor System Design & Installation',
      image: conveyorImg,
      description: 'Complete design and installation for all types of conveyor and material handling systems',
      features: [
        'Belt Conveyor System Design',
        'Roller & Modular Conveyor Solutions',
        'Specialized Systems (Slat, Chain, Overhead)',
        'Custom Conveyor Engineering',
        'Professional Installation & Commissioning',
      ],
    },
    {
      icon: <Cpu size={48} />,
      category: '★ SYSTEM INTEGRATION & AUTOMATION ★',
      title: 'Advanced Automation Solutions',
      image: automationImg,
      description: 'Industry 4.0 ready automation with comprehensive control and monitoring systems',
      features: [
        'PLC-Based Control Systems',
        'HMI Touchscreen Integration',
        'SCADA System Implementation',
        'Real-time Monitoring & Analytics',
        'IoT & Industry 4.0 Integration',
      ],
    },
    {
      icon: <Eye size={48} />,
      category: '★ BELTING SOLUTIONS ★',
      title: 'Custom Belt Solutions & Support',
      image: beltImg,
      description: 'Tailored belting solutions designed for specific industrial requirements with expert support',
      features: [
        'PVC/PU/PE Conveyor Belts',
        'Plastic Modular Belt Systems',
        'Specialty Belts (Wire Mesh, High Temp)',
        'Timing Belts & Power Transmission',
        'Belt Repair, Splicing & Maintenance',
      ],
    },
    
    {
      icon: <Settings size={48} />,
      category: '★ INDUSTRIAL ROLLERS ★',
      title: 'Industrial Roller Solutions',
      image: rollerImg,
      description: 'Comprehensive selection and installation of high-performance industrial roller systems',
      features: [
        'Troughing & Carrying Idler Selection',
        'Impact & Self-Aligning Rollers',
        'Gravity Rollers Installation',
        'Conveyor Pulley Systems',
        'Roller Maintenance & Replacement',
      ],
    },
    {
      icon: <Wrench size={48} />,
      title: 'Comprehensive Maintenance & Support',
      image: maintenanceImg,
      description: 'Full-service preventive and corrective maintenance for all systems',
      features: [
        'Regular Maintenance Programs',
        'Belt & Roller Inspection',
        'System Performance Optimization',
        'Emergency Technical Support',
        'Scheduled Preventive Maintenance Plans',
      ],
    },
    {
      icon: <Settings size={48} />,
      title: 'System Integration & Optimization',
      image: integrationImg,
      description: 'End-to-end integration of all systems for maximum production efficiency',
      features: [
        'Multi-System Coordination',
        'Diverting & Sorting Solutions',
        'Production Line Automation',
        'Safety System Integration',
        'Complete System Upgrade Services',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Complete solutions from concept design to installation, maintenance, and ongoing support
          </p>
        </div>
      </section>

      {/* Mobile vertical menu (visible on small screens) */}
      <nav className="md:hidden py-4 px-4">
        <div className="flex flex-col space-y-2">
          <a href="#material-handling" className="flex items-center p-3 rounded-lg bg-white/90 shadow-md text-sm font-semibold">📦 Material Handling Systems</a>
          <a href="#system-integration" className="flex items-center p-3 rounded-lg bg-white/90 shadow-md text-sm font-semibold">🤖 System Integration & Automation</a>
          <a href="#belting-solutions" className="flex items-center p-3 rounded-lg bg-white/90 shadow-md text-sm font-semibold">🎯 Complete Belting Solution</a>
          <a href="#industrial-rollers" className="flex items-center p-3 rounded-lg bg-white/90 shadow-md text-sm font-semibold">⚙️ Industrial Solution</a>
        </div>
      </nav>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                id={service.category?.includes('MATERIAL') ? 'material-handling' : service.category?.includes('SYSTEM') ? 'system-integration' : service.category?.includes('BELTING') ? 'belting-solutions' : service.category?.includes('ROLLERS') ? 'industrial-rollers' : undefined}
                className={`relative overflow-hidden rounded-xl p-8 hover:shadow-2xl transition-all duration-300 card-hover bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: service.image ? `url(${service.image})` : undefined }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="relative z-10 text-white h-full flex flex-col justify-between">
                  <div>
                    {service.category && (
                      <div className="text-blue-200 text-sm font-bold mb-3">{service.category}</div>
                    )}
                    <div className="text-white mb-6">{service.icon}</div>
                    <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 mb-4">{service.description}</p>
                  </div>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-white/90 text-sm">
                        <span className="text-white mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Categories Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Four Core Expertise Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '📦',
                title: 'Material Handling Systems',
                items: ['Belt Conveyors', 'Roller Systems', 'Modular Conveyors', 'Specialty Systems']
              },
               {
                icon: '🤖',
                title: 'System Integration & Automation',
                items: ['PLC Controls', 'HMI Systems', 'SCADA Solutions', 'Industry 4.0']
              },
              {
                icon: '🎯',
                title: 'Belting Solutions',
                items: ['PVC/PU Belts', 'Modular Belts', 'Specialty Belts', 'Timing Belts']
              },
             
              {
                icon: '⚙️',
                title: 'Industrial Rollers',
                items: ['Troughing Idlers', 'Carrying Rollers', 'Gravity Rollers', 'Conveyor Pulleys']
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Movobelting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Products',
                description: 'High-quality belting solutions from trusted global manufacturers',
              },
              {
                title: 'Expert Support',
                description: 'Experienced team providing technical consultation and support',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored solutions designed to meet your specific requirements',
              },
              {
                title: 'Quick Delivery',
                description: 'Efficient supply chain ensuring timely delivery of products',
              },
              {
                title: 'Competitive Pricing',
                description: 'Best value for money with no compromise on quality',
              },
              {
                title: 'After-Sales Service',
                description: 'Comprehensive support and maintenance services',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Production?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to discuss your belting and automation needs
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
