import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import flatBeltImg from '../assets/Flat belt conveyor.jpg';
import inclinedBeltImg from '../assets/inclned conveyor.jpg';
import aluminumBeltImg from '../assets/Alluminum conveyor.jpg';
import rollerConveyorImg from '../assets/roller conveyor.jpg';
import image1 from '../assets/2152001537.jpg';
import image2 from '../assets/2152005497.jpg';
import image3 from '../assets/2874980_8123.jpg';
import image4 from '../assets/4342524_19454.jpg';
import image5 from '../assets/pexels-8pcarlos-morocho-2150734957-35642282.jpg';
import image6 from '../assets/pexels-cristian-rojas-10039991.jpg';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, category: 'belt-conveyor', name: 'Flat Belt Conveyor', image: flatBeltImg, description: 'Simple and reliable flat belt conveyors for horizontal transport of packages and goods.', specs: ['Suitable for light to medium loads', 'Low maintenance', 'Custom widths and lengths', 'Comfortable tracking and tensioning options'] },
    { id: 2, category: 'belt-conveyor', name: 'Inclined Belt Conveyor', image: inclinedBeltImg, description: 'Belt conveyors designed with inclination for elevation changes in the production line.', specs: ['Available with cleats for positive conveying', 'Steep incline options', 'Anti-slip surfaces', 'Customizable incline angles'] },
    { id: 3, category: 'belt-conveyor', name: 'Aluminum Belt Conveyor', image: aluminumBeltImg, description: 'Lightweight, corrosion-resistant belt conveyors using aluminum framing for hygienic or portable applications.', specs: ['Anodized aluminum frames', 'Low weight, high strength', 'Ideal for food and clean environments', 'Modular and portable'] },
    { id: 4, category: 'belt-conveyor', name: 'Curve Belt Conveyor', image: flatBeltImg, description: 'Curved belt conveyors to smoothly change transport direction while maintaining orientation.', specs: ['Tight radius options', 'Multiple belt materials', 'Low product re-orientation', 'Combination with straight sections'] },
    { id: 5, category: 'belt-conveyor', name: 'Modular Belt Conveyor', image: image1, description: 'Plastic modular belting system for washdown and food-processing environments.', specs: ['Interlocking plastic modules', 'Easy replacement of damaged modules', 'Good drainage and cleanability', 'Positive drive options'] },
    { id: 6, category: 'belt-conveyor', name: 'Telescopic Belt Conveyor', image: image2, description: 'Extendable conveyors for loading/unloading trucks and containers to speed handling.', specs: ['Variable length extension', 'Hydraulic or electric drive', 'Low-profile retractable design', 'Adjustable speed'] },

    { id: 7, category: 'roller-conveyor', name: 'Free Roller Conveyor', image: rollerConveyorImg, description: 'Gravity roller conveyors for simple accumulation and transfer using incline or push.', specs: ['Low-cost passive transport', 'Ideal for carton handling', 'Modular sections', 'Minimal power usage'] },
    { id: 8, category: 'roller-conveyor', name: 'Motorized Roller Conveyor', image: rollerConveyorImg, description: 'Driven roller conveyors for controlled movement with variable speed and indexing.', specs: ['Motorized rollers (drives)', 'Speed control and indexing', 'Can integrate with automation', 'Suitable for lines and merges'] },
    { id: 9, category: 'roller-conveyor', name: 'Curve Roller Conveyor', image: image3, description: 'Curved roller sections to route product flow while keeping consistent pitch.', specs: ['Ball or roller curves', 'Low friction turns', 'Custom radii', 'Compatible with straight rollers'] },

    { id: 10, category: 'flexible-conveyor', name: 'Flexible Skate Conveyor', image: image4, description: 'Portable flexible skate conveyors that expand and bend to fit loading geometries.', specs: ['Collapsible accordion design', 'Portable and lightweight', 'Ideal for temporary lines', 'Easy storage'] },
    { id: 11, category: 'flexible-conveyor', name: 'Flexible Roller Conveyor', image: image5, description: 'Flexible roller conveyors offering mobility with roller-based surface transport.', specs: ['Telescopic flexible sections', 'Good for uneven floors', 'Portable', 'Safe manual handling'] },
    { id: 12, category: 'flexible-conveyor', name: 'Motorized Flexible Conveyor', image: image6, description: 'Powered flexible conveyors for automated loading with variable speed.', specs: ['Motorized rollers in flexible frame', 'Speed control', 'Automatic retraction', 'Used in express logistics'] },

    { id: 13, category: 'chain-conveyor', name: 'Vertical Chain Conveyor', image: flatBeltImg, description: 'Chain-based vertical conveying solutions for lifting heavy loads between elevations.', specs: ['High load capacity', 'Compact footprint', 'Positive product support', 'Suitable for pallets and crates'] },
    { id: 14, category: 'chain-conveyor', name: 'Slat Chain Conveyor', image: inclinedBeltImg, description: 'Slat conveyors using chain-driven slats for heavy or hot applications.', specs: ['Robust slat design', 'Good for heavy, sharp, or hot items', 'High-temperature options', 'Modular slat replacement'] },

    { id: 15, category: 'overhead-conveyor', name: 'Four Wheel Overhead Conveyor', image: aluminumBeltImg, description: 'Overhead trolley system with four-wheel hangers for lightweight parts transport.', specs: ['Trolleys with four-wheel support', 'Smooth overhead routing', 'Ideal for assembly lines', 'Reduced floor usage'] },
    { id: 16, category: 'overhead-conveyor', name: '1-Beam Overhead Conveyor', image: image1, description: 'Single-beam overhead conveyor for streamlined part movement in assembly and finishing.', specs: ['Single-beam track', 'Compact suspension', 'Suitable for paint and assembly lines', 'Easy integration with fixtures'] },

    { id: 17, category: 'others', name: 'Truck Loading Conveyor', image: image2, description: 'Conveyors designed for efficient truck and trailer loading and unloading.', specs: ['Telescopic or straight options', 'High throughput', 'Adjustable height', 'Safety features'] },
    { id: 18, category: 'others', name: 'Spiral Conveyor', image: image3, description: 'Space-saving vertical transport using a spiral path for gentle elevation change.', specs: ['Compact vertical footprint', 'Continuous flow', 'Gentle handling', 'Various belt materials'] },
    { id: 19, category: 'others', name: 'Ball Type Assembly Line Conveyor', image: image4, description: 'Ball transfer conveyors for easy omni-directional movement and precise positioning.', specs: ['Ball transfer units', 'Great for manual assembly', 'Low-friction multidirectional movement', 'Modular panels'] },
    { id: 20, category: 'others', name: 'Hinge Conveyor', image: image5, description: 'Hinge belt conveyors for incline/decline applications with positive product support.', specs: ['Hinged metal or plastic links', 'Good for heavy and hot products', 'Positive grip on inclines', 'Durable construction'] },
    { id: 21, category: 'others', name: 'Wire Mesh Conveyor', image: image6, description: 'Wire mesh belt conveyors for oven, washing and cooling applications.', specs: ['Open mesh for heat/air flow', 'High-temperature resistant', 'Stainless steel options', 'Food-safe configurations'] },
    { id: 22, category: 'others', name: 'Inverted Four Wheel Conveyor', image: flatBeltImg, description: 'Inverted four-wheel systems for specialized handling and compact suspension.', specs: ['Inverted trolley arrangement', 'Reduced footprint', 'Good for hanging parts', 'Smooth transit'] },
    { id: 23, category: 'others', name: 'Diverting and Sorting Conveyor', image: rollerConveyorImg, description: 'Conveyors with diverting and sorting mechanisms for automated flow control.', specs: ['Pushers and diverts', 'Sensors and PLC integration', 'High-speed sorting', 'Configurable lanes'] },
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'belt-conveyor', name: 'Belt Conveyor' },
    { id: 'roller-conveyor', name: 'Roller Conveyor' },
    { id: 'flexible-conveyor', name: 'Flexible Conveyor' },
    { id: 'chain-conveyor', name: 'Chain Conveyor' },
    { id: 'overhead-conveyor', name: 'Overhead Conveyor' },
    { id: 'others', name: 'Others' },
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
                <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent hover:from-black/70 hover:via-black/40 transition-colors duration-300 flex items-center justify-center" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl font-bold text-center px-4 z-10">
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
