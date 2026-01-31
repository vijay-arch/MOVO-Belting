import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {};
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get images array, fallback to single image
  const allImages = product?.images || (product?.image ? [product.image] : []);

  // Chart images to show separately for PVC/PE products (identified by filename)
  const chartPatterns = ['pvc-chart1', 'conveyor-belt-chart-2'];
  const chartImages = allImages.filter((img) => img && chartPatterns.some((p) => img.includes(p)));

  // Gallery should exclude the chart images so they don't appear as thumbnails
  const galleryImages = allImages.filter((img) => !(img && chartPatterns.some((p) => img.includes(p))));

  // Use gallery images if available, otherwise fall back to all images
  const productImages = galleryImages.length > 0 ? galleryImages : allImages;

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-20 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Main Image */}
              <div className="relative bg-gray-200 h-96 md:h-[500px] overflow-hidden flex items-center justify-center group">
                {productImages.length > 0 ? (
                  <>
                    <img
                      src={productImages[currentImageIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {currentImageIndex + 1} / {productImages.length}
                    </div>
                    {/* Previous Button */}
                    {productImages.length > 1 && (
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft size={24} />
                      </button>
                    )}
                    {/* Next Button */}
                    {productImages.length > 1 && (
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight size={24} />
                      </button>
                    )}
                  </>
                ) : (
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-4">📦</div>
                    <p className="text-xl">No image available</p>
                  </div>
                )}
              </div>

              {/* Product Images - Gallery Thumbnails */}
              {productImages.length > 1 && (
                <div className="p-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Product Gallery</h3>
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                    {productImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all ${
                          currentImageIndex === idx 
                            ? 'ring-2 ring-blue-600 shadow-lg' 
                            : 'hover:shadow-lg'
                        }`}
                      >
                        <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-20 object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* If there are chart images, show them below the main image area (full-width within left column) */}
              {chartImages.length > 0 && (
                <div className="p-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Conveyor Belt Charts</h3>
                  <div className="space-y-4">
                    {chartImages.map((img, idx) => (
                      <div key={idx} className="bg-white rounded-md shadow-sm overflow-hidden">
                        <div className="p-4 flex items-center justify-center">
                          <img src={img} alt={`Chart ${idx + 1}`} className="w-full object-contain" style={{ maxHeight: 420 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Details - Right Side */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">{product.description}</p>

              {/* Features Badge */}
              {product.features && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-800">{product.features}</p>
                </div>
              )}
            </div>

            {/* Specifications */}
            {product.specs && product.specs.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Specifications</h3>
                <ul className="space-y-3">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold text-lg mt-0">✓</span>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Data */}
            {product.technicalData && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Data</h3>
                <div className="space-y-3">
                  {Object.entries(product.technicalData).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Full Description Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Product Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              {product.overview && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-gray-700 text-sm leading-relaxed">{product.overview}</p>
                </div>
              )}
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{product.features}</p>
              {product.specs && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">All Features:</h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-700">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Product Advantages Section */}
          {product.advantages && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose This Product</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.advantages.map((adv, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-300">
                    <h4 className="font-semibold text-green-900 mb-2">✓ {adv.title}</h4>
                    <p className="text-sm text-green-800">{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications */}
          {product.applications && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                    <span className="text-blue-600 font-bold text-xl">→</span>
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Industries Section */}
          {product.industries && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industries Served</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {product.industries.map((ind, idx) => (
                  <div key={idx} className="bg-indigo-50 rounded-lg p-3 border border-indigo-200 text-center">
                    <p className="text-sm font-semibold text-indigo-900">{ind}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {product.benefits && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-700 font-medium text-sm leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Construction & Material Section */}
          {product.construction && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Construction & Material Quality</h3>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-300">
                <p className="text-gray-700 leading-relaxed">{product.construction}</p>
              </div>
            </div>
          )}

          {/* Performance Characteristics */}
          {product.performance && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Characteristics</h3>
              <div className="space-y-3">
                {product.performance.map((perf, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="text-purple-600 font-bold text-lg">◆</span>
                    <p className="text-gray-700">{perf}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Similar Product?</h2>
          <p className="text-lg text-blue-100 mb-6">Explore our complete range of conveyor solutions</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Browse All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
