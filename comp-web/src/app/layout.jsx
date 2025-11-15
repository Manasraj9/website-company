import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata = {
  title: "JIED India",
  description:
    "JIED or Jha Instrument is a leading manufacturer and exporter of electrical and electronics products in India. We specialize in OEM and ODM services, product designing and development, and product prototyping.",
  keywords: [
    "JIED India",
    "Jha Instrument",
    "LED Drivers manufacturer near me",
    "LED Drivers manufacturer in kolkata",
    "LED Drivers manufacturer in West Bengal",
    "LED Drivers manufacturer in India",
    "Electrical Products  near me",
    "Electronics Products Exporter",
    "OEM Services in India",
    "ODM Services in India",
    "Product Designing and Development",
    "Product Prototyping",
    "Industrial Electrical Solutions",
    "Custom Electronics Manufacturer near me",
    "Innovative Electrical Products",
  ],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
