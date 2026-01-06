
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CalculatorsPage from './pages/CalculatorsPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Auto-scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onPageChange={setCurrentPage} />;
      case Page.Contact:
        return <Contact />;
      case Page.Calculators:
        return <CalculatorsPage />;
      case Page.About:
        return (
          <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About Air-Fin Technical Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Air-Fin Technical Services Pvt Ltd was founded in 2024 by a cohesive group of professionals, each bringing over twenty years of experience within the Heat Transfer Industry.
                </p>
                <p>
                  The company was established with an aim to address a notable gap in the market for Air-Cooled Heat Exchanger (ACHE) spares and specialized services including finned tube replacements.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 pt-4">Mission</h2>
                <p className="bg-red-50 p-6 rounded-lg border-l-4 border-[#CC0000] italic">
                  To ensure the supply of cost-effective Air Cooled Heat Exchanger (ACHE) spares and services to clients all over the world within the shortest possible timeframe.
                </p>
              </div>
              <div>
                <img src="https://picsum.photos/seed/factory/800/600" alt="Factory" className="rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        );
      case Page.Services:
        return (
          <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Our Technical Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Finned Tube Replacement", desc: "Specialized removal and installation of high-efficiency finned tubes." },
                { title: "ACHE Spares Supply", desc: "Global distribution of AVL-approved plugs, gaskets, fans, and bundles." },
                { title: "Field Performance Audits", desc: "On-site testing to identify bottlenecks in your cooling processes." },
                { title: "Project Consulting", desc: "Management and planning for large-scale heat exchanger overhauls." }
              ].map((s, i) => (
                <div key={i} className="p-8 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-600 mb-4">{s.desc}</p>
                  <button onClick={() => setCurrentPage(Page.Contact)} className="text-[#CC0000] font-bold">Inquire &rarr;</button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-red-100 selection:text-[#CC0000]">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onPageChange={setCurrentPage} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
