"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export default function PatientNavbar() {

  // Example patient data - in a real app, this would come from props or context
  const patient = {
    name: "Chayan Das",
    age: 19,
    gender: "Male",
    profilePhoto: "/placeholder.svg?height=40&width=40",
  }

  const [darkMode, setDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    // Check for user preference in localStorage
    const userTheme = localStorage.getItem("theme")

    if (userTheme === "light") {
      document.documentElement.classList.remove("dark")
      setDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    console.log(newDarkMode);
    

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <nav className="w-full px-4 py-3 bg-background border-b border-border shadow-sm dark:bg-black dark:border-gray-800 dark:text-white">
      <div className="flex items-center justify-between">
        {/* Left side - Hospital logo */}
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <svg
              className="w-8 h-8 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <span className="ml-2 text-xl font-bold text-foreground">MediCare</span>
          </div>

          {/* Welcome message */}
          <div className="hidden ml-6 md:block">
            <p className="text-muted-foreground">
              Hey <span className="font-semibold">{patient.name}</span>,
              </p> 
              <p>
              welcome again!
            </p>
          </div>
        </div>

        {/* Right side - Patient info and dark mode toggle */}
        <div className="flex items-center space-x-4">
          {/* Patient age and gender */}
          <div className="hidden text-sm text-muted-foreground md:block">
            <span className="mr-2">{patient.age} years</span>
            <span>{patient.gender}</span>
          </div>

          {/* Patient profile photo */}
          <div className="relative">
            <img
              src={patient.profilePhoto || "/placeholder.svg"}
              alt="Patient profile"
              className="object-cover w-10 h-10 rounded-full border-2 border-border"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-muted-foreground rounded-full hover:bg-muted"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile welcome message */}
      <div className="mt-2 md:hidden">
        <p className="text-muted-foreground">
          Hey <span className="font-semibold">{patient.name}</span>, welcome again!
        </p>
      </div>
    </nav>
  )
}
