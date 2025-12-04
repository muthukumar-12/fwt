// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brandBlue: "#1473ff",
        docYellow: "#fff7cc",
        docYellowDeep: "#ffec80",
        border: "#d1d5db",
        input: "#f3f4f6",
        ring: "#2563eb",
        background: "#ffffff",
        foreground: "#111827",
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff",
          glow: "#93c5fd",
        },
        secondary: {
          DEFAULT: "#6b7280",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f9fafb",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff",
        },
        violetPrimary: {
          DEFAULT: "#7c3aed",     // violet-600
          foreground: "#ffffff",
        },
        violetSoft: "#f3e8ff",    // violet-50
        violetDark: "#6d28d9", 
        success: {
          DEFAULT: "#22c55e",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        sidebar: {
          DEFAULT: "#1f2937",
          foreground: "#f9fafb",
          primary: "#3b82f6",
          "primary-foreground": "#ffffff",
          accent: "#7c3aed",
          "accent-foreground": "#ffffff",
          border: "#374151",
          ring: "#2563eb",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [], // ← FIXED
};
