"use client";
import React from 'react';

const InvolvementPage = () => {
  return (
    <div className="bg-white text-[#1E293B]">
      {/* --- 1. Hero Section --- */}
      <section 
        className="relative bg-cover bg-center text-white py-24 md:py-40 px-6"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Our Involvement
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Providing comprehensive solutions from consultancy to manufacturing.
          </p>
        </div>
      </section>

      {/* --- 2. Product Design Consultancy --- */}
      <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Product Design Consultancy</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg text-gray-700 mb-6">We consult for high-end technology implementation at clients’ site or implementation of new technology according to the clients’ requirement or upgrading, enhancing the existing facilities in the clients end with the new technology integrated with the existing one. JI offers a full range of consulting services to help analyze your business requirements for effective implementation of solutions.</p>
            <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Our consulting services cover:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Designing of product</li>
              <li>Set-up of manufacturing plant</li>
              <li>Sourcing of Equipment and Machinery for manufacturing</li>
              <li>Training for manufacturing and quality control</li>
              <li>Set-up of Test Lab</li>
              <li>Sourcing of Parts</li>
              <li>Modification of existing product design</li>
              <li>Planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 3. Product Development --- */}
      <section className="py-16 md:py-20 px-6 bg-[#dcffd8]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Product Development</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg text-gray-700 mb-6">Beside the Design, with hardware and product development expertise in diverse platforms, best-of-breed tools and techniques, combined with industry best practices, JI offers scalable end-to-end application development and management solutions from requirement analysis for deployment and rollout. We are developing hardware, related to Lighting, Household, Solar, Automotive, Rail, Home Automation, Adopters, Chargers, Test and Measurements, at reasonable cost.</p>
            <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Our services span the following application lifecycle stages:</h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li><strong>DEVELOPMENT:</strong> Providing end-to-end development from requirement analysis for deployment and rollout.</li>
              <li><strong>MAINTENANCE:</strong> Changing or enhancing Hardware to meet changing or increasing business demands in the post-rollout phase of an application.</li>
              <li><strong>SUPPORT:</strong> Providing component support, manufacturing support, training and on-call support.</li>
              <li><strong>INTEGRATION/MIGRATION/TRANSFORMATION:</strong> Replacing, migrating and integrating legacy or bespoke systems with products.</li>
              <li><strong>APPLICATION MANAGEMENT:</strong> JIED takes complete ownership of the outsourced suite of applications as per the agreed scope and manages the support. This typically involves transition management, project management, proactive risk and scope change management, quality management, SLA management etc.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 4. Manufacturing --- */}
      <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Manufacturing</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
            <p className="text-lg text-gray-700 mb-6">JIED has a manufacturing plant with skilled labor, quality control and test Lab for quality assurance. JIED offers customized products according to clients’ requirements we have manufacturing facility of all SMD and Through Hole components. We also manufacture some regular items for industrial need which have common demand in industry.</p>
            <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Followings are the strength of our manufacturing plant:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Wide area 2500 sq. feet.</li>
              <li>Skilled labor</li>
              <li>Quality Monitoring</li>
              <li>Safe manufacturing process</li>
              <li>Pcs to pcs testing</li>
            </ul>
          </div>
        </div>
      </section>


    </div>
  );
};

export default InvolvementPage;
