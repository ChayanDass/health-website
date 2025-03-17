"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, MoreVertical, FileText, Calendar, Phone, Mail, Filter } from "lucide-react"

export default function Patients() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddPatient, setShowAddPatient] = useState(false)
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    bloodGroup: "",
  })

  const patients = [
    {
      id: "PT-001",
      name: "John Doe",
      age: 45,
      gender: "Male",
      bloodGroup: "O+",
      phone: "+91 9876543210",
      email: "john.doe@example.com",
      lastVisit: "2023-10-15",
      condition: "Hypertension",
      status: "Active",
    },
    {
      id: "PT-002",
      name: "Jane Smith",
      age: 32,
      gender: "Female",
      bloodGroup: "A-",
      phone: "+91 9876543211",
      email: "jane.smith@example.com",
      lastVisit: "2023-09-22",
      condition: "Diabetes",
      status: "Active",
    },
    {
      id: "PT-003",
      name: "Robert Johnson",
      age: 58,
      gender: "Male",
      bloodGroup: "B+",
      phone: "+91 9876543212",
      email: "robert.johnson@example.com",
      lastVisit: "2023-08-05",
      condition: "Coronary Artery Disease",
      status: "Critical",
    },
    {
      id: "PT-004",
      name: "Emily Williams",
      age: 27,
      gender: "Female",
      bloodGroup: "AB+",
      phone: "+91 9876543213",
      email: "emily.williams@example.com",
      lastVisit: "2023-07-30",
      condition: "Asthma",
      status: "Stable",
    },
  ]

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    console.log("Adding new patient:", newPatient)
    setShowAddPatient(false)
    // Reset form
    setNewPatient({
      name: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      bloodGroup: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewPatient((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground dark:text-white">Patients</h1>
        <button
          onClick={() => setShowAddPatient(true)}
          className="flex items-center justify-center rounded-md px-4 py-2 bg-background dark:bg-white font-medium cursor-pointer"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Patient
        </button>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients by name, ID or condition..."
            className="w-full p-3 pl-10 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="flex items-center justify-center rounded-md px-4 py-2 border border-gray-300 dark:border-gray-600 dark:text-white">
          <Filter className="w-5 h-5 mr-2" />
          Filter
        </button>
      </div>

      {/* Patient List */}
      <div className="bg-card dark:bg-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium dark:text-white">{patient.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {patient.id} • {patient.age} yrs • {patient.gender} • {patient.bloodGroup}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm dark:text-white flex items-center">
                      <Phone className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
                      {patient.phone}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      {patient.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm dark:text-white flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-400" />
                      {new Date(patient.lastVisit).toLocaleDateString()}
                    </div>
                  </td>
                 
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full 
                      ${
                        patient.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : patient.status === "Critical"
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      
                      <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200  cursor-pointer">
                        view
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Patient Modal */}
      {showAddPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold dark:text-white">Add New Patient</h2>
                <button
                  onClick={() => setShowAddPatient(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <form onSubmit={handleAddPatient}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={newPatient.name}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Age*</label>
                      <input
                        type="number"
                        name="age"
                        required
                        value={newPatient.age}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Gender*</label>
                      <select
                        name="gender"
                        required
                        value={newPatient.gender}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={newPatient.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={newPatient.email}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={newPatient.address}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Blood Group</label>
                  <select
                    name="bloodGroup"
                    value={newPatient.bloodGroup}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddPatient(false)}
                    className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
                    Add Patient
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

