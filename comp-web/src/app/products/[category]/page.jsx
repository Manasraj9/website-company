
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProductsSubnav from '@/components/ProductsSubnav';

const ProductCategoryPage = () => {
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
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
            setSubcategories(['All', ...subcategoryKeys]);
            
            const allCategoryProducts = subcategoryKeys.flatMap(subcategory => 
              categoryProducts[subcategory].map(product => ({...product, subcategory}))
            );
            setAllProducts(allCategoryProducts);
            setProducts(allCategoryProducts);
          }
        });
    }
  }, [category]);

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    if (subcategory === 'All') {
      setProducts(allProducts);
    } else {
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => {
          const decodedCategory = decodeURIComponent(category);
          const categoryProducts = data[decodedCategory];
          if (categoryProducts) {
            setProducts(categoryProducts[subcategory].map(p => ({...p, subcategory})));
          }
        });
    }
  };

  return (
    <div>
      <Navbar />
      <ProductsSubnav />
      <div className="bg-white text-[#1E293B] px-6">
        <div className="container mx-auto py-16 md:py-20">
          <div className="flex flex-wrap justify-center mb-12">
            {subcategories.map((subcategory, index) => (
              <div
                key={index}
                className={`cursor-pointer font-bold text-[#0e5604] mx-2 my-2 md:mx-4 ${
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
              <div className="hidden md:block">
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
                          <Link href={`/products/${category}/${product.subcategory}/${product.id}`}>
                            {product.part_no}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.power_rating}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.input_voltage}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.power_factor}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.thd}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.emi_emc}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.topology}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.output_voltage}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.output_current}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{product.applications.join(', ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="md:hidden">
                {products.map((product) => (
                  <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500 uppercase">Product Code</span>
                      <Link href={`/products/${category}/${product.subcategory}/${product.id}`} className="text-sm font-medium text-[#0e5604]">
                        {product.part_no}
                      </Link>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500">Power Rating</span>
                      <span className="text-sm text-gray-900">{product.power_rating}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500">Input Voltage</span>
                      <span className="text-sm text-gray-900">{product.input_voltage}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500">Power Factor</span>
                      <span className="text-sm text-gray-900">{product.power_factor}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500">THD</span>
                      <span className="text-sm text-gray-900">{product.thd}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500">EMI/EMC</span>
                      <span className="text-sm text-gray-900">{product.emi_emc}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500">Topology</span>
                      <span className="text-sm text-gray-900">{product.topology}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500">Output Voltage</span>
                      <span className="text-sm text-gray-900">{product.output_voltage}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-500">Output Current</span>
                      <span className="text-sm text-gray-900">{product.output_current}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-500">Application</span>
                      <span className="text-sm text-gray-900">{product.applications.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
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
