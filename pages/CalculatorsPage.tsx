
import React, { useState } from 'react';
import { Calculator, Clock, TrendingUp, Info } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const CalculatorsPage: React.FC = () => {
  const [activeCalc, setActiveCalc] = useState<'roi' | 'lead-time'>('roi');

  // ROI Calculator State
  const [investment, setInvestment] = useState(50000);
  const [annualSavings, setAnnualSavings] = useState(15000);

  const roi = (annualSavings / investment) * 100;
  const payback = investment / annualSavings;

  const roiChartData = [
    { year: 'Year 1', value: annualSavings },
    { year: 'Year 2', value: annualSavings * 2 },
    { year: 'Year 3', value: annualSavings * 3 },
    { year: 'Year 4', value: annualSavings * 4 },
    { year: 'Year 5', value: annualSavings * 5 },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#CC0000] font-bold text-sm uppercase tracking-widest mb-2">Resource Center</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Industrial & Financial Tools</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utilize our professional tools to estimate project timelines and financial returns for ACHE maintenance projects.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg flex space-x-1">
            <button
              onClick={() => setActiveCalc('roi')}
              className={`flex items-center space-x-2 px-6 py-2 rounded-md font-semibold transition-all ${activeCalc === 'roi' ? 'bg-white text-[#CC0000] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <TrendingUp className="w-5 h-5" />
              <span>Maintenance ROI</span>
            </button>
            <button
              onClick={() => setActiveCalc('lead-time')}
              className={`flex items-center space-x-2 px-6 py-2 rounded-md font-semibold transition-all ${activeCalc === 'lead-time' ? 'bg-white text-[#CC0000] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Clock className="w-5 h-5" />
              <span>Lead Time Estimator</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Controls Column */}
          <div className="lg:col-span-1 bg-gray-50 p-8 rounded-xl border border-gray-100">
            {activeCalc === 'roi' ? (
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Initial Investment (₹)
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="500000"
                    step="5000"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#CC0000]"
                  />
                  <div className="mt-4 text-2xl font-bold text-gray-900">
                    ₹{investment.toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                    Expected Annual Savings (₹)
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="200000"
                    step="1000"
                    value={annualSavings}
                    onChange={(e) => setAnnualSavings(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#CC0000]"
                  />
                  <div className="mt-4 text-2xl font-bold text-gray-900">
                    ₹{annualSavings.toLocaleString()}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <Info className="w-4 h-4" />
                    <span className="text-xs">Based on efficiency gains and reduced downtime metrics.</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Estimator</h3>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Product Category</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#CC0000] outline-none">
                    <option>Finned Tubes (Stock)</option>
                    <option>Finned Tubes (Custom)</option>
                    <option>Fan Blades</option>
                    <option>Plugs & Gaskets</option>
                    <option>Structural Parts</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Order Quantity</label>
                  <input type="number" defaultValue={100} className="w-full p-3 border border-gray-300 rounded-md outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Shipping Region</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md outline-none">
                    <option>Middle East</option>
                    <option>Southeast Asia</option>
                    <option>Europe</option>
                    <option>Americas</option>
                  </select>
                </div>
                <button className="w-full bg-[#CC0000] text-white py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                  Calculate Lead Time
                </button>
              </div>
            )}
          </div>

          {/* Visualization Column */}
          <div className="lg:col-span-2 space-y-8">
            {activeCalc === 'roi' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-red-50 shadow-sm">
                    <p className="text-sm font-bold text-gray-500 uppercase mb-1">Return on Investment</p>
                    <p className="text-4xl font-bold text-[#CC0000]">{roi.toFixed(1)}%</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border-2 border-red-50 shadow-sm">
                    <p className="text-sm font-bold text-gray-500 uppercase mb-1">Payback Period</p>
                    <p className="text-4xl font-bold text-gray-900">{payback.toFixed(1)} Years</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900 mb-8 flex items-center space-x-2">
                    <Calculator className="w-5 h-5 text-[#CC0000]" />
                    <span>Projected Cumulative Savings</span>
                  </h4>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={roiChartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                        <XAxis dataKey="year" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val / 1000}k`} />
                        <Tooltip cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {roiChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === roiChartData.length - 1 ? '#CC0000' : '#333333'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-gray-50 p-12 rounded-xl border border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                  <Clock className="w-12 h-12 text-[#CC0000]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Estimated Lead Time: 4-6 Weeks</h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  This estimate includes production time, quality certification (AVL compliant), and standard air freight to your region.
                </p>
                <div className="w-full max-w-lg space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-700">Production</span>
                    <span className="text-sm font-bold text-green-600">3 Weeks</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-700">AVL Certification</span>
                    <span className="text-sm font-bold text-green-600">1 Week</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-700">Logistics</span>
                    <span className="text-sm font-bold text-[#CC0000]">1-2 Weeks</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorsPage;
