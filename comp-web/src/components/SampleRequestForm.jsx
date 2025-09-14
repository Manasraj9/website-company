'use client'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const SampleRequestForm = () => {
  const searchParams = useSearchParams();
  const partNo = searchParams.get('part_no');

  const [formData, setFormData] = useState({
    companyName: '',
    cityCountry: '',
    yourName: '',
    telephone: '',
    emailAddress: '',
    applicationProducts: '',
    sampleApplication: '',
    icPartNumber: partNo || '',
    icSampleQuantity: '',
    massProductionDate: '',
    otherInstructions: '',
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
        body: JSON.stringify({
          subject: `Sample Request for ${formData.applicationProducts}`,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          companyName: '',
          cityCountry: '',
          yourName: '',
          telephone: '',
          emailAddress: '',
          applicationProducts: '',
          sampleApplication: '',
          icPartNumber: '',
          icSampleQuantity: '',
          massProductionDate: '',
          otherInstructions: '',
        });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#dcffd8] text-[#1E293B]">
        {/* --- 1. Hero Section --- */}
        <section 
          className="relative bg-cover bg-center text-white py-24 md:py-40 px-6"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Sample Request Form
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Please fill out the form below to request a sample.
            </p>
          </div>
        </section>

        {/* --- 2. Sample Request Form Section --- */}
        <section className="py-16 md:py-20 px-6 bg-[#dcffd8]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-6 text-center">Request a Sample</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="companyName" className="block text-lg font-medium mb-2">Company Name<span className="text-red-500">*</span></label>
                  <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="cityCountry" className="block text-lg font-medium mb-2">City/Country<span className="text-red-500">*</span></label>
                  <input type="text" id="cityCountry" name="cityCountry" value={formData.cityCountry} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="yourName" className="block text-lg font-medium mb-2">Your Name<span className="text-red-500">*</span></label>
                  <input type="text" id="yourName" name="yourName" value={formData.yourName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="telephone" className="block text-lg font-medium mb-2">Telephone<span className="text-red-500">*</span></label>
                  <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="emailAddress" className="block text-lg font-medium mb-2">Email Address<span className="text-red-500">*</span></label>
                  <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="applicationProducts" className="block text-lg font-medium mb-2">Application Products<span className="text-red-500">*</span></label>
                  <input type="text" id="applicationProducts" name="applicationProducts" value={formData.applicationProducts} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="sampleApplication" className="block text-lg font-medium mb-2">Sample Application<span className="text-red-500">*</span></label>
                  <input type="text" id="sampleApplication" name="sampleApplication" value={formData.sampleApplication} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="icPartNumber" className="block text-lg font-medium mb-2">IC Part Number<span className="text-red-500">*</span></label>
                  <input type="text" id="icPartNumber" name="icPartNumber" value={formData.icPartNumber} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="icSampleQuantity" className="block text-lg font-medium mb-2">IC Sample Quantity<span className="text-red-500">*</span></label>
                  <input type="number" id="icSampleQuantity" name="icSampleQuantity" value={formData.icSampleQuantity} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="massProductionDate" className="block text-lg font-medium mb-2">Mass Production Date<span className="text-red-500">*</span></label>
                  <input type="date" id="massProductionDate" name="massProductionDate" value={formData.massProductionDate} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="otherInstructions" className="block text-lg font-medium mb-2">Other Instructions</label>
                  <textarea id="otherInstructions" name="otherInstructions" rows="5" value={formData.otherInstructions} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
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
                  {loading ? 'Sending...' : 'Request Sample'}
                </button>
                {success && <p className="text-green-600 mt-4 text-center">Your sample request has been sent successfully!</p>}
                {error && <p className="text-red-600 mt-4 text-center">Failed to send sample request. Please try again later.</p>}
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SampleRequestForm;