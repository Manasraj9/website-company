
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';

const ProductPrototypingPage = () => {
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
              Product Prototyping
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Bringing your ideas to life with functional prototypes.
            </p>
          </div>
        </section>

        {/* --- 2. Content Section --- */}
        <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-lg text-gray-700 mb-6">
                At JHA INSTRUMENT, we specialize in bringing your ideas to life through rapid and functional prototyping. Our prototyping services allow you to test and validate your concepts, iterate on your designs, and get your product to market faster.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Our prototyping capabilities include:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Proof of Concept (PoC) Development:</strong> We can help you build a PoC to demonstrate the feasibility of your idea and attract investors.</li>
                <li><strong>Functional Prototypes:</strong> We can create fully functional prototypes that you can use for user testing and demonstrations.</li>
                <li><strong>Pre-production Prototypes:</strong> We can help you create pre-production prototypes that are ready for manufacturing.</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default ProductPrototypingPage;
