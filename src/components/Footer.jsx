import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">About Me</h2>
            <p>
            Passionate website developer delivering responsive, modern, and user-friendly designs tailored to your business needs. Let's transform your ideas into reality with innovative solutions that boost your online presence
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
            <ul>
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#service" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-bold mb-4 px-2 text-white">Follow Me</h2>
            <div className="flex ">
              <a
                href="https://www.instagram.com/siddharth.6318?utm_source=qr"
                className="text-gray-300 hover:text-white transition  px-2"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571126666552"
                className="text-gray-300 hover:text-white transition px-2"
              >
                <FaFacebook size={27} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition"
              >
                
              </a>
              <a href="https://wa.me/qr/FVVYEQRBHSPLB1"
              className="text-gray-300 hover:text-white transition px-2">
                            <FaWhatsapp size={28}/></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 Siddharth All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
