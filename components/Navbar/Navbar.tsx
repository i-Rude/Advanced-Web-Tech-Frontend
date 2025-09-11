"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* Replace with your logo */}
              <div className="text-xl font-bold text-white">E-Shop</div>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                Products
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                About
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Auth buttons */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-white hover:underline hover:text-gray-300">
              Login
            </Link>
            <Link href="/signup" className="ml-3 px-4 py-2 rounded-md text-sm font-medium text-black bg-white hover:underline hover:bg-gray-200">
              Sign Up
            </Link>
          </div>
          
        </div>
      </div>

    </nav>
  );
};

export default Navbar;