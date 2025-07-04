import React from "react";

const Footer = () => {
  return (
    <footer className="text-[rgb(181,219,223)] bg-[rgb(27,70,74)] ">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:justify-center items-center px-6 py-10 gap-10">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            className="w-40 bg-white rounded-full cursor-pointer"
            src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75"
            alt="Logo"
          />
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h3 className="text-xl font-bold mb-4">Areas Served</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  New York
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  California
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  Texas
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  Individual Therapy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  Couples Counseling
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline cursor-pointer">
                  Teletherapy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full lg:w-[70%]">
          <hr />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[rgb(27,70,74)] text-center px-6 py-8">
        <h1 className="text-sm">
          Ellie Shumaker © Copyright 2025. All Rights Reserved.
        </h1>
        <p className="text-xs mt-2">
          Credits to freepik for media www.freepik.com People illustrations by
          Storyset
        </p>
        <a
          className="text-sm mt-2 inline-block hover:underline cursor-pointer"
          href="#"
        >
          Privacy Policy & Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
