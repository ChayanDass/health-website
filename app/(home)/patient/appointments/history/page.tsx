import { Clock, Calendar, User, FileText, MoreVertical } from "lucide-react"
import Link from "next/link"

export default function PastAppointments() {
  const appointments = [
    {
      id: "APT-2023-001",
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2023-10-15",
      time: "10:30 AM",
      status: "Completed",
      notes: "Regular checkup. Blood pressure normal. Follow-up in 6 months.",
    },
    {
      id: "APT-2023-002",
      doctor: "Dr. Michael Chen",
      specialty: "Neurologist",
      date: "2023-09-22",
      time: "02:00 PM",
      status: "Completed",
      notes: "Headache evaluation. Prescribed medication. Follow-up in 1 month.",
    },
    {
      id: "APT-2023-003",
      doctor: "Dr. Emily Patel",
      specialty: "Pediatrician",
      date: "2023-08-05",
      time: "09:00 AM",
      status: "Cancelled",
      notes: "Appointment cancelled by patient.",
    },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground dark:text-white mb-8">Past Appointments</h1>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold dark:text-white">Appointment History</h2>
          <div className="flex space-x-2">
            <select className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-2 text-sm dark:text-white">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-2 text-sm dark:text-white">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="border border-gray-300 dark:border-gray-600 rounded-md p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 mr-3 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-white">{appointment.doctor}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.specialty}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full mt-1 inline-block
                      ${
                        appointment.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                </div>
                <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                  <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="dark:text-white">{new Date(appointment.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="dark:text-white">{appointment.time}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-start">
                  <FileText className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium dark:text-gray-300">Doctor's Notes</p>
                    <p className="text-sm dark:text-white">{appointment.notes}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-3">
                <button className="px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 dark:text-white">
                  <Link href="/patient/appointments/report">
                  Download Report
                  </Link>
                </button>
                <button className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground">
                  Book Follow-up
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

