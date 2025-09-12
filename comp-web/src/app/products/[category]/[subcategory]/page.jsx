'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ProductSubCategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { category, subcategory } = useParams();

  useEffect(() => {
    if (category && subcategory) {
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => {
          const decodedCategory = decodeURIComponent(category);
          const decodedSubCategory = decodeURIComponent(subcategory);
          const categoryProducts = data[decodedCategory];
          if (categoryProducts) {
            const subCategoryProducts = categoryProducts[decodedSubCategory];
            if (subCategoryProducts) {
              setProducts(subCategoryProducts);
            }
          }
        });
    }
  }, [category, subcategory]);

  return (
    <div>
      <Navbar />
      <div className="bg-white text-[#1E293B] py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">{decodeURIComponent(subcategory || '')}</h1>
          <h2 className="text-xl text-gray-600 text-center mb-12">{decodeURIComponent(category || '')}</h2>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Part No</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operating Mode</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Power</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max VDD</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Startup Method</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Frequency</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standby Power</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MOS/GaN</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#0e5604]">
                      <Link href={`/products/${category}/${subcategory}/${product.id}`}>
                        {product.part_no}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.operating_mode}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.max_power}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.max_vdd}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.startup_method}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.max_frequency}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.standby_power}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.mos_gan}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.package}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSubCategoryPage;