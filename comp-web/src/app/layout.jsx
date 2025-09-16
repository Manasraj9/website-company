import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata = {
  title: "JIED India - Jha Instrument & Engineering Division",
  description: "Jha Instrument & Engineering Division (JIED) is a leading manufacturer and exporter of electrical and electronics products in India. We specialize in OEM and ODM services, product designing and development, and product prototyping.",
  keywords: ["JIED India", "Jha Instrument", "electrical products", "electronics products", "OEM services", "ODM services", "product designing", "product development", "product prototyping"],
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
