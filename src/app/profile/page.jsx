// src/app/profile/page.jsx
"use client";
import { useAuth } from "../../context/AuthContext";
import Image from "next/image";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <div className="p-6">Please login to view your profile</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <div className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-32 h-32">
            <Image
              src={user.avatar || "/avatar-placeholder.png"}
              alt={user.name}
              fill
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-700">Account Type</h3>
                <p className="text-gray-600">Administrator</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Member Since</h3>
                <p className="text-gray-600">January 2024</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Last Login</h3>
                <p className="text-gray-600">Today, 10:30 AM</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-medium text-gray-700 mb-2">Security</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Password</span>
                  <button className="text-blue-500 hover:text-blue-700">
                    Change
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">
                    Two-Factor Authentication
                  </span>
                  <button className="text-blue-500 hover:text-blue-700">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
