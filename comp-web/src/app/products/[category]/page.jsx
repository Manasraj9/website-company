
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ProductCategoryPage = () => {
  const [subcategories, setSubcategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => {
          const decodedCategory = decodeURIComponent(category);
          const categoryProducts = data[decodedCategory];
          if (categoryProducts) {
            setSubcategories(Object.keys(categoryProducts));
          }
        });
    }
  }, [category]);

  return (
    <div>
      <Navbar />
      <div className="bg-white text-[#1E293B] py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">{decodeURIComponent(category || '')}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategories.map((subcategory, index) => (
              <Link key={index} href={`/products/${category}/${encodeURIComponent(subcategory)}`}>
                <div className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-[#0e5604]">{subcategory}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategoryPage;
