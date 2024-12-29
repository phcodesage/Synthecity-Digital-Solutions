import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-32 pb-24 lg:pb-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-[40px] lg:text-[64px] font-bold leading-tight">
              Elevate{' '}
              <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 100%', backgroundPosition: '0 0' }}>
                Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 100%', backgroundPosition: '0 0' }}>
                Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 100%', backgroundPosition: '0 0' }}>
                Presence
              </span>{' '}
              today!
            </h1>
            <p className="mt-4 lg:mt-6 text-[#333333]/60 text-base lg:text-lg">
              Welcome to SYNTHECITY Digital Solutions. We Transform Ideas into Digital Reality
            </p>
            <Link
              href="/contact"
              className="mt-8 lg:mt-10 inline-flex px-10 py-5 rounded-full bg-[#FF6B6B] text-white text-xl font-medium hover:bg-[#FF5252] transition-colors duration-200"
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