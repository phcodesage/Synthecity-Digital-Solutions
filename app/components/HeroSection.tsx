import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate <span className="text-[#6953D3]">Your</span>
              <br />
              <span className="text-[#6953D3]">Digital</span>
              <br />
              <span className="text-[#6953D3]">Presence</span> today!
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              Welcome to SYNTHECITY Digital Solutions. We Transform Ideas into Digital Reality
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex px-8 py-4 rounded-full bg-[#FF6B6B] text-white font-medium hover:bg-[#FF5252] transition-colors duration-200"
            >
              Explore Now!
            </Link>
          </div>

          {/* Right Content - Phone Image */}
          <div className="relative">
            <div className="relative w-full h-[700px] translate-y-20">
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