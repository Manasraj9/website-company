"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ServicesSubnav = () => {
    const pathname = usePathname();

    const getLinkClass = (path) => {
        const isActive = pathname === path;
        return {
            text: isActive ? "text-[#306d27] font-semibold" : "text-gray-600 font-medium group-hover:text-[#306d27]",
            underline: isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        };
    };

    const servicesLinks = [
        { name: "Product Designing and Development", path: "/services/product-designing-and-development" },
        { name: "Product Prototyping", path: "/services/product-prototyping" },
        { name: "OEM & ODM", path: "/services/oem-and-odm" },
    ];

    return (
        <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between h-14">
                    <div className="flex items-center gap-8 w-full md:w-auto overflow-x-auto no-scrollbar">
                        {servicesLinks.map((link) => (
                            <Link href={link.path} key={link.path} className="relative h-14 flex items-center cursor-pointer group">
                                <span className={`${getLinkClass(link.path).text} text-base transition-colors whitespace-nowrap`}>
                                    {link.name}
                                </span>
                                <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#306d27] transition-transform duration-300 origin-left ${getLinkClass(link.path).underline}`}></div>
                            </Link>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSubnav;
