// src/components/UserCard.js
"use client";
import Image from "next/image";

export default function UserCard({ user }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center">
        <Image
          src={user.image || "/avatar-placeholder.png"}
          alt={user.firstName}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="font-semibold">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-500 text-xs mt-1">{user.company?.title}</p>
        </div>
      </div>
    </div>
  );
}
