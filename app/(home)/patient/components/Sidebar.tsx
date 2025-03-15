"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  User,
  Calendar,
  Clock,
  Wallet,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export default function PatientSidebar() {
  const pathname = usePathname(); // Get the current URL path

  const navItems = [
    { name: "Profile", icon: <User className="w-5 h-5" />, href: "/patient/profile" },
    { name: "Get Appointment", icon: <Calendar className="w-5 h-5" />, href: "/patient/appointments/new" },
    { name: "Past Appointments", icon: <Clock className="w-5 h-5" />, href: "/patient/appointments/history" },
    { name: "Wallet", icon: <Wallet className="w-5 h-5" />, href: "/patient/wallet" },
    { name: "Medical Records", icon: <FileText className="w-5 h-5" />, href: "/patient/records" },
    { name: "Messages", icon: <MessageSquare className="w-5 h-5" />, href: "/patient/messages" },
    { name: "Notifications", icon: <Bell className="w-5 h-5" />, href: "/patient/notifications" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, href: "/patient/settings" },
  ];

  return (
    <div
      className="
        fixed top-16 left-0 z-40 w-1/5 h-[calc(100vh-4rem)] 
        bg-background text-black dark:bg-black dark:text-gray-100 
        border-r border-border
      "
      role="navigation"
      aria-label="Patient Sidebar"
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-bold text-primary">Patient Portal</h2>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-2 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href);
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center px-4 py-3 rounded-md transition-colors
                      hover:bg-black hover:text-white dark:hover:bg-gray-800   dark:hover:text-white
                      ${isActive ? "bg-black dark:bg-gray-800 font-semibold text-white" : ""}
                    `}
                    aria-label={item.name}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-border">
          <Link
            href="/logout"
            className="flex items-center px-4 py-3 rounded-md transition-colors
              hover:bg-red-500/20 dark:hover:bg-red-700/30 text-red-600 dark:text-red-400"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
