
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';

const StrengthsPage = () => {
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
              Strength & Capabilities
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Focused on R&D, user-friendly design, and cost-effective solutions.
            </p>
          </div>
        </section>

        {/* --- 2. Core Strengths --- */}
        <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12 transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-lg text-gray-700">Main Strength of JIED lies in the Research and Development, specialized and highly focused operation. Increasing customer awareness is the strength where it excels over its competitors. Our strength lays in our ability to blend Design expertise into cost-effective hardware Aided Smart and user-friendly Solutions, Products and Services. We understand the need for skill transfer to client personnel.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">System Analysis & Design</h3>
                <p className="text-gray-700">Our team combines functional and technical analysts to specialize in the latest technologies, ensuring proper system development.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Research and Development</h3>
                <p className="text-gray-700">R&D is our main strength. Our team specializes in Power Electronics, Automation, MCU, Wireless, Sensors, and Transducers, using new technology to design cost-effective parts.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Inventory Management</h3>
                <p className="text-gray-700">Our design team focuses on low BOM items and using common components to efficiently manage inventory.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">User-Friendly Design</h3>
                <p className="text-gray-700">We are skilled in developing user-friendly, environmentally friendly, and low-maintenance product solutions.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Designing Skills</h3>
                <p className="text-gray-700">Our team has wide experience in developing hardware and software for various applications. We can provide PCB Gerber files, MCU program HEX files, and BLE Apps.</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">OEM & ODM Service</h3>
                <p className="text-gray-700">We offer OEM & ODM services over a wide range of products with the support of our in-house R&D and manufacturing facilities.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default StrengthsPage;
