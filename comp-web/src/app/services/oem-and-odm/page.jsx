
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';

const OemAndOdmPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white text-[#1E293B]">
        {/* --- 1. Hero Section --- */}
        <section 
          className="relative bg-cover bg-center text-white py-24 md:py-40 px-6"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              OEM & ODM Solutions
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Your partner for custom manufacturing and branding.
            </p>
          </div>
        </section>

        {/* --- 2. Content Section --- */}
        <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-lg text-gray-700 mb-6">
                With an in-house R&D facility and automated SMT production line, we offer customized OEM & ODM solutions across a wide range of product segments.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">We offer a wide range of products for the OEM & ODM segment:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>Power Electronics</li>
                  <li>Wireless</li>
                  <li>Lighting</li>
                  <li>Test and Measurement</li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                  <li>Automotive</li>
                  <li>Automation</li>
                  <li>Defense</li>
                  <li>Security system</li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                  <li>Solar</li>
                  <li>Electric Vehicle</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default OemAndOdmPage;
