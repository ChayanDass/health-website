"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PatientReport() {
  const router = useRouter()

  // Navigate to bills page
  const goToBills = () => {
    router.push("/patient/appointments/report/bills");
    
  };
  const goBackToAppoitment = () => {
    router.push("/patient/appointments/history");
  }
  

  return (
    <div className="min-h-screen p-4 bg-background dark:bg-black">
      <div className="max-w-5xl mx-auto border border-gray-700 rounded-lg overflow-hidden dark:bg-black dark:text-white">
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

        {/* Doctor and Hospital Info */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <button  onClick={goBackToAppoitment}
            className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center pointer">
              <span className="text-xl">&larr;</span>
            </button>
            <div>
              <div className="text-lg">DOCTOR ID: MED-2458</div>
              <div className="text-lg">DR. SARAH JOHNSON</div>
            </div>
          </div>
          <div className="text-xl font-bold border border-gray-700 py-2 px-6 rounded">CENTRAL MEDICAL CENTER</div>
          <button onClick={goToBills} className="bg-white text-black py-1 px-4 rounded cursor-pointer">
            bills -&gt;
          </button>
        </div>

        {/* Patient Details */}
        <div className="p-4 border-b border-gray-700">
          <div className="border border-gray-700 rounded-lg p-4 grid grid-cols-2 gap-4">
            <div>
              <div className="mb-2">NAME : JOHN SMITH</div>
              <div className="mb-2">AGE : 42</div>
              <div className="mb-2">HEIGHT : 178 CM</div>
            </div>
            <div>
              <div className="mb-2">FEVER : 99.8°F</div>
              <div className="mb-2">BP : 130/85</div>
              <div className="mb-2">BLOOD SUGAR : 110 MG/DL</div>
            </div>
            <div className="col-span-1">
              <div className="mb-2">WEIGHT : 82 KG</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-4 p-4">
          {/* Symptoms */}
          <div className="border border-gray-700 rounded-lg p-4">
            <div className="text-xl font-bold mb-4 text-center">SYMPTOMS</div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div>1.</div>
                <div className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1">Persistent dry cough</div>
              </div>
              <div className="flex items-center gap-2">
                <div>2.</div>
                <div className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1">Mild fever for 3 days</div>
              </div>
              <div className="flex items-center gap-2">
                <div>3.</div>
                <div className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1">
                  Fatigue and body aches
                </div>
              </div>
            </div>
          </div>

          {/* Medicines */}
          <div className="border border-gray-700 rounded-lg p-4">
            <div className="text-xl font-bold mb-4 text-center">MEDICINES</div>
            <div className="grid grid-cols-3 gap-2 mb-2">
              <div className="text-center">DOSAGE</div>
              <div className="text-center">MEDICINES</div>
              <div className="text-center">DAYS</div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center mb-2">
              <div className="text-center">2 times</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-center">Azithromycin 250mg</div>
              <div className="text-center">5</div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center mb-2">
              <div className="text-center">3 times</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-center">Paracetamol 500mg</div>
              <div className="text-center">3</div>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="text-center">1 time</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-center">Montelukast 10mg</div>
              <div className="text-center">7</div>
            </div>
          </div>

          {/* Test Results */}
          <div className="border border-gray-700 rounded-lg p-4">
            <div className="text-xl font-bold mb-4 text-center">TEST RESULTS</div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1">Complete Blood Count</div>
                <div className="w-6 h-6 border border-gray-700 rounded flex items-center justify-center">✓</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1">Chest X-Ray</div>
                <div className="w-6 h-6 border border-gray-700 rounded flex items-center justify-center">✓</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1">COVID-19 PCR Test</div>
                <div className="w-6 h-6 border border-gray-700 rounded flex items-center justify-center">-</div>
              </div>
            </div>
          </div>

          {/* Precautions */}
          <div className="border border-gray-700 rounded-lg p-4">
            <div className="text-xl font-bold mb-4 text-center">PRECAUTIONS</div>
            <div className="space-y-2">
              <div className="bg-gray-800 border border-gray-700 rounded px-2 py-1">Rest for at least 5 days</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-2 py-1">Drink plenty of fluids</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-2 py-1">Avoid strenuous activity</div>
              <div className="bg-gray-800 border border-gray-700 rounded px-2 py-1">Follow-up in 7 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

