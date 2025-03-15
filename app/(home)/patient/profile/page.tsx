"use client"

import type React from "react"

import { useState } from "react"
// import PatientSidebar from "@/components/patient-sidebar"
import { PlusCircle, Edit2 } from "lucide-react"

export default function PatientProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    patientId: "PT-2023-0042",
    name: "John Doe",
    age: "32",
    sex: "Male",
    address: "123 Medical Lane, Healthcare City",
    bloodGroup: "O+",
    bloodPressure: "120/80",
    height: "175 cm",
    weight: "70 kg",
    bloodSugar: "95 mg/dL",
    aadharId: "XXXX-XXXX-XXXX",
    phoneNo: "+91 9876543210",
  })

  const handleEdit = () => {
    if (isEditing) {
      // Save logic would go here
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="flex min-h-screen bg-background dark:bg-black w-full">
      <main className="flex-1 p-6 md:ml-64">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground dark:text-white mb-8">Profile</h1>

          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center overflow-hidden bg-muted dark:bg-gray-800">
                <svg
                  className="w-32 h-32 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>

              <button className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
                <div className="flex items-center justify-center rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600">
                  <span className="text-sm mr-2 dark:text-white">add photo</span>
                  <PlusCircle className="w-4 h-4 dark:text-white" />
                </div>
              </button>
            </div>

            <div className="mt-4 w-full max-w-md">
              <div className="rounded-full border border-gray-300 dark:border-gray-600 p-3 text-center dark:text-white">
                patient id: {profileData.patientId}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.name}</div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">age</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="age"
                    value={profileData.age}
                    onChange={handleChange}
                    className="w-full bg-transparent dark:text-white focus:outline-none"
                  />
                ) : (
                  <div className="dark:text-white">{profileData.age}</div>
                )}
              </div>

              <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
                <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">sex</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="sex"
                    value={profileData.sex}
                    onChange={handleChange}
                    className="w-full bg-transparent dark:text-white focus:outline-none"
                  />
                ) : (
                  <div className="dark:text-white">{profileData.sex}</div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">address</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={profileData.address}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.address}</div>
              )}
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">BLOOD GROUP</label>
              {isEditing ? (
                <input
                  type="text"
                  name="bloodGroup"
                  value={profileData.bloodGroup}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.bloodGroup}</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3 md:col-span-1">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">avg BLOOD PRESSURE</label>
              {isEditing ? (
                <input
                  type="text"
                  name="bloodPressure"
                  value={profileData.bloodPressure}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.bloodPressure}</div>
              )}
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">HEIGHT</label>
              {isEditing ? (
                <input
                  type="text"
                  name="height"
                  value={profileData.height}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.height}</div>
              )}
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">WEIGHT</label>
              {isEditing ? (
                <input
                  type="text"
                  name="weight"
                  value={profileData.weight}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.weight}</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">avg BLOOD SUGAR LEVEL</label>
              {isEditing ? (
                <input
                  type="text"
                  name="bloodSugar"
                  value={profileData.bloodSugar}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.bloodSugar}</div>
              )}
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">AADHAR ID</label>
              {isEditing ? (
                <input
                  type="text"
                  name="aadharId"
                  value={profileData.aadharId}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.aadharId}</div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-3">
              <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1">PHONE NO</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phoneNo"
                  value={profileData.phoneNo}
                  onChange={handleChange}
                  className="w-full bg-transparent dark:text-white focus:outline-none"
                />
              ) : (
                <div className="dark:text-white">{profileData.phoneNo}</div>
              )}
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={handleEdit}
                className="flex items-center justify-center rounded-full px-6 py-3 bg-white dark:bg-white text-black font-medium"
              >
                {isEditing ? "SAVE PROFILE" : "EDIT PROFILE"}
                {!isEditing && <Edit2 className="w-4 h-4 ml-2" />}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

