// src/app/dashboard/page.jsx
"use client";
import { useEffect, useState } from "react";
import {
  FiUsers,
  FiShoppingCart,
  FiTruck,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  const [stats] = useState({
    activeUsers: 40689,
    totalBuyers: 10293,
    totalSellers: 2040,
    totalSales: 89000,
  });

  // Combined chart data
  const salesChartData = {
    labels: [
      "5k",
      "10k",
      "15k",
      "20k",
      "25k",
      "30k",
      "35k",
      "40k",
      "45k",
      "50k",
      "55k",
      "60k",
    ],
    datasets: [
      {
        label: "Sales Percentage",
        data: [100, 80, 60, 40, 20, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.4,
        yAxisID: "y",
      },
      {
        label: "Peak Sale ($64,366.77)",
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          64.366477,
        ],
        borderColor: "rgba(220, 38, 38, 1)",
        backgroundColor: "rgba(220, 38, 38, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(220, 38, 38, 1)",
        pointRadius: 6,
        pointHoverRadius: 8,
        borderDash: [5, 5],
        fill: false,
        yAxisID: "y1",
      },
    ],
  };

  // Revenue chart data
  const revenueData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Gross Revenue",
        data: [5000, 8000, 6500, 9000, 7500, 9500, 11000, 10500, 12000, 14000],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.5)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0.1)");
          return gradient;
        },
        borderWidth: 2,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.3,
      },
      {
        label: "Net Revenue",
        data: [4000, 7000, 5500, 8000, 6500, 8500, 10000, 9500, 11000, 13000],
        borderColor: "rgba(236, 72, 153, 1)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(236, 72, 153, 0.5)");
          gradient.addColorStop(1, "rgba(236, 72, 153, 0.1)");
          return gradient;
        },
        borderWidth: 2,
        pointBackgroundColor: "rgba(236, 72, 153, 1)",
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const revenueOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  const salesChartOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label.includes("Peak Sale")) {
              return `${label.split("(")[0]}: $${(
                context.raw * 1000
              ).toLocaleString()}`;
            }
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y}%`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Percentage",
        },
        ticks: {
          callback: function (value) {
            return `${value}%`;
          },
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        title: {
          display: true,
          text: "Dollar Value (thousands)",
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value) {
            return `$${value}k`;
          },
        },
      },
    },
  };

  const statCards = [
    {
      title: "Active Users",
      value: stats.activeUsers.toLocaleString(),
      change: "+8.5%",
      icon: <FiUsers className="text-lg" />,
      isPositive: true,
      color: "green",
    },
    {
      title: "Total Buyers",
      value: stats.totalBuyers.toLocaleString(),
      change: "+1.3%",
      icon: <FiShoppingCart className="text-lg" />,
      isPositive: true,
      color: "green",
    },
    {
      title: "Total Sellers",
      value: stats.totalSellers.toLocaleString(),
      change: "+1.8%",
      icon: <FiTruck className="text-lg" />,
      isPositive: true,
      color: "green",
    },
    {
      title: "Total Sales",
      value: `$${stats.totalSales.toLocaleString()}`,
      change: "-4.3%",
      icon: <FiDollarSign className="text-lg" />,
      isPositive: false,
      color: "red",
    },
  ];

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold mt-1 text-gray-800">
                  {stat.value}
                </p>
              </div>
              <div
                className={`p-2 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}
              >
                {stat.icon}
              </div>
            </div>
            <p
              className={`mt-2 text-xs font-medium ${
                stat.isPositive ? "text-green-500" : "text-red-500"
              }`}
            >
              <span className="inline-flex items-center">
                {stat.isPositive ? (
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {stat.change}{" "}
                {stat.isPositive ? "vs last month" : "vs last month"}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Sales Details Section with Combined Chart */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Sales Details
        </h3>
        <div className="w-full" style={{ height: "400px" }}>
          <Line
            data={salesChartData}
            options={{
              ...salesChartOptions,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      {/* Revenue Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
            <p className="text-sm text-gray-500">Monthly revenue performance</p>
          </div>
          <div className="flex items-center bg-green-50 text-green-600 px-3 py-1 rounded-lg">
            <FiTrendingUp className="mr-1" />
            <span className="text-sm font-medium">+12.5% vs last month</span>
          </div>
        </div>
        <div className="w-full" style={{ height: "300px" }}>
          <Line
            data={revenueData}
            options={{
              ...revenueOptions,
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Gross Revenue</p>
            <p className="text-xl font-semibold text-gray-800">$89,500</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Net Revenue</p>
            <p className="text-xl font-semibold text-gray-800">$81,000</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">Projected Nov</p>
            <p className="text-xl font-semibold text-gray-800">$15,200</p>
          </div>
        </div>
      </div>
    </div>
  );
}
