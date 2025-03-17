"use client"

import { useState } from "react"
import { CalendarIcon, Clock, ChevronLeft, ChevronRight, Plus, MoreVertical, Check, X } from "lucide-react"

export default function DoctorAppointments() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<"day" | "week">("day")
  const [showAddAppointment, setShowAddAppointment] = useState(false)

  // Sample appointments data
  const appointments = [
    {
      id: "APT-001",
      patientName: "John Doe",
      patientId: "PT-001",
      date: "2023-11-15",
      time: "09:00",
      duration: 30,
      type: "Check-up",
      status: "Confirmed",
      notes: "Regular follow-up for hypertension",
    },
    {
      id: "APT-002",
      patientName: "Jane Smith",
      patientId: "PT-002",
      date: "2023-11-15",
      time: "10:00",
      duration: 45,
      type: "Consultation",
      status: "Confirmed",
      notes: "Diabetes management review",
    },
    {
      id: "APT-003",
      patientName: "Robert Johnson",
      patientId: "PT-003",
      date: "2023-11-15",
      time: "11:30",
      duration: 60,
      type: "Emergency",
      status: "Confirmed",
      notes: "Chest pain evaluation",
    },
    {
      id: "APT-004",
      patientName: "Emily Williams",
      patientId: "PT-004",
      date: "2023-11-15",
      time: "14:00",
      duration: 30,
      type: "Check-up",
      status: "Pending",
      notes: "Asthma follow-up",
    },
  ]

  // Filter appointments for the current date
  const currentDateStr = currentDate.toISOString().split("T")[0]
  const todayAppointments = appointments.filter((apt) => apt.date === currentDateStr)

  // Time slots for the day view (9 AM to 5 PM)
  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9
    const minute = (i % 2) * 30
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
  })

  // Function to navigate to previous/next day
  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 1)
    } else {
      newDate.setDate(newDate.getDate() + 1)
    }
    setCurrentDate(newDate)
  }

  // Function to format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Function to get appointment for a specific time slot
  const getAppointmentForTimeSlot = (time: string) => {
    return todayAppointments.find((apt) => apt.time === time)
  }

  // Function to handle appointment status change
  const handleStatusChange = (appointmentId: string, newStatus: "Confirmed" | "Completed" | "Cancelled") => {
    console.log(`Changing appointment ${appointmentId} status to ${newStatus}`)
    // In a real app, you would update the appointment status in your backend
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground dark:text-white">Appointments</h1>
        <div className="flex space-x-3">
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
            <button
              onClick={() => setView("day")}
              className={`px-4 py-2 ${view === "day" ? "bg-primary text-primary-foreground" : "dark:text-white"}`}
            >
              Day
            </button>
            <button
              onClick={() => setView("week")}
              className={`px-4 py-2 ${view === "week" ? "bg-primary text-primary-foreground" : "dark:text-white"}`}
            >
              Week
            </button>
          </div>
          <button
            onClick={() => setShowAddAppointment(true)}
            className="flex items-center justify-center rounded-md px-4 py-2 bg-primary text-primary-foreground font-medium"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Appointment
          </button>
        </div>
      </div>

      <div className="bg-card dark:bg-gray-800 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigateDate("prev")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-5 h-5 dark:text-white" />
          </button>

          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 dark:text-white" />
            <h2 className="text-xl font-semibold dark:text-white">{formatDate(currentDate)}</h2>
          </div>

          <button
            onClick={() => navigateDate("next")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronRight className="w-5 h-5 dark:text-white" />
          </button>
        </div>

      </div>

      <div className="bg-card dark:bg-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold dark:text-white mb-4">Upcoming Appointments</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
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
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                          {appointment.patientName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium dark:text-white">{appointment.patientName}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{appointment.patientId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm dark:text-white">{new Date(appointment.date).toLocaleDateString()}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {appointment.time} ({appointment.duration} mins)
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full 
                      ${
                        appointment.type === "Emergency"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : appointment.type === "Consultation"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      {appointment.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full 
                      ${
                        appointment.status === "Confirmed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : appointment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary hover:text-primary/80 mr-3">View</button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Appointment Modal would go here */}
      {showAddAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold dark:text-white">Schedule New Appointment</h2>
                <button
                  onClick={() => setShowAddAppointment(false)}
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

              {/* Appointment form would go here */}
              <div className="text-center py-12 dark:text-white">
                Appointment scheduling form would be implemented here
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowAddAppointment(false)}
                  className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

