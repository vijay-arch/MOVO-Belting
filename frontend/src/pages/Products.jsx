import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

// Material Handling Systems - Belt Conveyors
import horizontalBeltImg from '../assets/horizontal-belt-conveyor.jpeg';
import inclinedBeltImg from '../assets/inclined-belt-conveyor.jpeg';
import inclinedBelt2Img from '../assets/inclined-belt-conveyor-2.jpeg';
import declinedBeltImg from '../assets/declined-belt-conveyor.jpeg';
import curveBeltImg from '../assets/curve-conveyor.jpeg';
import aluminumBeltImg from '../assets/aluminum-belt-conveyor.jpeg';

// Material Handling Systems - Roller Conveyors
import freeRollerImg from '../assets/free-roller-conveyor.jpeg';
import motorizedRollerImg from '../assets/motorized-roller-conveyor.jpeg';
import curveRollerImg from '../assets/curve-roller-conveyor.jpeg';

// Material Handling Systems - Flexible Conveyors
import flexibleSkateImg from '../assets/flexible-skate-wheel-conveyor.jpeg';
import flexibleRollerImg from '../assets/flexible-roller-conveyor.jpeg';

// Material Handling Systems - Modular Conveyors
import modularBeltImg from '../assets/modular-belt-conveyor.jpeg';

// Material Handling Systems - Others
import telescopicImg from '../assets/telescopic-conveyor.jpeg';
import telescopic2Img from '../assets/telescopic-conveyor-2.jpeg';
import truckLoadingImg from '../assets/truck-loading-unloading-conveyor.jpeg';
import truckLoading2Img from '../assets/truck-loading-unloading-conveyor-2.jpeg';
import truckLoading3Img from '../assets/truck-loading-unloading-conveyor-3.jpeg';
import spiralImg from '../assets/spiral-belt-conveyor.jpeg';
import spiral2Img from '../assets/spiral-belt-conveyor-2.jpeg';
import verticalChainImg from '../assets/vertical-chain-conveyor.jpeg';
import slatChainImg from '../assets/slat-chain-conveyor.jpeg';
import slatChain2Img from '../assets/slat-chain-conveyor-2.jpeg';
import slatChain3Img from '../assets/slat-chain-conveyor-3.jpeg';
import plasticSlatChainImg from '../assets/plastic-slat-chain-conveyor.jpeg';
import plasticSlatChain1Img from '../assets/plastic-slat-chain-conveyor-1.jpeg';
import hingeImg from '../assets/hinge-conveyor.jpeg';
import hinge2Img from '../assets/hinge-conveyor-2.jpeg';
import chainImg from '../assets/chain-conveyor.jpeg';
import chain2Img from '../assets/chain-conveyor-2.jpeg';
import wireMeshImg from '../assets/wire-mesh-conveyor.jpeg';
import wireMesh2Img from '../assets/wire-mesh-conveyor-2.jpeg';
import assemblyImg from '../assets/3w-assembly-conveyor.jpeg';
import fourWheelImg from '../assets/4wheel-overhead-conveyor.jpeg';
import iBeamImg from '../assets/i-beam-overhead-conveyor.jpeg';
import divertingImg from '../assets/diverting-and-sorting-conveyor.jpeg'; 
import flatmodluar from '../assets/flat-modular-belt-conveyor.jpeg';
import inclinedbelt from '../assets/inclined-modular-belt-conveyor.jpeg';

// System Integration & Automation
import electricControlImg from '../assets/electric-control-panel.jpg';
import customizedControlImg from '../assets/customized-control-screen.png';
import scadaSystemImg from '../assets/scada-system.jpg';

// Conveyor Belt Charts
import conveyorBeltChart1Img from '../assets/pvc-chart1.png';
import conveyorBeltChart2Img from '../assets/conveyor-belt-chart-2.png';

// Belting Solutions - PU/PUC/PE Belts
import pucBeltImg from '../assets/pu-conveyor-belt.jpg';
import puBeltImg from '../assets/pu-conveyor-belt.jpg';
import peBeltImg from '../assets/pe-conveyor-belt.jpg';

// Belting Solutions - Plastic Modular Belts
import flatTopModularImg from '../assets/flat-top-modular-belt.jpg';
import positrackModularImg from '../assets/positrac.jpg';
import mbObpImg from '../assets/mb-opb.png';
import mbObp1Img from '../assets/mb-opb-1.png';
import mbObp2Img from '../assets/mb-opb-2.png';
import mbObp3Img from '../assets/mb-opb-3.png';
import mbObp4Img from '../assets/mb-opb-4.png';
import mbMpbImg from '../assets/mb-mpb.png';
import mbMpb1Img from '../assets/mb-mpb-1.png';
import mbSmpbImg from '../assets/mb-smpb.png';
import mbSmpb1Img from '../assets/mb-smpb-1.png';
import mb2533Img from '../assets/mb-2533.png';
import mb25331Img from '../assets/mb-2533-1.png';
import mbS25Img from '../assets/mb-s25.png';
import mbS251Img from '../assets/mb-s25-1.png';
import mbS500Img from '../assets/mb-s500.png';
import mb900Img from '../assets/mb-900.png';
import mb9001Img from '../assets/mb-900-1.png';
import mb940Img from '../assets/mb-940.png';
import mb1000Img from '../assets/mb-1000.png';
import mb10001Img from '../assets/MB-1000-1.png';
// import mb2120Img from '../assets/mb-2120.png';
import mb21201Img from '../assets/mb-2120-1.png';
import mb21202Img from '../assets/MB-2120-2.png';

// Belting Solutions - Compound Balanced Weave
import lk6BeltImg from '../assets/lk-6.jpg';
import lk3BeltImg from '../assets/lk-3.jpg';
import lk4BeltImg from '../assets/lk4.jpg';

