"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function BillsPage() {
  const router = useRouter()

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  // Navigate back to patient report
  const goBackToReport = () => {
    router.push("/patient/appointments/report")
  }

  return (
    <div className="min-h-screen p-4 bg-background dark:bg-black">
      <div className="max-w-5xl mx-auto border border-gray-700 rounded-lg overflow-hidden bg-black text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center">
              <div className="text-purple-600 text-2xl font-bold">+</div>
            </div>
            <div className="text-lg font-semibold">JOHN SMITH</div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-lg">42</div>
            <div className="text-lg">M</div>
            <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="p-4">
          <button
            onClick={goBackToReport}
            className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center"
          >
            <span className="text-xl">&larr;</span>
          </button>
        </div>

        {/* Medicine Bill */}
        <div className="p-4">
          <div className="border border-gray-700 rounded-lg p-6">
            <div className="text-xl font-bold mb-8 text-center">MEDICINE BILL</div>

            {/* Medicine Items */}
            <div className="mb-4 flex items-center gap-4">
              <div className="text-lg">1.</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 flex-grow">Azithromycin 250mg</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-24 text-center">$25.00</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-32 text-center">$22.50</div>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <div className="text-lg">2.</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 flex-grow">Paracetamol 500mg</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-24 text-center">$12.00</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-32 text-center">$12.00</div>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <div className="text-lg">3.</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 flex-grow">Montelukast 10mg</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-24 text-center">$18.50</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-32 text-center">$16.65</div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Total */}
            <div className="flex justify-end">
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-48 text-center">
                TOTAL BILL: $51.15
              </div>
            </div>
          </div>
        </div>

        {/* Lab and Test Bills */}
        <div className="p-4">
          <div className="border border-gray-700 rounded-lg p-6">
            <div className="text-xl font-bold mb-8 text-center">LAB AND REST TEST BILLS</div>

            {/* Test Items */}
            <div className="mb-4 flex items-center gap-4">
              <div className="text-lg">1.</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 flex-grow">Complete Blood Count</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-24 text-center">$45.00</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-32 text-center">$45.00</div>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <div className="text-lg">2.</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 flex-grow">Chest X-Ray</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-24 text-center">$120.00</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-32 text-center">$108.00</div>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <div className="text-lg">3.</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 flex-grow">COVID-19 PCR Test</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-24 text-center">$75.00</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-32 text-center">$75.00</div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Total */}
            <div className="flex justify-end">
              <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-48 text-center">
                TOTAL BILL: $228.00
              </div>
            </div>
          </div>
        </div>

        {/* Print Button */}
        <div className="flex justify-center p-6">
          <button className="bg-white text-black py-3 px-8 rounded-full font-bold">PRINT BILL</button>
        </div>
      </div>
    </div>
  )
}

