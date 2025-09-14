import React from 'react';

// --- SVG Icon Components for Social Media ---
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
    </svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.762.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.03 4.03 0 0 1-1.771 2.22c.823-.087 1.6-.312 2.317-.627a8.21 8.21 0 0 1-2.019 2.083z" />
    </svg>
);


export default function Footer() {
    return (
        <footer className="bg-[#0e5604] text-white px-2 py-6">
            <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 space-x-2">

                {/* About & Logo */}
                <div className="space-y-4">
                    <img src="/images/full_logo.png" alt="JIED Logomark" className="h-20 w-20" />
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
                            <a href="https://facebook.com/jhainstrument" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FacebookIcon /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><LinkedinIcon /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><TwitterIcon /></a>
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
