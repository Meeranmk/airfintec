
import React from 'react';
import { Package, CheckCircle2, Wrench, Settings } from 'lucide-react';

const CalculatorsPage: React.FC = () => {
  const productCategories = [
    {
      title: 'Finned Tubes',
      icon: <Settings className="w-6 h-6" />,
      description: 'High-quality finned tubes for optimal heat transfer',
      image: '/FINNED TUBES.jpg'
    },
    {
      title: 'Headers Boxes',
      icon: <Package className="w-6 h-6" />,
      description: 'Durable header boxes for ACHE systems',
      image: '/ACHE FD & ID.jpg'
    },
    {
      title: 'Plug and Header Gaskets',
      icon: <Settings className="w-6 h-6" />,
      description: 'Precision-engineered gaskets for leak-free operation',
      image: '/PLUG GASKET.png'
    },
    {
      title: 'Plugs (Single & Double)',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Reliable plugs for tube sealing',
      image: '/HEADER PLUGS 2.png'
    },
    {
      title: 'Studs & Fasteners',
      icon: <Settings className="w-6 h-6" />,
      description: 'High-strength fastening solutions',
      image: '/PLUG & GASKET.jpg'
    },
    {
      title: 'Tube Bundle Inserts/Turbulators',
      icon: <Package className="w-6 h-6" />,
      description: 'Enhanced heat transfer components',
      image: '/TB 2.jpg'
    },
    {
      title: 'Bearing Blocks',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Forced & Induced bearing blocks',
      image: '/BEARING BLOCK 1.jpg'
    },
    {
      title: 'Belts & Pulleys',
      icon: <Settings className="w-6 h-6" />,
      description: 'Precision drive components',
      image: '/BELTS 3.jpg'
    },
    {
      title: 'Fans and Motors',
      icon: <Package className="w-6 h-6" />,
      description: 'High-performance cooling systems',
      image: '/FAN 1.jpg'
    },
    {
      title: 'Anti-Rotation Devices',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Secure mounting solutions',
      image: '/ANTI ROTATION DEVICE.png'
    },
    {
      title: 'Louvers',
      icon: <Settings className="w-6 h-6" />,
      description: 'Airflow control components',
      image: '/ACHE 2.png'
    },
    {
      title: 'ACHE Support Structures',
      icon: <Package className="w-6 h-6" />,
      description: 'Robust structural components',
      image: '/ACHE 4.png'
    },
    {
      title: 'Motor Suspension Assemblies',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Vibration-dampening mounting systems',
      image: '/FAN MOTOR & PULLEYS.jpg'
    },
    {
      title: 'Plenum Chambers',
      icon: <Settings className="w-6 h-6" />,
      description: 'Conical & Box Type configurations',
      image: '/CONICAL PLENUM 1.jpg'
    },
    {
      title: 'Guards',
      icon: <Package className="w-6 h-6" />,
      description: 'Fin, Fan & Pulley safety guards',
      image: '/ACHE 3.jpg'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image Section */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-96">
            <img
              src="/ACHE 5.jpg"
              alt="ACHE Components and Spares"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="max-w-2xl px-8 md:px-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium ACHE Spares</h1>
                <p className="text-xl text-gray-200">Quality-inspected components from approved vendors, delivered on time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#FF8C00] font-bold text-sm uppercase tracking-widest mb-2">Our Products</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">ACHE Spares</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            AFTS specializes in the sourcing and supply of high-quality Air Cooled Heat Exchanger (ACHE) spares,
            ensuring all components meet approved vendor list standards and are thoroughly inspected by our engineers
            for quality control.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-semibold text-gray-700">AVL Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-semibold text-gray-700">Quality Inspected</span>
            </div>
            <div className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
              <span className="font-semibold text-gray-700">Fast Delivery</span>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comprehensive Component Range</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-[#FF8C00] transition-all group"
              >
                {/* Product Image */}
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-colors flex-shrink-0">
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{category.title}</h4>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance & Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              AFTS leverages its robust vendor network to guarantee high-quality, inspected components with efficient
              delivery times. Every component undergoes rigorous quality control checks by our experienced engineers
              to ensure it meets or exceeds industry standards.
            </p>
          </div>
        </div>

        {/* Additional Services */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-[#FF8C00]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Fin Cleaning Services</h4>
              <p className="text-gray-600 mb-4">Professional cleaning services for optimal ACHE performance</p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            <div className="bg-white border-2 border-[#FF8C00] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Custom Orders</h4>
              <p className="text-gray-600 mb-4">Need a specific component? Contact us for custom procurement</p>
              <button className="bg-[#FF8C00] text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorsPage;
