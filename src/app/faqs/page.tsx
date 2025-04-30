// src/app/faq/page.jsx
"use client";
import { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function FAQ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How do I create an account?",
      answer:
        "Click on the 'Sign Up' button and fill in the required information to create your account.",
      category: "Account",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
      category: "Payments",
    },
    {
      id: 3,
      question: "How can I reset my password?",
      answer:
        "Go to the login page and click 'Forgot Password'. Follow the instructions sent to your email.",
      category: "Account",
    },
    {
      id: 4,
      question: "Can I change my email address?",
      answer:
        "Yes, go to your account settings and update your email under the 'Profile' section.",
      category: "Account",
    },
    {
      id: 5,
      question: "When will my order ship?",
      answer:
        "Orders are typically processed within 2-3 business days and shipping times vary by location.",
      category: "Shipping",
    },
    {
      id: 6,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries. International shipping rates and delivery times may vary.",
      category: "Shipping",
    },
    {
      id: 7,
      question: "Is my personal information secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your data.",
      category: "Security",
    },
    {
      id: 8,
      question: "How do I contact customer support?",
      answer:
        "You can reach us via the 'Contact Us' form or email us directly at support@example.com.",
      category: "Support",
    },
  ]);

  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: "",
    category: "General",
  });

  const handleAddFaq = () => {
    setFaqs([...faqs, { ...newFaq, id: faqs.length + 1 }]);
    setNewFaq({ question: "", answer: "", category: "General" });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const categories = [
    "General",
    "Account",
    "Payments",
    "Technical",
    "Shipping",
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">FAQ Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <FiPlus className="mr-2" /> Add FAQ
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Question
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Operations
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {faqs.map((faq) => (
              <>
                <tr
                  key={faq.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleAnswer(faq.id)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {activeQuestion === faq.id ? (
                        <FiChevronUp className="mr-2" />
                      ) : (
                        <FiChevronDown className="mr-2" />
                      )}
                      <div className="text-sm font-medium text-gray-900">
                        {faq.question}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {faq.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Implement edit functionality
                          setNewFaq(faq);
                          setIsModalOpen(true);
                        }}
                        className="text-blue-500 hover:text-blue-700 flex items-center"
                      >
                        <FiEdit2 className="mr-1" /> Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(faq.id);
                        }}
                        className="text-red-500 hover:text-red-700 flex items-center"
                      >
                        <FiTrash2 className="mr-1" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {activeQuestion === faq.id && (
                  <tr>
                    <td colSpan={3} className="px-6 py-4 bg-gray-50">
                      <div className="text-sm text-gray-500 pl-8">
                        <strong>Answer:</strong> {faq.answer}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit FAQ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {newFaq.id ? "Edit FAQ" : "Add New FAQ"}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question
                </label>
                <input
                  type="text"
                  value={newFaq.question}
                  onChange={(e) =>
                    setNewFaq({ ...newFaq, question: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter question"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Answer
                </label>
                <textarea
                  value={newFaq.answer}
                  onChange={(e) =>
                    setNewFaq({ ...newFaq, answer: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={4}
                  placeholder="Enter answer"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={newFaq.category}
                  onChange={(e) =>
                    setNewFaq({ ...newFaq, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setNewFaq({ question: "", answer: "", category: "General" });
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFaq}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {newFaq.id ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
