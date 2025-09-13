import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata = {
  title: "JIED India",
  description: "JIED India",
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
