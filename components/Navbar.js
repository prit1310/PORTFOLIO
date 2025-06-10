"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 safe-area-inset ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-gray-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-lg">💻</span>
              </div>
              <span className="text-lg sm:text-2xl font-bold gradient-text">Prit Senjaliya</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 lg:px-6 py-2 lg:py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 font-medium text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 lg:p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 ml-2 lg:ml-4"
            >
              {theme === "dark" ? <span className="icon-sun"></span> : <span className="icon-moon"></span>}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
            >
              {theme === "dark" ? <span className="icon-sun"></span> : <span className="icon-moon"></span>}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300"
            >
              {isOpen ? <span className="icon-close"></span> : <span className="icon-menu"></span>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-white/20 dark:border-gray-700/50 safe-area-inset">
            <div className="px-4 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
