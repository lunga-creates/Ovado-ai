import React from "react";
import {
 Linkedin,
 Youtube,
 Facebook,
 Twitter,
 Instagram,
 MessageCircle,
 ChevronRight,
} from "lucide-react";

const Footer = () => {
 return (
  <footer className="bg-gray-900 text-white py-12">
   <div className="max-w-7xl mx-auto px-6">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
     {/* Company Info */}
     <div className="lg:col-span-1">
      <div className="mb-6">
       <img
        src="./ovado-ai-logo1.png"
        alt="Ovado ai Logo"
        className="mb-2 w-28"
       />
       <div className="flex space-x-4 mb-4">
        <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer italic transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/50" />
        <Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer italic transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-400/50" />
        <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer italic transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/50" />
        <Twitter className="w-5 h-5 text-gray-400 hover:text-sky-400 cursor-pointer italic transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/50" />
        <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer italic transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-400/50" />
       </div>
       <p className="text-sm text-gray-300 italic">
        Ovado AI International Corporation (USA)
       </p>
      </div>
     </div>

     {/* Explore Ovado AI */}
     <div>
      <h3 className="text-[#fdb529] font-semibold mb-4">Explore Ovado AI</h3>
      <ul className="space-y-2">
       <li>
        <a
         href="#home"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> Home
        </a>
       </li>
       <li>
        <a
         href="#about-us"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> About Us
        </a>
       </li>
       <li>
        <a
         href="#use-cases"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> Use Cases
        </a>
       </li>
       <li>
        <a
         href="#deployment"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> Deployment
        </a>
       </li>
       <li>
        <a
         href="#integrations"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> Integrations
        </a>
       </li>
       <li>
        <a
         href="#faq"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> ⁠FAQ
        </a>
       </li>
       <li>
        <a
         href="#contact-us"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> Contact Us
        </a>
       </li>
      </ul>
     </div>

     {/* Solutions */}
     <div>
      <h3 className="text-[#fdb529] font-semibold mb-4">Solutions</h3>
      <ul className="space-y-2">
       <li>
        <a
         href="#use-cases"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> Use Cases
        </a>
       </li>
       <li>
        <a
         href="#deployment"
         className=" hover:text-[#fdb529] text-sm flex items-center"
        >
         <ChevronRight className="w-3 h-3 mr-1" /> Deployment
        </a>
       </li>
       <li>
        <a href="#" className=" hover:text-[#fdb529] text-sm flex items-center">
         <ChevronRight className="w-3 h-3 mr-1" /> Customer Support
        </a>
       </li>
      </ul>
     </div>

     {/* Channels */}
     <div>
      <h3 className="text-[#fdb529] font-semibold mb-4">Channels</h3>
      <ul className="space-y-2">
       <li>
        <a href="#" className=" hover:text-[#fdb529] text-sm flex items-center">
         <ChevronRight className="w-3 h-3 mr-1" /> Autonomous AI Voice & Calling
         Agents
        </a>
       </li>
       <li>
        <a href="#" className=" hover:text-[#fdb529] text-sm flex items-center">
         <ChevronRight className="w-3 h-3 mr-1" /> Website Chatbot
        </a>
       </li>
       <li>
        <a href="#" className=" hover:text-[#fdb529] text-sm flex items-center">
         <ChevronRight className="w-3 h-3 mr-1" /> WhatsApp Chatbot
        </a>
       </li>
      </ul>
     </div>

     {/* Industries & WhatsApp Community */}
     <div>
      <h3 className="text-[#fdb529] font-semibold mb-4">Industries</h3>
      <ul className="space-y-2 mb-6">
       <li>
        <a href="#" className=" hover:text-[#fdb529] text-sm flex items-center">
         <ChevronRight className="w-3 h-3 mr-1" /> Banking & Finance
        </a>
       </li>
       <li>
        <a href="#" className=" hover:text-[#fdb529] text-sm flex items-center">
         <ChevronRight className="w-3 h-3 mr-1" /> Manufacturing & Operations
        </a>
       </li>
       <li>
        <a href="#" className=" hover:text-[#fdb529] text-sm flex items-center">
         <ChevronRight className="w-3 h-3 mr-1" /> Automotives
        </a>
       </li>
      </ul>

      {/* WhatsApp Community */}
      <div className="bg-gray-800 p-4 rounded-lg">
       <div className="flex items-center mb-2 justify-center">
        <MessageCircle className="w-8 h-8 text-green-400 mr-2" />
       </div>
       <h4 className=" font-semibold mb-2 text-center">
        Looking for Enterprise AI development?
       </h4>
       <button className="bg-green-500 hover:bg-green-600 text-gray-100 px-4 py-2 rounded-full text-sm font-medium transition-colors w-full">
        Message Now!
       </button>
      </div>
     </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-gray-700 pt-6">
     <div className="md:flex justify-between items-center">
      <div className="flex space-x-6">
       <a href="#" className="text-gray-400 hover:text-white text-sm underline">
        Privacy Policy
       </a>
       <a href="#" className="text-gray-400 hover:text-white text-sm underline">
        Terms and Conditions
       </a>
      </div>
      <div className="flex items-center space-x-4 md:mt-0 mt-2">
       <p className="text-gray-400 text-sm">
        Copyright © Ovado AI | Designed by OVADO AI International Corporation -
        ALL RIGHTS RESERVED
       </p>
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
