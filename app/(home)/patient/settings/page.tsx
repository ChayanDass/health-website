"use client"

import { useState } from "react"
import { Bell, Lock, Eye, EyeOff, Globe, Sun, Smartphone } from "lucide-react"

export default function Settings() {
  const [showPassword, setShowPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: true,
    app: true,
    appointments: true,
    reminders: true,
    reports: true,
    payments: true,
  })

  const handleNotificationChange = (key: keyof typeof notificationSettings) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-foreground dark:text-white mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-card dark:bg-gray-800 rounded-xl p-4">
            <h3 className="font-semibold dark:text-white mb-4">Settings</h3>
            <ul className="space-y-2">
              <li>
                <button className="w-full flex items-center p-2 rounded-md bg-primary/10 dark:bg-primary/20 dark:text-white">
                  <Lock className="w-5 h-5 mr-3" />
                  <span>Security</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center p-2 rounded-md hover:bg-muted dark:hover:bg-gray-700 dark:text-white">
                  <Bell className="w-5 h-5 mr-3" />
                  <span>Notifications</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center p-2 rounded-md hover:bg-muted dark:hover:bg-gray-700 dark:text-white">
                  <Globe className="w-5 h-5 mr-3" />
                  <span>Language</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center p-2 rounded-md hover:bg-muted dark:hover:bg-gray-700 dark:text-white">
                  <Sun className="w-5 h-5 mr-3" />
                  <span>Appearance</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center p-2 rounded-md hover:bg-muted dark:hover:bg-gray-700 dark:text-white">
                  <Smartphone className="w-5 h-5 mr-3" />
                  <span>Devices</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-card dark:bg-gray-800 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold dark:text-white mb-4">Security</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
                <input
                  type="password"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent dark:text-white"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="pt-4">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Update Password</button>
              </div>
            </div>
          </div>

          <div className="bg-card dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold dark:text-white mb-4">Notification Preferences</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium dark:text-white mb-2">Notification Channels</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={notificationSettings.email}
                        onChange={() => handleNotificationChange("email")}
                      />
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${notificationSettings.email ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${notificationSettings.email ? "translate-x-5" : "translate-x-1"}`}
                        ></div>
                      </div>
                      <span className="ml-3 dark:text-white">Email Notifications</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={notificationSettings.sms}
                        onChange={() => handleNotificationChange("sms")}
                      />
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${notificationSettings.sms ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${notificationSettings.sms ? "translate-x-5" : "translate-x-1"}`}
                        ></div>
                      </div>
                      <span className="ml-3 dark:text-white">SMS Notifications</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={notificationSettings.app}
                        onChange={() => handleNotificationChange("app")}
                      />
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${notificationSettings.app ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${notificationSettings.app ? "translate-x-5" : "translate-x-1"}`}
                        ></div>
                      </div>
                      <span className="ml-3 dark:text-white">In-App Notifications</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium dark:text-white mb-2">Notification Types</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={notificationSettings.appointments}
                        onChange={() => handleNotificationChange("appointments")}
                      />
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${notificationSettings.appointments ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${notificationSettings.appointments ? "translate-x-5" : "translate-x-1"}`}
                        ></div>
                      </div>
                      <span className="ml-3 dark:text-white">Appointment Reminders</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={notificationSettings.reminders}
                        onChange={() => handleNotificationChange("reminders")}
                      />
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${notificationSettings.reminders ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${notificationSettings.reminders ? "translate-x-5" : "translate-x-1"}`}
                        ></div>
                      </div>
                      <span className="ml-3 dark:text-white">Medication Reminders</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={notificationSettings.reports}
                        onChange={() => handleNotificationChange("reports")}
                      />
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${notificationSettings.reports ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${notificationSettings.reports ? "translate-x-5" : "translate-x-1"}`}
                        ></div>
                      </div>
                      <span className="ml-3 dark:text-white">Lab Reports</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={notificationSettings.payments}
                        onChange={() => handleNotificationChange("payments")}
                      />
                      <div
                        className={`w-10 h-5 rounded-full transition-colors ${notificationSettings.payments ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"}`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${notificationSettings.payments ? "translate-x-5" : "translate-x-1"}`}
                        ></div>
                      </div>
                      <span className="ml-3 dark:text-white">Payment Notifications</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Save Preferences</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

