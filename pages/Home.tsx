
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Page } from '../types';
import { SERVICES, CORE_VALUES, getIcon } from '../constants';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/ache1/1920/1080"
            alt="Industrial Heat Exchanger"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              Excellence in <span className="text-[#CC0000]">ACHE</span> Spares & Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10">
              Address the market gap with over 20 years of expertise in heat transfer. Quality, speed, and reliability globally.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => onPageChange(Page.Contact)}
                className="bg-[#CC0000] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-bold hover:bg-red-700 transition-all flex items-center justify-center space-x-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => onPageChange(Page.Services)}
                className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-bold hover:bg-gray-100 transition-all"
              >
                View Services
              </button>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 opacity-70">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold">20+</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-white/20"></div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold">Global</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider">Reach</p>
              </div>
              <div className="w-px h-8 sm:h-10 bg-white/20"></div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold">AVL</p>
                <p className="text-xs sm:text-sm uppercase tracking-wider">Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#CC0000] font-bold text-sm uppercase tracking-widest mb-2">Our Story</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Bridging the Gap in Technical Heat Transfer Services</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Air-Fin Technical Services was founded by a group of industry veterans to address critical shortages in high-quality Air-Cooled Heat Exchanger components and maintenance expertise.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Project Management & Procurement',
                  'Finned Tube Specialized Replacements',
                  'Comprehensive Pressure Part Services',
                  'Fast-turnaround Supply Chain'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#CC0000]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onPageChange(Page.About)}
                className="text-[#CC0000] font-bold flex items-center space-x-2 hover:translate-x-2 transition-transform underline underline-offset-4"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://picsum.photos/seed/team1/800/600"
                alt="Technical Team"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#CC0000] text-white p-8 rounded-lg hidden md:block">
                <p className="text-4xl font-bold mb-1">99.9%</p>
                <p className="text-sm font-medium opacity-80 uppercase">Quality Accuracy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#CC0000] font-bold text-sm uppercase tracking-widest mb-2">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Specialized ACHE Solutions</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide world-class spares and services tailored to the oil, gas, and petrochemical sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-red-50 text-[#CC0000] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#CC0000] group-hover:text-white transition-colors">
                  {getIcon(service.icon)}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <button
                  onClick={() => onPageChange(Page.Services)}
                  className="text-gray-900 font-semibold text-sm flex items-center space-x-2 group-hover:text-[#CC0000] transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {CORE_VALUES.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries CTA */}
      <section className="py-20 bg-[#CC0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Serving the World's Toughest Industries</h3>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-10">
            From major oil refineries to petrochemical complexes and power generation plants, our team ensures your heat exchange processes stay efficient.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale brightness-200">
            {/* Simple representation of industry icons/logos */}
            <span className="text-xl font-bold uppercase tracking-tighter">Oil & Gas</span>
            <span className="text-xl font-bold uppercase tracking-tighter">Petrochemical</span>
            <span className="text-xl font-bold uppercase tracking-tighter">Energy</span>
            <span className="text-xl font-bold uppercase tracking-tighter">Refineries</span>
          </div>
        </div>
      </section>

      {/* Ready to Start */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to minimize your downtime?</h3>
          <p className="text-xl text-gray-600 mb-10">
            Our technical experts are standing by to assist with your spare parts requirements or emergency service needs.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => onPageChange(Page.Contact)}
              className="bg-[#CC0000] text-white px-10 py-4 rounded-md text-lg font-bold hover:bg-red-700 transition-all shadow-lg"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
