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

// Industrial Rollers
import troughingIdler1Img from '../assets/Troughing-Idler1.jpg';
import troughingIdler2Img from '../assets/Troughing-Idler2.jpg';
import troughingIdler3Img from '../assets/Troughing-Idler3.jpg';
import carryingRoller1Img from '../assets/Carrying-Roller1.jpg';
import carryingRoller2Img from '../assets/Carrying-Roller2.jpg';
import impactRoller1Img from '../assets/impact-roller1.jpg';
import impactRoller2Img from '../assets/impact-roller2.jpg';
import selfAligningIdler1Img from '../assets/throughing-self-aligning-idler1.jpg';
import returnRoller1Img from '../assets/Return-Roller1.jpg';
import returnRoller2Img from '../assets/Return-Roller2.jpg';
import returnRollerBracket1Img from '../assets/return-roller-bracket1.jpg';
import returnRollerBracket2Img from '../assets/return-roller-bracket2.jpg';
import garlandIdler1Img from '../assets/garland-idler1.jpg';
import garlandIdler2Img from '../assets/garland-idler2.jpg';
import conveyorFrame1Img from '../assets/conveyor-frame1.jpg';
import conveyorFrame2Img from '../assets/conveyor-frame2.jpg';
import guideRoller1Img from '../assets/Guide-Roller1.jpg';
import guideRoller2Img from '../assets/Guide-Roller2.jpg';
import conveyorPulley1Img from '../assets/conveyor-pulley1.jpg';
import plasticRoller1Img from '../assets/plastic-conveyor-roller1.jpg';
import gravityRoller1Img from '../assets/gravity-roller1.jpg';

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
          description: 'Simple and reliable flat belt conveyors for horizontal transport of packages and goods at consistent speed. Engineered by Movo Belting Industries for smooth, efficient material movement in various industrial applications.',
          specs: [
            'Suitable for light to medium loads',
            'Low maintenance operation',
            'Custom widths and lengths available',
            'Smooth tracking and tensioning options',
            'Modular frame design',
            'Variable speed control',
            'Noise-free operation',
            'Extended service life',
            'Easy installation and replacement'
          ],
          overview: 'Horizontal belt conveyors are the most basic and widely used conveyor type, designed for simple transport of materials along a flat, level surface. These conveyors are ideal for manufacturing, packaging, and distribution centers where consistent, reliable material handling is essential.',
          advantages: [
            { title: 'Simple & Reliable Design', description: 'Proven technology ensures dependable operation in any industrial environment' },
            { title: 'Low Maintenance', description: 'Minimal moving parts reduce maintenance requirements and operational costs' },
            { title: 'Customizable Configuration', description: 'Available in various widths and lengths to match your facility needs' },
            { title: 'Cost Effective', description: 'Economical solution for standard horizontal material transport' },
            { title: 'Smooth Operation', description: 'Belt tracking and tensioning options ensure smooth, vibration-free movement' },
            { title: 'Quick Installation', description: 'Modular design allows for fast setup and easy relocation' }
          ],
          applications: [
            'Manufacturing and production lines',
            'Packaging and labeling systems',
            'Distribution and warehousing centers',
            'Postal and parcel sorting facilities',
            'Retail and e-commerce fulfillment',
            'Assembly line operations',
            'Quality inspection stations',
            'Box and carton handling'
          ],
          industries: ['Manufacturing', 'Packaging', 'Distribution', 'Logistics', 'Retail', 'E-Commerce', 'Food & Beverage'],
          construction: 'Manufactured with high-quality steel frame and adjustable rubber/PVC belt. Deep groove ball bearings ensure smooth rotation with minimal friction. Powder-coated frame provides corrosion resistance. Available in multiple widths from 300mm to 2000mm.',
          performance: [
            'Consistent speed from 0.1 to 1.5 m/s (customizable)',
            'Low energy consumption with efficient motor systems',
            'Minimal noise and vibration during operation',
            'Superior belt tracking with adjustable tension',
            'Handles continuous 24/7 operation seamlessly'
          ],
          benefits: [
            'Increases productivity through reliable material transport',
            'Reduces manual handling and associated labor costs',
            'Minimizes product damage with smooth conveying',
            'Improves workplace safety by reducing worker strain',
            'Adapts to various product sizes and weights',
            'Provides excellent return on investment through durability'
          ],
          features: 'Ideal for manufacturing, packaging, and distribution centers'
        },
        {
          id: 2,
          name: 'Inclined Belt Conveyor',
          image: inclinedBeltImg,
          images: [inclinedBeltImg, inclinedBelt2Img],
          description: 'Advanced belt conveyors designed with inclination for elevation changes in production lines. Engineered to handle goods at various angles while preventing slippage with anti-slip surfaces and positive drive systems.',
          specs: [
            'Available with cleats for positive conveying',
            'Steep incline options up to 45°',
            'Anti-slip surfaces and coating',
            'Customizable incline angles',
            'Energy-efficient drive systems',
            'Multiple cleat patterns available',
            'Variable speed control',
            'Durable construction for steep angles',
            'Suitable for fragile and delicate products'
          ],
          overview: 'Inclined conveyors are essential for multi-level production facilities where materials need to be transported upward. The cleats and anti-slip surfaces prevent material sliding, making these systems ideal for industries requiring vertical transport with product integrity maintenance.',
          advantages: [
            { title: 'Steep Incline Capability', description: 'Handles angles up to 45° enabling flexible facility layout' },
            { title: 'Positive Drive System', description: 'Cleats and friction ensure no slippage even with heavy loads' },
            { title: 'Energy Efficient', description: 'Optimized drive systems reduce power consumption' },
            { title: 'Multi-Level Handling', description: 'Enables vertical transportation in compact spaces' },
            { title: 'Product Safety', description: 'Gentle handling prevents damage to delicate items' },
            { title: 'Customizable Angles', description: 'Tailored solutions for specific elevation requirements' }
          ],
          applications: [
            'Multi-level production facilities',
            'Assembly line elevation changes',
            'Package sorting and routing',
            'Food processing elevation systems',
            'Warehouse vertical transport',
            'Manufacturing floor optimization',
            'Recycling and waste management',
            'Automotive assembly lines'
          ],
          industries: ['Manufacturing', 'Food & Beverage', 'Packaging', 'Automotive', 'Recycling', 'Logistics'],
          construction: 'High-grade steel frame with adjustable cleats and anti-slip rubber belt. Ball bearing rollers ensure smooth rotation on inclines. Reinforced support structure handles increased stress from elevation. Available with variable angle adjustment mechanisms.',
          performance: [
            'Maintains consistent speed on inclines without slippage',
            'Reduces product damage through smooth lifting action',
            'Energy-efficient design minimizes power consumption',
            'Durable construction withstands continuous operation',
            'Adapts to varying load weights seamlessly'
          ],
          benefits: [
            'Maximizes facility space utilization with vertical transport',
            'Eliminates manual lifting reducing worker fatigue',
            'Increases production efficiency through faster material movement',
            'Provides safe handling for valuable or fragile products',
            'Reduces production bottlenecks in multi-level facilities',
            'Long service life reduces replacement frequency'
          ],
          features: 'Perfect for multi-level production facilities'
        },
        {
          id: 3,
          name: 'Declined Belt Conveyor',
          image: declinedBeltImg,
          description: 'Downward sloping belt conveyors with advanced safety features for controlled descent of materials. Engineered with enhanced braking systems to prevent runaway loads and ensure safe material transport down inclines.',
          specs: [
            'Gravity-assisted operation with controlled descent',
            'Enhanced braking systems for safety',
            'Anti-slip belt options',
            'Variable decline angles',
            'Smooth product descent control',
            'Emergency stop mechanisms',
            'Load containment options',
            'Adjustable speed control',
            'Safety guardrails available'
          ],
          overview: 'Declined conveyors use gravity to assist material movement downward while providing precise control to prevent accidents. These systems are critical in warehouse operations, recycling facilities, and material sorting applications where controlled descent is essential.',
          advantages: [
            { title: 'Gravity Assist Operation', description: 'Energy-efficient design uses gravity to aid material transport' },
            { title: 'Enhanced Safety', description: 'Advanced braking prevents runaway loads and accidents' },
            { title: 'Controlled Speed', description: 'Adjustable descent speed matches operational requirements' },
            { title: 'Multiple Angle Options', description: 'Customizable decline angles for various applications' },
            { title: 'Emergency Protection', description: 'Built-in safety stops and backup systems' },
            { title: 'Wear Reduction', description: 'Smooth descent reduces material wear and damage' }
          ],
          applications: [
            'Warehouse and distribution centers',
            'Recycling and waste sorting facilities',
            'Mining material handling',
            'Bulk material discharge systems',
            'Sorting and classification lines',
            'Package delivery systems',
            'Multi-level warehouse operations',
            'Material recovery facilities'
          ],
          industries: ['Warehousing', 'Recycling', 'Mining', 'Waste Management', 'Logistics', 'Manufacturing'],
          construction: 'Heavy-duty steel frame with reinforced braking mechanism. Anti-slip rubber belt ensures safe material hold. Multiple safety backup systems and load containment design. Dual bearing system for stability on decline.',
          performance: [
            'Maintains controlled descent speed on steep angles',
            'Prevents accidental load runaway',
            'Reduces material damage through smooth descent',
            'Operates continuously with minimal wear',
            'Energy-efficient through gravity assistance'
          ],
          benefits: [
            'Improves workplace safety through controlled descent',
            'Reduces manual material handling hazards',
            'Minimizes product damage during descent',
            'Saves energy through gravity assistance',
            'Increases operational efficiency in multi-level facilities',
            'Provides reliable material flow control'
          ],
          features: 'Used in warehouse operations and material sorting'
        },
        {
          id: 4,
          name: 'Curve Belt Conveyor',
          image: curveBeltImg,
          description: 'Curved belt conveyors designed to smoothly change transport direction while maintaining product orientation and integrity. Engineered for space-saving layouts with low product re-orientation.',
          specs: [
            'Tight radius options for compact spaces',
            'Multiple belt materials available',
            'Low product re-orientation during turns',
            'Smooth transitions without product shifting',
            'Space-saving design optimization',
            'Variable curve angles available',
            'Adjustable belt tension',
            'Frictionless turning capability',
            'Customizable radii from 1m to 10m'
          ],
          overview: 'Curve conveyors enable direction changes in material flow while keeping products stable and properly oriented. These systems are ideal for production lines where space efficiency is critical and maintaining product alignment is essential.',
          advantages: [
            { title: 'Space Optimization', description: 'Curved design eliminates need for transfer points saving space' },
            { title: 'Product Stability', description: 'Smooth curves maintain product orientation and integrity' },
            { title: 'Flexible Design', description: 'Variable radius options suit different layout requirements' },
            { title: 'Seamless Transitions', description: 'Low-friction curves prevent product shifting' },
            { title: 'Reduced Transfer Points', description: 'Fewer transfers mean less damage and faster flow' },
            { title: 'Workflow Efficiency', description: 'Continuous flow without direction change delays' }
          ],
          applications: [
            'Production line direction changes',
            'Packaging facility routing',
            'Assembly line optimization',
            'Food processing layout optimization',
            'Pharmaceutical production curves',
            'E-commerce fulfillment centers',
            'Manufacturing floor design',
            'Logistics hub operations'
          ],
          industries: ['Manufacturing', 'Packaging', 'Food & Beverage', 'Pharmaceuticals', 'E-Commerce', 'Automotive'],
          construction: 'Precision-engineered curved frame with smooth belt routing. Specially designed rollers support curve angles without product shifting. Low-friction design minimizes energy loss. Customizable radius options from tight to wide curves.',
          performance: [
            'Maintains product orientation through curves',
            'Smooth direction changes without product damage',
            'Frictionless operation reduces energy consumption',
            'Consistent belt speed throughout curve',
            'Adapts to various product sizes seamlessly'
          ],
          benefits: [
            'Optimizes production floor space utilization',
            'Eliminates manual product handling at direction changes',
            'Reduces product damage during transport',
            'Increases overall production throughput',
            'Lowers total cost of ownership',
            'Improves facility layout flexibility'
          ],
          features: 'Optimizes floor space and improves workflow efficiency'
        },
        {
          id: 5,
          name: 'Aluminum Belt Conveyor',
          image: aluminumBeltImg,
          description: 'Lightweight, corrosion-resistant belt conveyors using anodized aluminum framing for hygienic applications. Designed for food, pharmaceutical, and clean room industries requiring washdown capability and contamination control.',
          specs: [
            'Anodized aluminum frames for corrosion resistance',
            'Low weight with high strength ratio',
            'Ideal for food and clean environments',
            'Modular and portable design',
            'Easy to clean and maintain',
            'FDA-compliant food-safe materials',
            'Stainless steel options available',
            'Smooth hygienic surfaces',
            'Minimal crevices for bacteria buildup'
          ],
          overview: 'Aluminum conveyors are specially engineered for industries with strict hygiene requirements. The lightweight yet durable aluminum construction provides corrosion resistance while maintaining the strength needed for industrial operations.',
          advantages: [
            { title: 'Hygienic Design', description: 'Smooth surfaces prevent bacterial growth and contamination' },
            { title: 'Lightweight Construction', description: 'Easy to install, maintain, and relocate' },
            { title: 'Corrosion Resistant', description: 'Anodized aluminum withstands washdown and moisture' },
            { title: 'Food Safe Materials', description: 'FDA-compliant components meet all food industry standards' },
            { title: 'Easy Maintenance', description: 'Simple design allows quick cleaning and sanitization' },
            { title: 'Long Service Life', description: 'Durable construction maintains performance over years' }
          ],
          applications: [
            'Food processing and manufacturing',
            'Beverage production lines',
            'Pharmaceutical operations',
            'Dairy processing facilities',
            'Meat and poultry handling',
            'Bakery operations',
            'Frozen food processing',
            'Clean room manufacturing'
          ],
          industries: ['Food & Beverage', 'Pharmaceuticals', 'Dairy', 'Meat Processing', 'Bakeries', 'Clean Manufacturing'],
          construction: 'Anodized aluminum frame with stainless steel rollers and bearings. Food-grade rubber or PVC belts. Minimal crevices and corrosion-prone areas. Designed for easy complete disassembly for cleaning. All contact surfaces meet FDA requirements.',
          performance: [
            'Withstands repeated washdown cycles without degradation',
            'Maintains structural integrity in humid environments',
            'Operates smoothly with minimal contamination risk',
            'Easy cleaning reduces downtime for sanitization',
            'Lightweight design allows flexible positioning'
          ],
          benefits: [
            'Ensures product safety and hygiene compliance',
            'Reduces contamination risks significantly',
            'Simplifies cleaning and maintenance procedures',
            'Lightweight design reduces installation costs',
            'Long service life reduces replacement frequency',
            'Meets all food safety regulations and standards'
          ],
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
          description: 'Gravity roller conveyors for simple accumulation and transfer using incline or manual push. Cost-effective passive transport solution requiring no power source.',
          specs: [
            'Low-cost passive transport solution',
            'Ideal for carton and package handling',
            'Modular sections for expandability',
            'Minimal power usage (gravity-powered)',
            'Easy expandable design',
            'Simple installation process',
            'Durable roller construction',
            'Low maintenance requirements',
            'Various width options'
          ],
          overview: 'Free roller conveyors use gravity or manual push to move materials along production lines. These unpowered systems are ideal for non-urgent material movement, accumulation points, and cost-conscious operations.',
          advantages: [
            { title: 'Cost Effective', description: 'No power consumption reduces operational costs significantly' },
            { title: 'Simple Operation', description: 'Gravity-powered requires minimal training and oversight' },
            { title: 'Low Maintenance', description: 'Simple design with fewer moving parts' },
            { title: 'Modular Expansion', description: 'Easy to add or remove sections as needs change' },
            { title: 'No Installation Complexity', description: 'Quick setup without electrical infrastructure' },
            { title: 'Flexible Configuration', description: 'Can be straight, curved, or inclined' }
          ],
          applications: [
            'Package and carton handling',
            'Order picking stations',
            'Warehouse accumulation zones',
            'Shipping and receiving areas',
            'Manual sorting operations',
            'Distribution center operations',
            'Light manufacturing material flow',
            'Non-urgent material movement'
          ],
          industries: ['Warehousing', 'Logistics', 'Distribution', 'Light Manufacturing', 'Retail', 'E-Commerce'],
          construction: 'Heavy-duty steel frame with industrial-grade rollers. Deep groove ball bearings support smooth rotation. Adjustable legs for various heights. Modular sections connect easily with bolted assembly.',
          performance: [
            'Consistent smooth rolling without power',
            'Handles light to medium loads efficiently',
            'Zero noise and vibration operation',
            'Operates continuously without maintenance',
            'Flexible speed controlled by incline angle'
          ],
          benefits: [
            'Zero energy consumption reduces facility costs',
            'Simple operation requires minimal training',
            'Extremely reliable with few failure points',
            'Easy to modify as operation requirements change',
            'Long service life with minimal maintenance',
            'Ideal for ergonomic material handling'
          ],
          features: 'Cost-effective for non-urgent material movement'
        },
        {
          id: 8,
          name: 'Motorized Roller Conveyor',
          image: motorizedRollerImg,
          description: 'Driven roller conveyors with motorized power for controlled movement, variable speed, and precise indexing. Perfect for automated production lines requiring synchronized operation.',
          specs: [
            'Motorized rollers with independent drives',
            'Variable speed control (0.1-2.0 m/s)',
            'Precise positioning and indexing capability',
            'Can integrate with automation systems',
            'Suitable for merge and divert applications',
            'Reversible operation option',
            'Multiple motor configurations',
            'Soft-start mechanisms available',
            'Safety brake integration'
          ],
          overview: 'Motorized roller conveyors provide powered material transport with precise control. These systems are essential for automated production lines where synchronized operation and accurate positioning are critical.',
          advantages: [
            { title: 'Powered Operation', description: 'Motor-driven ensures consistent speed and control' },
            { title: 'Variable Speed', description: 'Adjustable from slow to fast meets various needs' },
            { title: 'Automation Integration', description: 'Compatible with PLC and automation systems' },
            { title: 'Precise Indexing', description: 'Accurate positioning for manufacturing precision' },
            { title: 'Merge/Divert Capable', description: 'Suitable for complex production line layouts' },
            { title: 'High Throughput', description: 'Fast consistent speeds maximize productivity' }
          ],
          applications: [
            'Automated production lines',
            'Assembly line operations',
            'Manufacturing indexing stations',
            'Merge and divert systems',
            'Packaging automation',
            'Pharmaceutical production',
            'Food processing automation',
            'Logistics automation hubs'
          ],
          industries: ['Automotive', 'Manufacturing', 'Packaging', 'Pharmaceuticals', 'Food & Beverage', 'Electronics'],
          construction: 'Heavy-duty steel frame with motorized rollers driven by AC or DC motors. Variable frequency drives for speed control. Precision ball bearings for smooth operation. Modular motor mount system.',
          performance: [
            'Maintains consistent speed regardless of load',
            'Precise speed control from 0.1 to 2.0 m/s',
            'Accurate indexing for automated operations',
            'Synchronized multi-roller systems possible',
            'Reliable operation in continuous 24/7 duty'
          ],
          benefits: [
            'Increases production speed and throughput',
            'Enables complex automated production layouts',
            'Reduces manual handling and labor costs',
            'Provides precise product positioning',
            'Integrates seamlessly with automation systems',
            'Improves overall production efficiency'
          ],
          features: 'Ideal for automated production lines'
        },
        {
          id: 9,
          name: 'Curve Roller Conveyor',
          image: curveRollerImg,
          description: 'Curved roller conveyor sections designed to route product flow while keeping consistent pitch. Smooth directional changes without product shifting.',
          specs: [
            'Ball or roller curve options',
            'Low friction directional turns',
            'Custom radii available (1m-10m)',
            'Compatible with straight rollers',
            'Smooth direction change transitions',
            'Multiple width options',
            'Adjustable curve angles',
            'Space-saving design',
            'Easy installation integration'
          ],
          overview: 'Curve roller conveyors enable smooth directional changes in material flow while maintaining consistent pitch and product stability. These systems optimize facility layouts and reduce transfer points.',
          advantages: [
            { title: 'Smooth Direction Change', description: 'Low-friction design prevents product shifting' },
            { title: 'Space Efficient', description: 'Curved routing eliminates need for separate transfer points' },
            { title: 'Custom Configurations', description: 'Available with various radii for specific layouts' },
            { title: 'Consistent Pitch', description: 'Maintains product stability through curves' },
            { title: 'Easy Integration', description: 'Compatible with standard straight conveyor systems' },
            { title: 'Reduced Transfer Points', description: 'Fewer product handling points mean less damage' }
          ],
          applications: [
            'Production line routing',
            'Warehouse operations',
            'Distribution center layout',
            'Manufacturing floor design',
            'Packaging line optimization',
            'Assembly line curves',
            'Logistics hub operations',
            'Retail and grocery routing'
          ],
          industries: ['Manufacturing', 'Warehousing', 'Logistics', 'Food & Beverage', 'Retail', 'E-Commerce'],
          construction: 'Precision-engineered curved frame with low-friction ball or roller bearings. Adjustable mounting allows radius customization. Smooth contoured surfaces prevent product catching. Compatible standard roller dimensions.',
          performance: [
            'Smooth direction changes at variable angles',
            'Minimal friction loss through curves',
            'Maintains consistent belt/roller speed',
            'Handles various product sizes without adjustment',
            'Low noise operation through curves'
          ],
          benefits: [
            'Optimizes production floor space',
            'Eliminates manual handling at direction changes',
            'Reduces product damage during routing',
            'Increases production flow efficiency',
            'Lowers total system installation costs',
            'Improves overall material handling safety'
          ],
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
          description: 'Portable and adaptable skate wheel conveyors manufactured by MOVO as the leading brand in skate conveyor systems. Features disassemblable construction with flexible configuration options for aluminum or steel frames. Ideal for job sites requiring frequent reconfiguration and relocation.',
          specs: [
            'Capacity: 50-75 kg/meter depending on material',
            'Skate wheel type: GI, Plastic, or Stainless Steel',
            'Frame options: Aluminum or Steel construction',
            'Straight and curved section compatibility',
            'Easy disassembly for reconfiguration',
            'Quick-connect coupling systems',
            'Lightweight aluminum frame alternatives',
            'Load distribution: Evenly across multiple wheels',
            'Modular design for flexible installation'
          ],
          overview: 'Skate wheel conveyors use rolling skate wheels to support products during horizontal or slightly inclined transport. These flexible systems are perfect for temporary installations, job site work, and assembly line configurations that require frequent changes.',
          advantages: [
            { title: 'Portable Design', description: 'Lightweight aluminum construction enables easy relocation' },
            { title: 'Flexible Configuration', description: 'Straight, curved, or custom path layouts available' },
            { title: 'Quick Assembly', description: 'Modular design allows rapid setup and disassembly' },
            { title: 'Cost Effective', description: 'Lower investment with no permanent installation required' },
            { title: 'Multiple Skate Options', description: 'Choose from GI, plastic, or stainless steel materials' },
            { title: 'Easy Maintenance', description: 'Simple disassembly for wheel replacement and cleaning' }
          ],
          applications: [
            'Temporary assembly line configurations',
            'Job site material handling',
            'Shipping and receiving departments',
            'Warehouse sorting and routing',
            'Production line setup and testing',
            'Event and expo material handling',
            'Flexible manufacturing environments',
            'Multiple facility material handling',
            'Stocking and inventory management'
          ],
          industries: ['Manufacturing', 'Logistics', 'Assembly', 'Warehousing', 'Rental Services', 'Event Management'],
          construction: 'Lightweight aluminum or high-grade steel frame with precision-engineered skate wheels. Multiple bearing points distribute load evenly. Quick-connect coupling system for rapid assembly. Available with plastic, galvanized iron, or stainless steel skates for different environments.',
          performance: [
            'Smooth rolling operation with minimal friction',
            'Consistent speed from manual push to motorized drive',
            'Flexible configuration enables custom layouts',
            'Durable wheels withstand frequent reconfiguration',
            'Lightweight frame reduces installation labor'
          ],
          benefits: [
            'Portable solution for changing production needs',
            'Reduces setup and relocation costs significantly',
            'Flexible design adapts to new facility layouts',
            'Easy to repair with modular wheel replacement',
            'Eliminates permanent installation expenses',
            'Perfect for contract manufacturing applications'
          ],
          features: 'Perfect for assembly lines, shipping departments, and stocking areas with firm, flat-bottom loads'
        },
        {
          id: 11,
          name: 'Flexible Roller Conveyor',
          image: flexibleRollerImg,
          description: 'Versatile gravity-powered flexible roller conveyors designed for cost-effective material handling in warehouses and manufacturing. These systems feature no-electricity-required operation with adjustable configuration for curved or straight paths with height flexibility.',
          specs: [
            'Capacity: 50-80 kg per meter depending on load',
            'Roller diameter: 1.5"-4" (38-102 mm) options',
            'Frame materials: Steel, Aluminum, or Stainless Steel',
            'Length: Customizable up to 100 ft (30.5 m)',
            'Width: 12"-48" (305-1219 mm) standard options',
            'Height: Adjustable 24"-48" (610-1219 mm)',
            'Configuration: Flexible straight or curved sections',
            'Power requirement: None - gravity powered',
            'Speed: Variable based on gravity and load angle'
          ],
          overview: 'Flexible roller conveyors utilize gravity to move products without electrical power, making them ideal for cost-conscious operations. The adjustable height legs and flexible frame configuration allow rapid setup changes for different warehouse or manufacturing layouts.',
          advantages: [
            { title: 'Zero Operating Cost', description: 'Gravity-powered eliminates electricity consumption' },
            { title: 'Flexible Design', description: 'Easily converts between curved and straight configurations' },
            { title: 'Adjustable Height', description: 'Leg adjustment enables different elevation levels' },
            { title: 'Quick Installation', description: 'Modular sections assembly requires minimal tools' },
            { title: 'Low Maintenance', description: 'Simple gravity system requires minimal servicing' },
            { title: 'Quiet Operation', description: 'No motor means silent, worker-friendly environment' }
          ],
          applications: [
            'Warehouse and distribution centers',
            'Manufacturing material flow systems',
            'Sorting and order picking operations',
            'Packaging and assembly support',
            'Gravity-fed accumulation zones',
            'Loading dock operations',
            'Multi-level warehouse systems',
            'Flexible temporary installations',
            'Product sorting and routing'
          ],
          industries: ['Warehousing', 'Manufacturing', 'Logistics', 'Packaging', 'Food & Beverage', 'Retail Distribution'],
          construction: 'Heavy-duty steel frame with adjustable height legs. Precision-engineered rollers with sealed bearings. Quick-release connector sections for flexible configuration. Optional curved sections with specialized roller setup. Fully portable with easy section connection.',
          performance: [
            'Smooth gravity-powered material flow',
            'Handles varying product weights without adjustment',
            'Flexible configuration enables layout changes',
            'Quiet operation ideal for offices and facilities',
            'Durable construction withstands heavy daily use'
          ],
          benefits: [
            'Reduces operational costs through gravity power',
            'Easy to modify for changing warehouse needs',
            'Portable solution for temporary or permanent use',
            'Requires no electricity infrastructure investment',
            'Minimal maintenance reduces downtime',
            'Quick deployment reduces setup time'
          ],
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
          description: 'Durable plastic modular conveyor systems engineered with interlocking belt units for washdown-intensive food and beverage applications. Designed for easy maintenance with individual module replacement capability while maintaining hygienic operational standards.',
          specs: [
            'Modular plastic belt construction with interlocking units',
            'Belt width: 300-2000 mm customizable range',
            'Modular pitch: Standard 12.7mm or 19mm options',
            'Load capacity: Light to medium duty applications',
            'Easy replacement of individual damaged modules',
            'Superior drainage and cleanability design',
            'Positive drive compatible systems',
            'FDA-compliant materials available',
            'Smooth food-contact surfaces'
          ],
          overview: 'Modular belt conveyors use interlocking plastic units to create a continuous conveying surface with outstanding hygiene properties. Each module can be individually replaced, reducing downtime and maintenance costs compared to traditional solid belts.',
          advantages: [
            { title: 'Quick Module Replacement', description: 'Individual unit replacement minimizes downtime' },
            { title: 'Superior Cleanability', description: 'Open modular design enables thorough washdown' },
            { title: 'Hygienic Operation', description: 'Food-safe materials meet all regulatory standards' },
            { title: 'Cost-Effective Maintenance', description: 'Replace only damaged modules, not entire belt' },
            { title: 'Excellent Drainage', description: 'Water flows through gaps preventing pudding' },
            { title: 'Flexible Configuration', description: 'Adaptable to various production line layouts' }
          ],
          applications: [
            'Meat and poultry processing',
            'Fish and seafood handling',
            'Beverage bottling operations',
            'Dairy product processing',
            'Bakery and pastry production',
            'Fruit and vegetable washing',
            'Packaged food production',
            'Frozen food processing',
            'Chemical washing applications'
          ],
          industries: ['Food & Beverage', 'Meat Processing', 'Dairy', 'Bakeries', 'Fish & Seafood', 'Pharmaceuticals'],
          construction: 'Engineered plastic modules with precision interlocking system. Stainless steel or food-grade aluminum frame. Individual modules designed for quick snap-on/snap-off installation. Sealed bearing blocks prevent water infiltration. FDA and USDA approved material options.',
          performance: [
            'Maintains hygienic surface even after washdown cycles',
            'Enables fast modular replacement without belt removal',
            'Smooth operation prevents product damage',
            'Consistent speed with positive drive systems',
            'Durable modular design extends system life'
          ],
          benefits: [
            'Reduces maintenance costs through selective module replacement',
            'Enables rapid production line cleaning',
            'Ensures food safety and regulatory compliance',
            'Minimizes downtime with quick module swap',
            'Extends belt life through targeted repairs',
            'Simplifies line cleaning and sanitation procedures'
          ],
          features: 'Industry standard for food and beverage processing'
        },
        {
          id: 25,
          name: 'Inclined Modular Belt Conveyor',
          image: inclinedbelt,
          description: 'Advanced modular conveyor system specifically engineered for elevation transport with interlocking plastic modules and anti-slip surfaces. Features positive drive mechanics for inclined operation while maintaining the easy-maintenance benefits of modular construction.',
          specs: [
            'Modular plastic belt with interlocking design',
            'Incline angle capability: Up to 45 degrees',
            'Integrated cleats or friction enhancement',
            'Anti-slip surface treatment on modules',
            'Belt width: 300-2000 mm customizable',
            'Easy module replacement for repairs',
            'Washdown compatible design',
            'FDA-approved food-safe materials',
            'Positive drive system compatibility',
            'Adjustable angle configurations'
          ],
          overview: 'Modular incline conveyors combine the flexibility of individual module replacement with the necessary grip for vertical transportation. The specialized anti-slip design prevents product rollback while maintaining easy cleaning between modules.',
          advantages: [
            { title: 'Steep Incline Capability', description: 'Achieves 45-degree angles for vertical elevation' },
            { title: 'Anti-Slip Design', description: 'Prevents product rollback and slippage issues' },
            { title: 'Quick Module Replacement', description: 'Individual module failure requires only spot replacement' },
            { title: 'Hygienic Incline', description: 'Modular gaps enable drainage and cleaning' },
            { title: 'Flexible Angles', description: 'Adjustable frame allows various incline configurations' },
            { title: 'Easy Maintenance', description: 'Simple module removal enables thorough cleaning' }
          ],
          applications: [
            'Multi-level food processing facilities',
            'Beverage bottling with elevation changes',
            'Pharmaceutical production floor routing',
            'Meat processing vertical transport',
            'Bakery product elevation systems',
            'Dairy processing level changes',
            'Confectionery manufacturing elevation',
            'Frozen food processing inclines',
            'Package handling elevation systems'
          ],
          industries: ['Food & Beverage', 'Pharmaceuticals', 'Meat Processing', 'Bakeries', 'Dairy', 'Confectionery'],
          construction: 'Specialized modular plastic belt with integrated cleats and friction-enhanced surfaces. Stainless steel or food-grade aluminum frame designed for inclined load handling. Reinforced support structure manages increased stress. FDA and USDA-approved module materials.',
          performance: [
            'Prevents product slippage on 45-degree inclines',
            'Maintains consistent speed on elevation changes',
            'Smooth module interface prevents product catching',
            'Durable design withstands continuous incline operation',
            'Individual modules enable quick failure recovery'
          ],
          benefits: [
            'Optimizes multi-level facility space utilization',
            'Prevents costly product slippage and loss',
            'Enables rapid production line reconfiguration',
            'Reduces maintenance costs through selective module replacement',
            'Improves safety with anti-slip design',
            'Simplifies facility cleaning and sanitation'
          ],
          features: 'Perfect for multi-level food processing and packaging facilities'
        },
        {
          id: 26,
          name: 'Curve Modular Belt Conveyor',
          image: modularBeltImg ,
          description: 'Curved modular conveyor system with interlocking plastic belt modules engineered for smooth directional changes in production lines. Specialized design maintains consistent height and product orientation during curves while providing easy maintenance through modular architecture.',
          specs: [
            'Modular plastic belt with interlocking design',
            'Curved path design with adjustable radius',
            'Radius options: 1-10 meter customizable',
            'Maintains product orientation during curves',
            'Low friction turning capability',
            'Belt width: 300-2000 mm compatible',
            'Easy module maintenance and replacement',
            'Washdown resistant design',
            'FDA-compliant plastic options available',
            'Space-efficient routing configuration'
          ],
          overview: 'Curved modular conveyors enable smooth directional changes while each individual module can be replaced independently. This design is ideal for facilities where space optimization and frequent maintenance access are critical requirements.',
          advantages: [
            { title: 'Smooth Direction Changes', description: 'Curved sections maintain product orientation' },
            { title: 'Space Optimization', description: 'Eliminates need for transfer points saving area' },
            { title: 'Quick Module Replacement', description: 'Individual module failure requires only spot repair' },
            { title: 'Flexible Radius Options', description: 'Customizable curve radius suits layout needs' },
            { title: 'Frictionless Turning', description: 'Low-friction design minimizes energy consumption' },
            { title: 'Easy Cleaning Access', description: 'Modular gaps enable complete sanitation' }
          ],
          applications: [
            'Production floor optimization curves',
            'Packaging facility line routing',
            'Food processing direction changes',
            'Pharmaceutical manufacturing curves',
            'Bakery product routing systems',
            'Assembly line layout optimization',
            'Multi-section production coordination',
            'Curved filling and capping lines',
            'Flexible production environment setup'
          ],
          industries: ['Food & Beverage', 'Pharmaceuticals', 'Packaging', 'Manufacturing', 'Bakeries', 'E-Commerce'],
          construction: 'Precision-engineered modular plastic belt with specialized curved roller positioning. Curved frames support proper module alignment throughout curves. Individual modules designed for quick removal and installation. Stainless steel or aluminum frame construction with food-safe materials.',
          performance: [
            'Maintains product orientation throughout curves',
            'Smooth operation prevents product shifting',
            'Minimal friction loss during direction changes',
            'Consistent speed from straight to curved sections',
            'Durable modular design handles repeated operation'
          ],
          benefits: [
            'Optimizes production floor space utilization',
            'Reduces product damage during direction changes',
            'Enables rapid facility reconfiguration',
            'Minimizes maintenance costs through modular design',
            'Improves overall production throughput',
            'Simplifies cleaning between production runs'
          ],
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
          description: 'Heavy-duty metal slat conveyor system using chain-driven architecture for handling extreme loads, sharp materials, and high-temperature conditions. These robust systems feature individual steel slats mounted on heavy-duty chains, providing superior positive product support for foundries, steel mills, and thermal processing.',
          specs: [
            'Robust metal slat construction with chain drive',
            'Individual slat design allows modular replacement',
            'High-temperature capability up to 250°C',
            'Load capacity: Heavy-duty applications',
            'Chain material: High-strength roller chain',
            'Slat spacing: Customizable 25-100mm',
            'Stainless steel options for corrosive environments',
            'Direct drive motor compatibility',
            'Easy slat replacement without chain removal',
            'Available with spring-tensioned chain systems'
          ],
          overview: 'Slat chain conveyors are the workhorse of heavy industrial material handling, capable of transporting molten materials, sharp castings, and hot products that would destroy conventional conveyor belts. The individually mounted slats on chains provide unmatched durability and reliability.',
          advantages: [
            { title: 'Extreme Temperature Operation', description: 'Handles up to 250°C with no belt degradation' },
            { title: 'Harsh Material Handling', description: 'Designed for sharp, abrasive, and heavy loads' },
            { title: 'Modular Slat Replacement', description: 'Individual slats can be replaced without line shutdown' },
            { title: 'Positive Grip Design', description: 'Chain drive prevents slipping under extreme conditions' },
            { title: 'Heavy-Duty Construction', description: 'Handles loads that would destroy belt conveyors' },
            { title: 'Long Service Life', description: 'Built to last decades in harsh conditions' }
          ],
          applications: [
            'Foundry and metal casting operations',
            'Steel mill hot material handling',
            'Ceramic tile and clay processing',
            'Glass manufacturing and annealing',
            'Heat treatment and quenching operations',
            'Metalworking and machining waste handling',
            'Heavy aggregate and mining operations',
            'Industrial waste and scrap handling',
            'High-temperature furnace discharge systems'
          ],
          industries: ['Foundries', 'Steel Mills', 'Ceramics', 'Glass Manufacturing', 'Heavy Industry', 'Mining'],
          construction: 'Heavy-duty steel slats mounted on industrial-grade roller chains. Robust steel frame supports extreme loading. Stainless steel construction available for corrosive environments. Multi-strand chain system handles heavy loads with precision alignment.',
          performance: [
            'Handles extreme temperatures beyond belt limits',
            'Maintains consistent speed under heavy loads',
            'Operates reliably in harsh foundry environments',
            'Individual slats enable fast targeted repairs',
            'Chain drive provides superior positive grip'
          ],
          benefits: [
            'Eliminates conveyor belt replacement from extreme conditions',
            'Reduces downtime through quick slat replacement',
            'Extends production capacity with reliable operation',
            'Handles materials no other conveyor type can manage',
            'Minimizes maintenance costs despite harsh operation',
            'Provides decades of service in industrial environments'
          ],
          features: 'Ideal for foundries, ceramics manufacturing, and high-temperature food processing'
        },
        {
          id: 28,
          name: 'Plastic Slat Chain Conveyor',
          image: plasticSlatChainImg,
          images: [plasticSlatChainImg, plasticSlatChain1Img],
          description: 'Modern plastic slat conveyor system utilizing chain-drive technology specifically engineered for hygienic and food-safe material handling. Features durable engineering polymer slats mounted on robust chains, offering excellent chemical resistance and complete cleanability for sanitization-critical environments.',
          specs: [
            'Food-grade plastic slats with chain drive',
            'Slat material: Engineering polymer with chemical resistance',
            'Lower noise operation compared to metal slats',
            'Lightweight design with strong load-bearing capacity',
            'FDA-compliant slat materials available',
            'Temperature range: -5°C to +80°C operational',
            'Modular slat replacement without chain removal',
            'Easy cleaning and sanitization design',
            'Chain material: Stainless steel or coated options',
            'Customizable slat spacing 25-75mm'
          ],
          overview: 'Plastic slat conveyors combine the positive drive advantages of chain conveyors with the hygiene standards required in food processing. The engineering polymer slats provide excellent chemical resistance while being lightweight and easy to clean between production runs.',
          advantages: [
            { title: 'Complete Sanitation', description: 'Plastic slats can be fully sanitized and disinfected' },
            { title: 'Chemical Resistance', description: 'Withstands detergents, acids, and disinfectants' },
            { title: 'FDA Compliant', description: 'All materials approved for direct food contact' },
            { title: 'Low Noise Operation', description: 'Quieter than steel slats creating better working environment' },
            { title: 'Lightweight Design', description: 'Easier to handle and install than steel systems' },
            { title: 'Quick Slat Replacement', description: 'Individual plastic slats enable fast repairs' }
          ],
          applications: [
            'Meat and poultry processing plants',
            'Fish and seafood handling facilities',
            'Dairy product processing lines',
            'Beverage production and bottling',
            'Bakery and pastry product transport',
            'Pharmaceutical ingredient handling',
            'Frozen food production lines',
            'Ready-to-eat meal processing',
            'Food packaging and palletizing'
          ],
          industries: ['Food & Beverage', 'Meat Processing', 'Dairy', 'Seafood', 'Pharmaceuticals', 'Bakeries'],
          construction: 'Engineering polymer slats with high chemical and impact resistance. Stainless steel chains with polymer coating for hygienic operation. Food-grade materials throughout all contact surfaces. Slat-to-chain connection designed for easy tool-free removal.',
          performance: [
            'Withstands repeated sanitation cycles without degradation',
            'Maintains positive drive grip without slippage',
            'Quiet operation ideal for food processing facilities',
            'Prevents contamination through smooth food-contact surfaces',
            'Supports heavy product loads with chain drive strength'
          ],
          benefits: [
            'Meets strictest food safety and hygiene regulations',
            'Reduces sanitation downtime between production runs',
            'Eliminates cross-contamination risks from metal slats',
            'Provides years of reliable operation in wet environments',
            'Improves worker safety with quiet operation',
            'Simplifies cleaning procedures and documentation'
          ],
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
          description: 'Advanced telescopic conveyor systems engineered by MOVO for streamlining truck and container loading/unloading operations. These extensible systems reduce manual labor significantly with hydraulic reach adjustment and smooth material flow for logistics hubs and fulfillment centers.',
          specs: [
            'Extendable multi-stage telescopic design',
            'Reach extension: 2-6 meters customizable',
            'Loading/unloading trucks, containers, trailers',
            'Hydraulic or electric elevation adjustment',
            'Speed control: 0.5-2.0 m/min variable',
            'High-speed smooth controlled conveying',
            'Flexible length adjustment for vehicle sizes',
            'Emergency stop and safety systems',
            'Rugged construction for long service life'
          ],
          overview: 'Telescopic conveyors extend deep into trucks and containers, eliminating manual carrying and reducing loading time significantly. These systems are critical components of modern logistics operations where throughput and worker safety are paramount.',
          advantages: [
            { title: 'Reduces Manual Labor', description: 'Eliminates need for workers to carry items manually' },
            { title: 'Extends into Vehicles', description: 'Reaches deep into trucks and containers automatically' },
            { title: 'Height Adjustment', description: 'Hydraulic control adapts to different dock heights' },
            { title: 'Increases Throughput', description: 'Smooth continuous loading speeds up operations' },
            { title: 'Worker Safety', description: 'Eliminates repetitive strain and injury risks' },
            { title: 'Operational Efficiency', description: 'Reduces loading time and labor costs significantly' }
          ],
          applications: [
            'Warehouse and distribution center loading',
            'E-commerce fulfillment center operations',
            'Manufacturing plant shipping departments',
            'Logistics hub container handling',
            'Cross-dock operations',
            'Bulk material handling facilities',
            'Port and terminal operations',
            'Cold storage distribution',
            'Heavy industrial shipping'
          ],
          industries: ['Logistics', 'E-Commerce', 'Manufacturing', 'Warehousing', 'Distribution', 'Cold Storage'],
          construction: 'Multi-stage telescopic steel frame with hydraulic or electric extension mechanism. Smooth belt or roller surface for product transport. Integrated safety sensors and emergency stops. Height-adjustable deck for various dock configurations.',
          performance: [
            'Extends reach from 2-6 meters into vehicles',
            'Maintains smooth operation during extension/retraction',
            'Handles continuous loading without stalling',
            'Adapts to different vehicle heights automatically',
            'Provides years of reliable loading operations'
          ],
          benefits: [
            'Reduces loading operation time by 50% or more',
            'Significantly decreases worker fatigue and injuries',
            'Improves loading safety with reduced manual handling',
            'Increases operational throughput and productivity',
            'Lowers labor costs per loaded vehicle',
            'Enables faster truck turnaround times'
          ],
          features: 'Reduces manpower and loading time with optional add-ons: lighting, operator platforms, castor wheels, sensors, and automation integration'
        },
        {
          id: 14,
          name: 'Truck Loading & Unloading Conveyor',
          image: truckLoadingImg,
          images: [truckLoadingImg, truckLoading2Img, truckLoading3Img],
          description: 'Specialized truck loading and unloading conveyor systems designed to streamline logistics operations with continuous hassle-free goods movement. Features telescopic reach, hydraulic height control, and flexible options for maximum operational flexibility in distribution centers.',
          specs: [
            'Telescopic reach design extending 2-6 meters',
            'Hydraulic or electric height control system',
            'Flexible roller or belt surface options',
            'High throughput capacity 500-2000 items/hour',
            'Variable speed 0.5-2.0 m/min control',
            'Reduced manual labor requirements',
            'Smooth continuous operation without jerking',
            'Safety guardrails and emergency stops',
            'Adjustable for various truck bed heights'
          ],
          overview: 'Truck loading and unloading operations are critical bottlenecks in logistics. These purpose-built conveyor systems eliminate bottlenecks by providing smooth, continuous, automated goods movement from dock to vehicle and vice versa.',
          advantages: [
            { title: 'Continuous Operation', description: 'Smooth uninterrupted flow maximizes throughput' },
            { title: 'Height Flexibility', description: 'Hydraulic control adapts to different truck heights' },
            { title: 'Belt or Roller Options', description: 'Choose system type matching product requirements' },
            { title: 'Fast Loading', description: 'Speeds operations reducing truck dock time' },
            { title: 'Worker Safety', description: 'Reduces lifting injuries from manual handling' },
            { title: 'Cost Reduction', description: 'Minimizes labor per vehicle while increasing throughput' }
          ],
          applications: [
            'Warehouse loading and unloading operations',
            'MSMEs and small logistics facilities',
            'E-commerce distribution centers',
            'Manufacturing plant shipping departments',
            'Cross-dock transfer operations',
            'Cold storage facilities',
            'Bulk material transfer',
            'Container handling operations',
            'Multi-vehicle loading stations'
          ],
          industries: ['Logistics', 'E-Commerce', 'Warehousing', 'Manufacturing', 'Food Distribution', 'MSME'],
          construction: 'Heavy-duty conveyor with optional roller or belt top surface. Hydraulic lift system with electronic height controls. Adjustable approach ramps for various truck configurations. Safety barriers and emergency stop systems integrated throughout.',
          performance: [
            'Handles continuous loading operations all day',
            'Maintains consistent throughput regardless of load',
            'Smooth operation prevents product damage',
            'Adjusts to multiple truck heights automatically',
            'Durable construction withstands daily heavy use'
          ],
          benefits: [
            'Speeds up warehouse loading by 40-60%',
            'Significantly reduces labor requirements per vehicle',
            'Improves worker safety and reduces injuries',
            'Enables faster vehicle turnaround times',
            'Reduces overall logistics operational costs',
            'Improves dock safety and operational efficiency'
          ],
          features: 'Ideal for warehouses, MSMEs, e-commerce hubs, and manufacturing plants - speed up operations, reduce costs, and ensure smooth loading/unloading every single time'
        },
        {
          id: 15,
          name: 'Spiral Conveyor',
          image: spiralImg,
          images: [spiralImg, spiral2Img],
          description: 'Space-saving vertical spiral conveyors designed for smooth elevation changes in compact footprints. Perfect for cooling, coating, or thermal processing with gentle product handling and continuous flow through multiple spiral turns.',
          specs: [
            'Compact vertical footprint design',
            'Multi-turn spiral configuration options',
            'Continuous smooth flow throughout path',
            'Gentle product handling without damage',
            'Belt width: 300-1500mm customizable',
            'Various belt materials for different applications',
            'Temperature range: -10°C to +200°C',
            'Modular turn options from 1-4 full rotations',
            'Space savings up to 80% vs. traditional conveyors'
          ],
          overview: 'Spiral conveyors enable vertical transport in an extremely compact footprint, perfect for facilities with limited floor space. The continuous spiral path gently handles delicate products while providing efficient elevation or cooling.',
          advantages: [
            { title: 'Compact Design', description: 'Saves 80% floor space compared to incline systems' },
            { title: 'Continuous Flow', description: 'No transfer points prevents product damage' },
            { title: 'Multiple Turns', description: 'Single-pass vertical transport with multiple options' },
            { title: 'Gentle Handling', description: 'Smooth curves prevent product shifting or damage' },
            { title: 'Flexible Applications', description: 'Cooling, coating, or elevation all possible' },
            { title: 'Easy Integration', description: 'Fits into tight spaces in existing facilities' }
          ],
          applications: [
            'Bakery product cooling systems',
            'Chocolate coating and cooling',
            'Confectionery production',
            'Food processing elevation',
            'Pharmaceutical cooling lines',
            'Oven discharge cooling',
            'Paint and coating applications',
            'Space-constrained facilities',
            'Multi-level compact elevation'
          ],
          industries: ['Food & Beverage', 'Bakeries', 'Confectionery', 'Pharmaceuticals', 'Coating', 'Manufacturing'],
          construction: 'Spiral-shaped frame with precision roller guides. Food-grade or heat-resistant belt materials available. Modular turn assembly for custom spiral heights. Weather-resistant frame for indoor/outdoor operation.',
          performance: [
            'Provides smooth elevation in vertical-only footprint',
            'Maintains product integrity through gentle curves',
            'Enables continuous production without intermediate transfers',
            'Adapts to various elevation and cooling requirements',
            'Operates reliably in high-speed production environments'
          ],
          benefits: [
            'Maximizes facility space utilization dramatically',
            'Reduces capital expenditure on facility expansion',
            'Eliminates product damage from transfer points',
            'Enables compact multi-level production layouts',
            'Improves production flow and efficiency',
            'Provides cooling or elevation in same footprint'
          ],
          features: 'Ideal for cooling, coating, or elevation in tight spaces'
        },
        {
          id: 16,
          name: 'Vertical Chain Conveyor',
          image: verticalChainImg,
          description: 'Heavy-duty vertical chain conveyors designed for lifting substantial loads between multiple elevation levels. Features positive product support and compact footprint, ideal for multi-level warehouse and manufacturing operations.',
          specs: [
            'High load capacity up to 500kg per chain carrier',
            'Compact vertical footprint design',
            'Positive product support with chain drive',
            'Suitable for pallets, crates, and cartons',
            'Smooth vertical movement without slipping',
            'Variable height configurations available',
            'Safety stops and load holding features',
            'Stainless steel options for wet environments',
            'Easy maintenance and replacement of components'
          ],
          overview: 'Vertical chain conveyors use strong chain drives to lift heavy products vertically, eliminating the need for forklifts or manual lifting. These systems are essential in multi-level warehouses and manufacturing plants.',
          advantages: [
            { title: 'Handles Heavy Loads', description: 'Lifts up to 500kg per carrier without slipping' },
            { title: 'Compact Footprint', description: 'Vertical design saves valuable floor space' },
            { title: 'Positive Product Support', description: 'Chain drive prevents slippage on vertical paths' },
            { title: 'Multi-Level Operation', description: 'Connects different floor levels seamlessly' },
            { title: 'Safety Assured', description: 'Load-holding features prevent accidental drops' },
            { title: 'Reliable Operation', description: 'Heavy-duty construction ensures years of service' }
          ],
          applications: [
            'Multi-level warehouse operations',
            'Manufacturing floor elevation changes',
            'Pallet and crate lifting',
            'Packaging facility elevation',
            'Cold storage level connections',
            'Cross-dock multi-level operations',
            'Assembly line elevation changes',
            'Heavy product handling between floors',
            'Vertical material flow optimization'
          ],
          industries: ['Warehousing', 'Manufacturing', 'Cold Storage', 'Logistics', 'Packaging', 'Distribution'],
          construction: 'Heavy-duty chain with precision sprockets and guides. Steel or stainless steel frame supports vertical loads. Dual-chain design ensures stability and load balancing. Load-holding mechanism prevents accidental descent.',
          performance: [
            'Lifts 500kg loads vertically without slipping',
            'Maintains consistent speed throughout vertical path',
            'Smooth operation prevents product damage',
            'Reliable operation through daily use cycles',
            'Easy to maintain with standard replacement parts'
          ],
          benefits: [
            'Eliminates manual lifting and fatigue injury',
            'Reduces labor requirements for multi-level operations',
            'Increases warehouse storage density',
            'Improves operational safety significantly',
            'Maximizes facility vertical space utilization',
            'Reduces product handling time between levels'
          ],
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
          id: 17,
          name: 'Hinge Conveyor',
          image: hingeImg,
          images: [hingeImg, hinge2Img],
          description: 'Specialized hinge belt conveyors designed for incline and decline applications with positive product grip. Features articulated metal or plastic hinged links providing superior traction for steep angle operations with heavy and hot materials.',
          specs: [
            'Hinged metal or plastic belt links',
            'Positive grip on steep inclines up to 45°',
            'Heavy-duty construction for harsh conditions',
            'Suitable for hot products up to 200°C',
            'Modular hinge replacement possible',
            'Variable incline angle configurations',
            'Durable bearing and support structure',
            'Easy cleaning between production runs',
            'Available in stainless steel options'
          ],
          overview: 'Hinge conveyors use interconnected hinged plates to create surfaces with exceptional grip on inclines. These systems excel at handling heavy items and hot materials that slide on smooth belt surfaces.',
          advantages: [
            { title: 'Excellent Grip', description: 'Hinged design prevents slipping on steep angles' },
            { title: 'Hot Material Capable', description: 'Handles products up to 200°C without issue' },
            { title: 'Heavy Load Support', description: 'Strong hinge construction supports substantial weight' },
            { title: 'Modular Design', description: 'Individual hinges can be replaced as needed' },
            { title: 'Steep Angle Operation', description: 'Works reliably at inclines to 45 degrees' },
            { title: 'Low Maintenance', description: 'Simple hinge design requires minimal upkeep' }
          ],
          applications: [
            'Foundry hot casting transport',
            'Steel mill material handling',
            'Ceramic kiln discharge',
            'Glass manufacturing elevation',
            'Heavy aggregate handling',
            'Steep angle mining applications',
            'Heat treatment operations',
            'Industrial waste handling',
            'Molten material transport'
          ],
          industries: ['Foundries', 'Steel Mills', 'Ceramics', 'Mining', 'Heavy Industry', 'Heat Treatment'],
          construction: 'Articulated hinged metal or polymer links creating continuous surface. Heavy steel frame supports steep angle loads. Precision hinge pin design ensures smooth articulation. Optional stainless steel materials for corrosive environments.',
          performance: [
            'Provides excellent grip on 45-degree inclines',
            'Handles hot products without degradation',
            'Smooth articulation prevents product damage',
            'Individual hinges replace easily',
            'Maintains traction throughout product life'
          ],
          benefits: [
            'Eliminates slippage on steep angles',
            'Handles extreme temperatures reliably',
            'Reduces manual material handling',
            'Easy repair through hinge replacement',
            'Enables safe steep-angle transport',
            'Provides decades of reliable service'
          ],
          features: 'Excellent for steep incline transport'
        },
        {
          id: 19,
          name: 'Chain Conveyor',
          image: chainImg,
          images: [chainImg, chain2Img],
          description: 'Heavy-duty standard chain conveyors for demanding industrial heavy-duty applications. These workhorse systems feature precision roller chain with multiple attachment and drive options for maximum flexibility in harsh industrial environments.',
          specs: [
            'Heavy-duty roller chain construction',
            'Multiple chain pitch options available',
            'Customizable attachment points',
            'High reliability and redundancy',
            'Easy maintenance with standard parts',
            'Variable speed drive options',
            'Stainless steel available for wet areas',
            'Load capacity: 1000kg+ configurations',
            'Temperature range: -10°C to +80°C'
          ],
          overview: 'Chain conveyors are the workhorse of industrial material handling, providing unmatched reliability and durability in the most demanding applications. Their positive drive ensures no slippage even under extreme loads.',
          advantages: [
            { title: 'Extreme Durability', description: 'Built for decades of heavy industrial use' },
            { title: 'High Reliability', description: 'Positive drive means zero slippage under load' },
            { title: 'Easy Maintenance', description: 'Uses standard industrial roller chain parts' },
            { title: 'Versatile Attachment', description: 'Multiple options for product mounting' },
            { title: 'Heavy Load Support', description: 'Handles 1000kg+ without hesitation' },
            { title: 'Flexible Design', description: 'Adaptable to various industrial applications' }
          ],
          applications: [
            'Heavy industrial production lines',
            'Automotive manufacturing assembly',
            'Mining equipment material handling',
            'Heavy equipment transport',
            'Industrial waste processing',
            'Bulk material movement',
            'Metalworking shops and foundries',
            'Construction material handling',
            'Heavy lifting and positioning'
          ],
          industries: ['Heavy Industry', 'Automotive', 'Mining', 'Manufacturing', 'Waste Management', 'Metals'],
          construction: 'Precision industrial roller chain with heavy-duty sprockets. Reinforced steel frame handles extreme loads. Multiple bearing options for various speeds. Customizable drive configurations from motor to drum.',
          performance: [
            'Provides positive drive for heavy loads',
            'Maintains constant speed under varying weight',
            'Operates reliably in dusty or wet conditions',
            'Handles shock loads without damage',
            'Delivers years of continuous service'
          ],
          benefits: [
            'Unmatched durability in harsh conditions',
            'Zero maintenance compared to belt systems',
            'Uses readily available replacement parts',
            'Provides longest service life in industry',
            'Handles loads no belt system can match',
            'Proven technology with decades of reliability'
          ],
          features: 'Workhorse of heavy industry'
        },
        {
          id: 20,
          name: 'Wire Mesh Conveyor',
          image: wireMeshImg,
          images: [wireMeshImg, wireMesh2Img],
          description: 'Specialized wire mesh belt conveyors engineered for oven, washing, and cooling applications. Features open mesh design allowing complete air and fluid circulation while maintaining product support for heat treatment and washdown environments.',
          specs: [
            'Open wire mesh belt design for airflow',
            'High-temperature resistant up to 400°C',
            'Stainless steel construction available',
            'Food-safe and washdown compatible',
            'Easy cleaning between production runs',
            'Uniform product support across full width',
            'Maintains consistent heat distribution',
            'Drainage and water flow-through design',
            'Suitable for steam and spray washdown'
          ],
          overview: 'Wire mesh conveyors excel in thermal processing where both the conveyor and products need to be exposed to heat or washdown cycles. The open design enables complete airflow and drainage while supporting products during processing.',
          advantages: [
            { title: 'Heat Circulation', description: 'Open mesh allows hot air to surround products' },
            { title: 'Easy Cleaning', description: 'Water drains completely through mesh' },
            { title: 'High Temperature', description: 'Operates reliably up to 400°C' },
            { title: 'Food Safe', description: 'Stainless steel options approved for food contact' },
            { title: 'Complete Drainage', description: 'No pooling of water or wash solutions' },
            { title: 'Uniform Support', description: 'Provides consistent support across full width' }
          ],
          applications: [
            'Bakery oven conveyors',
            'Biscuit and cookie baking',
            'Heat treatment operations',
            'Thermal processing lines',
            'Washing and cleaning stations',
            'Spray coating applications',
            'Food sterilization processes',
            'Industrial heat treatment',
            'Cooling after heat processing'
          ],
          industries: ['Bakeries', 'Food & Beverage', 'Manufacturing', 'Heat Treatment', 'Sterilization', 'Processing'],
          construction: 'Welded stainless steel or heat-resistant wire mesh belt. Precision-welded frame supporting high temperatures. Open design allows complete visibility and accessibility. Heat-resistant rollers and bearings throughout system.',
          performance: [
            'Maintains product integrity at 400°C',
            'Provides uniform heat distribution across width',
            'Complete drainage prevents moisture pooling',
            'Enables thorough washdown between batches',
            'Operates reliably through thermal cycling'
          ],
          benefits: [
            'Eliminates product sticking in high-heat operations',
            'Enables fast washdown and sanitation cycles',
            'Provides complete product visibility',
            'Reduces thermal processing time',
            'Improves food safety with complete drainage',
            'Enables efficient heat treatment operations'
          ],
          features: 'Essential for baking, heat treatment, and washing operations'
        },
        {
          id: 21,
          name: '2W / 3W Assembly Conveyor',
          image: assemblyImg,
          description: 'Multi-width assembly line conveyors with dual or triple width configuration for synchronized production operations. Enables independent speed control while maintaining product transfer between lines for flexible manufacturing systems.',
          specs: [
            'Dual or triple width configuration options',
            'Independent speed control for each width',
            'Synchronized movement between sections',
            'Easy product transfer between widths',
            'Modular design for configuration changes',
            'Variable speed 0.1-2.0 m/min range',
            'Belt width per section: 300-1500mm',
            'Customizable length configurations',
            'Easy access for maintenance and repair'
          ],
          overview: 'Multi-width assembly conveyors provide flexibility in production lines where different workstations require different widths or speeds. Each section can operate independently or in synchronized mode depending on production needs.',
          advantages: [
            { title: 'Independent Control', description: 'Each width operates at its own speed' },
            { title: 'Synchronized Option', description: 'Can operate together for coordinated flow' },
            { title: 'Flexible Configuration', description: 'Dual or triple width options available' },
            { title: 'Easy Transfer', description: 'Products flow smoothly between sections' },
            { title: 'Space Efficient', description: 'Parallel widths save factory floor space' },
            { title: 'Modular Design', description: 'Easy to reconfigure for new products' }
          ],
          applications: [
            'Assembly line workstation optimization',
            'Electronics assembly production',
            'Automotive component assembly',
            'Multiple product line coordination',
            'Product preparation and assembly',
            'Quality inspection stations',
            'Packaging and bundling lines',
            'Multi-product flexible manufacturing',
            'Synchronized production coordination'
          ],
          industries: ['Manufacturing', 'Electronics', 'Automotive', 'Assembly', 'Appliances', 'Consumer Products'],
          construction: 'Multiple parallel conveyor sections with synchronized or independent motor drives. Precision alignment ensures smooth product transfer. Modular frame allows quick reconfiguration. Heavy-duty rollers support full-width loads.',
          performance: [
            'Maintains independent or synchronized speeds',
            'Smooth product transfer between widths',
            'Flexible speed adjustment for different operations',
            'Reliable operation during configuration changes',
            'Handles various product types simultaneously'
          ],
          benefits: [
            'Optimizes assembly line flexibility',
            'Allows independent workstation speeds',
            'Reduces floor space requirements',
            'Enables smooth product flow and transfer',
            'Adapts quickly to new product lines',
            'Improves overall production efficiency'
          ],
          features: 'Optimizes assembly line flow'
        },
        {
          id: 22,
          name: 'Four Wheel Overhead Conveyor',
          image: fourWheelImg,
          description: 'Advanced overhead trolley system with four-wheel hangers engineered for smooth, balanced lightweight parts transport. Ideal for assembly lines and paint operations where floor space must remain clear for worker movement and equipment.',
          specs: [
            'Four-wheel hanger trolleys for balanced support',
            'Smooth overhead routing on I-beam track',
            'Load capacity: 50-150kg per trolley',
            'Programmable movement with PLC integration',
            'Ideal for assembly line applications',
            'Reduces floor usage and congestion',
            'Variable speed control 0.1-2.0 m/min',
            'Emergency stop systems throughout',
            'Customizable routing paths and layouts'
          ],
          overview: 'Overhead four-wheel trolley systems enable product movement along predetermined overhead paths, completely clearing floor space. This is essential for automotive and electronics assembly where worker access and flexibility are critical.',
          advantages: [
            { title: 'Floor Space Clear', description: 'Overhead routing eliminates floor congestion' },
            { title: 'Four-Wheel Balance', description: 'Even weight distribution ensures smooth movement' },
            { title: 'Smooth Operation', description: 'Precise trolley design provides consistent flow' },
            { title: 'Programmable Routing', description: 'PLC integration enables complex paths' },
            { title: 'Worker Safety', description: 'Clear floor space improves safety and mobility' },
            { title: 'Layout Flexibility', description: 'Overhead system adapts to facility changes' }
          ],
          applications: [
            'Automotive assembly line conveyors',
            'Paint shop conveyor systems',
            'Electronics component assembly',
            'Appliance manufacturing lines',
            'Furniture assembly and finishing',
            'Heavy equipment assembly',
            'Body shop conveyor systems',
            'Powder coating operations',
            'Automated assembly systems'
          ],
          industries: ['Automotive', 'Manufacturing', 'Electronics', 'Appliances', 'Heavy Equipment', 'Paint Finishing'],
          construction: 'Precision four-wheel trolleys running on I-beam track. Heavy-duty steel frame and wheels. Programmable logic controller for movement control. Safety stops and emergency brake systems integrated throughout.',
          performance: [
            'Provides smooth overhead transport',
            'Maintains consistent speed throughout circuit',
            'Precise positioning for assembly operations',
            'Handles multi-station assembly efficiently',
            'Operates reliably through years of cycles'
          ],
          benefits: [
            'Maximizes floor space in manufacturing areas',
            'Improves worker safety and ergonomics',
            'Enables complex assembly sequences',
            'Provides precise product positioning',
            'Reduces material handling injuries',
            'Increases production efficiency significantly'
          ],
          features: 'Perfect for automotive and electronics assembly'
        },
        {
          id: 23,
          name: 'I-Beam Overhead Conveyor',
          image: iBeamImg,
          description: 'Single I-beam overhead conveyor system designed for streamlined part movement in assembly and finishing operations. Provides space-efficient overhead material transport with compact suspension and precision fixture integration.',
          specs: [
            'Single I-beam track design',
            'Compact suspension hanger system',
            'Suitable for paint and assembly lines',
            'Easy integration with product fixtures',
            'Load capacity: 100-300kg per trolley',
            'Variable speed 0.1-2.5 m/min',
            'Smooth trolley movement without vibration',
            'Multiple routing path options',
            'Emergency stop systems integrated'
          ],
          overview: 'Single I-beam overhead conveyors provide efficient point-to-point transport or looped operations with minimal overhead infrastructure. These systems are ideal for smaller operations or facilities with height constraints.',
          advantages: [
            { title: 'Space Efficient', description: 'Single beam requires minimal overhead structure' },
            { title: 'Cost Effective', description: 'Lower installation cost vs. multi-beam systems' },
            { title: 'Flexible Routing', description: 'Easy to modify path without major reconstruction' },
            { title: 'Fixture Integration', description: 'Simple attachment points for product holders' },
            { title: 'Height Compatible', description: 'Works in facilities with height restrictions' },
            { title: 'Easy Maintenance', description: 'Single beam design simplifies service access' }
          ],
          applications: [
            'Paint booth conveyor systems',
            'Assembly line fixtures',
            'Powder coating operations',
            'Heat treatment transport',
            'Manufacturing assembly stations',
            'Finishing operation conveyors',
            'Parts finishing and inspection',
            'Light assembly manufacturing',
            'Parts treatment and processing'
          ],
          industries: ['Manufacturing', 'Paint Finishing', 'Automotive', 'Appliances', 'Powder Coating', 'Assembly'],
          construction: 'Industrial I-beam track with precision trolley system. Heavy-duty hanger brackets for product fixtures. Smooth ball-bearing trolleys for silent operation. Multiple track routing options available.',
          performance: [
            'Provides smooth overhead part movement',
            'Maintains consistent speed throughout operation',
            'Enables precise fixture positioning',
            'Operates silently for assembly environments',
            'Delivers reliable years of service'
          ],
          benefits: [
            'Minimizes overhead infrastructure cost',
            'Provides space-efficient material flow',
            'Enables custom fixture integration',
            'Works in height-restricted areas',
            'Reduces floor space congestion',
            'Improves assembly operation efficiency'
          ],
          features: 'Space-efficient overhead solution'
        },
        {
          id: 24,
          name: 'Diverting & Sorting Conveyor',
          image: divertingImg,
          description: 'Intelligent conveyor systems with integrated diverting and sorting mechanisms for automated flow control and product routing. Features sensor integration and PLC-ready controls for high-speed sorting and distribution operations.',
          specs: [
            'Pushers and deflectors for product diversion',
            'Sensor integration for automatic detection',
            'PLC control ready for automation',
            'High-speed sorting up to 2000 items/hour',
            'Configurable routing lanes available',
            'Multiple divert point options',
            'Variable speed control 0.5-2.5 m/min',
            'Customizable sort criteria',
            'Easy integration with barcode/RFID systems'
          ],
          overview: 'Diverting and sorting conveyors enable automated product routing without manual intervention. These systems are essential for high-throughput distribution centers and e-commerce fulfillment where speed and accuracy are critical.',
          advantages: [
            { title: 'Automated Routing', description: 'Eliminates manual product handling and errors' },
            { title: 'High Speed', description: 'Sorts up to 2000 items per hour accurately' },
            { title: 'Sensor Integration', description: 'Automatic detection enables intelligent routing' },
            { title: 'PLC Ready', description: 'Integrates with existing automation systems' },
            { title: 'Multiple Destinations', description: 'Routes products to multiple divert points' },
            { title: 'Flexible Configuration', description: 'Adapts to changing sort criteria quickly' }
          ],
          applications: [
            'E-commerce order fulfillment centers',
            'Parcel distribution hubs',
            'Postal and package sorting facilities',
            'Product distribution and routing',
            'Returns processing operations',
            'Multi-destination shipping operations',
            'Warehouse automation systems',
            'Cross-dock routing operations',
            'High-speed order picking systems'
          ],
          industries: ['E-Commerce', 'Logistics', 'Distribution', 'Postal', 'Warehousing', 'Manufacturing'],
          construction: 'Heavy-duty conveyor frame with pneumatic or electromechanical diverters. Precision sensor positioning for accurate product detection. PLC integration with user-friendly interface. Multiple pusher/deflector types available.',
          performance: [
            'Achieves 2000 items per hour sorting speed',
            'Maintains 99%+ accuracy in routing',
            'Integrates seamlessly with automation systems',
            'Adapts quickly to new sort criteria',
            'Operates reliably through continuous use'
          ],
          benefits: [
            'Dramatically increases sorting speed and accuracy',
            'Eliminates manual sorting labor requirements',
            'Reduces operational errors and misroutes',
            'Enables fast fulfillment center operations',
            'Improves customer order accuracy',
            'Scales operations without proportional labor'
          ],
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
          description: 'Premium polyurethane and polyvinyl chloride conveyor belts offering comprehensive options from economical PVC-coated fabric to high-performance PU belts. Engineered for hygiene-sensitive applications and precision conveying with superior grip and durability.',
          specs: [
            'Smooth running surface for clean operation',
            'Excellent grip properties for product holding',
            'Extended service life with proper maintenance',
            'Multiple color options available',
            'Outstanding oil and grease resistance',
            'High flexibility for curved applications',
            'Exceptional wear resistance capability',
            'Simple cleaning procedures',
            'FDA and EU food contact compliance',
            'Temperature range: -30°C to +80°C'
          ],
          overview: 'PVC and PU belts represent the most versatile conveyor belt options available, offering economical PVC solutions for general applications and premium PU belts for demanding food processing and pharmaceutical environments.',
          advantages: [
            { title: 'Flexible Material Selection', description: 'Choose PVC for economy or PU for premium performance' },
            { title: 'Hygienic Operation', description: 'Smooth surfaces enable complete washdown and sanitization' },
            { title: 'Excellent Grip', description: 'Superior traction prevents product slipping' },
            { title: 'Long Service Life', description: 'Durable construction resists wear and degradation' },
            { title: 'Easy Cleaning', description: 'Smooth surfaces resist bacterial growth' },
            { title: 'Versatile Applications', description: 'Suitable for food, pharmaceutical, and light manufacturing' }
          ],
          applications: [
            'Food processing and packaging lines',
            'Pharmaceutical manufacturing operations',
            'Beverage production and bottling',
            'Bakery and confectionery processing',
            'Meat and poultry handling',
            'Fish and seafood processing',
            'Dairy product transportation',
            'Electronics assembly conveying',
            'Light manufacturing operations'
          ],
          industries: ['Food & Beverage', 'Pharmaceuticals', 'Bakeries', 'Meat Processing', 'Dairy', 'Manufacturing'],
          construction: 'PVC option: Flexible fabric coating with smooth surface. PU option: High-grade polyurethane with enhanced durability. Both available with various cover thicknesses from 1.5-5mm. Support layer options include polyester or cotton fabric for strength and longevity.',
          performance: [
            'PVC: 50-100 N/mm tensile strength with 3-5% elongation',
            'PU: 80-150 N/mm tensile strength with 5-8% elongation',
            'Maintains consistent performance across temperature range',
            'Resists oils, greases, and most food products',
            'Color retention withstands continuous washdown'
          ],
          benefits: [
            'Cost-effective belting solution with PVC option',
            'Premium durability available with PU option',
            'Meets all food safety standards and certifications',
            'Reduces product slippage improving efficiency',
            'Long belt life reduces replacement frequency',
            'Easy cleaning simplifies sanitation procedures'
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
          description: 'Premium plastic modular belt engineered with open area and raised rib design for superior performance in high-impact environments. Features flat top configurations with exceptional drainage and airflow for wet processing operations.',
          specs: [
            'Flat top, open area, and raised rib configurations available',
            'Engineered to withstand high impact and abrasive wear',
            'Finger plates available for enhanced product grip',
            'Individual module replacement capability',
            'Superior drainage and air circulation design',
            'FDA food-grade approved materials',
            'Complete washdown compatibility',
            'High-speed operation capable',
            'Extended modular belt life'
          ],
          overview: 'Open area modular belts excel in wet processing where drainage and cleaning are paramount. The raised rib design provides superior grip while the open structure enables rapid water removal and product cooling.',
          advantages: [
            { title: 'Superior Drainage', description: 'Open design allows complete water flow through belt' },
            { title: 'Washdown Ready', description: 'Fully cleanable with minimal water pooling' },
            { title: 'Raised Ribs', description: 'Provides excellent product grip without slipping' },
            { title: 'Quick Replacement', description: 'Individual modules replace without full belt removal' },
            { title: 'High-Speed Capable', description: 'Designed for high-throughput operations' },
            { title: 'Air Circulation', description: 'Open design enables rapid air circulation' }
          ],
          applications: [
            'Fruit and vegetable processing operations',
            'Product washing and cleaning lines',
            'Cooling systems with high humidity',
            'Pasteurizer discharge conveying',
            'Cooling line operations',
            'Wet product transport',
            'Chill water operations',
            'Quick-freeze equipment discharge',
            'High-speed processing lines'
          ],
          industries: ['Food & Beverage', 'Produce', 'Bakeries', 'Seafood', 'Meat Processing', 'Beverages'],
          construction: 'Premium plastic modular units with open area design. Raised ribs engineered for grip without slipping. Stainless steel optional for enhanced durability. Easy-to-replace individual modules with tool-free installation.',
          performance: [
            'Enables complete drainage of water and liquids',
            'Maintains product grip at high speeds',
            'Facilitates rapid air and water circulation',
            'Resists wear from abrasive products',
            'Preserves belt integrity through extended cycles'
          ],
          benefits: [
            'Reduces sanitation downtime significantly',
            'Eliminates water pooling improving hygiene',
            'Extends belt life with targeted module replacement',
            'Enables faster processing and cooling',
            'Improves product quality through faster drainage',
            'Reduces cleaning water consumption'
          ],
          features: 'Ideal for fruits/vegetable processing, washing lines, pasteurizers, and cooling lines'
        },
        {
          id: 205,
          name: 'MB-MPB (Heavy Load Modular Belt)',
          image: mbMpbImg,
          images: [mbMpbImg, mbMpb1Img],
          description: 'Heavy-duty plastic modular belt specifically engineered for meat and poultry processing requiring maximum load-bearing capability. Features thick bottom support with optimized sprocket engagement for demanding meat processing conveying tasks.',
          specs: [
            'Heavy-duty construction for demanding applications',
            'Sprocket engagement optimized for high loads',
            'Thick bottom support increases load capacity',
            'Extended service life for continuous operation',
            'Designed specifically for wet environments',
            'Modular replacement system available',
            'Superior load-bearing capability',
            'Food-grade plastic materials',
            'Corrosion-resistant construction'
          ],
          overview: 'Heavy load modular belts are specifically designed for meat and poultry deboning lines where heavy products and sharp debris demand maximum durability. The thick construction provides exceptional strength.',
          advantages: [
            { title: 'Maximum Load Capacity', description: 'Thick support accommodates heavy meat cuts' },
            { title: 'Durable Construction', description: 'Built for continuous heavy-duty operation' },
            { title: 'Optimized Sprockets', description: 'Ensures reliable engagement with heavy loads' },
            { title: 'Easy to Clean', description: 'Water-resistant design enables rapid sanitation' },
            { title: 'Extended Service Life', description: 'Durable materials resist abrasive wear' },
            { title: 'Food Safe', description: 'FDA approved for direct meat contact' }
          ],
          applications: [
            'Meat deboning and cutting lines',
            'Poultry processing operations',
            'Dairy product transportation',
            'Heavy package conveying',
            'Carton and crate handling',
            'Heavy product transfer',
            'Meat packing operations',
            'Continuous processing lines',
            'High-tonnage per hour operations'
          ],
          industries: ['Meat Processing', 'Poultry', 'Dairy', 'Food & Beverage', 'Packaging', 'Manufacturing'],
          construction: 'Premium plastic with heavy-gauge bottom support layer. Thick modular unit design provides superior load capacity. Stainless steel optional for enhanced durability. Precisely machined for reliable sprocket engagement.',
          performance: [
            'Supports heavy meat products without flexing',
            'Maintains consistent belt position under load',
            'Resists sharp objects and debris impact',
            'Preserves sprocket engagement integrity',
            'Delivers years of reliable heavy-duty service'
          ],
          benefits: [
            'Handles heavy processing loads reliably',
            'Reduces belt replacement frequency',
            'Enables maximum throughput per shift',
            'Minimizes downtime from belt failures',
            'Improves processing line efficiency',
            'Reduces overall operational costs'
          ],
          features: 'Perfect for meat deboning/cutting lines, poultry processing, dairy applications, and carton handling'
        },
        {
          id: 206,
          name: 'MB-SMPB (Sanitary Modular Belt)',
          image: mbSmpbImg,
          images: [mbSmpbImg, mbSmpb1Img],
          description: 'Advanced sanitary plastic modular belt with special lock pin arrangement designed for simplified maintenance and minimized bacterial growth. Engineered specifically for tight transfer applications in food-sensitive processing environments.',
          specs: [
            'Special lock pin arrangement for quick maintenance',
            'Minimized bacterial growth design',
            'Optimized for tight transfer applications',
            'Premium food-grade materials',
            'Tool-free disassembly and reassembly',
            'Enhanced hygiene standards throughout',
            'Low-maintenance construction design',
            'Quick-change pin system',
            'Stainless steel options available'
          ],
          overview: 'Sanitary modular belts represent the highest standard in food processing hygiene. The special lock pin arrangement enables quick cleaning without tools while the design minimizes crevices where bacteria can hide.',
          advantages: [
            { title: 'Minimized Bacteria Growth', description: 'Design eliminates hidden growth areas' },
            { title: 'Quick Maintenance', description: 'Special pins enable tool-free disassembly' },
            { title: 'Tight Transfer Ready', description: 'Engineered for close module spacing' },
            { title: 'Superior Sanitation', description: 'Easy complete belt cleaning possible' },
            { title: 'Food Safety Certified', description: 'Meets strictest food contact standards' },
            { title: 'Hygienic Design', description: 'No pinning down bacteria contamination' }
          ],
          applications: [
            'Meat and seafood processing operations',
            'Fruit and vegetable handling',
            'Biscuit and confectionery production',
            'Dairy product processing',
            'Bakery operations',
            'Ready-to-eat meal preparation',
            'Pharmaceutical ingredient handling',
            'Food safety critical operations',
            'Hygiene-sensitive facilities'
          ],
          industries: ['Meat Processing', 'Seafood', 'Produce', 'Bakeries', 'Confectionery', 'Food & Beverage'],
          construction: 'Premium sanitary-grade plastic with special lock pin system. Minimized crevice design throughout. Stainless steel options available for maximum corrosion resistance. Tool-free quick-change mechanisms.',
          performance: [
            'Enables rapid belt sanitation and cleaning',
            'Maintains strict hygiene standards consistently',
            'Resistant to bacterial contamination',
            'Supports quick belt disassembly/reassembly',
            'Preserves sanitary standards through operations'
          ],
          benefits: [
            'Exceeds strict food safety regulations',
            'Reduces sanitation cycle time significantly',
            'Minimizes contamination risks',
            'Enables rapid belt maintenance',
            'Improves overall food safety protocols',
            'Reduces pathogenic contamination incidents'
          ],
          features: 'Essential for meat/seafood processing, fruit/vegetable handling, and biscuit/confectionery production'
        },
        {
          id: 207,
          name: 'MB-2533 (Safety Grid Modular Belt)',
          image: mb2533Img,
          images: [mb2533Img, mb25331Img],
          description: 'Premium safety-focused plastic modular belt with flush grid configuration and rounded edges throughout the entire belt surface. Engineered with special sprocket design to prevent slippage while enhancing load-carrying capacity for diverse food applications.',
          specs: [
            'Flat top and flush grid configuration',
            'Rounded edges across entire belt surface',
            'Special sprocket design prevents belt slip',
            'Enhanced load carrying capability',
            'High-speed operation compatible',
            'Individual modular replacement system',
            'Operator safety-focused design',
            'Food-grade materials throughout'
          ],
          overview: 'Safety grid belts prioritize operator protection with rounded edges eliminating sharp contact points while maintaining exceptional load capacity. The special sprocket design prevents slippage ensuring reliable operation.',
          advantages: [
            { title: 'Operator Safety', description: 'Rounded edges prevent injury from sharp edges' },
            { title: 'Anti-Slip Design', description: 'Special sprockets prevent product slippage' },
            { title: 'High Load Capacity', description: 'Flush grid supports substantial product weight' },
            { title: 'High-Speed Ready', description: 'Engineered for fast processing lines' },
            { title: 'Easy Maintenance', description: 'Quick modular unit replacement available' },
            { title: 'Safe Operation', description: 'Rounded safety design throughout' }
          ],
          applications: [
            'Bakery operations and ovens',
            'Meat and poultry processing',
            'Can handling and transport',
            'Beverage production lines',
            'High-speed processing operations',
            'Confectionery production',
            'Package sorting systems',
            'Heavy product transport',
            'Safety-critical facilities'
          ],
          industries: ['Bakeries', 'Meat Processing', 'Beverages', 'Canning', 'Confectionery', 'Manufacturing'],
          construction: 'Premium plastic with flush grid design and comprehensive rounded edges. Safety-engineered sprocket engagement system. Individual module units enable quick replacement. Food-contact approved materials throughout.',
          performance: [
            'Maintains superior load capacity',
            'Prevents product slippage at high speeds',
            'Provides complete operator safety',
            'Operates reliably in continuous service',
            'Supports long-term uninterrupted operation'
          ],
          benefits: [
            'Reduces operator injury incidents',
            'Prevents product slippage and loss',
            'Enables high-throughput operations',
            'Improves overall workplace safety',
            'Extends belt life with reliable sprocket design',
            'Supports safe high-speed processing'
          ],
          features: 'Ideal for bakery operations, meat/poultry processing, and can handling systems'
        },
        {
          id: 208,
          name: 'MB-S25 (Cooling & Drainage Belt)',
          image: mbS25Img,
          images: [mbS25Img, mbS251Img],
          description: 'Specialized open area plastic modular belt engineered for enhanced cooling and drainage in direct food contact applications. Perfect for processes requiring rapid product cooling or water removal with continuous material flow.',
          specs: [
            'Open area design for enhanced cooling effect',
            'Optimized for direct food contact applications',
            'Excellent moisture removal capability',
            'High-speed operation compatible',
            'FDA food-safe materials certified',
            'Modular construction for easy maintenance',
            'Low-maintenance design philosophy',
            'Water drainage optimized',
            'Stainless steel options available'
          ],
          overview: 'Cooling and drainage belts use open area design to maximize product exposure to air while enabling rapid water removal. Essential for applications where cooling or drying is part of the process.',
          advantages: [
            { title: 'Rapid Cooling', description: 'Open design maximizes air circulation' },
            { title: 'Water Removal', description: 'Excellent drainage prevents water pooling' },
            { title: 'Direct Food Contact', description: 'FDA approved for direct product contact' },
            { title: 'High-Speed Capable', description: 'Supports fast-moving production lines' },
            { title: 'Open Visibility', description: 'Easy to see through for inspection' },
            { title: 'Quick Cleaning', description: 'Water flows through for easy sanitation' }
          ],
          applications: [
            'Fruit and vegetable cooling',
            'Meat and seafood processing',
            'Bakery product cooling',
            'Deep freeze discharge operations',
            'Chilled product transport',
            'Cooling immediately after cooking',
            'Water removal operations',
            'Moisture-sensitive products',
            'Rapid cooling applications'
          ],
          industries: ['Food & Beverage', 'Produce', 'Meat Processing', 'Bakeries', 'Seafood', 'Manufacturing'],
          construction: 'Premium plastic with engineered open area pattern. Maximum water flow-through design. High-speed bearing system support. FDA-approved materials throughout construction.',
          performance: [
            'Enables rapid product cooling',
            'Facilitates complete water drainage',
            'Maintains food safety standards',
            'Supports high-speed continuous operation',
            'Preserves product quality through cooling'
          ],
          benefits: [
            'Reduces product cooling time significantly',
            'Improves product quality through proper cooling',
            'Eliminates water pooling and contamination',
            'Enables faster processing cycles',
            'Reduces energy consumption for cooling',
            'Improves overall product shelf life'
          ],
          features: 'Perfect for fruit/vegetable processing, meat/seafood handling, and deep freeze applications'
        },
        {
          id: 209,
          name: 'MB-S500 (Heavy-Duty Drainage Belt)',
          image: mbS500Img,
          description: 'Heavy-duty open area plastic modular belt engineered specifically for applications requiring maximum drainage and air circulation. Supports both horizontal and inclined conveying with superior product handling characteristics in demanding conditions.',
          specs: [
            'Heavy-duty open area design',
            'Enhanced cooling and draining capability',
            'Direct food contact approved design',
            'Incline-capable construction',
            'Maximum drainage efficiency engineered',
            'FDA-compliant materials throughout',
            'Heavy-duty reinforced structure',
            'Vertical and inclined application support',
            'Extended service life design'
          ],
          overview: 'Heavy-duty drainage belts are engineered for the most demanding applications requiring both heavy load capacity and superior drainage. The open area design maximizes air flow while the reinforced structure handles steep angles.',
          advantages: [
            { title: 'Heavy Load Capacity', description: 'Reinforced design handles substantial weight' },
            { title: 'Superior Drainage', description: 'Open area maximizes water flow through belt' },
            { title: 'Incline Capable', description: 'Supports both horizontal and inclined operation' },
            { title: 'Air Circulation', description: 'Open design enables full air circulation' },
            { title: 'Durability', description: 'Heavy-duty materials resist abrasive wear' },
            { title: 'Food Safe', description: 'FDA approved for direct food contact' }
          ],
          applications: [
            'Fruit and vegetable processing',
            'Seafood handling operations',
            'Inclined product conveying',
            'Heavy product transport',
            'Industrial washing lines',
            'Cooling operations on inclines',
            'Heavy-duty drainage applications',
            'Multi-level processing operations',
            'Extreme drainage requirement applications'
          ],
          industries: ['Food & Beverage', 'Seafood', 'Produce', 'Heavy Processing', 'Manufacturing', 'Waste Management'],
          construction: 'Reinforced plastic with heavy-duty open area design. Thick modular units support vertical/inclined operation. Maximum drainage engineering throughout. Stainless steel options available for corrosive environments.',
          performance: [
            'Handles heavy loads without flexing',
            'Provides complete drainage on all angles',
            'Maintains stability on inclines',
            'Resists abrasive material wear',
            'Operates reliably in continuous service'
          ],
          benefits: [
            'Enables heavy product drainage on inclines',
            'Reduces water pooling and contamination',
            'Supports space-saving inclined layouts',
            'Extends belt life with durable construction',
            'Improves product quality through drainage',
            'Handles heavy processing demands'
          ],
          features: 'Excellent for fruit/vegetable processing, seafood handling, and inclined product handling'
        },
        {
          id: 210,
          name: 'MB-900 (Precision Transfer Belt)',
          image: mb900Img,
          images: [mb900Img, mb9001Img],
          description: 'High-precision plastic modular belt with reduced gap design between interconnected links to prevent product slipping. Features nose bar compatibility and exceptional wear resistance for demanding industrial transfer operations.',
          specs: [
            'Reduced gap between modules prevents product slip',
            'Nose bar tight transfer compatible',
            'Exceptional wear resistance capability',
            'Precision sprocket engagement engineered',
            'Consistent spacing throughout belt',
            'Modular unit replacement available',
            'Extended service intervals design',
            'Food-grade plastic certified',
            'High-speed operation capable'
          ],
          overview: 'Precision transfer belts are engineered for applications where product transfers must be perfectly controlled and products cannot slip. The reduced gap design ensures tight product control without damage.',
          advantages: [
            { title: 'No Product Slipping', description: 'Reduced gap prevents product movement' },
            { title: 'Nose Bar Compatible', description: 'Supports tight transfer operations' },
            { title: 'Wear Resistant', description: 'Handles glass bottles and hard products' },
            { title: 'Precision Spacing', description: 'Consistent module spacing throughout' },
            { title: 'Quick Replacement', description: 'Modular units replace without belt removal' },
            { title: 'Extended Life', description: 'Durability reduces replacement frequency' }
          ],
          applications: [
            'Glass bottle case packing operations',
            'Bearing conveying systems',
            'Check weigher line integration',
            'Metal detector line applications',
            'Seafood handling operations',
            'Precision transfer operations',
            'High-speed filling lines',
            'Can handling systems',
            'Precision product positioning'
          ],
          industries: ['Beverages', 'Glass, Packaging', 'Food & Beverage', 'Seafood', 'Manufacturing', 'Pharmaceutical'],
          construction: 'Premium plastic modular units with engineered reduced gap design. Precision-cut links ensure consistent spacing. Stainless steel optional for enhanced durability. Special bearing support for precise product control.',
          performance: [
            'Prevents product slipping at all speeds',
            'Maintains precise product positioning',
            'Handles hard products without damage',
            'Supports tight nose bar transfer',
            'Resists wear from hard contact surfaces'
          ],
          benefits: [
            'Eliminates product slipping and loss',
            'Enables precise product positioning',
            'Supports tight transfer operations',
            'Extends belt life with wear resistance',
            'Reduces product damage in transfer',
            'Improves overall process precision'
          ],
          features: 'Ideal for glass bottle case packing, bearing conveying, check weigher lines, metal detectors, and seafood handling'
        },
        {
          id: 211,
          name: 'MB-940 (Turning/Curve Belt)',
          image: mb940Img,
          description: 'Specialized plastic modular belt engineered specifically for curved conveyor sections enabling smooth direction changes. Maintains product integrity and orientation during multi-directional production line routing.',
          specs: [
            'Designed specifically for curved conveyor sections',
            'Smooth turning capability without slipping',
            'Maintains product orientation during curves',
            'Flexible modular construction',
            'Supports various curve radius options',
            'Multi-directional routing compatible',
            'Food-grade plastic materials',
            'Reduced gap design for control',
            'Extended service life on curves'
          ],
          overview: 'Turning belts enable smooth direction changes in production lines without requiring product transfer points. This reduces handling, damage, and throughput delays in multi-directional processing.',
          advantages: [
            { title: 'Smooth Direction Changes', description: 'Curved design enables tight radius turns' },
            { title: 'Product Orientation', description: 'Maintains product position through curves' },
            { title: 'No Transfer Points', description: 'Eliminates need for product re-orientation' },
            { title: 'Flexible Routing', description: 'Adapts to various curve radius requirements' },
            { title: 'Reduced Slipping', description: 'Special design prevents product movement' },
            { title: 'Extended Life', description: 'Durable on curves reduces replacement' }
          ],
          applications: [
            'Production line direction changes',
            'Multi-level facility routing',
            'Curved filling line sections',
            'Packaging facility turns',
            'Assembly line direction changes',
            'Sorting operation curves',
            'Distribution center routing',
            'Manufacturing floor optimization',
            'Flexible production line design'
          ],
          industries: ['Manufacturing', 'Food & Beverage', 'Packaging', 'Pharmaceuticals', 'Automotive', 'Assembly'],
          construction: 'Engineered modular plastic with specialized curve design. Flexible links support smooth radius bending. Stainless steel optional for enhanced durability. Precision sprocket engagement throughout curves.',
          performance: [
            'Enables smooth direction changes',
            'Maintains product orientation through curves',
            'Prevents slipping on curved sections',
            'Supports high-speed curve operations',
            'Delivers reliable extended service'
          ],
          benefits: [
            'Eliminates need for transfer points',
            'Reduces product damage in direction changes',
            'Enables compact production floor layouts',
            'Improves overall production efficiency',
            'Simplifies facility reconfiguration',
            'Reduces throughput delays'
          ],
          features: 'Enables smooth directional changes in production lines'
        },
        {
          id: 212,
          name: 'MB-1000 (Versatile Food Processing Belt)',
          image: mb1000Img,
          images: [mb1000Img, mb10001Img],
          description: 'Versatile open area plastic modular belt delivering enhanced cooling and drainage for diverse food processing operations. Engineered for consistent hygienic performance across various industries requiring continuous material handling with optimal product protection.',
          specs: [
            'Open area design maximizes cooling and drainage',
            'Direct food contact approved materials',
            'Versatile application design philosophy',
            'FDA food-safety certified materials',
            'High-speed operation compatible',
            'Easy individual module replacement',
            'Superior drainage efficiency throughout',
            'Extended service life capability',
            'Multiple industry compatible'
          ],
          overview: 'Versatile belts are engineered to perform across a wide range of food processing applications while maintaining superior drainage and cooling characteristics. The modular design provides maximum flexibility.',
          advantages: [
            { title: 'Multi-Application Use', description: 'Works across diverse processing operations' },
            { title: 'Enhanced Drainage', description: 'Open design promotes water removal' },
            { title: 'Excellent Cooling', description: 'Air circulation supports rapid product cooling' },
            { title: 'Food Safe', description: 'FDA approved for all food contact' },
            { title: 'Modular Design', description: 'Quick replacement of individual modules' },
            { title: 'High-Speed Ready', description: 'Supports fast processing lines' }
          ],
          applications: [
            'Fruit and vegetable processing',
            'Meat and seafood handling',
            'Bottle and carton conveyance',
            'Shrink wrapping operations',
            'Cooling line discharge',
            'Packaging facility routing',
            'Multi-purpose food processing',
            'Beverage production lines',
            'Mixed product handling'
          ],
          industries: ['Food & Beverage', 'Produce', 'Meat Processing', 'Packaging', 'Beverages', 'Manufacturing'],
          construction: 'Premium plastic modular design with open area configuration. Optimized water flow-through engineering. Food-grade materials throughout. Precision module connections for reliable operation.',
          performance: [
            'Provides enhanced cooling and drainage consistently',
            'Maintains product integrity through gentle handling',
            'Supports high-speed continuous operation',
            'Operates reliably across diverse products',
            'Preserves food safety standards throughout'
          ],
          benefits: [
            'Eliminates need for multiple belt types',
            'Reduces belt inventory costs',
            'Improves cooling efficiency across operations',
            'Enables rapid sanitation cycles',
            'Supports facility flexibility for product changes',
            'Extends belt life through reliable design'
          ],
          features: 'Suitable for fruit/vegetable processing, meat/seafood handling, bottle/carton conveyance, and shrink wrapping'
        },
        {
          id: 213,
          name: 'MB-2120 (Lightweight Precision Belt)',
          image: mb21201Img,
          images: [mb21201Img, mb21202Img],
          description: 'Lightweight plastic modular belt featuring specialized reduced gap link design for precise product control and prevention of slipping. Engineered specifically for nose bar tight transfer applications with exceptional wear resistance.',
          specs: [
            'Reduced gap between links prevents product slip',
            'Nose bar tight transfer compatible',
            'Exceptional wear resistance capability',
            'Lightweight modular construction',
            'Precision product control design',
            'Extended durability and service life',
            'High-speed operation capable',
            'Quick module replacement available',
            'Food-grade materials certified'
          ],
          overview: 'Lightweight precision belts combine the advantages of modular construction with the control of reduced-gap design. Perfect for applications where product slipping cannot be tolerated but weight must be minimized.',
          advantages: [
            { title: 'Prevents Slipping', description: 'Reduced gap design prevents product movement' },
            { title: 'Lightweight Design', description: 'Reduces installation and operation costs' },
            { title: 'Nose Bar Compatible', description: 'Supports tight transfer operations' },
            { title: 'Wear Resistant', description: 'Handles high-speed operations reliably' },
            { title: 'High Speed Ready', description: 'Optimized for fast-moving lines' },
            { title: 'Precise Control', description: 'Maintains exact product positioning' }
          ],
          applications: [
            'Glass bottle case packing operations',
            'Shrink wrapping line operations',
            'Lightweight product handling',
            'High-speed light-load conveyance',
            'Precision transfer operations',
            'Beverage bottle handling',
            'Can and container packing',
            'Lightweight food products',
            'Packaging line operations'
          ],
          industries: ['Beverages', 'Packaging', 'Food & Beverage', 'Manufacturing', 'Light Assembly', 'E-Commerce'],
          construction: 'Premium lightweight plastic modules with precision-engineered reduced gap design. Stainless steel optional for enhanced durability. Special bearing support for high-speed operation. Tool-free module replacement system.',
          performance: [
            'Prevents product slipping at high speeds',
            'Maintains precise product positioning',
            'Operates reliably in continuous service',
            'Supports extended high-speed operation',
            'Resists wear from abrasive products'
          ],
          benefits: [
            'Eliminates product loss from slipping',
            'Reduces operational weight and costs',
            'Enables high-speed precise operation',
            'Extends belt life through durability',
            'Improves product handling accuracy',
            'Supports tight transfer applications'
          ],
          features: 'Ideal for glass bottle case packing, shrink wrapping operations, and lightweight product handling'
        }
      ]
    },
    'compound-balanced-weave': {
      title: 'Compound Balanced Weave Belts',
      description: 'Premium balanced weave belts engineered for various applications requiring superior tensile strength and durability',
      products: [
        {
          id: 214,
          name: 'LK-6 (Heavy-Duty Stripper Belt)',
          image: lk6BeltImg,
          description: 'Heavy-duty 6mm compound balanced weave belt engineered for extreme industrial conditions. Features superior tensile strength and uniform surface for reliable performance in demanding applications.',
          specs: [
            'Thickness: 6mm professional grade',
            'Exceptional tensile strength capacity',
            'Excellent balance characteristics',
            'Uniform surface throughout',
            'Extended durability design',
            'Professional-grade materials',
            'Custom finish options available',
            'Heavy-load capable',
            'Extended service intervals'
          ],
          overview: 'Heavy-duty stripper belts are designed for the most demanding industrial applications where strength and reliability are essential. The 6mm thickness provides superior load capacity.',
          advantages: [
            { title: 'Maximum Strength', description: 'Heavy 6mm gauge handles extreme loads' },
            { title: 'Professional Grade', description: 'Built to highest standards for industry' },
            { title: 'Balanced Design', description: 'Uniform weave ensures even performance' },
            { title: 'Extended Life', description: 'Durable materials resist premature wear' },
            { title: 'Customizable', description: 'Available with custom finish options' },
            { title: 'Industrial Proven', description: 'Trusted in extreme conditions' }
          ],
          applications: [
            'Mining and quarry operations',
            'Heavy machinery drive systems',
            'Industrial crusher operations',
            'Extreme temperature applications',
            'Heavy aggregate handling',
            'Power plant applications',
            'Heavy-duty drive belts',
            'Extreme wear environments',
            'Maximum load applications'
          ],
          industries: ['Mining', 'Heavy Industry', 'Power Plants', 'Manufacturing', 'Quarrying', 'Industrial'],
          construction: 'Premium 6mm compound balanced weave with exceptional tensile strength. Multi-layer fabric construction for durability. Professional-grade rubber cover with optional custom finishes. Heavy-duty edge binding throughout.',
          performance: [
            'Delivers maximum tensile strength performance',
            'Maintains consistent performance under extreme loads',
            'Resists wear in harsh abrasive conditions',
            'Operates reliably in extreme temperatures',
            'Preserves strength throughout belt life'
          ],
          benefits: [
            'Handles maximum load requirements',
            'Extends belt life in extreme conditions',
            'Reduces replacement frequency',
            'Improves operational reliability',
            'Minimizes downtime from failures',
            'Proven in most demanding applications'
          ],
          features: 'For demanding industrial applications'
        },
        {
          id: 215,
          name: 'LK-3 (Standard Balanced Weave Belt)',
          image: lk3BeltImg,
          description: 'Standard 3mm compound balanced weave belt for general industrial use. Engineered with medium tensile strength and balanced characteristics suitable for wide range of applications.',
          specs: [
            'Thickness: 3mm standard gauge',
            'Medium tensile strength design',
            'Good balance characteristics',
            'Cost-effective solution',
            'Wide application range',
            'Reliable performance standard',
            'Easy maintenance design',
            'General-purpose construction',
            'Industry-standard sizing'
          ],
          overview: 'Standard balanced weave belts provide economical strength and reliability for most general industrial applications. The 3mm gauge delivers performance without excessive cost.',
          advantages: [
            { title: 'Cost-Effective', description: 'Economical choice for general use' },
            { title: 'Balanced Strength', description: 'Adequate for most applications' },
            { title: 'Wide Compatibility', description: 'Works across diverse industries' },
            { title: 'Reliable Performance', description: 'Proven standard for general operations' },
            { title: 'Easy Maintenance', description: 'Simple installation and service' },
            { title: 'Standard Sizing', description: 'Readily available standard options' }
          ],
          applications: [
            'General manufacturing operations',
            'Standard conveyor systems',
            'Drive belt applications',
            'Agricultural machinery',
            'Light industrial equipment',
            'Standard processing operations',
            'General material handling',
            'Routine industrial applications',
            'Cost-conscious operations'
          ],
          industries: ['Manufacturing', 'Agriculture', 'General Industry', 'Processing', 'Material Handling', 'Light Industrial'],
          construction: 'Standard 3mm compound balanced weave with reliable fabric construction. Balanced rubber cover for consistent performance. Standard edge binding. Professional manufacturing standards.',
          performance: [
            'Provides balanced strength for general use',
            'Maintains consistent performance',
            'Resists normal industrial wear',
            'Operates reliably under standard loads',
            'Delivers predictable service life'
          ],
          benefits: [
            'Offers best value for general applications',
            'Reduces belt inventory needs',
            'Simplifies maintenance procedures',
            'Provides reliable equipment operation',
            'Extends belt life with balanced design',
            'Minimizes operational costs'
          ],
          features: 'Versatile choice for various industries'
        },
        {
          id: 216,
          name: 'LK-4 (Premium Balanced Weave Belt)',
          image: lk4BeltImg,
          description: 'Premium 4mm compound balanced weave belt engineered for optimal balanced performance. Offers excellent durability and wear resistance with professional-grade materials for most demanding applications.',
          specs: [
            'Thickness: 4mm premium gauge',
            'Balanced tensile strength capacity',
            'Excellent durability characteristics',
            'Optimal wear resistance design',
            'Professional-grade materials',
            'Smooth operation guarantee',
            'Extended lifespan design',
            'Premium manufacturing standards',
            'Versatile application support'
          ],
          overview: 'Premium balanced weave belts represent the ideal choice for most industrial applications, offering superior performance at reasonable cost. The 4mm gauge provides optimal balance of strength and flexibility.',
          advantages: [
            { title: 'Optimal Balance', description: 'Perfect balance of strength and economy' },
            { title: 'Premium Quality', description: 'Superior materials and construction' },
            { title: 'Extended Life', description: 'Durable design maximizes service life' },
            { title: 'Excellent Wear Resistance', description: 'Handles abrasive conditions well' },
            { title: 'Smooth Operation', description: 'Quiet and smooth running' },
            { title: 'All-Around Choice', description: 'Works across most industries' }
          ],
          applications: [
            'Most general industrial applications',
            'Standard manufacturing operations',
            'Agricultural and farm equipment',
            'Medium-duty conveyor systems',
            'Industrial drive applications',
            'Processing equipment',
            'Material handling systems',
            'Standard machinery operation',
            'Universal industrial use'
          ],
          industries: ['Manufacturing', 'Agriculture', 'General Industry', 'Processing', 'Materials Handling', 'Machinery'],
          construction: 'Premium 4mm compound balanced weave with superior fabric quality. High-grade rubber cover with excellent wear resistance. Professional-grade edge binding. Premium manufacturing throughout.',
          performance: [
            'Delivers balanced strength performance',
            'Extends service life significantly',
            'Resists wear and degradation',
            'Operates smoothly and quietly',
            'Maintains performance throughout life'
          ],
          benefits: [
            'Best overall choice for value',
            'Extends equipment operating life',
            'Minimizes replacement frequency',
            'Reduces total cost of ownership',
            'Improves operational reliability',
            'Simplifies maintenance procedures'
          ],
          features: 'Best all-around choice for most applications'
        },
        {
          id: 218,
          name: 'Chain Link Belt',
          image: chainLinkImg,
          description: 'Heavy-duty chain link design conveyor belt for extreme heavy-duty industrial transport and harsh conditions. Features multiple chain configuration options with superior load capacity and flexibility.',
          specs: [
            'Heavy-duty chain link construction',
            'Multiple chain configuration options',
            'Maximum load capacity rating',
            'Flexible routing capability',
            'Low maintenance design',
            'Extended service intervals',
            'Stainless steel optional',
            'Industrial-grade strength',
            'Proven durability record'
          ],
          overview: 'Chain link belts combine the strength of chain drive with the flexibility of belt conveyors. These systems are the workhorse of heavy industry handling extreme loads and harsh conditions.',
          advantages: [
            { title: 'Maximum Load Capacity', description: 'Handles extreme heavy loads reliably' },
            { title: 'Flexible Routing', description: 'Adapts to various facility layouts' },
            { title: 'Minimal Maintenance', description: 'Durable design requires little upkeep' },
            { title: 'Long Service Life', description: 'Extends intervals between replacement' },
            { title: 'Heavy-Duty Construction', description: 'Built for most extreme conditions' },
            { title: 'Proven Reliability', description: 'Trusted in heaviest industries' }
          ],
          applications: [
            'Heavy machinery drive systems',
            'Mining and quarry operations',
            'Steel mill applications',
            'Power plant equipment',
            'Heavy aggregate handling',
            'Extreme load transport',
            'Harsh environment operation',
            'Maximum-duty applications',
            'Industrial equipment drive'
          ],
          industries: ['Mining', 'Steel Mills', 'Power Plants', 'Heavy Industry', 'Quarrying', 'Manufacturing'],
          construction: 'Industrial-grade chain links with precision engineering. Multiple chain options for load distribution. Heavy-duty frame construction throughout. Stainless steel available for corrosive environments.',
          performance: [
            'Delivers maximum load-carrying capacity',
            'Maintains constant tension under load',
            'Operates reliably in harsh conditions',
            'Preserves integrity under extreme stress',
            'Delivers decades of service'
          ],
          benefits: [
            'Handles maximum load requirements',
            'Minimizes downtime from failures',
            'Extends operational equipment life',
            'Reduces replacement frequency',
            'Improves facility reliability',
            'Proven in world\'s toughest applications'
          ],
          features: 'Workhorse for heavy industry'
        },
        {
          id: 219,
          name: 'Duplex Conveyor Belt',
          image: duplexImg,
          description: 'Premium duplex construction conveyor belt with dual-layer design engineered for superior performance in demanding environments. Features maximum durability with enhanced grip and extended service lifespan.',
          specs: [
            'Duplex dual-layer construction',
            'Maximum durability design',
            'Enhanced grip characteristics',
            'Extended service lifespan',
            'Professional-grade materials',
            'Multiple cover options',
            'Superior wear resistance',
            'Reinforced edge binding',
            'Premium manufacturing standards'
          ],
          overview: 'Duplex belts represent the premium solution for the most demanding environments where reliability cannot be compromised. The dual-layer construction provides unmatched durability and performance.',
          advantages: [
            { title: 'Maximum Durability', description: 'Dual layers ensure extreme reliability' },
            { title: 'Enhanced Grip', description: 'Superior friction prevents slipping' },
            { title: 'Extended Lifespan', description: 'Serves longer than single-layer belts' },
            { title: 'Premium Quality', description: 'Best materials throughout construction' },
            { title: 'Professional Grade', description: 'Meets highest industry standards' },
            { title: 'Superior Performance', description: 'Excels in most demanding applications' }
          ],
          applications: [
            'Extreme heavy-duty industrial applications',
            'Harsh chemical environments',
            'Extreme temperature applications',
            'Maximum-stress operations',
            'Critical reliability requirements',
            'Specialized industrial processing',
            'Mission-critical equipment',
            'Harsh outdoor conditions',
            'Premium reliability applications'
          ],
          industries: ['Heavy Industry', 'Chemicals', 'Mining', 'Power Plants', 'Steel Mills', 'Specialized Manufacturing'],
          construction: 'Premium duplex dual-layer construction with superior fabric and rubber materials. Reinforced throughout for maximum strength. Multiple cover options available. Professional-grade manufacturing standards applied throughout.',
          performance: [
            'Delivers superior performance consistently',
            'Exceeds standard durability expectations',
            'Maintains grip in severe conditions',
            'Preserves integrity through extreme stress',
            'Extends service life dramatically'
          ],
          benefits: [
            'Provides ultimate reliability solution',
            'Minimizes unplanned downtime',
            'Extends equipment service life',
            'Reduces total cost of ownership',
            'Ensures mission-critical operation',
            'Justifies premium investment'
          ],
          features: 'Premium solution for demanding environments'
        },
      ]
    },
    'specialty-belts': {
      title: 'Specialty Belts',
      description: 'Complete range of specialized belting solutions engineered for unique and demanding applications',
      products: [
        {
          id: 206,
          name: 'Timing Belt',
          image: timingBeltImg,
          description: 'Precision timing belts engineered for synchronized drive applications requiring exact positioning and load transmission.',
          specs: [
            'Precise synchronization throughout operation',
            'Low stretch design for consistency',
            'Multiple pitch options available',
            'High efficiency power transfer',
            'Quiet operation characteristic',
            'Extended service life design',
            'Toothed profile options',
            'Customizable length options'
          ],
          overview: 'Timing belts provide precise synchronous power transmission eliminating slippage. Essential in applications requiring exact speed and position control.',
          advantages: [
            { title: 'Precise Synchronization', description: 'Maintains exact speed ratios without slippage' },
            { title: 'Low Maintenance', description: 'No lubrication required reducing complications' },
            { title: 'Quiet Operation', description: 'Silent running creates better working environment' },
            { title: 'Efficient Power Transfer', description: 'Minimizes energy loss in transmission' },
            { title: 'Long Service Life', description: 'Durable construction extends operating life' },
            { title: 'Compact Design', description: 'Fits tight spaces reducing installation complexity' }
          ],
          applications: ['Textile machinery', 'Printing equipment', 'Packaging machinery', 'Motor drive systems', 'Precision machinery', 'Automation equipment'],
          industries: ['Textiles', 'Printing', 'Packaging', 'Manufacturing', 'Machinery', 'Industrial Automation'],
          construction: 'Reinforced polyurethane or rubber with tensile cord construction. Precisely molded teeth ensure exact spacing. Wear-resistant cover materials throughout.',
          performance: ['Maintains exact synchronization without drift', 'Operates at high speeds reliably', 'Resists abrasive wear effectively', 'Preserves tensile strength throughout life'],
          benefits: ['Enables precise manufacturing processes', 'Reduces product quality variations', 'Minimizes maintenance interventions', 'Extends equipment operating life'],
          features: 'Essential for precision mechanical systems'
        },
        {
          id: 207,
          name: 'Coil Wrapper Belt',
          image: coilWrapperImg,
          description: 'Specialized belts engineered for coil wrapping and positioning applications in metal processing industries.',
          specs: [
            'Exceptional wear resistance capability',
            'Consistent tension throughout operation',
            'High thermal stability design',
            'Quiet operation operation',
            'Custom profile configurations',
            'Extended service intervals',
            'Temperature stable design'
          ],
          overview: 'Coil wrapper belts are engineered for metal coil handling where consistent tension and wear resistance are critical.',
          advantages: [
            { title: 'High Wear Resistance', description: 'Handles coil edges and sharp objects' },
            { title: 'Consistent Tension', description: 'Maintains even pressure throughout operation' },
            { title: 'Thermal Stability', description: 'Resists heat from hot coils and processes' },
            { title: 'Quiet Operation', description: 'Minimizes noise in processing facilities' },
            { title: 'Custom Profiles', description: 'Tailored for specific coil types' },
            { title: 'Long Service Life', description: 'Durable design extends replacement intervals' }
          ],
          applications: ['Coil wrapping', 'Metal processing', 'Textile machinery', 'Paper industries', 'Film processing', 'Industrial applications'],
          industries: ['Metals', 'Textiles', 'Paper', 'Manufacturing', 'Film Production', 'Industrial'],
          construction: 'Premium rubber with reinforced fabric layers. Custom profile engineering for coil fit. Wear-resistant cover materials.',
          performance: ['Resists wear from coil contact', 'Maintains consistent tension', 'Handles temperature variations', 'Preserves integrity under load'],
          benefits: ['Extends coil handling equipment life', 'Reduces material waste', 'Minimizes downtime', 'Improves operational efficiency'],
          features: 'Used in metal and textile industries'
        },
        {
          id: 208,
          name: 'Textile Printing Belt',
          image: textilePrintingImg,
          description: 'Specialized belts engineered for textile printing and dyeing applications requiring chemical resistance and thermal stability.',
          specs: [
            'Resistant to dyes and chemical solutions',
            'High temperature tolerance to 150°C',
            'Smooth surface finish for print quality',
            'Extended service life design',
            'Easy cleaning between production runs',
            'Custom sizing and widths available',
            'Chemical-resistant materials'
          ],
          overview: 'Textile printing belts are engineered to withstand constant exposure to dyes, chemicals, and heat while maintaining perfect surface quality.',
          advantages: [
            { title: 'Chemical Resistant', description: 'Withstands dyes and processing chemicals' },
            { title: 'Temperature Stable', description: 'Maintains integrity at elevated temperatures' },
            { title: 'Smooth Surface', description: 'Ensures perfect fabric print quality' },
            { title: 'Easy Cleaning', description: 'Simplifies sanitation between dye lots' },
            { title: 'Extended Life', description: 'Resists degradation from chemical exposure' },
            { title: 'Custom Options', description: 'Tailored dimensions for specific looms' }
          ],
          applications: ['Textile printing', 'Fabric dyeing', 'Textile processing', 'Print finishing', 'Fabric handling', 'Color processing'],
          industries: ['Textiles', 'Fabric', 'Printing', 'Fashion', 'Apparel', 'Industrial Textiles'],
          construction: 'Chemical-resistant polymer with smooth finish. Durable fabric reinforcement. High-temperature rubber compounds.',
          performance: ['Resists dye and chemical attack', 'Maintains surface quality', 'Handles thermal cycling', 'Preserves elasticity through operations'],
          benefits: ['Ensures perfect print quality', 'Reduces dye lot waste', 'Extends equipment life', 'Minimizes color defects'],
          features: 'Industry standard for textile processing'
        },
        {
          id: 209,
          name: 'Battery Grid Pasting Belt',
          image: gridPlasticImg,
          description: 'Specialized open grid design conveyor belt for drainage and ventilation in battery manufacturing and chemical processing.',
          specs: [
            'Open drainage grid structure',
            'Excellent airflow characteristics',
            'Washdown resistant design',
            'Lightweight modular construction',
            'Easy cleaning and maintenance',
            'FDA food-grade compliant',
            'Chemical resistant materials'
          ],
          overview: 'Grid pasting belts provide drainage and ventilation for applications requiring both product support and complete airflow.',
          advantages: [
            { title: 'Complete Drainage', description: 'Open design prevents liquid pooling' },
            { title: 'Excellent Airflow', description: 'Full air circulation through grid' },
            { title: 'Easy Cleaning', description: 'Liquid drains through grid system' },
            { title: 'Lightweight', description: 'Reduces installation and operation costs' },
            { title: 'Washdown Safe', description: 'Fully water-resistant design' },
            { title: 'Durable Grid', description: 'Extended service life in wet conditions' }
          ],
          applications: ['Battery paste processing', 'Chemical washing', 'Fruit/vegetable washing', 'Metal finishing', 'Parts washing', 'Drainage applications'],
          industries: ['Batteries', 'Chemicals', 'Food Processing', 'Metal Finishing', 'Manufacturing', 'Processing'],
          construction: 'Premium plastic grid construction with open area design. Stainless steel or plastic frame support. Maximum drainage engineering.',
          performance: ['Complete liquid drainage through grid', 'Supports airflow throughout operation', 'Withstands washdown cycles', 'Resists chemical attack'],
          benefits: ['Eliminates water pooling', 'Reduces contamination risks', 'Enables rapid cleaning', 'Extends equipment life'],
          features: 'Perfect for washing and drying operations'
        },
        {
          id: 211,
          name: 'High Temperature Felt Belt',
          image: highTempFeltImg,
          description: 'Premium felt belts engineered for extreme high-temperature processing operations requiring thermal insulation and flame resistance.',
          specs: [
            'Temperature capability up to 500°C',
            'Excellent thermal insulation properties',
            'Flame resistant certified materials',
            'Superior thermal stability design',
            'Extended service life in heat',
            'Multiple thickness options available',
            'Customizable widths and lengths'
          ],
          overview: 'High-temperature felt belts are engineered for applications where direct heat exposure is unavoidable, providing thermal protection and process support.',
          advantages: [
            { title: 'Extreme Temperature', description: 'Withstands up to 500°C continuously' },
            { title: 'Thermal Insulation', description: 'Protects equipment from heat transfer' },
            { title: 'Flame Resistant', description: 'Certified for safety in heat operations' },
            { title: 'Thermal Stability', description: 'Maintains properties at elevated temps' },
            { title: 'Long Service Life', description: 'Durable materials resist thermal degradation' },
            { title: 'Multiple Thickness', description: 'Choose insulation level for application' }
          ],
          applications: ['Heat treatment', 'Biscuit baking', 'Industrial ovens', 'Ceramic firing', 'Metal heat treatment', 'Thermal processing'],
          industries: ['Bakeries', 'Ceramics', 'Metal Working', 'Heat Treatment', 'Manufacturing', 'Industrial Thermal'],
          construction: 'Premium ceramic fiber felt with high-temperature binder. Multiple layers for thermal insulation. Flame-resistant materials throughout.',
          performance: ['Withstands extreme temperatures', 'Provides thermal insulation', 'Resists thermal degradation', 'Maintains structural integrity in heat'],
          benefits: ['Enables high-temperature operations', 'Protects adjacent equipment', 'Reduces heat-related damage', 'Extends operational capability'],
          features: 'Essential for heat treatment and baking industries'
        },
        {
          id: 217,
          name: 'Double Lock Conveyor Belt',
          image: doubleLockImg,
          description: 'Premium double-lock design conveyor belt engineered for maximum safety and superior performance in critical applications.',
          specs: [
            'Double-stitched edge construction',
            'Extreme durability design',
            'Safety certified construction',
            'Maximum load capacity',
            'Extended service life',
            'Professional-grade materials',
            'Reinforced throughout',
            'Certified safety standards'
          ],
          overview: 'Double-lock belts represent the highest safety standard with reinforced edge locking preventing belt slippage and ensuring reliable operation.',
          advantages: [
            { title: 'Maximum Safety', description: 'Double-lock prevents accidental slippage' },
            { title: 'Extreme Durability', description: 'Double-stitched construction extends life' },
            { title: 'Certified Safe', description: 'Meets highest safety standards' },
            { title: 'High Load Capacity', description: 'Handles maximum operational loads' },
            { title: 'Professional Grade', description: 'Premium materials throughout construction' },
            { title: 'Reliable Performance', description: 'Proven in critical operations' }
          ],
          applications: ['Critical safety operations', 'High-load conveying', 'Precision processes', 'Heavy-duty applications', 'Mission-critical systems', 'Safety-critical operations'],
          industries: ['Heavy Industry', 'Manufacturing', 'Defense', 'Aerospace', 'Critical Systems', 'Safety Industries'],
          construction: 'Premium materials with double-lock edge design. Reinforced stitching throughout. Certified construction methods. Safety-grade materials exclusively.',
          performance: ['Prevents edge separation', 'Maintains integrity under load', 'Operates reliably continuously', 'Exceeds standard safety requirements'],
          benefits: ['Ensures maximum operational safety', 'Extends belt service life', 'Reduces operational risks', 'Meets critical safety standards'],
          features: 'Top-tier option for critical applications'
        },
      ]
    }
  };

  // Industrial Rollers Products
  const industrialRollers = {
    'troughing-idlers': {
      title: 'Troughing Idlers',
      description: 'High-performance rollers for supporting conveyor belts in troughed positions for bulk material handling',
      products: [
        {
          id: 301,
          name: 'Troughing Idler',
          image: troughingIdler1Img,
          images: [troughingIdler1Img, troughingIdler2Img, troughingIdler3Img],
          description: 'Precision-engineered troughing idlers designed to hold and direct conveyor belts in a troughed position to prevent spillage and ensure optimal material handling. Built with high-quality materials and advanced engineering, our troughing idlers deliver superior performance in demanding industrial applications.',
          specs: [
            'Belt Width Compatibility: 400-2000mm',
            'Available in 20°, 25°, 30°, 35° troughing angles',
            'Roller Diameter: 76mm, 89mm, 114mm',
            'Shaft Diameter: 20mm, 25mm',
            'Bearing Types: 6204, 6304, 6205',
            'Load Capacity: Light to Heavy duty (up to 2000 TPH)',
            'Sealing: Labyrinth type, dust & waterproof',
            'Working Temperature: 20°C to +80°C',
            'Low noise operation - 30 dB',
            'Customizable frame designs available'
          ],
          overview: 'Movo Belting Industries manufactures high-performance troughing idlers with precision engineering. Our idlers are designed to maintain proper belt positioning, minimize spillage, and extend conveyor belt life in the harshest conditions.',
          advantages: [
            { title: 'Durability & Longevity', description: 'Extended service life reduces belt wear and increases system reliability' },
            { title: 'High Load Capacity', description: 'Engineered to handle light, medium, and heavy-duty material flows' },
            { title: 'Low Noise & Vibration', description: 'Smooth rotation ensures quiet, efficient conveyor operation' },
            { title: 'Corrosion Resistant', description: 'Advanced coatings provide protection in harsh environments' },
            { title: 'Easy Maintenance', description: 'Simplified design for quick servicing and minimal downtime' },
            { title: 'Customization Available', description: 'Tailored solutions for specific belt widths and angles' }
          ],
          applications: [
            'Bulk material handling systems',
            'Mining and quarry operations',
            'Cement and limestone conveying',
            'Coal handling applications',
            'Thermal power plant systems',
            'Fertilizer and chemical transportation',
            'Stone crushers and screening plants',
            'Steel plant operations',
            'Biomass handling systems'
          ],
          industries: ['Mining', 'Cement', 'Power Plants', 'Steel', 'Fertilizer', 'Coal Handling', 'Quarries'],
          construction: 'Manufactured using high-grade mild steel pipes (IS 1239, IS 9295) with precision-engineered shafts. Deep groove ball bearings ensure smooth rotation with minimal friction. Multi-layer sealing systems protect bearings from dust, moisture, and contaminants.',
          performance: [
            'Consistent troughing angle maintains optimal belt position',
            'Precision-engineered rollers reduce friction and energy consumption',
            'Heavy-duty construction withstands extreme loads and shock impacts',
            'Low-noise operation minimizes workplace disturbances',
            'Extended bearing life through advanced sealing technology'
          ],
          benefits: [
            'Reduces spillage and material loss during transport',
            'Extends conveyor belt service life significantly',
            'Minimizes maintenance costs through durable construction',
            'Improves overall conveyor system efficiency',
            'Operates in extreme temperature and humidity conditions',
            'Easily customized for various industrial applications'
          ]
        }
      ]
    },
    'carrying-rollers': {
      title: 'Carrying Rollers',
      description: 'Heavy-duty rollers for efficient material support and transportation on conveyor systems',
      products: [
        {
          id: 302,
          name: 'Carrying Roller',
          image: carryingRoller1Img,
          images: [carryingRoller1Img, carryingRoller2Img],
          description: 'Premium carrying rollers manufactured by Movo Belting Industries for efficient belt support and smooth material transport. Designed for low-noise, minimal vibration operation with maximum durability across mining, cement, steel, and material handling industries.',
          specs: [
            'Belt Width Compatibility: 800-900mm',
            'Pipe Length: 300mm',
            'Shaft Length: 330mm',
            'Roller Diameter: 114mm',
            'Shaft Diameter: 20mm',
            'Load Capacity: 500kg',
            'Bearing Type: 6304',
            'Sealing: Dustproof arrangement',
            'Material: IS1239/IS9295 steel pipe',
            'Coating: Synthetic enamel paint',
            'Working Temperature: Up to 80°C'
          ],
          overview: 'High-quality carrying rollers designed for heavy-duty conveyor operations. Our rollers feature wear-resistant and corrosion-resistant construction for long-term reliability in demanding industrial environments.',
          advantages: [
            { title: 'Heavy-Duty Construction', description: 'Built to handle continuous operation in demanding industrial settings' },
            { title: 'Wear Resistant', description: 'Advanced materials resist abrasion and extend operational lifespan' },
            { title: 'Smooth Rotation', description: 'Precision bearings ensure frictionless, quiet operation' },
            { title: 'Customizable Options', description: 'Available in multiple diameters and lengths for various applications' },
            { title: 'Easy Installation', description: 'Simple mounting and maintenance procedures minimize downtime' },
            { title: 'Cost Effective', description: 'High-quality design reduces replacement frequency and maintenance costs' }
          ],
          applications: [
            'Bulk material handling equipment',
            'Mining and quarrying conveyors',
            'Cement and limestone transportation',
            'Steel industry material movement',
            'Power plant coal handling systems',
            'Fertilizer unit operations',
            'Crusher and screening plant applications',
            'Biomass handling systems'
          ],
          industries: ['Mining', 'Quarrying', 'Cement', 'Steel', 'Power Plants', 'Fertilizer'],
          construction: 'Manufactured from IS 1239/IS 9295 standard mild steel pipes with high-strength shafts. Premium quality deep groove ball bearings (6304) ensure smooth operation. Synthetic enamel coating provides superior corrosion resistance.',
          performance: [
            'Supports heavy loads with minimal deflection',
            'Ultra-smooth bearing rotation reduces energy consumption',
            'Minimal vibration ensures quiet, efficient operation',
            'Dustproof sealing protects internal components',
            'Extended service intervals with proper lubrication'
          ],
          benefits: [
            'Increases conveyor belt lifespan through even load distribution',
            'Reduces operational noise levels significantly',
            'Minimizes maintenance requirements and associated costs',
            'Compatible with various conveyor belt widths and configurations',
            'Provides reliable performance in harsh industrial environments',
            'Supports 24/7 continuous operation capability'
          ]
        }
      ]
    },
    'impact-rollers': {
      title: 'Impact Rollers',
      description: 'Shock-absorbing rollers designed to protect conveyor belts at material loading points from impact damage',
      products: [
        {
          id: 303,
          name: 'Impact Roller',
          image: impactRoller1Img,
          images: [impactRoller1Img, impactRoller2Img],
          description: 'Specialized impact rollers equipped with rubber rings to absorb shock and protect conveyor belts from damage caused by falling heavy or sharp materials. Engineered by Movo Belting Industries for industries requiring maximum belt protection and extended service life.',
          specs: [
            'Belt Width Compatibility: 400-2000mm (customizable)',
            'Pipe Length: 370mm',
            'Shaft Length: 410mm',
            'Roller Diameter: 89x114mm',
            'Shaft Diameter: 20mm, 25mm',
            'Rubber Rings: Shock-absorbing material',
            'Bearing Types: 6204, 6304, 6205',
            'Sealing: Dustproof, Waterproof, Multi-labyrinth',
            'Load Capacity: Heavy duty suitable for bulk material',
            'Working Temperature: -20°C to +80°C',
            'Noise Level: Low noise, < 50 dB'
          ],
          overview: 'Impact rollers are specifically designed to protect conveyor belts at loading points where heavy or sharp materials fall onto the belt. The rubber rings absorb impact energy, preventing belt damage, spillage, and system downtime.',
          advantages: [
            { title: 'Shock Absorption', description: 'Rubber rings dissipate impact energy protecting the belt from damage' },
            { title: 'Spillage Prevention', description: 'Smooth material landing reduces material loss and cleanup' },
            { title: 'Extended Belt Life', description: 'Impact protection significantly extends conveyor belt service life' },
            { title: 'Vibration Reduction', description: 'Damping characteristics minimize vibration and noise' },
            { title: 'Cost Savings', description: 'Reduces maintenance costs and unplanned downtime' },
            { title: 'Wide Compatibility', description: 'Available for various belt widths and configurations' }
          ],
          applications: [
            'Loading points in mining operations',
            'Material dropping stations in cement plants',
            'Heavy load impact zones in steel plants',
            'Coal drop zones in power generation facilities',
            'Material receiving points in fertilizer plants',
            'Impact-intensive conveyor sections',
            'Stone crusher discharge points',
            'Biomass and aggregate handling systems'
          ],
          industries: ['Mining', 'Cement', 'Steel', 'Power', 'Fertilizer', 'Coal Handling', 'Bulk Materials'],
          construction: 'Heavy-duty steel pipe construction (IS 1239/IS 9295) with high-strength bright bar shafts. Premium deep groove ball bearings (6204, 6304, 6205) with multi-layer labyrinth sealing. Shock-absorbing rubber rings attached to roller surface.',
          performance: [
            'Absorbs up to 90% of impact energy from falling materials',
            'Maintains smooth belt tracking despite heavy impacts',
            'Protects belt edge from damage and misalignment',
            'Reduces spillage through controlled material distribution',
            'Low noise operation with excellent vibration damping'
          ],
          benefits: [
            'Protects expensive conveyor belts from premature wear',
            'Reduces spillage and material loss at loading points',
            'Minimizes system downtime from belt damage',
            'Lowers maintenance and replacement costs significantly',
            'Improves overall conveyor system reliability',
            'Suitable for extreme industrial conditions with sharp materials'
          ]
        }
      ]
    },
    'self-aligning-idlers': {
      title: 'Self-Aligning Idlers',
      description: 'Automatic belt tracking rollers that correct misalignment and maintain optimal conveyor belt position',
      products: [
        {
          id: 304,
          name: 'Self-Aligning Idler',
          image: selfAligningIdler1Img,
          images: [selfAligningIdler1Img],
          description: 'Advanced self-aligning idlers manufactured by Movo Belting Industries to automatically correct belt misalignment and maintain proper tracking. These innovative rollers reduce maintenance requirements and extend conveyor belt life through precision auto-positioning technology.',
          specs: [
            'Belt Width Compatibility: 400-2000mm (custom sizes available)',
            'Roller Diameter: 60, 76, 89, 114mm (heavy-duty on request)',
            'Shaft Diameter: 20mm, 25mm (customization available)',
            'Bearing Types: Deep groove ball bearings 6204, 6205, 6304',
            'Sealing: Multi-labyrinth, dust & waterproof protection',
            'Troughing Angles: 20°, 30°, 35°',
            'Frame Type: Fabricated steel with self-aligning pivot',
            'Load Capacity: Medium to heavy-duty systems',
            'Working Temperature: -20°C to +80°C',
            'Noise Level: < 65 dB (low-noise performance)'
          ],
          overview: 'Self-aligning idlers feature a unique pivot mechanism that allows automatic belt positioning without manual adjustment. When belt deviation occurs, the idler tilts to guide the belt back to its original track position.',
          advantages: [
            { title: 'Auto Belt Positioning', description: 'Automatically corrects belt misalignment during operation' },
            { title: 'Reduced Maintenance', description: 'Minimizes manual adjustments and maintenance interventions' },
            { title: 'Extended Belt Life', description: 'Prevents edge damage and wear from misalignment' },
            { title: 'Improved Efficiency', description: 'Maintains optimal belt tracking for maximum performance' },
            { title: 'Low Maintenance Design', description: 'Reduces frequency of readjustments and repairs' },
            { title: 'Customizable', description: 'Available with various roller diameters and shaft configurations' }
          ],
          applications: [
            'Mining and coal handling conveyors',
            'Cement plant raw material and clinker lines',
            'Fertilizer and chemical material transport',
            'Power plant coal and ash handling',
            'Steel industry material movement',
            'Stone crusher and screening plants',
            'Biomass and agricultural material handling',
            'POP and putty plants',
            'General bulk material handling systems'
          ],
          industries: ['Mining', 'Cement', 'Fertilizer', 'Power', 'Steel', 'Biomass', 'Coal Handling'],
          construction: 'Precision-engineered from IS 1239/IS 9295 pipes with heavy-duty bearings and advanced pivot mechanism. Self-aligning frame allows side-to-side movement for automatic belt correction. Premium synthetic enamel coating for corrosion protection.',
          performance: [
            'Automatically corrects belt deviation within 10-15 meters of occurrence',
            'Maintains consistent belt centering without manual intervention',
            'Reduces edge wear by 40-50% compared to standard idlers',
            'Low-friction pivot allows responsive auto-alignment',
            'Dampens belt bounce and vibration effectively'
          ],
          benefits: [
            'Significantly reduces manual maintenance labor',
            'Prevents costly belt edge damage and premature replacement',
            'Improves overall conveyor system uptime and reliability',
            'Increases safety by eliminating belt drift hazards',
            'Saves operational costs through reduced downtime',
            'Suitable for medium to heavy-duty industrial applications'
          ]
        }
      ]
    },
    'return-rollers': {
      title: 'Return Rollers',
      description: 'Support rollers for the return side of conveyor belts with heavy-duty construction and low maintenance',
      products: [
        {
          id: 305,
          name: 'Return Roller',
          image: returnRoller1Img,
          images: [returnRoller1Img, returnRoller2Img],
          description: 'Heavy-duty return rollers designed to support the empty belt on the return side of conveyor systems. Manufactured by Movo Belting Industries with precision engineering for reliable long-term performance in demanding industrial environments.',
          specs: [
            'Belt Width Compatibility: 400-3000mm (customizable)',
            'Pipe Length: 560mm',
            'Shaft Length: 610mm',
            'Roller Diameter: 76mm, 88.9mm, 114mm',
            'Shaft Diameter: 20mm, 25mm',
            'Bearing Types: 6204, 6304, 6205',
            'Sealing: Dustproof & Waterproof',
            'Load Capacity: Standard & Heavy Duty options',
            'Working Temperature: -20°C to +80°C',
            'Noise Level: Low noise, < 50 dB',
            'Material: IS 1239/IS 9295 standard steel pipe'
          ],
          overview: 'Return rollers are essential components supporting the empty belt return side of conveyor systems. Our rollers ensure proper belt support, prevent sagging, and maintain system balance for continuous reliable operation.',
          advantages: [
            { title: 'Extended Service Life', description: 'High-quality materials and construction ensure long durability' },
            { title: 'Heavy Load Capacity', description: 'Handles standard and heavy-duty applications without deformation' },
            { title: 'Customizable Options', description: 'Available in various sizes, diameters, and bearing configurations' },
            { title: 'Corrosion Resistant', description: 'Advanced coating resists dust, moisture, and adverse conditions' },
            { title: 'Silent Operation', description: 'Low-noise design minimizes workplace disturbances' },
            { title: 'Easy Maintenance', description: 'Simple design enables quick replacement and servicing' }
          ],
          applications: [
            'Return side support in mining conveyors',
            'Empty belt carrying in cement plants',
            'Coal handling return lines in power plants',
            'Biomass facility return conveyors',
            'Stone crusher return systems',
            'Fertilizer plant empty belt lines',
            'Steel plant material handling return systems',
            'Logistics and warehouse conveyor systems',
            'Pallet handling system return lines'
          ],
          industries: ['Mining', 'Cement', 'Power', 'Biomass', 'Stone Crushers', 'Fertilizer', 'Steel', 'Logistics'],
          construction: 'High-quality IS 1239/IS 9295 steel pipes with bright bar mild steel or EN8 shafts. Premium sealed bearings (6204, 6304, 6205) ensure long-term reliability. Synthetic enamel coating provides superior rust and corrosion resistance.',
          performance: [
            'Maintains proper empty belt support and prevents sagging',
            'Ultra-smooth rotation reduces energy consumption',
            'Dustproof and waterproof sealing protects internal components',
            'Low vibration operation enables continuous 24/7 service',
            'Minimal bearing friction results in extended service life'
          ],
          benefits: [
            'Provides reliable support for empty belt return lines',
            'Prevents belt sagging and associated misalignment issues',
            'Operates efficiently with minimal energy consumption',
            'Reduces maintenance frequency and associated costs',
            'Manufactured in India with quality and reliability focus',
            'Suitable for continuous operation in harsh environments'
          ]
        }
      ]
    },
    'return-brackets': {
      title: 'Return Roller Brackets',
      description: 'Structural support frames for mounting and aligning return rollers in conveyor systems',
      products: [
        {
          id: 306,
          name: 'Return Roller Bracket',
          image: returnRollerBracket1Img,
          images: [returnRollerBracket1Img, returnRollerBracket2Img],
          description: 'Precision-engineered return roller brackets designed to provide structural support and proper alignment for return rollers. Manufactured by Movo Belting Industries with heavy-duty construction for long service life in demanding industrial settings.',
          specs: [
            'Belt Width Compatibility: 400-2000mm (custom sizes available)',
            'Frame Type: Heavy-duty bracket, mounting plate, hanging type',
            'Material: Mild Steel / Stainless Steel',
            'Thickness: 6mm heavy-duty construction',
            'Load Capacity: Suitable for medium to heavy-duty conveyors',
            'Surface Finish: Synthetic Enamel Paint',
            'Coating Options: Painted / Powder Coated / Galvanized',
            'Installation: Easy bolt-on assembly',
            'Customization: Available for various roller sizes',
            'Brand: Movo Belting Industries'
          ],
          overview: 'Return roller brackets are structural frames that support and align return rollers in conveyor systems. Proper bracket design ensures the empty belt return path is stable, preventing belt sag and maintaining system balance.',
          advantages: [
            { title: 'Heavy-Duty Construction', description: 'Built with thick steel to ensure high durability and strength' },
            { title: 'Precise Alignment', description: 'Ensures return rollers are perfectly positioned for smooth belt movement' },
            { title: 'Corrosion Resistant', description: 'Multiple coating options provide protection in harsh environments' },
            { title: 'Adjustable Design', description: 'Available in various sizes to match different roller dimensions' },
            { title: 'Simple Installation', description: 'Easy to install and replace without complex procedures' },
            { title: 'Low Maintenance', description: 'Reliable construction requires minimal servicing' }
          ],
          applications: [
            'Return line support in mining conveyors',
            'Bracket systems for cement plant empty belt sections',
            'Steel plant return conveyor support structures',
            'Power plant coal handling return supports',
            'Fertilizer and chemical plant installations',
            'Stone crusher system return supports',
            'General conveyor return line mounting',
            'Heavy-load industrial material handling systems'
          ],
          industries: ['Mining', 'Cement', 'Steel', 'Power', 'Fertilizer', 'Stone Crushers', 'Manufacturing'],
          construction: 'Heavy-duty mild steel or stainless steel fabrication with 6mm thickness for maximum strength. Welded construction ensures structural integrity. Multiple finish options including synthetic enamel, powder coating, and galvanizing.',
          performance: [
            'Provides rigid support for return roller systems',
            'Maintains precise alignment preventing belt drift',
            'Supports heavy loads without deformation',
            'Corrosion-resistant finishes ensure long service life',
            'Easy installation reduces system downtime'
          ],
          benefits: [
            'Ensures proper return roller alignment and positioning',
            'Prevents belt sagging and associated system failures',
            'Improves overall conveyor system reliability',
            'Reduces maintenance costs through durable construction',
            'Available in multiple configurations for various applications',
            'Cost-effective solution for return line support'
          ]
        }
      ]
    },
    'garland-idlers': {
      title: 'Garland Idlers',
      description: 'Multi-roller flexible systems for stable support and load distribution in long-distance conveyors',
      products: [
        {
          id: 307,
          name: 'Garland Idler',
          image: garlandIdler1Img,
          images: [garlandIdler1Img, garlandIdler2Img],
          description: 'Advanced garland idlers manufactured by Movo Belting Industries featuring flexible garland design with multiple linked rollers. These innovative systems provide stable support while allowing flexibility, reducing belt sag in long-distance conveyor applications.',
          specs: [
            'Belt Width Compatibility: 400-2000mm (custom sizes available)',
            'Roller Configurations: 2-roll, 3-roll, 5-roll sets',
            'Roller Diameter: 76mm, 89mm, 114mm',
            'Shaft Diameter: 20mm, 25mm',
            'Bearing Types: Heavy-duty 6204, 6205, 6304',
            'Pipe Material: IS 1239/IS 9295 standard pipes',
            'Sealing: Dust-proof & water-resistant',
            'Load Capacity: Medium to Heavy Duty',
            'Working Temperature: -10°C to +80°C',
            'Noise Level: Low noise operation'
          ],
          overview: 'Garland idlers provide flexible load distribution across multiple rollers, reducing belt stress and extending service life. The garland arrangement absorbs shocks and vibrations while maintaining optimal belt support.',
          advantages: [
            { title: 'Flexible Load Distribution', description: 'Multiple rollers distribute load evenly reducing belt stress' },
            { title: 'Shock Absorption', description: 'Flexible design absorbs impacts and reduces vibration' },
            { title: 'Extended Belt Life', description: 'Reduces belt sag and associated wear in long conveyors' },
            { title: 'Durable Construction', description: 'Built with high-quality IS standard materials for long life' },
            { title: 'Easy Maintenance', description: 'Individual roller replacement without full system removal' },
            { title: 'Custom Configurations', description: 'Available with 2, 3, or 5-roller setups' }
          ],
          applications: [
            'Long-distance mining conveyors',
            'Cement plant material transport systems',
            'Fertilizer and chemical handling lines',
            'Power plant coal conveying systems',
            'Steel industry material movement',
            'Stone crusher and screening operations',
            'Biomass and agricultural material handling',
            'POP and putty manufacturing plants',
            'Poultry feed processing conveyors'
          ],
          industries: ['Mining', 'Cement', 'Fertilizer', 'Power', 'Steel', 'Biomass', 'Stone Crushers'],
          construction: 'Fabricated with IS 1239/IS 9295 pipes connected in flexible garland arrangement. Rollers linked with high-quality bearings (6204, 6205, 6304) and pivot connections. Synthetic enamel coating for corrosion protection.',
          performance: [
            'Distributes belt load across multiple contact points',
            'Flexible design allows vertical movement reducing sag',
            'Shock absorption minimizes vibration transmission',
            'Low noise operation through smooth roller rotation',
            'Extended conveyor belt service life through even support'
          ],
          benefits: [
            'Reduces belt sag in long-distance conveyor applications',
            'Lowers overall system stress and improves reliability',
            'Extends conveyor belt service life significantly',
            'Minimizes vibration and noise in production areas',
            'Reduces maintenance costs through reliable operation',
            'Suitable for medium to heavy-duty industrial applications'
          ]
        }
      ]
    },
    'conveyor-frames': {
      title: 'Conveyor Frames',
      description: 'Structural support frames for mounting rollers, idlers, and conveyor belt systems',
      products: [
        {
          id: 308,
          name: 'Conveyor Frame',
          image: conveyorFrame1Img,
          images: [conveyorFrame1Img, conveyorFrame2Img],
          description: 'Precision-engineered conveyor frames and brackets designed to provide structural support and stability for conveyor systems. Available in 3-roller, 5-roller, and laser-cut configurations, manufactured by Movo Belting Industries for maximum durability.',
          specs: [
            'Belt Width Compatibility: 300-2000mm',
            'Frame Types: 3-roller, 5-roller, laser-cut, customized',
            'Troughing Angles: 20°, 25°, 30°, 35°, 45°, 60°',
            'Load Capacity: Light to Heavy Duty',
            'Material: High-grade mild steel or stainless steel',
            'Surface Finish: Synthetic enamel or powder coat',
            'Customization: Tailored to specific requirements',
            'Manufacturing: Standard welding or laser cutting',
            'Installation: Bolt-on assembly',
            'Working Temperature: -10°C to +60°C'
          ],
          overview: 'Conveyor frames are the backbone of any conveyor system, providing structural support and stability. Our frames are manufactured with precision engineering ensuring proper roller alignment and system longevity.',
          advantages: [
            { title: 'Heavy-Duty Construction', description: 'Built with high-grade steel for maximum durability' },
            { title: 'Precise Alignment', description: 'Ensures all rollers are properly aligned for smooth operation' },
            { title: 'Customizable Designs', description: 'Can be tailored for belt width, load, and angle requirements' },
            { title: 'Laser-Cut Options', description: 'High-precision cutting ensures perfect fit and assembly' },
            { title: 'Cost-Effective', description: 'Long-lasting design reduces replacement frequency' },
            { title: 'Easy Installation', description: 'Bolt-on assembly simplifies setup and maintenance' }
          ],
          applications: [
            'Manufacturing plant conveyor systems',
            'Packaging industry material handling',
            'Logistics and warehouse conveyor networks',
            'Mining and bulk material handling',
            'Food and pharmaceutical processing',
            'Cement and steel industry applications',
            'Mining and crusher plant installations',
            'Coal handling and power plant systems',
            'Agricultural and fertilizer operations'
          ],
          industries: ['Manufacturing', 'Packaging', 'Logistics', 'Mining', 'Food & Pharma', 'Cement', 'Steel'],
          construction: 'High-grade mild steel (MS) or stainless steel (SS) fabrication using welding or laser-cutting technology. Available in 3-roller and 5-roller configurations. Welded joints provide structural integrity for heavy-duty applications.',
          performance: [
            'Provides rigid structural support for conveyor system',
            'Maintains precise roller alignment throughout service life',
            'Handles light to heavy-duty load requirements',
            'Allows smooth material flow with minimal friction',
            'Supports multiple conveyor angle configurations'
          ],
          benefits: [
            'Ensures smooth operation of entire conveyor system',
            'Minimizes system downtime through reliable structure',
            'Supports various belt widths and load capacities',
            'Reduces installation time with standard designs',
            'Available in custom configurations for unique requirements',
            'Cost-effective backbone for material handling operations'
          ]
        }
      ]
    },
    'guide-rollers': {
      title: 'Guide Rollers',
      description: 'Belt alignment rollers that prevent conveyor belt misalignment and edge damage during operation',
      products: [
        {
          id: 309,
          name: 'Guide Roller',
          image: guideRoller1Img,
          images: [guideRoller1Img, guideRoller2Img],
          description: 'Specialized guide rollers designed to maintain conveyor belt alignment and prevent edge damage. Manufactured by Movo Belting Industries, these precision-engineered rollers are essential for maintaining belt tracking and system stability.',
          specs: [
            'Belt Width Compatibility: 400-2000mm',
            'Pipe Length: 100-300mm (custom sizes available)',
            'Shaft Length: 150-400mm (custom sizes available)',
            'Roller Diameter: 60, 76, 89, 114mm (custom available)',
            'Shaft Diameter: 20mm, 25mm (custom on request)',
            'Pipe Thickness: 3.5mm, 6mm, 8mm',
            'Bearing Types: Deep Groove Ball Bearings 6204, 6304, 6205',
            'Sealing: Dustproof & waterproof multi-layer sealing',
            'Installation: Vertical, horizontal, or angled',
            'Working Temperature: -10°C to +80°C'
          ],
          overview: 'Guide rollers are positioned on the sides of conveyor belts to maintain proper alignment and prevent edge damage. These critical components ensure safe operation and extend belt service life.',
          advantages: [
            { title: 'Belt Alignment Control', description: 'Maintains conveyor belts at correct track position' },
            { title: 'Edge Protection', description: 'Prevents edge tears and damage from belt drift' },
            { title: 'Long Service Life', description: 'Constructed with high-grade materials for durability' },
            { title: 'Smooth Rotation', description: 'Precision bearings provide noisy-free operation' },
            { title: 'Corrosion Resistant', description: 'Designed for tough industrial work environments' },
            { title: 'Custom Sizes', description: 'Available in various diameters, lengths, and shaft sizes' }
          ],
          applications: [
            'Belt alignment in mining conveyors',
            'Edge protection in cement plant systems',
            'Alignment maintenance in steel plant operations',
            'Guide systems in power plant coal handling',
            'Fertilizer and chemical conveyor guiding',
            'Bulk material handling alignment systems',
            'Mining and quarrying conveyor operations',
            'Crusher and screening plant installations',
            'Long-distance conveyor route guidance'
          ],
          industries: ['Mining', 'Cement', 'Steel', 'Power', 'Fertilizer', 'Quarries', 'Bulk Materials'],
          construction: 'High-grade mild steel or stainless steel construction with precision-engineered shafts. Deep groove ball bearings (6204, 6304, 6205) with multi-layer dustproof and waterproof sealing. Synthetic enamel coating for corrosion resistance.',
          performance: [
            'Maintains precise belt alignment within ±10mm tolerance',
            'Smooth rotation minimizes energy consumption',
            'Prevents edge wear through continuous alignment',
            'Low-noise operation suitable for all environments',
            'Reliable performance in extreme temperature conditions'
          ],
          benefits: [
            'Prevents costly conveyor belt edge damage',
            'Extends overall belt service life significantly',
            'Reduces spillage from misaligned belts',
            'Minimizes downtime from belt tracking issues',
            'Improves overall conveyor system safety',
            'Cost-effective solution for alignment maintenance'
          ]
        }
      ]
    },
    'plastic-rollers': {
      title: 'Plastic Conveyor Rollers',
      description: 'Lightweight, corrosion-resistant plastic rollers for hygienic and food-safe applications',
      products: [
        {
          id: 310,
          name: 'Plastic Conveyor Roller',
          image: plasticRoller1Img,
          description: 'Lightweight plastic conveyor rollers engineered by Movo Belting Industries for hygienic applications. Designed for food processing, pharmaceutical production, and packaging industries where contamination-free operation is critical.',
          specs: [
            'Belt Width Compatibility: 300-2000mm',
            'Roller Diameter: 85mm, 89mm, 110mm, 114mm',
            'Lightweight polymer construction',
            'Load Capacity: 40-60 kg per roller',
            'Smooth hygienic surface finish',
            'Very low noise operation < 20 dB',
            'Deep groove ball bearings 6204, 6304, 6205',
            'Labyrinth type dustproof sealing',
            'Temperature Range: -10°C to +70°C',
            'Customizable diameter and length'
          ],
          overview: 'Plastic rollers are becoming increasingly popular in industries where hygiene, lightweight design, and corrosion resistance are critical. Unlike traditional steel rollers, plastic rollers provide smooth, noise-free operation perfect for food and pharmaceutical applications.',
          advantages: [
            { title: 'Corrosion Resistant', description: 'Plastic construction does not rust making it ideal for wet environments' },
            { title: 'Lightweight Design', description: 'Easier to handle, transport, and install compared to steel' },
            { title: 'Hygienic Operation', description: 'Smooth surface prevents dust and bacteria buildup' },
            { title: 'Low Noise', description: 'Ultra-quiet operation creates safer working environment' },
            { title: 'Cost Effective', description: 'Maintenance-free operation leads to long-term savings' },
            { title: 'Food Safe', description: 'Materials approved for direct food contact applications' }
          ],
          applications: [
            'Food processing and bakeries',
            'Meat and poultry handling',
            'Beverage bottling lines',
            'Dairy production facilities',
            'Pharmaceutical production',
            'Packaging and labeling systems',
            'Chemical resistant environments',
            'Airport baggage handling',
            'Lightweight parcel conveyors'
          ],
          industries: ['Food & Beverage', 'Pharmaceuticals', 'Packaging', 'Logistics', 'Chemical', 'Dairy'],
          construction: 'High-grade industrial polymer with smooth finish. Deep groove ball bearings sealed against contamination. Mild steel shaft with plastic sleeve protection. Hygienic design minimizes bacterial growth areas.',
          performance: [
            'Ultra-smooth surface enables hygienic operation',
            'Maintains consistent speed with light loads',
            'Vibration-free operation protects delicate products',
            'Extremely quiet operation at all speeds',
            'Zero corrosion even in wet conditions'
          ],
          benefits: [
            'Ensures product safety and hygiene compliance',
            'Eliminates cross-contamination risks',
            'Simplifies cleaning and sanitization',
            'Reduces maintenance costs significantly',
            'Lightweight reduces installation expenses',
            'Long service life in harsh environments'
          ]
        }
      ]
    },
    'gravity-rollers': {
      title: 'Gravity Rollers',
      description: 'Efficient gravity-powered material handling rollers for smooth, cost-free operation',
      products: [
        {
          id: 311,
          name: 'Gravity Roller',
          image: gravityRoller1Img,
          description: 'High-quality gravity rollers designed for smooth, passive material transport without motorized drive. Manufactured by Movo Belting Industries for warehousing, distribution, and manufacturing operations.',
          specs: [
            'Load Capacity: Up to 100 kg per roller',
            'Roller Diameter: 50mm standard',
            'Shaft Diameter: 15mm, customizable',
            'Pipe Thickness: 2mm industrial grade',
            'Bearing Type: Ball bearings, sealed',
            'Material Options: Mild Steel (MS) or Stainless Steel (SS)',
            'Shaft End Types: Threaded, Plain, Groove cut, Slot',
            'Surface Finish: Powder coated, Zinc plated, Polished',
            'Temperature Range: -10°C to +60°C',
            'Noise Level: Low-noise operation',
            'Customizable lengths and configurations'
          ],
          overview: 'Gravity rollers enable smooth movement of goods along conveyor lines without any motorized drive. They utilize gravity and incline to facilitate material flow, making them ideal for cost-effective warehouse and manufacturing operations.',
          advantages: [
            { title: 'Zero Power Consumption', description: 'Gravity-powered eliminates electricity costs' },
            { title: 'Durable Construction', description: 'MS/SS materials withstand heavy industrial use' },
            { title: 'Maintenance Free', description: 'Simple design requires minimal servicing' },
            { title: 'Cost Effective', description: 'Low initial investment with no running costs' },
            { title: 'Flexible Design', description: 'Available in spring-loaded or simple variants' },
            { title: 'Corrosion Resistant', description: 'Stainless steel options for harsh environments' }
          ],
          applications: [
            'Warehouse and distribution centers',
            'Manufacturing material flow',
            'Carton and box handling',
            'Packaging operations',
            'Airport baggage systems',
            'Logistics hubs',
            'Heavy industry material movement',
            'Vertical and inclined conveying',
            'Accumulation and buffer zones'
          ],
          industries: ['Warehousing', 'Manufacturing', 'Logistics', 'Food & Beverage', 'Automotive', 'Heavy Industry'],
          construction: 'Heavy-duty MS or SS construction with sealed ball bearings. Customizable shaft ends for various mounting options. Powder coating or polishing for corrosion protection. Compatible with standard conveyor frames.',
          performance: [
            'Enables smooth gravity-powered material flow',
            'Reduces friction for easy product movement',
            'Operates silently with minimal vibration',
            'Handles variable loads without slipping',
            'Performs reliably for decades with minimal maintenance'
          ],
          benefits: [
            'Eliminates operational energy costs',
            'Simple reliable operation with few failure points',
            'Reduces overall conveyor system cost',
            'Flexible configuration for various applications',
            'Long service life reduces replacement frequency',
            'Ideal for sustainable operations'
          ]
        }
      ]
    },
    'conveyor-pulleys': {
      title: 'Conveyor Pulleys',
      description: 'Heavy-duty drive and support pulleys for efficient conveyor belt operation',
      products: [
        {
          id: 312,
          name: 'Conveyor Pulley',
          image: conveyorPulley1Img,
          description: 'Critical conveyor system components engineered by Movo Belting Industries for driving, guiding, and supporting conveyor belts. Available in multiple configurations for mining, power plants, and material handling applications.',
          specs: [
            'Belt Width Compatibility: 400-2000mm',
            'Roller Diameter: 100-1000mm (customizable)',
            'Shaft Diameter: 25-100mm (depends on pulley size)',
            'Pulley Types: Head, Drive, Tail, Snub, Bend, Take-Up',
            'Lagging Options: Rubber, Ceramic, or Plain Drum',
            'Face Width: 100-2000mm',
            'Load Capacity: Light to Heavy Duty',
            'Shaft Material: High-grade Mild Steel',
            'Temperature Range: -10°C to +60°C',
            'Custom mounting bracket options',
            'SKU Options: CP-001, CP-002, etc.'
          ],
          overview: 'Conveyor pulleys are critical components responsible for driving, guiding, and supporting conveyor belts. These precision-engineered systems ensure smooth, efficient material handling in the most demanding industrial environments.',
          advantages: [
            { title: 'Variety of Designs', description: 'Multiple pulley types suit specific applications' },
            { title: 'High Friction Grip', description: 'Rubber/ceramic lagging reduces slippage significantly' },
            { title: 'Customizable Options', description: 'Tailored designs match specific requirements' },
            { title: 'Durable Construction', description: 'High-grade steel withstands extreme conditions' },
            { title: 'Versatile Configuration', description: 'Works with various conveyor belt systems' },
            { title: 'Efficient Operation', description: 'Advanced design maximizes belt traction' }
          ],
          applications: [
            'Mining and coal handling operations',
            'Power plant fuel transport',
            'Stone crushers and aggregate plants',
            'Rice mills and food processing',
            'Fertilizer and biomass handling',
            'Poultry farms and feed production',
            'Recycling and waste management',
            'Steel and metal industries',
            'Cement and construction materials'
          ],
          industries: ['Mining', 'Power Plants', 'Food Processing', 'Fertilizer', 'Steel', 'Cement', 'Biomass'],
          construction: 'High-grade steel drum construction with optional rubber or ceramic lagging for grip enhancement. Welded frame with precision-aligned shaft. Custom mounting brackets available for installation flexibility.',
          performance: [
            'Ensures efficient belt traction without slipping',
            'Maintains consistent conveyor belt speed',
            'Handles heavy loads with reliable grip',
            'Operates smoothly with minimal vibration',
            'Supports long-distance conveyor systems effectively'
          ],
          benefits: [
            'Improves conveyor efficiency and productivity',
            'Reduces belt slippage and energy loss',
            'Extends conveyor belt service life',
            'Minimizes maintenance through durable design',
            'Increases overall system reliability',
            'Handles multiple applications from light to heavy duty'
          ]
        }
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
            <button
              onClick={() => {
                setExpandedCategory('industrial-rollers');
                setExpandedSubcategory(null);
              }}
              className={`px-8 py-4 font-bold text-lg transition-all duration-300 border-b-4 ${
                expandedCategory === 'industrial-rollers'
                  ? 'text-white border-orange-700 bg-orange-700 shadow-md rounded-t-lg'
                  : 'text-gray-600 border-transparent hover:text-orange-600 hover:bg-orange-100'
              }`}
            >
              Industrial Rollers
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

          {/* Industrial Rollers Section */}
          {expandedCategory === 'industrial-rollers' && (
            <section className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">Industrial Rollers & Components</h2>
                <p className="text-lg text-gray-600 mb-12">Premium quality industrial rollers and idlers manufactured by Movo Belting Industries for high-performance conveyor systems. From troughing idlers to guide rollers, our components ensure reliable operation in the most demanding mining, cement, power, and material handling applications.</p>

            <div className="space-y-16">
              {Object.entries(industrialRollers).map(([key, category]) => (
                <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Subcategory Header */}
                  <div
                    className="bg-orange-100 border-l-4 border-orange-600 p-6 cursor-pointer hover:bg-orange-200 transition-colors"
                    onClick={() => setExpandedSubcategory(expandedSubcategory === key ? null : key)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-orange-900 mb-2">{category.title}</h3>
                        <p className="text-gray-700">{category.description}</p>
                      </div>
                      <ChevronDown
                        className={`text-orange-600 transition-transform ${
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
                            className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                          >
                            {/* Product Image */}
                            <div className="relative h-56 w-full bg-orange-200 overflow-hidden">
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
                              <div className="mb-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                                <p className="text-xs font-semibold text-orange-800">{product.overview || product.features}</p>
                              </div>

                              {/* Specifications */}
                              <div className="space-y-2">
                                <h4 className="font-bold text-gray-900 text-sm">Key Specifications:</h4>
                                <ul className="space-y-2">
                                  {product.specs.slice(0, 3).map((spec, idx) => (
                                    <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                                      <span className="text-orange-600 font-bold mt-1">✓</span>
                                      <span>{spec}</span>
                                    </li>
                                  ))}
                                  {product.specs.length > 3 && (
                                    <li className="text-xs text-orange-600 font-semibold">+{product.specs.length - 3} more</li>
                                  )}
                                </ul>
                              </div>

                              {/* Learn More Button */}
                              <button 
                                onClick={() => handleProductClick(product)}
                                className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-300">
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
