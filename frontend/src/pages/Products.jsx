import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      category: 'conveyor',
      name: 'PVC/PU/PE Conveyor Belts',
      description: 'Wide range of Light Duty & Heavy-Duty applications covering various industries',
      specs: [
        'Material: PVC, PU, PE',
        'Thickness: 0.8-9.0mm',
        'Plies: 1,2,3,4 Woven & Felt',
        'Colors: White, Green, Black',
        'Surface: Matt, Glossy, Diamond, Rough Top',
      ],
    },
    {
      id: 2,
      category: 'conveyor',
      name: 'Cleated / Sidewall Belts',
      description: 'Specialized belts with cleats and corrugated sidewalls for inclined conveying',
      specs: [
        'White/Green Cleats',
        'L, T shaped cleats available',
        'Ultrasonically welded',
        'Corrugated sidewalls',
        'Tracking profiles available',
      ],
    },
    {
      id: 3,
      category: 'timing',
      name: 'Timing Belts & Pulleys',
      description: 'High-quality timing belts for precision power transmission applications',
      specs: [
        'Pitches: AT10, AT20, HTD5M, HTD8M, HTD14M',
        'Metric Pitch: T10, T20',
        'Inch Pitch: L, H',
        'Tension Cords: Stainless Steel, Kevlar',
        'Linear or Endless options',
      ],
    },
    {
      id: 4,
      category: 'modular',
      name: 'Plastic Modular Belts',
      description: 'Advanced modular belting systems ideal for food and industrial applications',
      specs: [
        'Chemical agent resistant',
        'Minimum friction coefficient',
        'No lubrication needed',
        'Lightweight design',
        'Positive drive system',
      ],
    },
    {
      id: 5,
      category: 'heavy',
      name: 'Heavy Duty Rubber Belts',
      description: 'Robust conveyor belts for demanding industrial environments',
      specs: [
        'Airport applications',
        'Mining & Construction',
        'Thermal plants',
        'Processing industries',
        'High durability',
      ],
    },
    {
      id: 6,
      category: 'specialty',
      name: 'Flat Transmission Belts',
      description: 'NYTRAN belts for power transmission from fractional to 2000 KW drives',
      specs: [
        'Nylon Sandwich construction',
        'Polyester Cord options',
        'High modular tension member',
        'Flexible Z splice',
        '0.2mm to 4mm thickness',
      ],
    },
    {
      id: 7,
      category: 'specialty',
      name: 'Caterpillar Belts',
      description: 'TRAKPULL endless belts designed for cable pulling applications',
      specs: [
        'Polyester or Aramid yarns',
        'Excellent track properties',
        'Wear resistant edges',
        'No splice - constant thickness',
        'Oil & plasticizer resistant',
      ],
    },
    {
      id: 8,
      category: 'specialty',
      name: 'High Temperature Felt Belts',
      description: 'ALU-EX belts for aluminum extrusion and high-temperature applications',
      specs: [
        'Nomex & Kevlar construction',
        'Zylon PBO fiber options',
        'High temperature resistance',
        'Truly endless construction',
        'Industrial grade',
      ],
    },
    {
      id: 9,
      category: 'specialty',
      name: 'Wire Mesh Belts',
      description: 'Compound balanced weave and articulated wire bands for baking and cooling',
      specs: [
        'Z-47 Wire Band',
        'LK-6 Stripper Belt',
        'Compound Balanced Weave',
        'Material: MS, SS, GI',
        'Baking & cooling applications',
      ],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'conveyor', name: 'Conveyor Belts' },
    { id: 'timing', name: 'Timing Belts' },
    { id: 'modular', name: 'Modular Belts' },
    { id: 'heavy', name: 'Heavy Duty' },
    { id: 'specialty', name: 'Specialty Belts' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100">
            Comprehensive belting solutions for every industrial need
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md sticky top-20 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-48 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {product.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We can customize belts according to your specific requirements
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
