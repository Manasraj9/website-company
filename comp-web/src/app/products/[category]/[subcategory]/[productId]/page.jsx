'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ProductPage = () => {
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
              const product = subCategoryProducts.find((p) => p.id === productId);
              setProduct(product);
            }
          }
        });
    }
  }, [category, subcategory, productId]);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto text-center py-20">Loading...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="bg-white text-[#1E293B] py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl font-extrabold mb-4 text-[#0e5604]">{product.title}</h1>
              <p className="text-gray-700 mb-6 text-lg">{product.description}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3 text-[#1E293B]">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <Link href={product.pdf_link} passHref legacyBehavior>
                  <a className="bg-[#306d27] hover:bg-[#0e5604] text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                    Download Datasheet
                  </a>
                </Link>
                <Link href={`/sample-request?part_no=${product.part_no}`} passHref legacyBehavior>
                  <a className="bg-gray-200 hover:bg-gray-300 text-[#1E293B] font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                    Sample Request
                  </a>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="bg-gray-50 rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-[#1E293B]">Specifications</h2>
                <table className="min-w-full">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="hover:bg-gray-100">
                        <td className="px-4 py-3 font-semibold text-gray-800">{key}</td>
                        <td className="px-4 py-3 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#1E293B]">Applications</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {product.applications.map((application, index) => (
                    <li key={index}>{application}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
