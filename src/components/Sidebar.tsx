// src/components/Sidebar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import {
  FiLayout,
  FiFileText,
  FiTruck,
  FiBook,
  FiBriefcase,
  FiMapPin,
  FiHelpCircle,
  FiBookOpen,
  FiLifeBuoy,
  FiSettings,
  FiUsers,
  FiShoppingBag,
  FiShield,
  FiLock,
  FiPackage,
  FiList,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState({
    blog: false,
    career: false,
    freeShopNews: false,
  });

  const toggleDropdown = (dropdown) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navItems = [
    { href: "/dashboard", icon: <FiLayout size={18} />, label: "Dashboard" },
    { href: "/article", icon: <FiFileText size={18} />, label: "Article" },
    {
      href: "/auto-dealership",
      icon: <FiTruck size={18} />,
      label: "Auto dealership",
    },
    {
      label: "Blog",
      icon: <FiBook size={18} />,
      dropdown: true,
      items: [
        { href: "/blog/latest", label: "Latest Posts" },
        { href: "/blog/categories", label: "Categories" },
        { href: "/blog/authors", label: "Authors" },
      ],
    },
    {
      label: "Career",
      icon: <FiBriefcase size={18} />,
      dropdown: true,
      items: [
        { href: "/career/opportunities", label: "Opportunities" },
        { href: "/career/apply", label: "Apply Now" },
        { href: "/career/testimonials", label: "Testimonials" },
      ],
    },
    {
      href: "/country-state-city",
      icon: <FiMapPin size={18} />,
      label: "Country, state, city",
    },
    { href: "/faqs", icon: <FiHelpCircle size={18} />, label: "FAQ's" },
    {
      label: "Free shop news",
      icon: <FiBookOpen size={18} />,
      dropdown: true,
      items: [
        { href: "/free-shop-news/updates", label: "Updates" },
        { href: "/free-shop-news/offers", label: "Special Offers" },
        { href: "/free-shop-news/events", label: "Events" },
      ],
    },
    {
      href: "/help-center",
      icon: <FiLifeBuoy size={18} />,
      label: "Help Center",
    },
    {
      href: "/how-it-works",
      icon: <FiSettings size={18} />,
      label: "How it works",
    },
    { href: "/jobs", icon: <FiBriefcase size={18} />, label: "Jobs" },
    { href: "/press", icon: <FiFileText size={18} />, label: "Press" },
    { href: "/product", icon: <FiPackage size={18} />, label: "Product" },
    {
      href: "/privacy-terms",
      icon: <FiShield size={18} />,
      label: "Privacy & Terms",
    },
    // {
    //   href: "/trust-safety",
    //   icon: <FiLock size={18} />,
    //   label: "Trust & safety",
    // },
    // {
    //   href: "/user-management",
    //   icon: <FiUsers size={18} />,
    //   label: "User Management",
    // },
    // { href: "/order", icon: <FiShoppingBag size={18} />, label: "Order" },
    // { href: "/settings", icon: <FiSettings size={18} />, label: "Settings" },
  ];

  // Check if any dropdown item is active
  const isDropdownActive = (items) => {
    return items.some((item) => isActive(item.href));
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white text-gray-800 p-4 shadow-md overflow-y-auto">
      <div className="flex items-center justify-center mb-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={160}
          height={40}
          className="object-contain"
        />
      </div>

      <nav>
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href || item.label}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() =>
                      toggleDropdown(item.label.toLowerCase().replace(" ", ""))
                    }
                    className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                      isDropdownActive(item.items)
                        ? "bg-[#199FB1] text-white"
                        : "hover:bg-[#199FB1]/10 text-gray-600 hover:text-[#199FB1]"
                    }`}
                  >
                    <div className="flex items-center">
                      <span
                        className={`mr-3 ${
                          isDropdownActive(item.items)
                            ? "text-white"
                            : "text-[#199FB1]"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {openDropdowns[
                      item.label.toLowerCase().replace(" ", "")
                    ] ? (
                      <FiChevronDown size={16} />
                    ) : (
                      <FiChevronRight size={16} />
                    )}
                  </button>

                  {openDropdowns[item.label.toLowerCase().replace(" ", "")] && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className={`flex items-center p-2 pl-4 rounded-lg text-sm transition-colors ${
                              isActive(subItem.href)
                                ? "bg-[#199FB1]/20 text-[#199FB1] font-medium"
                                : "hover:bg-[#199FB1]/10 text-gray-600 hover:text-[#199FB1]"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-[#199FB1] text-white"
                      : "hover:bg-[#199FB1]/10 text-gray-600 hover:text-[#199FB1]"
                  }`}
                >
                  <span
                    className={`mr-3 ${
                      isActive(item.href) ? "text-white" : "text-[#199FB1]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
