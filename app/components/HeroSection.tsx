import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-32 pb-24 lg:pb-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
              Elevate <span className="text-[#6953D3]">Your</span>
              <br />
              <span className="text-[#6953D3]">Digital</span>
              <br />
              <span className="text-[#6953D3]">Presence</span> today!
            </h1>
            <p className="mt-4 lg:mt-6 text-gray-600 text-base lg:text-lg">
              Welcome to SYNTHECITY Digital Solutions. We Transform Ideas into Digital Reality
            </p>
            <Link
              href="/contact"
              className="mt-6 lg:mt-8 inline-flex px-6 lg:px-8 py-3 lg:py-4 rounded-full bg-[#FF6B6B] text-white font-medium hover:bg-[#FF5252] transition-colors duration-200"
            >
              Explore Now!
            </Link>
          </div>

          {/* Right Content - Phone Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[700px] lg:translate-y-20">
              <Image
                src="/hero-phone.png"
                alt="Digital Services Showcase"
                fill
                className="object-contain scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 