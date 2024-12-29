import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_LINKS, NAV_LINKS } from '@/app/constants'

const leftColumnLinks = NAV_LINKS.slice(0, 4)
const rightColumnLinks = NAV_LINKS.slice(4)

export default function Footer() {
  return (
    <footer className="w-full bg-[#F9F4F4] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-block">
              <Image
                src="/synthecity-logo.png"
                alt="SynthecITy Logo"
                width={203}
                height={49}
                className="object-contain"
              />
            </Link>
            <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:gap-16 text-center lg:text-left">
              {/* First Column */}
              <div className="flex flex-col space-y-4">
                {leftColumnLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#4A4A4A] hover:text-[#6953D3] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Second Column */}
              <div className="flex flex-col space-y-4">
                {rightColumnLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#4A4A4A] hover:text-[#6953D3] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/join-us"
              className="mt-8 inline-flex px-6 py-2 rounded-full border border-[#6953D3] text-[#6953D3] hover:bg-[#6953D3] hover:text-white transition-colors text-sm font-medium"
            >
              Join Us
            </Link>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-gray-300 absolute left-1/2 h-48" />

          {/* Right Side */}
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-xl text-[#4A4A4A] mb-8">Contact us here!</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Full Width */}
      <div className="w-full bg-[#D9D9D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <p className="text-[#4A4A4A] text-sm">
              © 2024 copyrights by SYNTHECITY DIGITAL SOLUTIONS . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 