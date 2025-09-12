
import IntroductionPage from '@/components/introductionpage';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import React from 'react';

const Introduction = () => {
  return (
    <div>
      <Navbar />  
      <IntroductionPage />
      <Footer />
    </div>
  );
};

export default Introduction;