// Belting Solutions - Specialty Belts
import timingBeltImg from '../assets/timing-belt.jpg';
import coilWrapperImg from '../assets/coil-wraper-belt.jpg';
import textilePrintingImg from '../assets/textile-printing-belt.jpg';
import gridPlasticImg from '../assets/battery-grid-pasting-belt.jpeg';
import caterpillarImg from '../assets/rubber-caterpillar-belt.jpg';
import highTempFeltImg from '../assets/high-temperature-felt.jpg';
import biscuitOvenImg from '../assets/biscuit-oven-wire-band.jpg';
import doubleLockImg from '../assets/double-lock-conveyor-belt.jpeg';
import chainLinkImg from '../assets/chain-link-belt.jpg';
import duplexImg from '../assets/duplex-conveyor-belt.jpg';

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedCategory, setExpandedCategory] = useState('material-handling');
  const [expandedSubcategory, setExpandedSubcategory] = useState(null);

  // Restore state when component mounts or returns from product detail
  useEffect(() => {
    const savedState = sessionStorage.getItem('productsPageState');
    if (savedState) {
      try {
        const { category, subcategory, scrollPos } = JSON.parse(savedState);
        setExpandedCategory(category);
        setExpandedSubcategory(subcategory);
        
        // Restore scroll position after a small delay to ensure DOM is ready
        setTimeout(() => {
          window.scrollTo(0, scrollPos);
        }, 100);
        
        // Clear the saved state after restoring it
        sessionStorage.removeItem('productsPageState');
      } catch (error) {
        console.error('Error restoring products page state:', error);
      }
    } else {
      // Scroll to top when page first loads (no saved state)
      window.scrollTo(0, 0);
    }
  }, []);

  // Save state before navigating to product detail
  const handleProductClick = (product) => {
    const state = {
      category: expandedCategory,
      subcategory: expandedSubcategory,
      scrollPos: window.scrollY
    };
    sessionStorage.setItem('productsPageState', JSON.stringify(state));
    navigate('/product-detail', { state: { product } });
  };

  // Material Handling Systems Products
  const materialHandlingProducts = {
    'belt-conveyors': {
      title: 'Belt Conveyors',
      description: 'Horizontal to inclined transport solutions with complete in-house production',
      products: [
        {
          id: 1,
          name: 'Horizontal Belt Conveyor',
          image: horizontalBeltImg,
          description: 'Simple and reliable flat belt conveyors for horizontal transport of packages and goods at consistent speed.',
          specs: ['Suitable for light to medium loads', 'Low maintenance', 'Custom widths and lengths', 'Smooth tracking and tensioning options', 'Modular frame design'],
          features: 'Ideal for manufacturing, packaging, and distribution centers'
        },
        {
          id: 2,
          name: 'Inclined Belt Conveyor',
          image: inclinedBeltImg,
          images: [inclinedBeltImg, inclinedBelt2Img],
          description: 'Belt conveyors designed with inclination for elevation changes in the production line.',
          specs: ['Available with cleats for positive conveying', 'Steep incline options', 'Anti-slip surfaces', 'Customizable incline angles up to 45°', 'Energy-efficient drive systems'],
          features: 'Perfect for multi-level production facilities'
        },
        {
          id: 3,
          name: 'Declined Belt Conveyor',
          image: declinedBeltImg,
          description: 'Downward sloping belt conveyors with safety features for controlled descent of materials.',
          specs: ['Gravity-assisted operation', 'Enhanced braking systems', 'Anti-slip belt options', 'Variable decline angles', 'Smooth product descent'],
          features: 'Used in warehouse operations and material sorting'
        },
        {
          id: 4,
          name: 'Curve Belt Conveyor',
          image: curveBeltImg,
          description: 'Curved belt conveyors to smoothly change transport direction while maintaining product orientation.',
          specs: ['Tight radius options', 'Multiple belt materials', 'Low product re-orientation', 'Smooth transitions', 'Space-saving design'],
          features: 'Optimizes floor space and improves workflow efficiency'
        },
        {
          id: 5,
          name: 'Aluminum Belt Conveyor',
          image: aluminumBeltImg,
          description: 'Lightweight, corrosion-resistant belt conveyors using aluminum framing for hygienic applications.',
          specs: ['Anodized aluminum frames', 'Low weight, high strength', 'Ideal for food and clean environments', 'Modular and portable', 'Easy to clean and maintain'],
          features: 'Perfect for food, pharmaceutical, and hygiene-sensitive industries'
        },
      ]
    },
    'roller-conveyors': {
      title: 'Roller Conveyors',
      description: 'Efficient roller-based transport with free and motorized options',
      products: [
        {
          id: 7,
          name: 'Free Roller Conveyor',
          image: freeRollerImg,
          description: 'Gravity roller conveyors for simple accumulation and transfer using incline or manual push.',
          specs: ['Low-cost passive transport', 'Ideal for carton handling', 'Modular sections', 'Minimal power usage', 'Easy expandable design'],
          features: 'Cost-effective for non-urgent material movement'
        },
        {
          id: 8,
          name: 'Motorized Roller Conveyor',
          image: motorizedRollerImg,
          description: 'Driven roller conveyors for controlled movement with variable speed and precise indexing.',
          specs: ['Motorized rollers with independent drives', 'Speed control and indexing', 'Can integrate with automation systems', 'Suitable for merge/divert applications'],
          features: 'Ideal for automated production lines'
        },
        {
          id: 9,
          name: 'Curve Roller Conveyor',
          image: curveRollerImg,
          description: 'Curved roller sections to route product flow while keeping consistent pitch.',
          specs: ['Ball or roller curves', 'Low friction turns', 'Custom radii available', 'Compatible with straight rollers', 'Smooth direction change'],
          features: 'Perfect for routing in compact spaces'
        },
      ]
    },
    'flexible-conveyors': {
      title: 'Flexible Conveyors',
      description: 'Portable and adaptable conveying solutions for flexible operations',
      products: [
        {
          id: 10,
          name: 'Flexible Skate Wheel Conveyor',
          image: flexibleSkateImg,
          description: 'MOVO is a leading brand in SKATE conveyors. We manufacture and supply all types of skate conveyors with GI, Plastic, and SS skates. These light-duty rigid-frame skate wheel conveyors are made from aluminum and are lighter than rigid-frame skate wheel conveyors made from steel. Well suited for job sites where conveyors will be disassembled and reconfigured often.',
          specs: [
            'Capacity: 50 kg/meter',
            'Type: Skate Wheel',
            'Available in GI, Plastic, and SS skates',
            'Straight and curved sections available',
            'Aluminum and steel frame options',
            'Easy disassembly and reconfiguration'
          ],
          technicalData: {
            'Capacity': '50 kg/meter',
            'Type': 'Skate Wheel',
            'Material': 'Cast Iron',
            'Roller Material': 'Steel',
            'Automation Grade': 'Semi-automatic',
            'Application': 'Industrial'
          },
          features: 'Perfect for assembly lines, shipping departments, and stocking areas with firm, flat-bottom loads'
        },
        {
          id: 11,
          name: 'Flexible Roller Conveyor',
          image: flexibleRollerImg,
          description: 'Flexible Gravity Roller Conveyors are versatile, adaptable, and cost-effective material handling solutions. Gravity-powered with no electricity required, these conveyors offer flexible design for curved or straight configurations with adjustable legs for varying heights.',
          specs: [
            'Flexible design for curved or straight configurations',
            'Gravity-powered, no electricity required',
            'Roller diameter: 1.5"-4" (38-102 mm)',
            'Frame: steel, aluminium, or stainless steel',
            'Adjustable legs for varying heights',
            'Easy installation and relocation'
          ],
          technicalData: {
            'Length': 'up to 100 ft (30.5 m)',
            'Width': '12"-48" (305-1219 mm)',
            'Height': '24"-48" (610-1219 mm)',
            'Capacity': '50-80 kg per meter',
            'Speed': 'Variable, dependent on gravity and load',
            'Maintenance': 'Low maintenance and operating costs'
          },
          features: 'Ideal for warehousing, manufacturing, packaging, food processing, and logistics with quiet, space-saving operation'
        },
      ]
    },
    'modular-conveyors': {
      title: 'Modular Conveyor Systems',
      description: 'Plastic modular belting systems for washdown and food processing',
      products: [
        {
          id: 12,
          name: 'Flat Modular Belt Conveyor',
          image: flatmodluar,
          description: 'Plastic modular belting system with interlocking units for washdown environments.',
          specs: ['Interlocking plastic modules', 'Easy replacement of damaged modules', 'Good drainage and cleanability', 'Positive drive options', 'FDA compliant materials available'],
          features: 'Industry standard for food and beverage processing'
        },
        {
          id: 25,
          name: 'Inclined Modular Belt Conveyor',
          image: inclinedbelt,
          description: 'Modular conveyor systems designed with inclination for elevation changes, utilizing interlocking plastic modules with positive drive capabilities. The inclined design incorporates cleats or friction-enhanced surfaces to prevent product slippage while maintaining the easy maintenance benefits of modular construction.',
          specs: ['Interlocking modular design with cleats', 'Anti-slip surface enhancement', 'Steep incline capability up to 45°', 'Easy module replacement', 'Washdown compatible', 'FDA approved materials', 'Adjustable angle configurations'],
          features: 'Perfect for multi-level food processing and packaging facilities'
        },
        {
          id: 26,
          name: 'Curve Modular Belt Conveyor',
          image: modularBeltImg ,
          description: 'Curved modular conveyor system with interlocking plastic belt modules designed for smooth directional changes in production lines. The curved sections maintain consistent height and use specialized interlocking modules to handle turning while preserving product integrity and orientation.',
          specs: ['Modular plastic belt construction', 'Curved path design with adjustable radius', 'Maintains product orientation during curves', 'Low friction turning capability', 'Easy module maintenance and replacement', 'Washdown resistant', 'FDA compliant options available', 'Space-efficient routing'],
          features: 'Ideal for optimizing production floor layout and routing'
        },
      ]
    },
    'slat-chain-conveyors': {
      title: 'Slat Chain Conveyor Systems',
      description: 'Heavy-duty slat and chain-driven conveyor solutions for demanding applications',
      products: [
        {
          id: 27,
          name: 'Slat Chain Conveyor',
          image: slatChainImg,
          images: [slatChainImg, slatChain2Img, slatChain3Img],
          description: 'Heavy-duty slat conveyor using chain-driven metal slats for handling heavy, sharp, or hot materials. These robust systems feature individual slats mounted on chains, providing positive product support and excellent load capacity for harsh industrial environments including foundries, ceramics, and food processing.',
          specs: ['Robust metal slat design', 'Chain-driven positive grip', 'High-temperature capable up to 250°C', 'Modular slat replacement', 'Stainless steel options available', 'Handles heavy and sharp materials', 'Low maintenance construction', 'Customizable slat spacing'],
          features: 'Ideal for foundries, ceramics manufacturing, and high-temperature food processing'
        },
        {
          id: 28,
          name: 'Plastic Slat Chain Conveyor',
          image: plasticSlatChainImg,
          images: [plasticSlatChainImg, plasticSlatChain1Img],
          description: 'Modern plastic slat conveyor system using chain drive technology for hygienic and food-safe material handling. Features durable engineering polymer slats mounted on durable chains, offering excellent chemical resistance and easy cleaning for sanitization-sensitive environments. Perfect for food processing, beverage production, and pharmaceutical applications.',
          specs: ['Food-grade plastic slats', 'Chain-driven construction', 'Easy cleaning and sanitization', 'Chemical resistant materials', 'Lower noise operation', 'Lightweight design', 'FDA compliant slats available', 'Temperature range: -5°C to +80°C', 'Modular slat replacement'],
          features: 'Essential for hygienic food processing and pharmaceutical applications'
        },
      ]
    },
    'other-systems': {
      title: 'Other Conveyor Systems',
      description: 'Other solutions including telescopic, chain, and overhead systems',
      products: [
        {
          id: 13,
          name: 'Telescopic Conveyor Systems',
          image: telescopicImg,
          images: [telescopicImg, telescopic2Img],
          description: 'Our Telescopic Conveyor Systems are engineered to streamline truck loading and unloading operations with maximum efficiency and safety. Designed for warehouses, logistics hubs, e-commerce fulfillment centers, and industrial facilities, these conveyors extend deep inside the vehicle to reduce manual labor and loading time.',
          specs: [
            'Extendable multi-stage telescopic design',
            'Suitable for loading & unloading trucks, containers, and trailers',
            'Hydraulic/electric elevation for height adjustment',
            'High-speed, smooth, and controlled conveying',
            'Flexible length adjustment for various vehicle sizes',
            'Rugged construction for long service life'
          ],
          features: 'Reduces manpower and loading time with optional add-ons: lighting, operator platforms, castor wheels, sensors, and automation integration'
        },
        {
          id: 14,
          name: 'Truck Loading & Unloading Conveyor',
          image: truckLoadingImg,
          images: [truckLoadingImg, truckLoading2Img, truckLoading3Img],
          description: 'Improve your logistics operations with our advanced Truck Loading & Unloading Conveyor Systems. Designed for continuous, hassle-free movement of goods, these conveyors offer telescopic reach, hydraulic height control, and flexible roller/belt options.',
          specs: [
            'Telescopic reach design',
            'Hydraulic height control',
            'Flexible roller/belt options',
            'High throughput capacity',
            'Reduced manual labor requirements',
            'Smooth and continuous operation'
          ],
          features: 'Ideal for warehouses, MSMEs, e-commerce hubs, and manufacturing plants - speed up operations, reduce costs, and ensure smooth loading/unloading every single time'
        },
        {
          id: 15,
          name: 'Spiral Conveyor',
          image: spiralImg,
          images: [spiralImg, spiral2Img],
          description: 'Space-saving vertical transport using a spiral path for gentle elevation changes.',
          specs: ['Compact vertical footprint', 'Continuous smooth flow', 'Gentle product handling', 'Various belt materials', 'Multi-turn options available'],
          features: 'Ideal for cooling, coating, or elevation in tight spaces'
        },
        {
          id: 16,
          name: 'Vertical Chain Conveyor',
          image: verticalChainImg,
          description: 'Chain-based vertical conveying solutions for lifting heavy loads between elevations.',
          specs: ['High load capacity up to 500kg', 'Compact footprint', 'Positive product support', 'Suitable for pallets and crates', 'Smooth vertical movement'],
          features: 'Perfect for multi-level warehouses and factories'
        },
        {
          id: 17,
          name: 'Slat Chain Conveyor',
          image: slatChainImg,
          description: 'Slat conveyors using chain-driven slats for heavy or hot applications.',
          specs: ['Robust slat design', 'Good for heavy, sharp, or hot items', 'High-temperature options up to 250°C', 'Modular slat replacement', 'Stainless steel available'],
          features: 'Used in foundries, ceramics, and food processing'
        },
        {
          id: 18,
          name: 'Hinge Conveyor',
          image: hingeImg,
          images: [hingeImg, hinge2Img],
          description: 'Hinge belt conveyors for incline/decline applications with positive product support.',
          specs: ['Hinged metal or plastic links', 'Good for heavy and hot products', 'Positive grip on inclines', 'Durable construction', 'Low maintenance'],
          features: 'Excellent for steep incline transport'
        },
        {
          id: 19,
          name: 'Chain Conveyor',
          image: chainImg,
          images: [chainImg, chain2Img],
          description: 'Standard chain conveyors for industrial heavy-duty applications.',
          specs: ['Heavy-duty chain links', 'Customizable pitch', 'Multiple attachment options', 'High reliability', 'Easy maintenance'],
          features: 'Workhorse of heavy industry'
        },
        {
          id: 20,
          name: 'Wire Mesh Conveyor',
          image: wireMeshImg,
          images: [wireMeshImg, wireMesh2Img],
          description: 'Wire mesh belt conveyors for oven, washing and cooling applications.',
          specs: ['Open mesh for heat/air flow', 'High-temperature resistant up to 400°C', 'Stainless steel options', 'Food-safe configurations', 'Easy cleaning'],
          features: 'Essential for baking, heat treatment, and washing operations'
        },
        {
          id: 21,
          name: '2W / 3W Assembly Conveyor',
          image: assemblyImg,
          description: 'Multi-width assembly line conveyors for synchronized production.',
          specs: ['Dual or triple width configuration', 'Independent speed control', 'Synchronized movement', 'Easy product transfer', 'Modular design'],
          features: 'Optimizes assembly line flow'
        },
        {
          id: 22,
          name: 'Four Wheel Overhead Conveyor',
          image: fourWheelImg,
          description: 'Overhead trolley system with four-wheel hangers for lightweight parts transport.',
          specs: ['Trolleys with four-wheel support', 'Smooth overhead routing', 'Ideal for assembly lines', 'Reduced floor usage', 'Programmable movement'],
          features: 'Perfect for automotive and electronics assembly'
        },
        {
          id: 23,
          name: 'I-Beam Overhead Conveyor',
          image: iBeamImg,
          description: 'Single-beam overhead conveyor for streamlined part movement in assembly and finishing.',
          specs: ['Single I-beam track', 'Compact suspension', 'Suitable for paint and assembly lines', 'Easy integration with fixtures', 'Smooth trolley movement'],
          features: 'Space-efficient overhead solution'
        },
        {
          id: 24,
          name: 'Diverting & Sorting Conveyor',
          image: divertingImg,
          description: 'Conveyors with diverting and sorting mechanisms for automated flow control.',
          specs: ['Pushers and deflectors', 'Sensor integration', 'PLC control ready', 'High-speed sorting', 'Configurable lanes'],
          features: 'Automated routing and distribution'
        },
      ]
    }
  };

  // System Integration & Automation Products
  const automationProducts = [
    {
      id: 101,
      name: 'Electric Controller Panel',
      image: electricControlImg,
      description: 'Advanced electrical control panels for complete conveyor system automation and management.',
      specs: [
        'PLC-based intelligent control',
        'Touch screen HMI interface',
        'Real-time monitoring and diagnostics',
        'Energy-efficient motor control',
        'Integrated safety features',
        'Ethernet connectivity for Industry 4.0'
      ],
      features: 'Seamless integration with existing manufacturing systems'
    },
    {
      id: 102,
      name: 'Customized Control Screens',
      image: customizedControlImg,
      description: 'Tailored HMI screens designed for specific production requirements and operator needs.',
      specs: [
        '7" to 21" touch screen options',
        'Custom interface design',
        'Real-time data visualization',
        'Historical data logging',
        'Alarm management system',
        'Multi-language support'
      ],
      features: 'Improves operator efficiency and red uces training time'
    },
    {
      id: 103,
      name: 'SCADA System Solutions',
      image: scadaSystemImg,
      description: 'Expert SCADA implementation for comprehensive supervisory control and data acquisition.',
      specs: [
        'Complete system integration',
        'Remote monitoring capabilities',
        'Predictive maintenance alerts',
        'Production analytics and reporting',
        'Cloud connectivity options',
        '24/7 system support'
      ],
      features: 'Maximize production efficiency and minimize downtime'
    }
  ];

  // Belting Solutions Products
  const beltingSolutions = {
    'pu-belts': {
      title: 'PVC/PU Conveyor Belts',
      description: 'Premium polyurethane and polyethylene conveyor belts with technical specifications',
      products: [
        {
          id: 201,
          name: 'PVC / PU Conveyor Belt',
          image: pucBeltImg,
          images: [pucBeltImg, conveyorBeltChart1Img, conveyorBeltChart2Img],
          description: 'Combined PVC and PU conveyor belts offering a range of options from economical PVC-coated fabric belts to high-performance PU belts for hygiene-sensitive and precision applications.',
          specs: [
            'Smooth running surface',
            'Good grip properties',
            'Long service life',
            'Multiple color options',
            'Oil and grease resistant',
            'High flexibility',
            'Excellent wear resistance',
            'Easy to clean',
            'FDA and EU compliant',
            'Temperature range: -30°C to +80°C'
          ],
          technicalData: {
            'PVC - Belt Thickness': '1.5mm - 5mm',
            'PVC - Width Range': '50mm - 3000mm',
            'PVC - Tensile Strength': '50-100 N/mm',
            'PVC - Elongation': '3-5%',
            'PVC - Surface': 'Smooth or Textured',
            'PU - Belt Thickness': '1.5mm - 4mm',
            'PU - Width Range': '300mm - 2400mm',
            'PU - Tensile Strength': '80-150 N/mm',
            'PU - Elongation': '5-8%',
            'PU - Hardness': '85-95 Shore A'
          },
          features: 'Flexible selection for food, pharmaceutical, and light manufacturing with options for cleanability and durability'
        },
        // {
        //   id: 203,
        //   name: 'PE Conveyor Belt',
        //   image: peBeltImg,
        //   images: [conveyorBeltChartImg, conveyorBeltChart2Img],
        //   description: 'Polyethylene belts - economical choice with good performance.',
        //   specs: [
        //     'Cost-effective solution',
        //     'Good chemical resistance',
        //     'Low friction coefficient',
        //     'Lightweight',
        //     'Easy installation',
        //     'Temperature range: -5°C to +65°C'
        //   ],
        //   technicalData: {
        //     'Belt Thickness': '1mm - 3mm',
        //     'Width Range': '300mm - 1800mm',
        //     'Tensile Strength': '40-80 N/mm',
        //     'Elongation': '8-12%',
        //     'Surface': 'Smooth or Corrugated'
        //   },
        //   features: 'Budget-friendly option for general applications'
        // }
      ]
    },
    'plastic-modular': {
      title: 'Plastic Modular Belts',
      description: 'Interlocking modular belt systems for washdown and food processing',
      products: [
        {
          id: 204,
          name: 'MB-OPB (Open Area Modular Belt)',
          image: mbObpImg,
          images: [mbObpImg, mbObp1Img, mbObp2Img, mbObp3Img, mbObp4Img],
          description: 'Premium plastic modular belt featuring flat top and open area configurations with raised rib design. Engineered for high-impact environments and heavy-wear applications, this belt combines durability with easy maintenance. The open area design allows for superior drainage and airflow, making it ideal for wet processing environments.',
          specs: [
            'Flat top, open area, and raised rib configurations',
            'Designed to withstand high impact and wear',
            'Finger plates available for enhanced grip',
            'Easy module replacement',
            'Superior drainage capability',
            'FDA approved materials',
            'Washdown compatible'
          ],
          features: 'Ideal for fruits/vegetable processing, washing lines, pasteurizers, and cooling lines'
        },
        {
          id: 205,
          name: 'MB-MPB (Heavy Load Modular Belt)',
          image: mbMpbImg,
          images: [mbMpbImg, mbMpb1Img],
          description: 'Robust plastic modular belt designed specifically for heavy-load meat and poultry processing applications. Features thick bottom support and optimized sprocket engagement configuration to handle demanding conveying tasks without breakage or slippage.',
          specs: [
            'Easy to clean - reduces water consumption',
            'Sprocket engagement configured for high loads',
            'Thick bottom support for increased load capacity',
            'Extended service life',
            'Designed for wet processing environments',
            'Modular replacement system',
            'Enhanced load-bearing capability'
          ],
          features: 'Perfect for meat deboning/cutting lines, poultry processing, dairy applications, and carton handling'
        },
        {
          id: 206,
          name: 'MB-SMPB (Sanitary Modular Belt)',
          image: mbSmpbImg,
          images: [mbSmpbImg, mbSmpb1Img],
          description: 'Advanced sanitary plastic modular belt with special lock pin arrangement for simplified maintenance and minimized bacterial growth. Engineered for tight transfer applications in food-sensitive processing environments.',
          specs: [
            'Special lock pin arrangement for quick maintenance',
            'Minimized bacterial growth design',
            'Suits tight transfer applications',
            'Food-grade materials',
            'Easy to disassemble and reassemble',
            'Enhanced hygiene standards',
            'Low maintenance construction'
          ],
          features: 'Essential for meat/seafood processing, fruit/vegetable handling, and biscuit/confectionery production'
        },
        {
          id: 207,
          name: 'MB-2533 (Safety Grid Modular Belt)',
          image: mb2533Img,
          images: [mb2533Img, mb25331Img],
          description: 'Premium safety-focused plastic modular belt featuring flush grid configuration with rounded edges throughout the belt surface. Incorporates special sprocket design to prevent slippage and enhance load carrying capacity for various food processing applications.',
          specs: [
            'Flat top and flush grid configuration',
            'Rounded edges across belt for operator safety',
            'Special sprocket design prevents belt slip',
            'Enhanced load carrying capacity',
            'High-speed capable',
            'Modular replacement system',
            'Safe operation design'
          ],
          features: 'Ideal for bakery operations, meat/poultry processing, and can handling systems'
        },
        {
          id: 208,
          name: 'MB-S25 (Cooling & Drainage Belt)',
          image: mbS25Img,
          images: [mbS25Img, mbS251Img],
          description: 'Specialized open area plastic modular belt designed for enhanced cooling and drainage in direct food contact applications. Perfect for processes requiring rapid cooling or water removal with continuous product flow.',
          specs: [
            'Open area design for enhanced cooling and draining',
            'Suited for direct food contact lines',
            'Excellent moisture removal capability',
            'High-speed operation compatible',
            'FDA food-safe materials',
            'Modular construction',
            'Low maintenance design'
          ],
          features: 'Perfect for fruit/vegetable processing, meat/seafood handling, and deep freeze applications'
        },
        {
          id: 209,
          name: 'MB-S500 (Heavy-Duty Drainage Belt)',
          image: mbS500Img,
          description: 'Heavy-duty open area plastic modular belt engineered for applications requiring maximum drainage and air circulation. Supports both horizontal and inclined conveying with superior product handling characteristics.',
          specs: [
            'Open area design for enhanced cooling and draining',
            'Suited for direct food contact lines',
            'Incline-capable design',
            'Maximum drainage efficiency',
            'FDA compliant materials',
            'Heavy-duty construction',
            'Vertical/inclined application support'
          ],
          features: 'Excellent for fruit/vegetable processing, seafood handling, and inclined product handling'
        },
        {
          id: 210,
          name: 'MB-900 (Precision Transfer Belt)',
          image: mb900Img,
          images: [mb900Img, mb9001Img],
          description: 'High-precision plastic modular belt with reduced gap design between links to prevent product slipping and ensure tight transfers. Features compatibility with nose bar configurations and exceptional wear resistance for demanding industrial environments.',
          specs: [
            'Reduced gap between links - prevents product slip',
            'Compatible for nose bar tight transfer',
            'High wear resistance construction',
            'Precision sprocket engagement',
            'Consistent spacing design',
            'Modular replacement capability',
            'Extended service intervals'
          ],
          features: 'Ideal for glass bottle case packing, bearing conveying, check weigher lines, metal detectors, and seafood handling'
        },
        {
          id: 211,
          name: 'MB-940 (Turning/Curve Belt)',
          image: mb940Img,
          description: 'Specialized plastic modular turning belt designed for curved conveyor sections with smooth direction changes. Maintains product integrity while executing tight radius turns in multi-directional production lines.',
          specs: [
            'Designed for curved conveyor sections',
            'Smooth turning capability',
            'Maintains product orientation during curves',
            'Flexible construction',
            'Low friction turning',
            'Modular turning sections',
            'Compatible with standard modular systems'
          ],
          features: 'Perfect for production lines requiring multi-directional routing and space-efficient layout optimization'
        },
        {
          id: 212,
          name: 'MB-1000 (Versatile Food Processing Belt)',
          image: mb1000Img,
          images: [mb1000Img, mb10001Img],
          description: 'Versatile open area plastic modular belt offering enhanced cooling and drainage for diverse food processing and packaging applications. Delivers reliable performance across various industries requiring continuous, hygienic material handling.',
          specs: [
            'Open area design for enhanced cooling and draining',
            'Suited for direct food contact lines',
            'Versatile application design',
            'FDA food-safe materials',
            'High-speed compatible',
            'Easy module replacement',
            'Superior drainage efficiency'
          ],
          features: 'Suitable for fruit/vegetable processing, meat/seafood handling, bottle/carton conveyance, and shrink wrapping'
        },
        {
          id: 213,
          name: 'MB-2120 (Lightweight Precision Belt)',
          image: mb21201Img,
          images: [mb21201Img, mb21202Img],
          description: 'Lightweight plastic modular belt featuring reduced gap link design for precise product control without slipping. Engineered for nose bar tight transfer applications and exceptional wear resistance in high-speed light-load environments.',
          specs: [
            'Reduced gap between links - prevents product slip',
            'Compatible for nose bar tight transfer',
            'High wear resistance',
            'Lightweight construction',
            'Precision load control',
            'Extended durability',
            'High-speed operation capable'
          ],
          features: 'Ideal for glass bottle case packing, shrink wrapping operations, and lightweight product handling'
        }
      ]
    },
    'compound-balanced-weave': {
      title: 'Compound Balanced Weav',
      description: 'Premium balanced weave belts with various specifications for different applications',
      products: [
        {
          id: 214,
          name: 'LK-6 (Stripper Belt)',
          image: lk6BeltImg,
          description: 'Heavy-duty 6mm compound balanced weave for extreme conditions.',
          specs: [
            'High tensile strength',
            'Excellent balance',
            'Uniform surface',
            'Extended durability',
            'Professional grade',
            'Custom finishes'
          ],
          features: 'For demanding industrial applications'
        },
        {
          id: 215,
          name: 'LK-3 (Type Belt)',
          image: lk3BeltImg,
          description: 'Standard 3mm compound balanced weave for general use.',
          specs: [
            'Medium tensile strength',
            'Good balance characteristics',
            'Cost-effective',
            'Wide application range',
            'Reliable performance',
            'Easy maintenance'
          ],
          features: 'Versatile choice for various industries'
        },
        {
          id: 216,
          name: 'LK-4 (Type Belt)',
          image: lk4BeltImg,
          description: 'Premium 4mm compound balanced weave for balanced performance.',
          specs: [
            'Balanced tensile strength',
            'Excellent durability',
            'Optimal wear resistance',
            'Professional grade',
            'Smooth operation',
            'Extended lifespan'
          ],
          features: 'Best all-around choice for most applications'
        },
        {
          id: 218,
          name: 'Chain Link Belt',
          image: chainLinkImg,
          description: 'Chain link design for heavy-duty industrial transport.',
          specs: [
            'Heavy-duty construction',
            'Multiple chain options',
            'High load capacity',
            'Flexible routing',
            'Low maintenance',
            'Long service intervals'
          ],
          features: 'Workhorse for heavy industry'
        },
        {
          id: 219,
          name: 'Duplex Conveyor Belt',
          image: duplexImg,
          description: 'Duplex construction with dual-layer design for superior performance.',
          specs: [
            'Dual-layer construction',
            'Maximum durability',
            'Enhanced grip',
            'Extended lifespan',
            'Professional grade',
            'Multiple material options'
          ],
          features: 'Premium solution for demanding environments'
        },
      ]
    },
    'specialty-belts': {
      title: 'Other Belts',
      description: 'Complete range of specialized belting solutions for unique applications',
      products: [
        {
          id: 206,
          name: 'Timing Belt',
          image: timingBeltImg,
          description: 'Precision timing belts for synchronized drive applications.',
          specs: [
            'Precise synchronization',
            'Low stretch operation',
            'Various pitch options',
            'High efficiency transfer',
            'Quiet operation',
            'Long service life'
          ],
          features: 'Essential for precision mechanical systems'
        },
        {
          id: 207,
          name: 'Coil Wrapper Belt',
          image: coilWrapperImg,
          description: 'Specialized belts for coil wrapping and positioning applications.',
          specs: [
            'High wear resistance',
            'Consistent tension',
            'Thermal stability',
            'Quiet operation',
            'Custom profiles',
            'Long service intervals'
          ],
          features: 'Used in metal and textile industries'
        },
        {
          id: 208,
          name: 'Textile Printing Belt',
          image: textilePrintingImg,
          description: 'Specialized belts for textile printing and dyeing applications.',
          specs: [
            'Resistant to dyes and chemicals',
            'High temperature tolerance',
            'Smooth surface finish',
            'Long service life',
            'Easy cleaning',
            'Custom sizing available'
          ],
          features: 'Industry standard for textile processing'
        },
        {
          id: 209,
          name: 'Battery Grid Pasting Belt',
          image: gridPlasticImg,
          description: 'Open grid design for drainage and ventilation.',
          specs: [
            'Open drainage structure',
            'Good airflow',
            'Washdown resistant',
            'Lightweight',
            'Easy to clean',
            'FDA compliant'
          ],
          features: 'Perfect for washing and drying operations'
        },
        // {
        //   id: 210,
        //   name: 'Caterpillar Belt',
        //   image: caterpillarImg,
        //   description: 'Heavy-duty caterpillar-style conveyor belt for demanding applications.',
        //   specs: [
        //     'Extreme load capacity',
        //     'High tensile strength',
        //     'Shock absorption',
        //     'Extended lifespan',
        //     'Low maintenance',
        //     'Rugged construction'
        //   ],
        //   features: 'For mining, construction, and heavy industries'
        // },
        {
          id: 211,
          name: 'High Temperature Felt Belt',
          image: highTempFeltImg,
          description: 'Premium felt belts for high-temperature processing.',
          specs: [
            'Temperature up to 500°C',
            'Excellent insulation',
            'Flame resistant',
            'Thermal stability',
            'Long service life',
            'Multiple thickness options'
          ],
          features: 'Essential for heat treatment and baking industries'
        },
        // {
        //   id: 212,
        //   name: 'Wire Mesh Belt',
        //   image: wireMeshImg,
        //   description: 'Open mesh construction for maximum drainage and ventilation.',
        //   specs: [
        //     'Temperature up to 400°C',
        //     'Excellent drainage',
        //     'Washdown compatible',
        //     'Food safe',
        //     'Easy cleaning',
        //     'Stainless steel available'
        //   ],
        //   features: 'Standard for ovens, washers, and cooling lines'
        // },
        // {
        //   id: 213,
        //   name: 'Biscuit Oven Wire Band',
        //   image: biscuitOvenImg,
        //   description: 'Specialized wire band for biscuit and cookie ovens.',
        //   specs: [
        //     'Temperature resistant to 350°C',
        //     'Perfect for even baking',
        //     'Easy product transfer',
        //     'Minimal product sticking',
        //     'Long service intervals',
        //     'Food grade materials'
        //   ],
        //   features: 'Industry standard for bakery operations'
        // },
        {
          id: 217,
          name: 'Double Lock Conveyor Belt',
          image: doubleLockImg,
          description: 'Premium double-lock design for maximum safety and performance.',
          specs: [
            'Double-stitched design',
            'Extreme durability',
            'Safety certified',
            'High load capacity',
            'Long service life',
            'Professional construction'
          ],
          features: 'Top-tier option for critical applications'
        },
        
      ]
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Product Categories</h1>
          <p className="text-xl text-blue-100">
            Complete solutions for material handling, automation, and belting needs
          </p>
        </div>
      </section>

      {/* Horizontal Category Tabs */}
      <div className="bg-gradient-to-r from-gray-50 to-white shadow-xl sticky top-20 z-40 border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 py-0">
            <button
              onClick={() => {
                setExpandedCategory('material-handling');
                setExpandedSubcategory(null);
              }}
              className={`px-8 py-4 font-bold text-lg transition-all duration-300 border-b-4 ${
                expandedCategory === 'material-handling'
                  ? 'text-white border-blue-700 bg-blue-700 shadow-md rounded-t-lg'
                  : 'text-gray-600 border-transparent hover:text-blue-600 hover:bg-blue-100'
              }`}
            >
              Material Handling Systems
            </button>
            <button
              onClick={() => {
                setExpandedCategory('automation');
                setExpandedSubcategory(null);
              }}
              className={`px-8 py-4 font-bold text-lg transition-all duration-300 border-b-4 ${
                expandedCategory === 'automation'
                  ? 'text-white border-blue-700 bg-blue-700 shadow-md rounded-t-lg'
                  : 'text-gray-600 border-transparent hover:text-blue-600 hover:bg-blue-100'
              }`}
            >
              System Integration & Automation
            </button>
            <button
              onClick={() => {
                setExpandedCategory('belting');
                setExpandedSubcategory(null);
              }}
              className={`px-8 py-4 font-bold text-lg transition-all duration-300 border-b-4 ${
                expandedCategory === 'belting'
                  ? 'text-white border-blue-700 bg-blue-700 shadow-md rounded-t-lg'
                  : 'text-gray-600 border-transparent hover:text-blue-600 hover:bg-blue-100'
              }`}
            >
              Complete Belting Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 bg-gray-50">
          {/* Material Handling Systems Section */}
          {expandedCategory === 'material-handling' && (
            <section className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">Material Handling Systems</h2>
                <p className="text-lg text-gray-600 mb-12">At Movobelting Industries, we manufacture every type of conveyor
                   using advanced engineering designs and complete in-house equipment 
                  ensuring superior quality, faster delivery, and reliable performance</p>

            {/* Material Handling Subcategories */}
            <div className="space-y-16">
              {Object.entries(materialHandlingProducts).map(([ key, category ]) => (
                <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Subcategory Header */}
                  <div
                    className="bg-blue-100 border-l-4 border-blue-600 p-6 cursor-pointer hover:bg-blue-200 transition-colors"
                    onClick={() => setExpandedSubcategory(expandedSubcategory === key ? null : key)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">{category.title}</h3>
                        <p className="text-gray-700">{category.description}</p>
                      </div>
                      <ChevronDown
                        className={`text-blue-600 transition-transform ${
                          expandedSubcategory === key ? 'transform rotate-180' : ''
                        }`}
                        size={28}
                      />
                    </div>
                  </div>

                  {/* Subcategory Products Grid */}
                  {expandedSubcategory === key && (
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.products.map((product) => (
                          <div
                            key={product.id}
                            className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                          >
                            {/* Product Image */}
                            <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                              <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg md:text-xl z-10">
                                {product.name}
                              </h3>
                            </div>

                            {/* Product Content */}
                            <div className="p-6">
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                              {/* Features Badge */}
                              <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                                <p className="text-xs font-semibold text-green-800">{product.features}</p>
                              </div>

                              {/* Specifications */}
                              <div className="space-y-2">
                                <h4 className="font-bold text-gray-900 text-sm">Key Features:</h4>
                                <ul className="space-y-2">
                                  {product.specs.slice(0, 3).map((spec, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                                      <span className="text-blue-600 font-bold mt-1">✓</span>
                                      <span>{spec}</span>
                                    </li>
                                  ))}
                                  {product.specs.length > 3 && (
                                    <li className="text-xs text-blue-600 font-semibold">+{product.specs.length - 3} more</li>
                                  )}
                                </ul>
                              </div>

                              {/* Learn More Button */}
                              <button 
                                onClick={() => handleProductClick(product)}
                                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-300">
                                View Details
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
            </section>
          )}

          {/* System Integration & Automation Section */}
          {expandedCategory === 'automation' && (
            <section className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">System Integration & Automation Solutions</h2>
                <p className="text-lg text-gray-600 mb-12">Movobelting Industries proudly works under the technical expertise and industry experience of our parent company,
                   SS Automation. Their continued support strengthens our ability to deliver high-performance advanced automation solutions</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative h-56 w-full bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden flex items-center justify-center">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center text-white">
                        <div className="text-6xl mb-2">⚙️</div>
                        <p className="font-semibold">{product.name}</p>
                      </div>
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 text-sm">Capabilities:</h4>
                      <ul className="space-y-2">
                        {product.specs.slice(0, 4).map((spec, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                            <span className="text-blue-600 font-bold">→</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200 text-xs text-blue-800 font-semibold">
                      {product.features}
                    </p>

                    <button 
                      onClick={() => handleProductClick(product)}
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-blue-600">
                <h4 className="text-xl font-bold text-gray-900 mb-3">🎯 Real-time Monitoring</h4>
                <p className="text-gray-600">Track your production metrics and system performance in real-time with our advanced dashboards.</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-green-600">
                <h4 className="text-xl font-bold text-gray-900 mb-3">📊 Data Analytics</h4>
                <p className="text-gray-600">Gain actionable insights with comprehensive historical data logging and production analytics.</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-purple-600">
                <h4 className="text-xl font-bold text-gray-900 mb-3">🔧 Predictive Maintenance</h4>
                <p className="text-gray-600">Reduce downtime with intelligent alerts and predictive maintenance recommendations.</p>
              </div>
            </div>
          </div>
            </section>
          )}

          {/* Complete Belting Solutions Section */}
          {expandedCategory === 'belting' && (
            <section className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">Complete Belting Solutions</h2>
                <p className="text-lg text-gray-600 mb-12">Comprehensive range of specialized conveyor belts for every application and
                   For specific requirements, we collaborate with our trusted vendors and trade conveyor belts on a B2B basis,
                    ensuring high-quality products and dependable supply.</p>

            <div className="space-y-16">
              {Object.entries(beltingSolutions).map(([key, category]) => (
                <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Subcategory Header */}
                  <div
                    className="bg-purple-100 border-l-4 border-purple-600 p-6 cursor-pointer hover:bg-purple-200 transition-colors"
                    onClick={() => setExpandedSubcategory(expandedSubcategory === key ? null : key)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-purple-900 mb-2">{category.title}</h3>
                        <p className="text-gray-700">{category.description}</p>
                      </div>
                      <ChevronDown
                        className={`text-purple-600 transition-transform ${
                          expandedSubcategory === key ? 'transform rotate-180' : ''
                        }`}
                        size={28}
                      />
                    </div>
                  </div>

                  {/* Subcategory Products */}
                  {expandedSubcategory === key && (
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.products.map((product) => (
                          <div
                            key={product.id}
                            className="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                          >
                            {/* Product Image */}
                            <div className="relative h-56 w-full bg-gradient-to-br from-purple-200 to-purple-400 overflow-hidden flex items-center justify-center">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                              {!product.image && (
                                <div className="text-center text-white">
                                  <div className="text-6xl mb-2">📦</div>
                                </div>
                              )}
                            </div>

                            {/* Product Content */}
                            <div className="p-6">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                              {/* Specifications */}
                              <div className="mb-4">
                                <h4 className="font-bold text-gray-900 text-sm mb-2">Features:</h4>
                                <ul className="space-y-1">
                                  {product.specs.slice(0, 3).map((spec, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                                      <span className="text-purple-600">•</span>
                                      <span>{spec}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Technical Data if available */}
                              {product.technicalData && (
                                <div className="mb-4 p-3 bg-gray-100 rounded-lg border border-gray-300">
                                  <h4 className="font-bold text-gray-900 text-xs mb-2">Technical Data:</h4>
                                  <div className="space-y-1 text-xs text-gray-700">
                                    {Object.entries(product.technicalData).slice(0, 3).map(([key, value]) => (
                                      <div key={key} className="flex justify-between">
                                        <span className="font-semibold">{key}:</span>
                                        <span>{value}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {/* Features Badge */}
                              <div className="p-2 bg-purple-50 rounded-lg border border-purple-200 mb-4">
                                <p className="text-xs font-semibold text-purple-800">{product.features}</p>
                              </div>

                              <button 
                                onClick={() => handleProductClick(product)}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-300">
                                Specifications
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
            </section>
          )}
        </main>

      {/* Custom Solution Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of experts can customize solutions according to your specific industrial requirements
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            <span>Contact Our Experts</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">In-House Production</h3>
              <p className="text-gray-600">Complete control over quality and delivery timelines</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Industry certifications and rigorous testing standards</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Driven</h3>
              <p className="text-gray-600">Latest technology and continuous product development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
