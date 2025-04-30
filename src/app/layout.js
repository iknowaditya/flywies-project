// src/app/layout.js
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import "./globals.css";

// export const metadata = {
//   title: "Admin Dashboard",
//   description: "Responsive Admin Dashboard",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-100">
          {/* Fixed Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <div className="flex-1 flex flex-col ml-0 md:ml-64">
            {/* Fixed TopBar */}
            <TopBar />

            {/* Scrollable content */}
            <main className="flex-1 overflow-auto ">
              <div
                className="w-full h-full  "
                style={{ backgroundImage: "url('/dashboard.svg')" }}
              >
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
