
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ProductCategoryPage = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => {
          const decodedCategory = decodeURIComponent(category);
          const categoryProducts = data[decodedCategory];
          if (categoryProducts) {
            const subcategoryKeys = Object.keys(categoryProducts);
            setSubcategories(subcategoryKeys);
            if (subcategoryKeys.length > 0) {
              const firstSubcategory = subcategoryKeys[0];
              setSelectedSubcategory(firstSubcategory);
              setProducts(categoryProducts[firstSubcategory]);
            }
          }
        });
    }
  }, [category]);

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const decodedCategory = decodeURIComponent(category);
        const categoryProducts = data[decodedCategory];
        if (categoryProducts) {
          setProducts(categoryProducts[subcategory]);
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white text-[#1E293B] py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center mb-12">{decodeURIComponent(category || '')}</h1>
          <div className="flex justify-center mb-12">
            {subcategories.map((subcategory, index) => (
              <div
                key={index}
                className={`cursor-pointer font-bold text-[#0e5604] mx-4 ${
                  selectedSubcategory === subcategory ? 'text-2xl underline' : 'text-lg'
                }`}
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                {subcategory}
              </div>
            ))}
          </div>
          {products.length > 0 ? (
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Code</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Power Rating</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Input Voltage</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Power Factor</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">THD</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMI/EMC</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topology</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output voltage</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output Current</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#0e5604]">
                        <Link href={`/products/${category}/${selectedSubcategory}/${product.id}`}>
                          {product.part_no}
                        </Link>
                      </td>
                            {/* Power Rating */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.power_rating}</td>

      {/* Input Voltage */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.input_voltage}</td>

      {/* Power Factor */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.power_factor}</td>

      {/* THD */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.thd}</td>

      {/* EMI/EMC */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.emi_emc}</td>

      {/* Topology */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.topology}</td>

      {/* Output Voltage */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.output_voltage}</td>

      {/* Output Current */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.output_current}</td>

      {/* Application */}
      <td className="px-6 py-4 text-sm text-gray-900">{product.applications.join(', ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-2xl font-bold text-gray-500">Added Soon</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCategoryPage;
