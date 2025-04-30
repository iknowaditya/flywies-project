// src/app/article/page.jsx
"use client";
import { useState } from "react";
import AddArticleModal from "../../components/Modals/AddArticleModal";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import Image from "next/image";
import Userdata from "../../data.json"; // Direct import

export default function Article() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Since your data.json contains API specs, we'll use mock data for demonstration
  // Replace this with actual data extraction if your JSON structure changes
  const [articles, setArticles] = useState([
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

  // If you want to use the actual API endpoints from data.json:
  console.log(Userdata); // You can see the API structure in console

  const handleAddArticle = (newArticle) => {
    setArticles([
      ...articles,
      {
        ...newArticle,
        id: articles.length + 1,
        image: newArticle.image || "/placeholder-image.jpg",
      },
    ]);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Article</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <FiPlus className="mr-2" /> Add Article
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
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={article.image}
                      alt="Article image"
                      width={40}
                      height={40}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {article.title}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500 max-w-xs truncate">
                    {article.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-4">
                    <button className="text-blue-500 hover:text-blue-700 flex items-center">
                      <FiEdit2 className="mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
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

      <AddArticleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddArticle}
      />
    </div>
  );
}
