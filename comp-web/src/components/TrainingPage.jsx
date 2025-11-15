
"use client"
import React from 'react';

const TrainingPage = () => {
  return (
    <div className="bg-white text-[#1E293B]">

      <section 
          className="relative bg-cover bg-center text-white py-24 md:py-40 px-6"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Learn from Real Engineers. Be Industrial Ready.
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We offer practical training programs for students and professionals in Power Electronics, Automation, and Embedded Systems.
            </p>
          </div>
        </section>
      
      <section className="py-16 md:py-20 px-6 bg-[#dcffd8]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Training Programs</h2>
          </div>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>Our training programs are designed to equip individuals with the skills and knowledge needed to excel in the ever-evolving tech landscape. We offer a wide range of courses for Students and Working Professionals, from beginner to advanced levels, covering various aspects of electronics, software development, and more.</p>
            <p>Our experienced instructors provide hands-on training, ensuring that participants gain practical experience and are ready to tackle real-world challenges.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Types of Trainings We Provide</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-2 rounded-full hover:bg-[#306d27] hover:text-white transition-colors duration-300 cursor-pointer">PCB Designing</span>
            <span className="bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-2 rounded-full hover:bg-[#306d27] hover:text-white transition-colors duration-300 cursor-pointer">Microcontroller Programming</span>
            <span className="bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-2 rounded-full hover:bg-[#306d27] hover:text-white transition-colors duration-300 cursor-pointer">Design of Power Electronics Devices</span>
            <span className="bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-2 rounded-full hover:bg-[#306d27] hover:text-white transition-colors duration-300 cursor-pointer">Design of Embedded System</span>
            <span className="bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-2 rounded-full hover:bg-[#306d27] hover:text-white transition-colors duration-300 cursor-pointer">Developing the Embedded Software</span>
            <span className="bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-2 rounded-full hover:bg-[#306d27] hover:text-white transition-colors duration-300 cursor-pointer">Designing IT Hardware</span>
            <span className="bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-2 rounded-full hover:bg-[#306d27] hover:text-white transition-colors duration-300 cursor-pointer">Designing of RF Hardware</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Classroom Program</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Industrial level training.</li>
                <li>Immersive learning experience.</li>
                <li>Direct interaction with expert instructors.</li>
                <li>Hands-on labs and collaborative projects.</li>
                <li>Personalized feedback and mentorship.</li>
                <li>Structured and interactive learning environment.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Online Program</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Industrial level training.</li>
                <li>Flexible learning at your own pace.</li>
                <li>Access from anywhere in the world.</li>
                <li>High-quality video lectures and materials.</li>
                <li>Interactive assignments and assessments.</li>
                <li>Supportive online community and forums.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-gray-700 mb-8">Contact us today to enroll in one of our training programs.</p>
          <a href="/contact?subject=Training%20Program%20Inquiry" className="bg-[#306d27] hover:bg-[#0e5604] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
            Enquire Now
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default TrainingPage;
