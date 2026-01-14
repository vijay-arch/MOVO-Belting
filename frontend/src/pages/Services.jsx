import React from 'react';
import { Settings, Wrench, Cpu, Eye } from 'lucide-react';

const Services = () => {
  const services = [
    // {
    //   icon: <Settings size={48} />,
    //   title: 'Material Handling Systems',
    //   description: 'Complete conveyor and handling solutions for your production line',
    //   features: [
    //     'Belt Conveyor Systems',
    //     'Plastic Modular Conveyors',
    //     'Slat Conveyors',
    //     'Chain & Chip Conveyors',
    //     'Screw Conveyors',
    //   ],
    // },
    {
      icon: <Wrench size={48} />,
      title: 'Belt Services & Support',
      description: 'Comprehensive maintenance and support for all belting systems',
      features: [
        'Belt Installation',
        'Maintenance Services',
        'Repair & Splicing',
        'Technical Consultation',
        'Emergency Support',
      ],
    },
     {
      icon: <Eye size={48} />,
      title: 'Custom Solutions',
      description: 'Tailored belting solutions designed for your specific needs',
      features: [
        'Custom Belt Design',
        'Special Coatings',
        'Cleats & Sidewalls',
        'Non-standard Sizes',
        'Industry-specific Solutions',
      ],
    },
    {
      icon: <Cpu size={48} />,
      title: 'Industrial Automation',
      description: 'Advanced automation solutions to optimize your production efficiency',
      features: [
        'Automated Conveyor Systems',
        'PLC Integration',
        'Sensor & Control Systems',
        'Production Line Automation',
        'Custom Automation Solutions',
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-blue-600 mt-1 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
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
