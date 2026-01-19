import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">Your trusted partner in industrial Material Handling Systems and  belting solutions</p>
        </div>
      </section>

      {/* Company Overview */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(${require('../assets/movo team.jpeg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Movobelting Industries</h2>
            <p className="text-lg text-gray-600 mb-6">
              Movobelting Industries is a leading provider of complete belting solutions for diverse
              industrial applications. With years of experience and expertise, we specialize in
              offering high-quality conveyor belts, timing belts, modular belts, and custom belting
              solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We partner with globally acknowledged suppliers to bring you the best-in-class products
              that meet international standards. Our comprehensive range covers everything from light-duty
              to heavy-duty applications across various industries including food processing, automotive,
              pharmaceuticals, textiles, and manufacturing.
            </p>
            <p className="text-lg text-gray-600">
              At Movobelting, we don't just supply belts – we provide complete material handling systems
              and automation solutions tailored to your specific needs. Our commitment to quality,
              innovation, and customer satisfaction has made us a trusted partner for businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver the most effective belting solutions by integrating latest technology with
                innovative ideas, leading to operational efficiency and customer satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be one of the most admired organizations in terms of customer centricity by offering
                innovative belting solutions leading to unparalleled value proposition.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <p className="text-gray-600">
                Trust, Commitment, Fairness, Customer Centricity, and Social Responsibility guide
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Food Processing',
              'Pharmaceuticals',
              'Automotive',
              'Textiles',
              'Steel Industry',
              'Marble & Tiles',
              'Airport & Logistics',
              'Manufacturing',
              'Tobacco',
              'Packaging',
              'Electronics',
              'Agriculture',
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Standards',
                description: 'Products meeting international quality standards',
              },
              {
                title: 'Wide Range',
                description: 'Comprehensive product portfolio for all applications',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored solutions for specific requirements',
              },
              {
                title: 'Technical Expertise',
                description: 'Experienced team providing expert consultation',
              },
              {
                title: 'Reliable Supply',
                description: 'Timely delivery and consistent availability',
              },
              {
                title: 'After-Sales Support',
                description: 'Comprehensive maintenance and support services',
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
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us for reliable, efficient belting solutions
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
