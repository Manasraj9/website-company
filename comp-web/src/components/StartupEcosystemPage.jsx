
"use client"
import React from 'react';

const StartupEcosystemPage = () => {
  const startupEcosystemPoints = [
    {
      title: "1. Mentoring: From Idea to Prototype",
      points: [
        "We help you refine your concept by analyzing its technical feasibility and market fit.",
        "We guide you in selecting the most effective and cost-efficient components for your product.",
      ],
    },
    {
      title: "2. Reducing the BOM Cost",
      points: [
        "We re-engineer your prototype to reduce costs through smarter design and component choices.",
        "We leverage our supply chain to source reliable components at competitive prices.",
      ],
    },
    {
      title: "3. Prototyping & Development",
      points: [
        "We provide professional schematic and PCB design services for your product.",
        "We offer rapid prototyping to help you test your ideas and gather feedback quickly.",
      ],
    },
    {
      title: "4. Affordable Manufacturing",
      points: [
        "We provide end-to-end support, from prototyping to bulk manufacturing, through our EMS ecosystem.",
        "We offer flexible manufacturing options, accommodating both small and large production volumes.",
      ],
    },
    {
      title: "5. Upgrade the Specification of the Products",
      points: [
        "We help you upgrade your product's specifications to meet market demands.",
        "We ensure your product remains competitive and relevant.",
      ],
    },
    {
      title: "6. Redesigning the Idea and the Project to get Market Acceptance",
      points: [
        "We assist in redesigning your idea and project for better market acceptance.",
        "We provide critical feedback to align your product with user expectations.",
      ],
    },
    {
      title: "7. Improving Product and Product Cost to Survive in Market Competition",
      points: [
        "We focus on improving product and cost to ensure you survive in a competitive market.",
        "We identify cost-saving opportunities without compromising quality.",
      ],
    },
    {
      title: "8. Providing the Market and Market Feedback",
      points: [
        "We provide valuable market insights and feedback to guide your product development.",
        "We help you understand your target audience and their needs.",
      ],
    },
    {
      title: "9. Sourcing of Electronics Components and Samples",
      points: [
        "We handle the sourcing of electronic components and samples for your prototypes.",
        "We leverage our network to procure high-quality and cost-effective components.",
      ],
    },
    {
      title: "10. Help to Design and Development of Molds and Tools",
      points: [
        "We assist in the complete design and development of high-quality molds and tools for manufacturing. Our team ensures the tooling is reliable, efficient, and optimized for production needs.",
        "We also provide molded samples for prototyping and production, helping clients validate designs, test fit and functionality, and move smoothly into mass manufacturing.",
      ],
    },
  ];

  const galleryImages = [
    { src: '/images/gallery/1.png', alt: 'Gallery image 1' },
    { src: '/images/gallery/2.png', alt: 'Gallery image 2' },
    { src: '/images/gallery/3.png', alt: 'Gallery image 3' },
    { src: '/images/gallery/4.png', alt: 'Gallery image 4' },
  ];

  return (
    <div className="bg-white text-[#1E293B]">

      <section 
          className="relative bg-cover bg-center text-white py-24 md:py-40 px-6"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              Turn Your Hardware Idea into a Market-Ready Product
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              You have a brilliant idea, but hardware is hard, expensive, and slow. We help startups and innovators overcome the biggest challenges: high costs, prototyping hurdles, and moving to mass production.
            </p>
          </div>
        </section>
      
      <section className="py-16 md:py-20 px-6 bg-[#dcffd8]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How We Help Startups Succeed</h2>
            <p className="mt-4 text-lg text-gray-700">
              As a Research, Design, and Manufacturing house, we help you build your product faster and more affordably.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              With a proven track record of supporting over 100+ startups, we specialize in turning ideas into market-ready products. Our team includes industrially trained university students who bring fresh perspectives and innovative thinking to every project.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Whether you're validating an MVP, scaling production, or solving complex engineering challenges, we streamline the entire process—from concept to finished hardware.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {startupEcosystemPoints.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Gallery</h2>
            <p className="text-lg text-gray-700 mt-2">A glimpse into our innovation and work.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Idea?</h2>
          <p className="text-lg text-gray-700 mb-8">Contact us today to get started with our startup ecosystem support.</p>
          <a href="/contact?subject=Startup%20Ecosystem%20Support" className="bg-[#306d27] hover:bg-[#0e5604] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
            Enquire Now
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default StartupEcosystemPage;
