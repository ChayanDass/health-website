/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // Enables dark mode with class-based switching
    theme: {
      extend: {
        colors: {
          background: {
            DEFAULT: "#ffffff",
            dark: "#111827",
          },
          foreground: {
            DEFAULT: "#1f2937",
            dark: "#f9fafb",
          },
          muted: {
            DEFAULT: "#f3f4f6",
            dark: "#1f2937",
          },
          primary: {
            DEFAULT: "#3b82f6",
            dark: "#2563eb",
          },
          border: {
            DEFAULT: "#e5e7eb",
            dark: "#374151",
          },
          destructive: {
            DEFAULT: "#dc2626",
            dark: "#b91c1c",
          },
        },
      },
    },
    plugins: [],
  }
  