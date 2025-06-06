import { Phone, PhoneIcon, MailIcon, HomeIcon } from "lucide-react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

import Link from 'next/link';
export default function Footer() {
  const [active, setActive] = useState("");

  return (
    <footer  id="footer" className="bg-gray-900 text-white">
      {/* Social Media Section */}
      <div className="bg-purple-900 px-6 py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">Get connected with us on social networks:</p>
          <div className="flex space-x-4 mt-2 md:mt-0 gap-5 ">
            <a href="https://www.facebook.com/uzair.rather.31/" className="hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://x.com/rather_uza32824" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://github.com/uzairrather" className="hover:text-gray-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Company Section */}
        <div className="mr-8">
          <h3 className="font-semibold text-gray-300 mb-3">Ausif Rth</h3>
          <p className="text-gray-400">
             I am a Full-Stack Developer, passionate about building scalable,
              efficient, and user-friendly web applications using modern
              technologies like React, Next.js, Node.js, and MongoDB.Bringing
              ideas to life through code! As a Full-Stack Developer
          </p>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-3">SERVICES</h3>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Salesforce Development
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Odoo Customization
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Mobile App Development
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-3">USEFUL LINKS</h3>
          <div>
            <ul className="space-y-2 " >
          <a href="/">
              <li className="flex items-center gap-2 text-gray-400 mb-2">Home </li>
          </a>
          <a href="#about">
              <li className="flex items-center gap-2 text-gray-400 mb-2">About </li>
          </a>
          <a href="#service">
              <li className="flex items-center gap-2 text-gray-400 mb-2">Service </li>
          </a>
          <a href="#project">
              <li className="flex items-center gap-2 text-gray-400 mb-2">Projects</li>
          </a>
          <a href="#blog">
              <li className="flex items-center gap-2 text-gray-400 mb-2">Blogs</li>
          </a>
              
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-gray-300 mb-3">CONTACT</h3>
          <ul className="space-y-2 ">
            <li className="flex items-center gap-2 text-gray-400 mb-2">
              <HomeIcon /> Hardushiva, Sopore, Baramulla J&K 193201
            </li>
            <li className="flex items-center gap-2 text-gray-400 ">
              <MailIcon /> uzairrather3147@gmail.com
            </li>
            <li className="flex items-center gap-2 text-gray-400 ">
              <Phone /> +91-7051574421
            </li>
            <li className="flex items-center gap-2 text-gray-400 ">
              <PhoneIcon /> +91-6006646300
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 bg-gray-800 text-gray-400 text-sm">
        © 2025  All Rights Reserved:{" "}
        <a href="#" className="hover:text-white">
          uzairrather3147@gmail.com
        </a>
        <p>||Designed By Uzair-Rather||</p>
      </div>
    </footer>
  );
}
