import { FileText, Download, Eye, Calendar, MoreVertical } from "lucide-react"

export default function MedicalRecords() {
  const records = [
    {
      id: "REC-001",
      title: "Annual Physical Examination",
      doctor: "Dr. Sarah Johnson",
      date: "2023-10-15",
      type: "Examination",
      fileSize: "2.4 MB",
    },
    {
      id: "REC-002",
      title: "Blood Test Results",
      doctor: "Dr. Michael Chen",
      date: "2023-09-22",
      type: "Lab Report",
      fileSize: "1.8 MB",
    },
    {
      id: "REC-003",
      title: "X-Ray Report",
      doctor: "Dr. Robert Williams",
      date: "2023-08-05",
      type: "Radiology",
      fileSize: "5.2 MB",
    },
    {
      id: "REC-004",
      title: "Prescription",
      doctor: "Dr. Emily Patel",
      date: "2023-07-30",
      type: "Medication",
      fileSize: "0.5 MB",
    },
  ]

  const categories = [
    { name: "All Records", count: 12 },
    { name: "Lab Reports", count: 5 },
    { name: "Prescriptions", count: 4 },
    { name: "Radiology", count: 2 },
    { name: "Examinations", count: 1 },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground dark:text-white mb-8">Medical Records</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-1">
          <div className="bg-card dark:bg-gray-800 rounded-xl p-4">
            <h3 className="font-semibold dark:text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <button className="w-full flex items-center justify-between p-2 rounded-md hover:bg-muted dark:hover:bg-gray-700 dark:text-white">
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold dark:text-white">Your Records</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search records..."
                className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-2 text-sm dark:text-white"
              />
              <select className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md p-2 text-sm dark:text-white">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {records.map((record) => (
              <div key={record.id} className="border border-gray-300 dark:border-gray-600 rounded-md p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-md bg-primary/10 dark:bg-primary/20 mr-3 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-white">{record.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Dr: {record.doctor}</p>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(record.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                    <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 mr-2">
                      {record.type}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{record.fileSize}</span>
                  </div>

                  <div className="flex space-x-2">
                    <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Download className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

