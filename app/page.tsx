import HeroSection from '@/app/components/HeroSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* VA and Web Development Section */}
      <section className="relative -mt-32 py-20">
        {/* Wave Background */}
        <div className="absolute inset-0 -top-16 z-10">
          <Image
            src="/wave-bg.png"
            alt="Background wave"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-center mb-16 max-w-[792px] mx-auto h-[175px] flex items-center justify-center whitespace-nowrap">
            <span className="text-[48px]">
              <span className="text-[#6953D3]">VA</span> and <span className="text-[#6953D3]">Web Development</span> Solutions
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* VA Services Card */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/va-services.png"
                alt="Virtual Assistant Services"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>

            {/* Web Development Card */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/web-dev.png"
                alt="Web Development Services"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
