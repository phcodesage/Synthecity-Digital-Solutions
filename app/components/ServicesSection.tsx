import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section - Full Width */}
        <h2 className="text-[32px] lg:text-[40px] font-bold mb-12 text-[#444444]">
          Comprehensive Virtual Assistant Services and
          <br />
          Cutting-Edge Web Development Solutions
          <br />
          by{' '}
          <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent">
            Synthecity Digital Solutions
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="flex flex-col justify-center min-h-[600px]">
            {/* Check Items Container */}
            <div className="space-y-16">
              <div className="flex items-start gap-6">
                <div className="w-[100px] h-[100px] flex-shrink-0">
                  <Image
                    src="/icons/check-purple.png"
                    alt="Check"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#444444] text-lg pt-2">
                  Maximize efficiency, streamline operations, and elevate
                  your online presence with our tailored solutions.
                </p>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-[100px] h-[100px] flex-shrink-0">
                  <Image
                    src="/icons/check-purple.png"
                    alt="Check"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#444444] text-lg pt-2">
                  Gain a competitive edge in the digital landscape through
                  our SEO-friendly strategies and innovative approaches.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative h-[600px] flex items-center justify-center lg:mt-12">
            <div className="relative w-[90%] h-[90%]">
              <Image
                src="/services-illustration.png"
                alt="Services Illustration"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Paragraph */}
        <div className="mt-12">
          <p className="text-[#444444]/80 text-[25px] font-semibold font-inter max-w-[750px] h-[316px] flex items-center">
            Experience unparalleled support and exceptional quality with
            Synthecity Digital Solutions at your side.
          </p>
        </div>
      </div>
    </section>
  )
} 