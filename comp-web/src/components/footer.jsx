import React from 'react';
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";


const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153Zm-1.65 19.57h2.61L7.129 2.652H4.28l13.001 18.07Z"/>
    </svg>
);
const ThreadsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">
  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
</svg>
);


export default function Footer() {
    return (
        <footer className="bg-[#0e5604] text-white px-2 py-6">
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 space-x-2">

                {/* About & Logo */}
                <div className="space-y-4">
                    <img src="/images/full_logo.png" alt="Jha Instrument Logomark" className="h-20 w-20" />
                    <h3 className="text-lg font-semibold">JIED India</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        A technology firm with profound business and functional knowledge, building long-term partnerships with our clients through reliability and quality.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#services" className="hover:text-white transition">Our Involvement</a></li>
                        <li><a href="#products" className="hover:text-white transition">Product Offerings</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* Our Focus */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Focus Areas</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><a href="/products" className="hover:text-white transition">Power Electronics</a></li>
                        <li><a href="/products" className="hover:text-white transition">Automation & Automotive</a></li>
                        <li><a href="/products" className="hover:text-white transition">Solar & Renewable Energy</a></li>
                        <li><a href="/products" className="hover:text-white transition">Embedded & wireless</a></li>
                        <li><a href="/products" className="hover:text-white transition">Test & Measurement</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                    <div className="space-y-4 text-sm text-gray-300">
                        <div>
                            <p className="font-bold text-white">City Office:</p>
                            <p>Dhakuria, Kolkata, West Bengal - 700031</p>
                        </div>
                        <div>
                            <p className="font-bold text-white">Email:</p>
                            <a href="mailto:piyush@jhainstrument.in" className="hover:text-white transition">piyush@jhainstrument.in</a>
                        </div>
                        <div className="flex gap-5 mt-4 sm:mt-0">
                            <a href="https://facebook.com/jhainstrument" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Facebook size={20} /></a>
                            {/* <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Linkedin size={20} /></a> */}
                            <a href="https://x.com/JIED_India" target="_blank" rel="noopener noreferrer" className="hover:text-white transition pt-1"><XIcon /></a>
                            <a href="https://www.instagram.com/jied.india/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><Instagram size={20} /></a>
                            <a href="https://www.threads.com/@jied.india" target="_blank" rel="noopener noreferrer" className="hover:text-white transition pt-1"><ThreadsIcon /></a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright & Socials */}
            <div className="text-center text-sm text-gray-100 mt-10 border-t border-green-800 pt-6 sm:flex-row">
                <p>© {new Date().getFullYear()} JIED India. All rights reserved.</p>
            </div>
        </footer>
    );
}
