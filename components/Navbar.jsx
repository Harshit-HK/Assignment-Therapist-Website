"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";
import Star from "./Star";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    closeSidebar();

    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const closeSidebar = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400); // Duration must match slideOut animation
  };

  const menuItems = [
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "faq", label: "Rates & FAQs" },
    { id: "areas", label: "Areas Served" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-slate-100/90 text-[rgb(30,65,69)] duration-300 px-[7vw] backdrop-blur-md shadow-md text-lg">
      <div className="py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer">
          <img
            onClick={() => handleMenuItemClick("home")}
            className="w-52"
            src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75"
            alt="Logo"
          />
        </div>

        <ul className="hidden lg:flex space-x-8 text-gray-800 relative">
          {/* Services with Dropdown */}
          <li className="relative group cursor-pointer p-2">
            <span 
            onClick={() => handleMenuItemClick("services")}
             className="hover:bg-white rounded-md px-2 py-1 inline-block">
              Services
            </span>

            <div className="absolute top-full left-0 flex w-[600px] p-3 bg-white shadow-lg rounded-md opacity-0 scale-95 pointer-events-none transition-all duration-400 group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto z-50">
              <div className="flex-1 p-3 hover:bg-[rgb(181,219,223)]/60 rounded-lg transition duration-200">
                <p className="font-semibold text-sm">
                  Christian Individual Counseling in Richmond, VA
                </p>
                <p className="text-sm text-gray-600">
                  Discover Peace, Purpose, and God’s Truth in Richmond, VA.
                </p>
              </div>
              <div className="flex-1 p-3 hover:bg-[rgb(181,219,223)]/60 rounded-lg transition duration-200">
                <p className="font-semibold text-sm">
                  Christian Couples Counseling in Richmond, VA
                </p>
                <p className="text-sm text-gray-600">
                  Heal Your Relationship, Grow Closer to God Together in
                  Richmond.
                </p>
              </div>
            </div>
          </li>

          {/* Rest of the menu items */}
          {menuItems
            .filter((item) => item.id !== "services")
            .map((item) => (
              <li
                key={item.id}
                className="cursor-pointer rounded-md p-2 hover:bg-white"
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </li>
            ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-3xl p-2">
            <FiMenu className="text-[rgba(30,65,69,0.8)]" />
          </button>
        </div>

        {/* CTA */}
        <div className="hidden xl:flex items-center gap-2 border rounded-lg px-4 py-2">
          <Star />
          Get Started
        </div>
      </div>

      {/* Mobile Sidebar */}
      {(isOpen || isClosing) && (
        <div
          className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-slate-100 text-gray-800 shadow-lg z-50 lg:hidden ${
            isClosing ? "animate-slideOut" : "animate-slideIn"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4 pb-[55%]">
            <button onClick={closeSidebar} className="text-3xl">
              <FiX />
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="flex flex-col items-center space-y-12">
            <span
              onClick={() => handleMenuItemClick("home")}
              className="text-3xl font-bold cursor-pointer"
            >
              Ellie Shumaker
            </span>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className="text-2xl font-medium"
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </nav>
  );
};

export default Navbar;
