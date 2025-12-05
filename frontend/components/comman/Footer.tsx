import React from 'react';
import { Youtube, Music2, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 font-inter">
      {/* Main Footer Content */}
      <div className=" mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-12">
          {/* Logo and Tagline */}
          <div>
            <div className="flex items-center justify-center gap-2  ">
              <div className="w-8 h-8  rounded-sm flex items-center justify-center">
                <img src="./images/fevicon.svg" alt="" />
              </div>
              <span className="text-white text-2xl font-medium">Nuvaria</span>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            Smarter collaboration, less effort.
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-12"></div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Caelor for Confluence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Caelor for Jira
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                Matrix Office Park, Slavonska avenija 1c<br />
                Zagreb 10000, Croatia (Hrvatska)
              </p>
              <a 
                href="mailto:marketplace@caelor.com" 
                className="text-gray-400 hover:text-white transition-colors block"
              >
                marketplace@caelor.com
              </a>
            </div>
          </div>

          {/* Social Media & Badge Column */}
          <div className="flex flex-col items-start md:items-end">
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Atlassian Badge */}
            <div className="bg-gray-900 rounded px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                  <path d="M11.5 2L2 12l4 4 9.5-9.5L11.5 2zm1 10L8 16.5 12 22l10-10-9.5-9.5z"/>
                </svg>
              </div>
              <div>
                <div className="text-white text-xs font-semibold">Platinum</div>
                <div className="text-gray-400 text-xs">Marketplace Partner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-500">
            All rights reserved 2025 © Nuvaria
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              India   
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}