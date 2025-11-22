
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';
import AboutUsSubnav from '@/components/AboutUsSubnav';

const VisionPage = () => {
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
              Our Mission & Vision
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Achieving excellence through commitment, innovation, and teamwork.
            </p>
          </div>
        </section>
        <AboutUsSubnav />

        {/* --- 2. Mission & Vision Section --- */}
        <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-4 text-[#0e5604]">Our Mission</h2>
                <p className="text-lg text-gray-700 space-y-4">
                  Our Mission is to achieve the reputation of a quality, high standard & reliable solution & service Provider Company in the electronics industry. Our commitment is to provide high quality, value-driven electronic solutions on time with world-class support. We are committed to the success of our customers, the development of our employees, and the increase of shareholder value.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-4 text-[#0e5604]">Our Vision</h2>
                <p className="text-lg text-gray-700 space-y-4">
                  Our Vision is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become an entity in technology based corporate solutions, capable of demanding unconditional response from the targeted niche. We also believe that for our scope of improvisation – the sky is the limit, and we are always ready to take our achievements to the next level. We are growing and would always like to remain on the growing streak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. Core Values Section --- */}
        <section className="py-16 md:py-20 px-6 bg-[#dcffd8]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">Our keys for development:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Desire for Excellence</li>
                  <li>Trust and confidence build-up</li>
                  <li>Innovation</li>
                  <li>Forward-Thinking</li>
                  <li>Fearless</li>
                  <li>Teamwork</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">We believe in:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Motivation</li>
                  <li>Collective responsibility and leadership</li>
                  <li>Professionalism and ethics</li>
                  <li>Adding values to our client needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. Philosophy Section --- */}
        <section className="py-16 md:py-20 px-6 bg-gray-100">
            <div className="container mx-auto max-w-4xl text-center">
                <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed border-l-4 border-[#0e5604] pl-8">
                    “Some people accept the world as it is. Then there’s the rest of us–the people who see room for improvement and tinker with what most take for granted. We see a world of problems and it is awesome. Problems get us thinking. Problems push boundaries. Problems make tomorrow more interesting. We love problems because we’re obsessed with creating solutions. So bring them on. It's what we live for. It's what we're here to do.”
                </blockquote>
            </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default VisionPage;
