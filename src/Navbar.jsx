import React from "react";

const Navbar = () => {
  return (
    <nav className=" shadow-md border-b"  style={{ backgroundColor: '#F5D2E6' }}>
      <div className="container mx-auto flex items-center justify-between px-4">
     
        <div className="flex items-center">
          <img
            src="/image/logo.png" 
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>


        <ul className="flex space-x-8 font-medium text-gray-800">
          <li className="hover:text-gray-600 cursor-pointer">Home</li>
          <li className="hover:text-gray-600 cursor-pointer">Contact</li>
          <li className="hover:text-gray-600 cursor-pointer">About Us</li>
          <li className="hover:text-gray-600 cursor-pointer">Feedback</li>
          <li className="hover:text-gray-600 cursor-pointer">Code of Conduct</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;