
import React from 'react';
import { CheckCircle2, Wrench, Settings, ClipboardCheck } from 'lucide-react';

const ServicesPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Image Section */}
                <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative h-96">
                        <img
                            src="/REFINERY 1.jpg"
                            alt="ACHE Installation at Refinery"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                            <div className="max-w-2xl px-8 md:px-12">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional ACHE Services</h1>
                                <p className="text-xl text-gray-200">Expert installation, maintenance, and supervision for Air Cooled Heat Exchangers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[#FF8C00] font-bold text-sm uppercase tracking-widest mb-2">What We Do</h2>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Technical Services</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive ACHE solutions from installation to maintenance, delivered by experienced professionals
                    </p>
                </div>

                {/* Finned Tube Replacement */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 md:p-12 mb-8">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                                <Wrench className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Finned Tube Replacement</h2>
                                <p className="text-[#FF8C00] font-semibold">Maximizing Equipment Uptime</p>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            AFTS offers rapid fin tube replacement services "maximizing the uptime" of the equipment. Often referred to as re-tubing,
                            this is a specialized industrial maintenance process for Air Cooled heat exchangers. The job involves replacing degraded
                            or corroded finned tubes to restore equipment functionality and extend its lifespan.
                        </p>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <img src="/FINNED TUBES.jpg" alt="Finned Tubes" className="w-full h-48 object-cover rounded-lg shadow-md" />
                            <img src="/TTS 2.jpg" alt="TTS Welding Process" className="w-full h-48 object-cover rounded-lg shadow-md" />
                            <img src="/TTS 4.jpg" alt="Tube Installation" className="w-full h-48 object-cover rounded-lg shadow-md" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
                                </div>
                                <h3 className="font-bold text-gray-900">Inspection & Preparation</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Equipment is thoroughly inspected to identify damage, corrosion, or leaks. System is cleaned and prepared for tube removal.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
                                </div>
                                <h3 className="font-bold text-gray-900">Tube Removal</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Old or defective tubes are removed using specialized tools like tube cutters or pullers, avoiding damage to surrounding fins.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
                                </div>
                                <h3 className="font-bold text-gray-900">Fin Inspection & Repair</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Remaining fins are inspected for damage (bending, corrosion) and repaired or replaced as needed.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
                                </div>
                                <h3 className="font-bold text-gray-900">New Tube Installation</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                New finned tubes are installed and secured using tube expander or TTS welding for optimal thermal contact.
                            </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-[#FF8C00]" />
                                </div>
                                <h3 className="font-bold text-gray-900">Final Inspection & Testing</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Unit is inspected for proper installation, then pressure tested to ensure peak efficiency before service.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ACHE Erection Services */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 md:p-12 mb-8">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                                <Settings className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">ACHE / Air-Fin Cooler Erection Services</h2>
                                <p className="text-[#FF8C00] font-semibold">Comprehensive Installation Solutions</p>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our specialists provide comprehensive Air Cooled Heat Exchanger (ACHE) services. We leverage our team's deep expertise
                            to deliver efficient, precise installation and seamless startup procedures tailored to your project requirements.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            This involves the systematic installation of the unit's mechanical, structural, and electrical components, followed by
                            functional testing and final operational checks to ensure the system performs according to design specifications.
                        </p>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <img src="/ACHE GA 2.jpg" alt="ACHE General Assembly" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            <img src="/ERECTION 1.jpg" alt="ACHE Erection Process" className="w-full h-64 object-cover rounded-lg shadow-md" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: 'Foundation Preparation & Alignment',
                                items: ['Foundation inspection for cleanliness, levelness, and design compliance', 'Anchor bolt verification', 'Shim plate placement and adjustment for uniform weight distribution']
                            },
                            {
                                title: 'Structural Assembly',
                                items: ['Main support structure (columns, beams & bracings) placement and anchoring', 'Walkways, handrails, and ladders installation for maintenance access']
                            },
                            {
                                title: 'Tube Bundle Installation',
                                items: ['Finned tube bundles with nitrogen holding charge', 'Heavy lift crane positioning as per drawings', 'Precise placement on supporting structure']
                            },
                            {
                                title: 'Mechanical Equipment Installation',
                                items: ['Fans, motors, speed reducers installation', 'Fan blade clearance and pitch angle verification', 'Drive belt tensioning per manufacturer specs']
                            },
                            {
                                title: 'Pre-Commissioning Checks',
                                items: ['Visual inspection for damage and obstructions', 'Tightness verification of all connections', 'Electrical testing and wiring verification']
                            },
                            {
                                title: 'Start-Up & Functional Testing',
                                items: ['Safety devices and emergency shut-off testing', 'Motor rotation and fan operation checks', 'Air flow and temperature measurement', 'Process fluid introduction and leak monitoring', 'Performance data recording']
                            },
                            {
                                title: 'Documentation & Handover',
                                items: ['Comprehensive inspection records compilation', 'Test results and operational data documentation', 'System approval and official handover']
                            }
                        ].map((phase, index) => (
                            <div key={index} className="bg-white border-l-4 border-[#FF8C00] rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                                <ul className="space-y-2">
                                    {phase.items.map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Supervision Services */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-8 md:p-12">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-[#FF8C00] rounded-lg flex items-center justify-center">
                                <ClipboardCheck className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Supervision Services</h2>
                                <p className="text-[#FF8C00] font-semibold">Expert ACHE Erection & Trial Run Supervision</p>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We provide expert supervision services for Air Cooled Heat Exchanger (ACHE) erection and trial runs.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our highly experienced engineers provide end-to-end supervision for ACHE erection and trial runs. We manage every
                            detail—from initial scheduling and manpower planning to tools, tackles, and final commissioning—ensuring precise
                            installation and optimal performance that aligns perfectly with the end-user schedule.
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="bg-gray-900 text-white rounded-xl p-12 text-center">
                    <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact our technical team to discuss your ACHE service requirements and get a customized solution
                    </p>
                    <button className="bg-[#FF8C00] text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-orange-600 transition-colors">
                        Request Service Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
