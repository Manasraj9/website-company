"use client"
import React from 'react';
import Image from 'next/image';
import { FaUsers } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";


// --- Main Homepage Component ---
const HomePage = () => {
  return (
    <div className="bg-white text-[#1E293B]">
      
      {/* --- 1. Hero Section --- */}
      <section 
        className="relative text-white py-24 md:py-50 px-6 flex items-center justify-center"
      >
        <Image
            src="/images/bg.png"
            alt="background"
            layout="fill"
            objectFit="cover"
            priority
            fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            We see a world of problems. And it is awesome.
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We love problems because we’re obsessed with creating solutions. It's what we live for. It's what we're here to do.
          </p>
          <a
            href="/contact"
            className="bg-[#306d27] hover:bg-[#0e5604] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
          >
            Bring Us Your Problem
          </a>
        </div>
      </section>

      {/* --- 2. Introduction Section --- */}
      <section id="about" className="py-16 md:py-20 px-6 bg-[#dcffd8] ">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Your Innovation Partner for Integrated Solutions in Electronics</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            JIED provides one-stop solutions in Power Electronics, Wireless, Automation, Automotive, Sensors, and Testing & Measurement. We focus on high quality, cost-effective, and user-friendly electronic products to meet the requirements of your trade and industry.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <h3 className="text-xl md:text-2xl font-bold text-[#0e5604] mb-3 ">Our Mission</h3>
              <p className="text-gray-700">To achieve the reputation of a quality, high standard & reliable solution & service Provider Company in the electronics industry with a commitment to on-time, value-driven solutions.</p>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 ease-out group-hover:w-full"></span>
              <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-emerald-600 transition-all duration-200 ease-out delay-200 group-hover:h-full"></span>
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 ease-out delay-400 group-hover:w-full"></span>
              <span className="absolute top-0 left-0 w-0.5 h-0 bg-emerald-600 transition-all duration-200 ease-out delay-600 group-hover:h-full"></span>
            </div>
            <div className="group p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <h3 className="text-xl md:text-2xl font-bold text-[#0e5604] mb-3">Our Vision</h3>
              <p className="text-gray-700">To achieve 100% customer satisfaction by delivering quality products and services at an affordable cost, striving to become a leading entity in technology-based corporate solutions.</p>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 ease-out group-hover:w-full"></span>
              <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-emerald-600 transition-all duration-200 ease-out delay-200 group-hover:h-full"></span>
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 ease-out delay-400 group-hover:w-full"></span>
              <span className="absolute top-0 left-0 w-0.5 h-0 bg-emerald-600 transition-all duration-200 ease-out delay-600 group-hover:h-full"></span>
            </div>
            <div className="group p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <h3 className="text-xl md:text-2xl font-bold text-[#0e5604] mb-3">Our Philosophy</h3>
              <p className="text-gray-700">Building long-term business partnerships where interpersonal relationships, reliability, assured quality, and target-oriented modern technology are the major building blocks.</p>
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 ease-out group-hover:w-full"></span>
              <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-emerald-600 transition-all duration-200 ease-out delay-200 group-hover:h-full"></span>
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 ease-out delay-400 group-hover:w-full"></span>
              <span className="absolute top-0 left-0 w-0.5 h-0 bg-emerald-600 transition-all duration-200 ease-out delay-600 group-hover:h-full"></span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Our Involvement / Services Section --- */}
      <section id="services" className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Involvement</h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#306d27] rounded-full p-5 mb-4">
                <FaUsers className='text-white text-4xl'/>
              </div>
              <h3 className="text-xl font-bold mb-2">Product Design & Consultancy</h3>
              <p className="text-gray-600">We offer a full range of consulting to analyze your business requirements and help design, upgrade, or modify products with new technology.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#306d27] rounded-full p-5 mb-4">
                <FaMicrochip  className='text-white text-4xl'/>
              </div>
              <h3 className="text-xl font-bold mb-2">Product Development</h3>
              <p className="text-gray-600">Providing end-to-end development from requirement analysis to deployment, maintenance, and manufacturing support for the entire application lifecycle.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-[#306d27] rounded-full p-5 mb-4">
                <HiOutlineLightBulb  className='text-white text-4xl'/>
              </div>
              <h3 className="text-xl font-bold mb-2">Manufacturing, OEM & ODM</h3>
              <p className="text-gray-600">With an in-house R&D facility and automated SMT production line, we offer customized OEM & ODM solutions across a wide range of product segments.</p>
            </div>
          </div>
        </div>
      </section>


      {/* --- 4. Product Offerings Section --- */}
      <section id="products" className="py-16 md:py-20 px-6 bg-[#dcffd8]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Product Offerings</h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">Cost-effective and user-friendly solutions across a wide range of industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="/images/lighting.jpg" alt="Jha Instrument - Lighting Solutions" className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#306d27]">Lighting</h3>
                <p className="text-gray-600 mb-4">Custom drivers for Domestic, Industrial, Automotive, and Signaling LED applications.</p>
                <a href="/products/Lighting" className="text-[#306d27] font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="/images/solar.jpg" alt="JIED India - Solar & Renewable Energy" className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#306d27]">Solar & Renewable</h3>
                <p className="text-gray-600 mb-4">Charge Controllers, Inverters, DC-DC Converters, and Motor Controllers (VFD).</p>
                <a href="/products/Solar" className="text-[#306d27] font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="/images/automation.jpg" alt="Jha Instrument - Automotive & Automation Solutions" className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#306d27]">Automotive & Automation</h3>
                <p className="text-gray-600 mb-4">Solutions including Light Drivers, Motor Controllers, Chargers, Sensors, and Remote Control Systems.</p>
                <a href="/products/Automation" className="text-[#306d27] font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src="/images/more.jpg" alt="JIED India - More Products" className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#306d27]">More Products</h3>
                <p className="text-gray-600 mb-4">A wide range of power supplies, battery chargers, and motor controllers.</p>
                <a href="/products/More%20Products" className="text-[#306d27] font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. Contact / CTA Section --- */}
      <section id="contact" className="py-16 md:py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Lead Your Industry?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Partner with us. Discover how our deep technical expertise and strategic insights can engineer your next breakthrough.
          </p>
          <a
            href="/contact"
            className="bg-[#306d27] hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};


export default HomePage;

