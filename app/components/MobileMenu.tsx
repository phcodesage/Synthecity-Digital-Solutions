'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: Array<{ href: string; label: string }>
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-white lg:hidden">
      <div className="flex flex-col h-full pt-24 px-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`text-[20px] font-medium py-4 transition-colors duration-200 no-underline border-b border-gray-100
                ${isActive ? 'text-[#6953D3]' : 'text-[#4A4A4A]'}
                ${link.href === '/contact' ? 'hidden' : ''}`}
            >
              {link.label}
            </Link>
          )
        })}
        
        {/* Mobile Join Us Button */}
        <div className="mt-8 flex flex-col space-y-4">
          <Link
            href="/login"
            onClick={onClose}
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
            <span className="text-[#4A4A4A]">Login</span>
          </Link>
          <Link
            href="/join-us"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border-2 border-[#6953D3] text-[#6953D3] hover:bg-[#6953D3] hover:text-white transition-colors duration-200 text-sm font-medium no-underline bg-white text-center"
          >
            Join Us →
          </Link>
        </div>
      </div>
    </div>
  )
} 