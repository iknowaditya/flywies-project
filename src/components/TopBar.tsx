// src/components/TopBar.js
"use client";

import { FiSearch, FiBell, FiMenu, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

export default function TopBar({ toggleSidebar }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-white shadow-sm z-10 border-b border-gray-200">
      <div className="flex items-center justify-between px-12 py-3">
        {/* Search Bar */}
        <div className="top-0 right-0 w-full flex justify-center items-center py-2">
          <button
            onClick={toggleSidebar}
            className="md:hidden mr-4 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FiMenu size={24} />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 text-gray-700 placeholder-gray-400 bg-white"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Notification + User */}
        <div className="flex items-center justify-between space-x-14">
          <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
            <FiBell size={20} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Info + Dropdown */}
          <div className="flex items-center space-x- relative">
            <div className="text-gray-800 w-28 ">
              <p className="font-medium text-gray-900">Kalyani Kumar</p>
              <div className="flex items-center justify-between space-x-2 w-28">
                <p className="text-xs text-gray-500">Admin</p>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="focus:outline-none text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                  >
                    <FiChevronDown size={20} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-40 z-20">
                      <ul className="py-1 text-sm text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                          Option 1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors">
                          Option 2
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative w-10 h-10 rounded-full  object-cover">
              <Image
                src="/user.png"
                alt="User"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
