import React from "react";
import PatientNavbar from "./components/Navbar";
import PatientSidebar from "./components/Sidebar";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      {/* Navbar (Fixed Top) */}
      <header className="w-full fixed top-0 left-0  h-16 z-50">
        <PatientNavbar />
      </header>
      <div className="flex min-h-screen bg-background dark:bg-black mt-16 overflow-y-hidden">
      <PatientSidebar />
      <main className="flex-1 p-6 md:ml-64 overflow-y-hidden">
        <div className="max-w-4xl mx-auto overflow-y-hidden">
            {children}
        </div>
      </main>
    </div>
    </div>
  );
}
