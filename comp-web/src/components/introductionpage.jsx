
"use client"
import React from 'react';

const IntroductionPage = () => {
  const teamData = [
    {
      "name": "Piyush Jha",
      "intro": "Founder and Managing Director of JIED India",
      "image": "/images/team/logo.jpg",
      "description": "Designer, Menotor and Industry Expert. ",
      "email": "piyush@jhainstrument.in"
    },
    {
      "name": "Manas Raj",
      "intro": "Director of Embedded and IT Division",
      "image": "/images/team/logo.jpg",
      "description": "B.Tech in Computer Science and Engg.",
      "email": "info@jhainstrument.in"
    },
    {
      "name": "Pooja Jha",
      "intro": "Director of Finance and Administration",
      "image": "/images/team/logo.jpg",
      "description": "Masters in Commerce",
      // "email": "info@jhainstrument.in"
    },
    {
      "name": "Shivendra Jha",
      "intro": "Director of Operations and Finance",
      "image": "/images/team/logo.jpg",
      "description": "Masters in Commerce",
      // "email": "info@jhainstrument.in"
    }
  ];

  return (
    <div className="bg-white text-[#1E293B]">

      <section
        className="relative bg-cover bg-center text-white py-24 md:py-40 px-6"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Our Introduction
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Achieving excellence through commitment, innovation, and teamwork.
          </p>
        </div>
      </section>
      {/* --- 3. Introduction Text Section --- */}
      <section className="py-16 md:py-20 px-6 bg-[#dcffd8]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Introduction to JIED</h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">Your one-stop solution for innovative electronic products and design services.</p>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>JIED provides one stop solutions on Power Electronics, Wireless, Automation, Automotive, Sensor, Transducer, Test and Measurement for your Trade and Industry. Depending on the size and field of your organization, we have different products and services to meet your requirements. We provide optimum and customized Products and design solutions made for your organization.</p>
            <p>JIED began its business operation as a Technical Support and Design Solutions providing company in August 2015.</p>
            <p>JIED focuses exclusively on research and development of high quality, cost-effective and user-friendly electronics products and implementation of services. We are advancing on a tremendous pace and with the involvement of skilled and experienced people working in the organization. Our major clients are from public sector, MNCs, Large Corporate, Manufacturing industry, MSME and startup sector, from the different parts of the globe.</p>
            <p>We have an in-house R&D facility, automated SMT production line, EMS and Testing facility to support our client over wide range of product segment.</p>
          </div>
        </div>
      </section>
      {/* --- 2. Company Profile Section --- */}
      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Company Profile</h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">Founded in 2015, JIED INDIA is a leader in innovative electronic solutions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">General Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>CORPORATION NAME:</strong> JHA INSTRUMENT</li>
                  <li><strong>Trademark:</strong> JIED</li>
                  <li><strong>REGISTERED ADDRESS:</strong> Ward No-11, Jagatpur, Supaul , Bihar, India (PIN CODE – 852110)</li>
                  <li><strong>GSTIN:</strong> 10XXXXXXXXXXXZL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 border-b pb-2">Business Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>NATURE OF BUSINESS:</strong> MANUFACTURING, SERVICE</li>
                  <li><strong>FOUNDATION DAY:</strong> 27-08-2015</li>
                  <li><strong>FOUNDER:</strong> PIYUSH JHA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Team Section --- */}
      <section className="py-16 md:py-20 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Core Team Members</h2>
            <p className="text-base md:text-lg text-gray-600 mt-2">Meet the dedicated professionals behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="group bg-white rounded-lg shadow-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative w-32 h-32 mx-auto mb-4 shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full shadow-lg border-4 border-[#0e5604] object-cover"
                  />

                  {/* Decorative rings */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-3 border-transparent group-hover:border-[#0e5604] transition-all duration-300 transform group-hover:scale-110 pointer-events-none"></div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full border-3 border-transparent group-hover:border-[#0e5604] transition-all duration-300 transform group-hover:scale-120 pointer-events-none"></div>
                </div>

                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-800">{member.intro}</p>
                <p className="text-gray-700 mt-2">{member.description}</p>
                <a href={`mailto:${member.email}`} className="text-gray-700 mt-2 hover:underline cursor-pointer">{member.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroductionPage;
