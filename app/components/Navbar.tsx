"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  if (!mounted) {
    return null // Prevent hydration issues by not rendering anything on first render
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-[78px] py-[20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/synthecity-logo.png"
                alt="SynthecITy Logo"
                width={203}
                height={49}
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[15px] font-medium transition-colors duration-200 no-underline
                      ${isActive ? 'text-[#6953D3]' : 'text-[#4A4A4A] hover:text-[#6953D3]'}
                      ${link.href === '/contact' ? 'hidden' : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Desktop Join Us Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/login"
                className="flex items-center space-x-2 no-underline"
              >
                <div className="w-[32px] h-[32px] rounded-full border-2 border-[#D1D5DB] flex items-center justify-center bg-white">
                  <svg
                    className="w-4 h-4 text-[#4B5563]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </Link>
              <Link
                href="/join-us"
                className="px-5 py-2.5 rounded-full border-2 border-[#6953D3] text-[#6953D3] hover:bg-[#6953D3] hover:text-white transition-colors duration-200 text-sm font-medium no-underline bg-white"
              >
                Join Us →
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#6953D3] focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navLinks={navLinks}
      />
    </>
  )
} 