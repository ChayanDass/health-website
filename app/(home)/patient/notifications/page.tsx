import { Bell, Calendar, FileText, CreditCard, User, Check } from "lucide-react"

export default function Notifications() {
  const notifications = [
    {
      id: "1",
      type: "appointment",
      title: "Upcoming Appointment",
      message: "You have an appointment with Dr. Sarah Johnson tomorrow at 10:30 AM.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: "2",
      type: "report",
      title: "Lab Results Available",
      message: "Your recent blood test results are now available. Check your medical records.",
      time: "3 hours ago",
      read: false,
    },
    {
      id: "3",
      type: "payment",
      title: "Payment Successful",
      message: "Your payment of ₹150 for the appointment with Dr. Michael Chen has been processed.",
      time: "Yesterday",
      read: true,
    },
    {
      id: "4",
      type: "reminder",
      title: "Medication Reminder",
      message: "Don't forget to take your medication today as prescribed by Dr. Emily Patel.",
      time: "Yesterday",
      read: true,
    },
    {
      id: "5",
      type: "appointment",
      title: "Appointment Rescheduled",
      message: "Your appointment with Dr. Robert Williams has been rescheduled to next Monday at 2:00 PM.",
      time: "2 days ago",
      read: true,
    },
  ]

  const getIcon = (type:any) => {
    switch (type) {
      case "appointment":
        return <Calendar className="w-5 h-5 text-primary" />
      case "report":
        return <FileText className="w-5 h-5 text-blue-500" />
      case "payment":
        return <CreditCard className="w-5 h-5 text-green-500" />
      case "reminder":
        return <Bell className="w-5 h-5 text-yellow-500" />
      default:
        return <User className="w-5 h-5 text-gray-500" />
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground dark:text-white mb-8">Notifications</h1>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold dark:text-white">Recent Notifications</h2>
          <div className="flex space-x-2">
            <button className="text-sm text-primary">Mark all as read</button>
            <select className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-2 text-sm dark:text-white">
              <option value="all">All</option>
              <option value="unread">Unread</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`
                border border-gray-300 dark:border-gray-600 rounded-md p-4
                ${!notification.read ? "bg-primary/5 dark:bg-primary/10 border-l-4 border-l-primary" : ""}
              `}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 mr-3 flex items-center justify-center">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium dark:text-white">{notification.title}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</span>
                  </div>
                  <p className="text-sm dark:text-gray-300 mt-1">{notification.message}</p>
                </div>
                {!notification.read && (
                  <button className="ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Check className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md dark:text-white">
          Load More
        </button>
      </div>
    </>
  )
}

