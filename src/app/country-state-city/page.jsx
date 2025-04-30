// src/app/locations/page.jsx
"use client";
import { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiMapPin,
  FiFlag,
  FiGlobe,
  FiHome,
} from "react-icons/fi";
import Image from "next/image";

export default function Locations() {
  const [activeTab, setActiveTab] = useState("country");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Country Data
  const [countries, setCountries] = useState([
    {
      id: 1,
      name: "New York",
      state: "New York",
      country: "United States",
      population: "8.8M",
    },
    {
      id: 2,
      name: "Los Angeles",
      state: "California",
      country: "United States",
      population: "3.9M",
    },
    {
      id: 3,
      name: "Toronto",
      state: "Ontario",
      country: "Canada",
      population: "2.9M",
    },
    {
      id: 4,
      name: "Chicago",
      state: "Illinois",
      country: "United States",
      population: "2.7M",
    },
    {
      id: 5,
      name: "Houston",
      state: "Texas",
      country: "United States",
      population: "2.3M",
    },
    {
      id: 6,
      name: "Phoenix",
      state: "Arizona",
      country: "United States",
      population: "1.7M",
    },
    {
      id: 7,
      name: "Philadelphia",
      state: "Pennsylvania",
      country: "United States",
      population: "1.6M",
    },
    {
      id: 8,
      name: "San Antonio",
      state: "Texas",
      country: "United States",
      population: "1.5M",
    },
    {
      id: 9,
      name: "San Diego",
      state: "California",
      country: "United States",
      population: "1.4M",
    },
    {
      id: 10,
      name: "Dallas",
      state: "Texas",
      country: "United States",
      population: "1.3M",
    },
    {
      id: 11,
      name: "Montreal",
      state: "Quebec",
      country: "Canada",
      population: "1.8M",
    },
    {
      id: 12,
      name: "Vancouver",
      state: "British Columbia",
      country: "Canada",
      population: "675K",
    },
  ]);

  // State Data
  const [states, setStates] = useState([
    { id: 1, name: "California", country: "United States", code: "CA" },
    { id: 2, name: "Texas", country: "United States", code: "TX" },
    { id: 3, name: "Ontario", country: "Canada", code: "ON" },
  ]);

  // City Data
  const [cities, setCities] = useState([
    {
      id: 1,
      name: "New York",
      state: "New York",
      country: "United States",
      population: "8.8M",
    },
    {
      id: 2,
      name: "Los Angeles",
      state: "California",
      country: "United States",
      population: "3.9M",
    },
    {
      id: 3,
      name: "Toronto",
      state: "Ontario",
      country: "Canada",
      population: "2.9M",
    },
  ]);

  // Common handlers
  const handleAddItem = (newItem) => {
    if (activeTab === "country") {
      setCountries([...countries, { ...newItem, id: countries.length + 1 }]);
    } else if (activeTab === "state") {
      setStates([...states, { ...newItem, id: states.length + 1 }]);
    } else {
      setCities([...cities, { ...newItem, id: cities.length + 1 }]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (activeTab === "country") {
      setCountries(countries.filter((item) => item.id !== id));
    } else if (activeTab === "state") {
      setStates(states.filter((item) => item.id !== id));
    } else {
      setCities(cities.filter((item) => item.id !== id));
    }
  };

  // Render table based on active tab
  const renderTable = () => {
    switch (activeTab) {
      case "country":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Flag
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Country Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Continent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {countries.map((country) => (
                <tr key={country.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {country.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {country.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {country.continent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-4">
                      <button className="text-blue-500 hover:text-blue-700 flex items-center">
                        <FiEdit2 className="mr-1" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(country.id)}
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
        );
      case "state":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  State Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Country
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {states.map((state) => (
                <tr key={state.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {state.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {state.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {state.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-4">
                      <button className="text-blue-500 hover:text-blue-700 flex items-center">
                        <FiEdit2 className="mr-1" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(state.id)}
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
        );
      case "city":
        return (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  City Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  State
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Country
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Population
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cities.map((city) => (
                <tr key={city.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {city.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {city.state}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {city.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {city.population}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-4">
                      <button className="text-blue-500 hover:text-blue-700 flex items-center">
                        <FiEdit2 className="mr-1" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(city.id)}
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
        );
      default:
        return null;
    }
  };

  // Render modal form based on active tab
  const renderModalForm = () => {
    const title = activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Add New {title}</h2>
          <div className="space-y-4">
            {activeTab === "country" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country Name
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country Code
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Continent
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Flag URL
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
              </>
            )}
            {activeTab === "state" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State Name
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State Code
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
              </>
            )}
            {activeTab === "city" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City Name
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Population
                  </label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
              </>
            )}
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => handleAddItem({})}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Location Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <FiPlus className="mr-2" /> Add{" "}
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </button>
      </div>

      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("country")}
          className={`flex items-center py-2 px-4 ${
            activeTab === "country"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <FiGlobe className="mr-2" /> Countries
        </button>
        <button
          onClick={() => setActiveTab("state")}
          className={`flex items-center py-2 px-4 ${
            activeTab === "state"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <FiFlag className="mr-2" /> States
        </button>
        <button
          onClick={() => setActiveTab("city")}
          className={`flex items-center py-2 px-4 ${
            activeTab === "city"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <FiHome className="mr-2" /> Cities
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {renderTable()}
      </div>

      {isModalOpen && renderModalForm()}
    </div>
  );
}
