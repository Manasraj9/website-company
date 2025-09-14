'use client'
import React, { Suspense } from 'react';
import SampleRequestForm from '@/components/SampleRequestForm';

const SampleRequestPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SampleRequestForm />
    </Suspense>
  );
};

export default SampleRequestPage;