"use client"
import { useState, useRef } from "react";
// --- SVG Icon for the mobile menu (Hamburger/Close) ---
const MenuIcon = ({ isOpen }) => (
    <div className="w-6 h-6 relative">
        <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : '-translate-y-2 top-1/2'}`}></span>
        <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100 top-1/2 -translate-y-1/2'}`}></span>
        <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'translate-y-2 top-1/2'}`}></span>
    </div>
);


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timerRef = useRef(null);

  // Updated menu structure based on JIED India's needs
  const menus = [
    { title: "Home", path: "/" },
    {
      title: "About Us",
      links: [
        {name: "Introduction", path: "/introduction"},
        { name: "Mission & Vision", path: "/vision" },,
        { name: "Our Involvement", path: "/involvement" },,
        { name: "Strengths", path: "/strengths" },
      ],
    },
    {
        title: "Trainings", path: "/training"
    },
    {
        title: "Startup Ecosystem", path: "/startup-ecosystem"
        
    },
    {
        title: "Services",
        links: [
            { name: "Product Designing and Development", path: "/services/product-designing-and-development" },
            { name: "Product Prototyping", path: "/services/product-prototyping" },
            { name: "OEM & ODM", path: "/services/oem-and-odm" },
        ]
    },
        { 
      title: "Products",
      links: [
        { name: "Lighting", path: "/products/Lighting" },
        { name: "Solar", path: "/products/Solar" },
        { name: "Automotive", path: "/products/Automotive" },
        { name: "Automation", path: "/products/Automation" },
        { name: "More Products", path: "/products/More%20Products" },
      ],
    },,
    { title: "Contact", path: "/contact" },
  ];

  const handleMouseEnter = (index) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpenMenu(index);
  };

  const handleMouseLeave = () => {
    // A shorter, more responsive delay
    timerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
  };

  return (
    <nav className="bg-[#0e5604] shadow-lg relative">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="JIED India Logo" className="h-12" />
          {/* <span className="font-bold text-2xl text-white hidden sm:block">JIED India</span> */}
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <MenuIcon isOpen={mobileOpen} />
        </button>


        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex items-center space-x-8 text-xl">
          {menus.map((menu, idx) => (
            <li
              key={idx}
              className="relative" // Simplified from "relative group" as group is on the item itself
              onMouseEnter={() => menu.links && handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Case 1: Dropdown Menu */}
              {menu.links ? (
                <>
                  <button className="text-white font-medium relative group transition-colors duration-300 ">
                    <span>{menu.title}</span>
                    {/* THE ANIMATED UNDERLINE */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                  </button>

                  {openMenu === idx && (
                    <ul className="absolute left-1/2 -translate-x-1/2 mt-2 bg-[#0e5604] text-white shadow-xl border rounded-md w-56 z-50">
                      {menu.links.map((link, i) => (
                        <li key={i}>
                          <a
                            href={link.path}
                            className="block px-4 py-3 hover:bg-[#306d27] transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // Case 2: Direct Link (no dropdown)
                <a href={menu.path} className="text-white font-medium relative group transition-colors duration-300">
                  <span>{menu.title}</span>
                  {/* THE ANIMATED UNDERLINE */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      ></div>
      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
            <h2 className="font-bold text-lg text-gray-800">Menu</h2>
            <button
                className="text-2xl font-bold text-gray-700 focus:outline-none"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
            >
                &times;
            </button>
        </div>
        <ul className="flex flex-col mt-4 space-y-1 px-4">
          {menus.map((menu, idx) => (
            <li key={idx}>
              {menu.links ? (
                <details className="group">
                  <summary className="cursor-pointer py-2 px-3 font-semibold text-gray-800 list-none flex justify-between items-center hover:bg-gray-100 rounded">
                    {menu.title}
                    <span className="transition-transform duration-300 group-open:rotate-90">▶</span>
                  </summary>
                  <ul className="pl-4 border-l-2 border-gray-200 ml-3">
                    {menu.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.path}
                          className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a
                  href={menu.path}
                  className="block py-2 px-3 font-semibold text-gray-800 hover:bg-gray-100 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {menu.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

