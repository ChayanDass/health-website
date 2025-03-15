import { CreditCard, DollarSign, PlusCircle, ArrowUpRight, ArrowDownLeft } from "lucide-react"

export default function Wallet() {
  const transactions = [
    {
      id: "TXN-001",
      type: "payment",
      description: "Payment for Dr. Sarah Johnson",
      amount: 150.0,
      date: "2023-10-15",
      status: "Completed",
    },
    {
      id: "TXN-002",
      type: "refund",
      description: "Refund for cancelled appointment",
      amount: 75.0,
      date: "2023-09-22",
      status: "Completed",
    },
    {
      id: "TXN-003",
      type: "payment",
      description: "Lab test payment",
      amount: 120.0,
      date: "2023-08-05",
      status: "Completed",
    },
    {
      id: "TXN-004",
      type: "deposit",
      description: "Wallet deposit",
      amount: 500.0,
      date: "2023-07-30",
      status: "Completed",
    },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground dark:text-white mb-8">Wallet</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-gradient-to-r from-primary/80 to-primary rounded-xl p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Available Balance</p>
              <h2 className="text-3xl font-bold mt-1">₹ 2,450.00</h2>
            </div>
            <CreditCard className="w-8 h-8" />
          </div>

          <div className="mt-8 flex space-x-3">
            <button className="flex items-center justify-center rounded-full px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm">
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Money
            </button>
            <button className="flex items-center justify-center rounded-full px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm">
              <DollarSign className="w-4 h-4 mr-2" />
              Withdraw
            </button>
          </div>
        </div>

        <div className="bg-card dark:bg-gray-800 rounded-xl p-6">
          <h3 className="font-semibold dark:text-white mb-4">Quick Pay</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:text-white">
              <span>Pay for Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:text-white">
              <span>Pay for Medication</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:text-white">
              <span>Pay for Lab Tests</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold dark:text-white mb-4">Transaction History</h2>
        <div className="bg-card dark:bg-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`
                          w-8 h-8 rounded-full flex items-center justify-center mr-3
                          ${transaction.type === "payment" ? "bg-red-100 dark:bg-red-900" : "bg-green-100 dark:bg-green-900"}
                        `}
                        >
                          {transaction.type === "payment" || transaction.type === "deposit" ? (
                            <ArrowUpRight
                              className={`w-4 h-4 ${transaction.type === "payment" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}
                            />
                          ) : (
                            <ArrowDownLeft className="w-4 h-4 text-green-600 dark:text-green-400" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium dark:text-white">{transaction.description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">ID: {transaction.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap dark:text-white">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap font-medium
                      ${transaction.type === "payment" ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}
                    `}
                    >
                      {transaction.type === "payment" ? "-" : "+"} ₹ {transaction.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

