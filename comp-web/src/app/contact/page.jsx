"use client"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaValue, setCaptchaValue] = useState(0);
  const [captchaError, setCaptchaError] = useState(false);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`${num1} + ${num2} = ?`);
    setCaptchaValue(num1 + num2);
    setCaptchaAnswer('');
    setCaptchaError(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaAnswer(e.target.value);
    setCaptchaError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    setCaptchaError(false);

    if (parseInt(captchaAnswer) !== captchaValue) {
      setCaptchaError(true);
      setLoading(false);
      generateCaptcha(); // Regenerate captcha on failure
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      generateCaptcha(); // Regenerate captcha after submission attempt
    }
  };

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
                  <p className="mt-4"><a href="http://www.jhainstrument.in" className="hover:underline">WWW.JHAINSTRUMENT.IN</a></p>
                  <p><a href="mailto:piyush@jhainstrument.in" className="hover:underline">PIYUSH@JHAINSTRUMENT.IN</a></p>
                  <p><a href="mailto:piyushjha.bs.in@gmail.com" className="hover:underline">PIYUSHJHA.BS.IN@GMAIL.COM</a></p>
                  <p>PH: 9431073402</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2 text-[#0e5604]">Corporate Office</h3>
                  <p>KOLKATA, West Bengal, India</p>
                </div>
              </div>

              {/* --- Contact Form --- */}
              <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required></textarea>
                  </div>
                  
                  {/* Captcha Field */}
                  <div className="mb-4">
                    <label htmlFor="captcha" className="block text-lg font-medium mb-2">Complete the Captcha<span className="text-red-500">*</span></label>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold tracking-widest bg-gray-200 px-4 py-2 rounded">{captchaQuestion}</span>
                      <button type="button" onClick={generateCaptcha} className="text-sm text-blue-600 hover:underline">Refresh</button>
                    </div>
                    <input type="text" id="captcha" name="captcha" value={captchaAnswer} onChange={handleCaptchaChange} className="w-full p-3 border border-gray-300 rounded-lg mt-2" required />
                    {captchaError && <p className="text-red-600 text-sm mt-1">Incorrect captcha. Please try again.</p>}
                  </div>

                  <button type="submit" className="bg-[#306d27] hover:bg-[#0e5604] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  {success && <p className="text-green-600 mt-4">Email sent successfully!</p>}
                  {error && <p className="text-red-600 mt-4">Failed to send email. Please try again later.</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
