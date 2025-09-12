
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';

const ProductDesigningAndDevelopmentPage = () => {
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
              Product Designing and Development
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Your Research and Development Partner.
            </p>
          </div>
        </section>

        {/* --- 2. Content Section --- */}
        <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-lg text-gray-700 space-y-4">
                The company has been formed in 2015 by a group of professionals having vivid experience and wide exposure in Electronics Industry. The people involved here are young, qualified business graduates and qualified engineers. The resource personnel working in the company have been consistently providing reliable support services and consultancy to a wide variety of corporate houses either in the capacity of executive or as business partner or consultant. The bottom line of the company philosophy is building a long-term business partnership with its clients where interpersonal relationship, reliability, assured quality and target oriented modern technology are the major building blocks.
              </p>
              <br/>
              <p className="text-lg text-gray-700 space-y-4">
                It is a company where professionals from both technical and functional field group together with an objective of providing appropriate business solutions. It realizes the importance of functional knowledge and its impact in developing business solutions. We constantly strive to be a leading technology firm with profound business and functional knowledge. The key to the company's success is the maintenance of a close working relationship with the clients through ensuring the best possible solutions to their needs; to establish and maintain a thorough knowledge and understanding of client's objective and help them maximize the benefits.
              </p>
              <br/>
              <p className="text-lg text-gray-700 space-y-4">
                We want to establish ourselves as the best choice in Power Electronics, Automation, Automotive, Test, Measurement, and Wireless Technology based products, Consultancy and Development by offering the full spectrum of services.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default ProductDesigningAndDevelopmentPage;
