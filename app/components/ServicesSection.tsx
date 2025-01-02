import Image from 'next/image'

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[32px] lg:text-[40px] font-bold mb-6">
              Comprehensive Virtual Assistant Services and
              <br />
              Cutting-Edge Web Development Solutions
              <br />
              by{' '}
              <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent">
                Synthecity Digital Solutions
              </span>
            </h2>
            
            <p className="text-[#444444]/60 text-lg mb-8">
              Empower your business with our diverse expertise in
              virtual assistant services and top-tier web development
              solutions. Synthecity Digital Solutions offers a pioneering
              suite of services delivered by experts in their respective
              fields.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src="/icons/check-purple.png"
                    alt="Check"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#444444]/60 text-lg">
                  Maximize efficiency, streamline operations, and elevate
                  your online presence with our tailored solutions.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src="/icons/check-purple.png"
                    alt="Check"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#444444]/60 text-lg">
                  Gain a competitive edge in the digital landscape through
                  our SEO-friendly strategies and innovative approaches.
                </p>
              </div>
            </div>

            <p className="text-[#444444]/60 text-lg mt-8">
              Experience unparalleled support and exceptional quality with
              Synthecity Digital Solutions at your side.
            </p>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative h-[600px] flex items-center justify-center">
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
      </div>
    </section>
  )
} 