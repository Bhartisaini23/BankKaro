import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white px-6 py-3 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <span className="font-bold text-lg tracking-wide">BANK<span className="text-white">KARO</span></span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-sm">
        <div className="relative group">
          <button className="inline-flex items-center">OUR PRODUCTS</button>
          {/* Dropdown content goes here */}
        </div>
        <div className="relative group">
          <button className="inline-flex items-center">TOOLS</button>
          {/* Dropdown content goes here */}
        </div>
        <li>BLOGS</li>
        <li></li>
      </nav>

      {/* Sign-In Button */}
      <div className="flex items-center">
        <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">
          <span>Sign In</span>
          <img src="path_to_profile_image.png" alt="Profile" className="ml-2 w-6 h-6 rounded-full object-cover" />
        </button>
      </div>
    </header>
  );
};

export default Header;
