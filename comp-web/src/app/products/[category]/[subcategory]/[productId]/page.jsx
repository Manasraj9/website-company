
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const { category, subcategory, productId } = useParams();

  useEffect(() => {
    if (category && subcategory && productId) {
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => {
          const decodedCategory = decodeURIComponent(category);
          const decodedSubCategory = decodeURIComponent(subcategory);
          const categoryProducts = data[decodedCategory];
          if (categoryProducts) {
            const subCategoryProducts = categoryProducts[decodedSubCategory];
            if (subCategoryProducts) {
              const foundProduct = subCategoryProducts.find(p => p.id === productId);
              setProduct(foundProduct);
            }
          }
        });
    }
  }, [category, subcategory, productId]);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="bg-white text-[#1E293B] py-16 md:py-20 px-6 text-center">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-lg text-gray-700">The product you are looking for does not exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="bg-white text-[#1E293B] py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-4">{product.title}</h1>
          <h2 className="text-xl text-gray-600 text-center mb-12">{product.part_no}</h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12 transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Description</h3>
            <p className="text-lg text-gray-700">{product.description}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-8 mb-12">
            <a href={product.pdf_link} target="_blank" rel="noopener noreferrer" className="bg-[#306d27] hover:bg-[#0e5604] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Download Datasheet
            </a>
            <a href={product.form_link} className="bg-gray-200 hover:bg-gray-300 text-[#1E293B] font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Sample Request
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Features</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Applications</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {product.applications.map((application, index) => (
                  <li key={index}>{application}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-12 transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-[#0e5604]">Specifications</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
