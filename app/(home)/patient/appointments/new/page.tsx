"use client"

import { useState } from "react"
import { CalendarIcon, Clock, Search } from "lucide-react"

export default function GetAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const doctors = [
    { id: "1", name: "Dr. Sarah Johnson", specialty: "Cardiologist", available: true },
    { id: "2", name: "Dr. Michael Chen", specialty: "Neurologist", available: true },
    { id: "3", name: "Dr. Emily Patel", specialty: "Pediatrician", available: false },
    { id: "4", name: "Dr. Robert Williams", specialty: "Orthopedic Surgeon", available: true },
  ]

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
  ]

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-foreground dark:text-white mb-8">Schedule Appointment</h1>

      <div className="mb-8">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors by name or specialty"
            className="w-full p-3 pl-10 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`
                border border-gray-300 dark:border-gray-600 rounded-md p-4 cursor-pointer
                ${selectedDoctor === doctor.id ? "border-primary dark:border-primary" : ""}
                ${!doctor.available ? "opacity-50" : ""}
              `}
              onClick={() => doctor.available && setSelectedDoctor(doctor.id)}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 mr-3 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="font-medium dark:text-white">{doctor.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.specialty}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full mt-1 inline-block
                    ${
                      doctor.available
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    }`}
                  >
                    {doctor.available ? "Available" : "Unavailable"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDoctor && (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold dark:text-white mb-4">Select Date</h2>
            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4">
              <div className="flex items-center mb-4">
                <CalendarIcon className="w-5 h-5 mr-2 dark:text-white" />
                <input
                  type="date"
                  className="bg-transparent dark:text-white border-none focus:outline-none"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {selectedDate && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold dark:text-white mb-4">Select Time</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    className={`
                      border border-gray-300 dark:border-gray-600 rounded-md p-3 text-center cursor-pointer
                      ${selectedTime === time ? "border-primary dark:border-primary bg-primary/10 dark:bg-primary/20" : ""}
                    `}
                    onClick={() => setSelectedTime(time)}
                  >
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2 dark:text-white" />
                      <span className="dark:text-white">{time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTime && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold dark:text-white mb-4">Appointment Summary</h2>
              <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Doctor</p>
                    <p className="dark:text-white">{doctors.find((d) => d.id === selectedDoctor)?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Specialty</p>
                    <p className="dark:text-white">{doctors.find((d) => d.id === selectedDoctor)?.specialty}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                    <p className="dark:text-white">{new Date(selectedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
                    <p className="dark:text-white">{selectedTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="flex items-center justify-center rounded-full px-6 py-3 bg-primary text-primary-foreground font-medium">
                  Confirm Appointment
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function User(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

