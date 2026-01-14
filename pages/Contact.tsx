
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#FF8C00] font-bold text-sm uppercase tracking-widest mb-2">Connect With Us</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Your Project Consultation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to our technical team for expert advice, quotes, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 text-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Headquarters</h4>
                    <p className="text-gray-600 text-sm">Air-Fin Technical Services Pvt Ltd, Plot No 305B, Moogambigai Nagar, Kovur, Chennai-600128.</p>
                    <p className="text-gray-600 text-sm font-semibold mt-1">GSTIN: 33AAZCA9024C1ZM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 text-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Direct Sales</h4>
                    <p className="text-gray-600 text-sm">+91 7695828840</p>
                    <p className="text-gray-600 text-sm">+91 9840204194</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 text-[#FF8C00] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Inquiries</h4>
                    <p className="text-gray-600 text-sm">afts@airfintec.com</p>
                    <p className="text-gray-600 text-sm">selvas@airfintec.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>Urgent Requirements?</span>
              </h4>
              <p className="text-gray-600 text-sm mb-6">
                For emergency ACHE maintenance or quick spares quotes, message us directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/917695828840"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-md font-bold hover:bg-green-600 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#FF8C00] bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#FF8C00] bg-gray-50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Company</label>
                  <input
                    type="text"
                    placeholder="Your Company Ltd"
                    className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#FF8C00] bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91..."
                    className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#FF8C00] bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Service Required</label>
                <select className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#FF8C00] bg-gray-50">
                  <option>ACHE Spares Supply</option>
                  <option>Finned Tube Replacement</option>
                  <option>Maintenance & Cleaning</option>
                  <option>Technical Consulting</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#FF8C00] bg-gray-50"
                ></textarea>
              </div>
              <button className="w-full bg-[#FF8C00] text-white py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-all shadow-lg flex items-center justify-center space-x-3">
                <span>Submit</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
