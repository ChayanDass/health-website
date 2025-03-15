"use client"

import { useState } from "react"
import StaffLogin from "../components/staff-login"
import PatientLogin from "../components/patient-login"
import { UserIcon } from "lucide-react"

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"staff" | "patient">("staff")

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 p-1 rounded-2xl backdrop-blur-lg shadow-2xl">
          <div className="bg-white rounded-xl overflow-hidden shadow-inner">
            <div className="p-8 space-y-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Patient Management</h1>
                <p className="mt-2 text-sm text-gray-600">Sign in to access your healthcare portal</p>
              </div>

              <div className="flex p-1 bg-gray-100 rounded-lg">
                <button
                  className={`flex-1 py-2 text-sm font-medium text-center rounded-md transition-all ${
                    activeTab === "staff" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("staff")}
                >
                  Staff Login
                </button>
                <button
                  className={`flex-1 py-2 text-sm font-medium text-center rounded-md transition-all ${
                    activeTab === "patient" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("patient")}
                >
                  Patient Login
                </button>
              </div>

              <div className="mt-6">{activeTab === "staff" ? <StaffLogin /> : <PatientLogin />}</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-white text-sm">
          <p>© 2025 Healthcare Solutions. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

