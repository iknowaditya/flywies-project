// src/app/auto-dealership/page.jsx
"use client";
import { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import Image from "next/image";

export default function AutoDealership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      image: "/placeholder-image.jpg",
      title: "Getting Started with Next.js",
      description: "Learn the basics of Next.js development",
    },
    {
      id: 2,
      image: "/placeholder-image.jpg",
      title: "React Hooks Guide",
      description: "Master useState, useEffect and other React hooks",
    },
    {
      id: 3,
      image: "/placeholder-image.jpg",
      title: "Authentication Patterns",
      description: "Implement secure auth in your applications",
    },
    {
      id: 4,
      image: "/placeholder-image.jpg",
      title: "Getting Started with Next.js",
      description: "Learn the basics of Next.js development",
    },
    {
      id: 5,
      image: "/placeholder-image.jpg",
      title: "React Hooks Guide",
      description: "Master useState, useEffect and other React hooks",
    },
    {
      id: 6,
      image: "/placeholder-image.jpg",
      title: "Authentication Patterns",
      description: "Implement secure auth in your applications",
    },
    {
      id: 7,
      image: "/placeholder-image.jpg",
      title: "Getting Started with Next.js",
      description: "Learn the basics of Next.js development",
    },
    {
      id: 8,
      image: "/placeholder-image.jpg",
      title: "React Hooks Guide",
      description: "Master useState, useEffect and other React hooks",
    },
    {
      id: 9,
      image: "/placeholder-image.jpg",
      title: "Authentication Patterns",
      description: "Implement secure auth in your applications",
    },
  ]);

  const handleAddItem = (newItem) => {
    setItems([
      ...items,
      {
        ...newItem,
        id: items.length + 1,
        image: newItem.image || "/placeholder-image.jpg",
      },
    ]);
    setIsModalOpen(false);
  };

  const handleEdit = (id) => {
    // Implement edit logic
    console.log("Editing item with id:", id);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Auto Dealership</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <FiPlus className="mr-2" /> Add Item
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Operations
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={item.image}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {item.title}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500 max-w-xs truncate">
                    {item.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="text-blue-500 hover:text-blue-700 flex items-center"
                    >
                      <FiEdit2 className="mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 flex items-center"
                    >
                      <FiTrash2 className="mr-1" /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Item Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter image URL"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Add logic to collect form data and call handleAddItem
                  handleAddItem({
                    title: "New Item", // Replace with actual form data
                    description: "Item description", // Replace with actual form data
                    image: "/placeholder-image.jpg",
                  });
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
