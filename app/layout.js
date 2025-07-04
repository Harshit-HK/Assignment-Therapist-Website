import Navbar from "@/components/Navbar";
import "./globals.css";
import { Noto_Sans } from 'next/font/google';
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: "Therapist Website",
  description: "Professional mental health support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>
        <ToastContainer position="top-center" autoClose={3000} />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
