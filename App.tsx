
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CalculatorsPage from './pages/CalculatorsPage';
import ServicesPage from './pages/ServicesPage';
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
                <p className="bg-orange-50 p-6 rounded-lg border-l-4 border-[#FF8C00] italic">
                  To ensure the supply of cost-effective Air Cooled Heat Exchanger (ACHE) spares and services to clients all over the world within the shortest possible timeframe.
                </p>
              </div>
              <div>
                <img src="/REFINERY 1.jpg" alt="Refinery" className="rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        );
      case Page.Services:
        return <ServicesPage />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-[#FF8C00]">
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
