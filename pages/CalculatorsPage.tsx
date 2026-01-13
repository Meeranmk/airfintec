
import React from 'react';
import { Package, CheckCircle2, Wrench, Settings } from 'lucide-react';

const CalculatorsPage: React.FC = () => {
  const productCategories = [
    {
      title: 'Finned Tubes',
      icon: <Settings className="w-6 h-6" />,
      description: 'High-quality finned tubes for optimal heat transfer'
    },
    {
      title: 'Headers Boxes',
      icon: <Package className="w-6 h-6" />,
      description: 'Durable header boxes for ACHE systems'
    },
    {
      title: 'Plug and Header Gaskets',
      icon: <Settings className="w-6 h-6" />,
      description: 'Precision-engineered gaskets for leak-free operation'
    },
    {
      title: 'Plugs (Single & Double)',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Reliable plugs for tube sealing'
    },
    {
      title: 'Studs & Fasteners',
      icon: <Settings className="w-6 h-6" />,
      description: 'High-strength fastening solutions'
    },
    {
      title: 'Tube Bundle Inserts/Turbulators',
      icon: <Package className="w-6 h-6" />,
      description: 'Enhanced heat transfer components'
    },
    {
      title: 'Bearing Blocks',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Forced & Induced bearing blocks'
    },
    {
      title: 'Belts & Pulleys',
      icon: <Settings className="w-6 h-6" />,
      description: 'Precision drive components'
    },
    {
      title: 'Fans and Motors',
      icon: <Package className="w-6 h-6" />,
      description: 'High-performance cooling systems'
    },
    {
      title: 'Anti-Rotation Devices',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Secure mounting solutions'
    },
    {
      title: 'Louvers',
      icon: <Settings className="w-6 h-6" />,
      description: 'Airflow control components'
    },
    {
      title: 'ACHE Support Structures',
      icon: <Package className="w-6 h-6" />,
      description: 'Robust structural components'
    },
    {
      title: 'Motor Suspension Assemblies',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Vibration-dampening mounting systems'
    },
    {
      title: 'Plenum Chambers',
      icon: <Settings className="w-6 h-6" />,
      description: 'Conical & Box Type configurations'
    },
    {
      title: 'Guards',
      icon: <Package className="w-6 h-6" />,
      description: 'Fin, Fan & Pulley safety guards'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#CC0000] font-bold text-sm uppercase tracking-widest mb-2">Our Products</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">ACHE Spares</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            AFTS specializes in the sourcing and supply of high-quality Air Cooled Heat Exchanger (ACHE) spares,
            ensuring all components meet approved vendor list standards and are thoroughly inspected by our engineers
            for quality control.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#CC0000]" />
              <span className="font-semibold text-gray-700">AVL Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#CC0000]" />
              <span className="font-semibold text-gray-700">Quality Inspected</span>
            </div>
            <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-[#CC0000]" />
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
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-[#CC0000] transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-[#CC0000] group-hover:bg-[#CC0000] group-hover:text-white transition-colors flex-shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{category.title}</h4>
                    <p className="text-sm text-gray-600">{category.description}</p>
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
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-[#CC0000]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Fin Cleaning Services</h4>
              <p className="text-gray-600 mb-4">Professional cleaning services for optimal ACHE performance</p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </div>
            <div className="bg-white border-2 border-[#CC0000] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#CC0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Custom Orders</h4>
              <p className="text-gray-600 mb-4">Need a specific component? Contact us for custom procurement</p>
              <button className="bg-[#CC0000] text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors">
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
