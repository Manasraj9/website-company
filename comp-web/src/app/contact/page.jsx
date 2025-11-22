import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React, { Suspense } from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => {
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
              Contact Us
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We'd love to hear from you. Here's how you can reach us.
            </p>
          </div>
        </section>

        {/* --- 2. Contact Info & Form Section --- */}
        <section className="py-16 md:py-20 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* --- Contact Information --- */}
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-[#0e5604]">Register Office</h3>
                  <p>JHA INSTRUMENT</p>
                  <p>Ward No 11, Jagatpur, Supaul, Bihar</p>
                  <p>PIN - 852110, India</p>
                  <p className="mt-4"><a href="http://www.jhainstrument.in" className="hover:underline">www.jhainstrument.in</a></p>
                  <p><a href="mailto:piyush@jhainstrument.in" className="hover:underline">piyush@jhainstrument.in</a></p>
                  <p><a href="mailto:piyushjha.bs.in@gmail.com" className="hover:underline">piyushjha.bs.in@gmail.com</a></p>
                  <p><a href="mailto:info@jhainstrument.in" className="hover:underline">info@jhainstrument.in</a></p>
                  <p>PH: 9431073402</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#0e5604]">Corporate Office</h3>
                  <p>KOLKATA, West Bengal, India</p>
                </div>
              </div>

              {/* --- Contact Form --- */}
              <Suspense fallback={<div className="bg-white rounded-lg shadow-lg p-8">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
