import HeroSection from '@/app/components/HeroSection'
import ServicesSection from '@/app/components/ServicesSection'
import StreamlinedSection from '@/app/components/StreamlinedSection'
import PortfolioSection from '@/app/components/PortfolioSection'
import Image from 'next/image'

export default function Home() {
  // Check if we're in production
  const isProduction = process.env.NODE_ENV === 'production'

  if (isProduction) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F9F4F4]">
        <div className="text-center px-4">
          <h1 className="text-[48px] font-bold mb-6">
            <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent">
              Coming Soon!
            </span>
          </h1>
          <p className="text-[#444444] text-[22px] font-medium font-inter max-w-[600px]">
            We are working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </main>
    )
  }

  // Development view with all components
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* VA and Web Development Section */}
      <section className="relative -mt-16 lg:-mt-32 py-12 lg:py-20">
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
          <h2 className="text-center mb-8 lg:mb-16 max-w-[792px] mx-auto h-[100px] lg:h-[175px] flex items-center justify-center">
            <span className="text-[32px] lg:text-[48px] whitespace-normal lg:whitespace-nowrap">
              <span className="text-[#6953D3]">VA</span> and <span className="text-[#6953D3]">Web Development</span> Solutions
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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

      {/* Services Section */}
      <ServicesSection />

      {/* Specialized VA Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#6953D3] text-[40px] font-bold mb-12 max-w-[794px]">
            Specialized VA Services
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Administrative Support */}
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
              <div className="max-w-[471px]">
                <p className="text-[#444444] text-[20px] font-medium font-inter">
                  Administrative Support Services: Offering skilled assistance in managing emails, scheduling, data entry, and various administrative tasks for your business needs.
                </p>
              </div>
            </div>

            {/* Content Creation */}
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
              <div className="max-w-[471px]">
                <p className="text-[#444444] text-[20px] font-medium font-inter">
                  Content Creation Services: Let our VAs create tailored content for you - from blog posts, articles, graphics, to videos - to meet your specific requirements and captivate your audience.
                </p>
              </div>
            </div>

            {/* Customer Service */}
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
              <div className="max-w-[471px]">
                <p className="text-[#444444] text-[20px] font-medium font-inter">
                  Customer Service Solutions: Hire our proficient team for responding to inquiries, handling customer support tickets, and providing comprehensive assistance to enhance customer satisfaction.
                </p>
              </div>
            </div>

            {/* Research Assistance */}
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
              <div className="max-w-[471px]">
                <p className="text-[#444444] text-[20px] font-medium font-inter">
                  Research Assistance Services: Our VAs are skilled in conducting in-depth internet research, gathering valuable data, and compiling insightful reports tailored to your needs.
                </p>
              </div>
            </div>

            {/* Social Media Management */}
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
              <div className="max-w-[471px]">
                <p className="text-[#444444] text-[20px] font-medium font-inter">
                  Social Media Management Services: Elevate your online presence by hiring our VAs to manage your social media accounts, craft engaging content, and boost audience engagement.
                </p>
              </div>
            </div>

            {/* Project Management */}
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
              <div className="max-w-[471px]">
                <p className="text-[#444444] text-[20px] font-medium font-inter">
                  Project Management Services: Entrust our VAs to organize tasks, coordinate teams, and ensure seamless project completion for your business endeavors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VA Services Section with Outsource Your Success */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Left Background Lines */}
        <div className="absolute left-0 top-0 w-[600px] h-full opacity-50 pointer-events-none">
          <Image
            src="/lines-bg-left.png"
            alt="Background Pattern Left"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Right Background Lines */}
        <div className="absolute right-0 top-0 w-[600px] h-full opacity-50 pointer-events-none">
          <Image
            src="/lines-bg-right.png"
            alt="Background Pattern Right"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Image */}
            <div className="relative h-[500px]">
              <Image
                src="/va-illustration.png"
                alt="Virtual Assistant Services"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-[40px] font-bold text-[#333333] mb-6">
                Outsource Your Success: Synthecity&apos;s Premier{' '}
                <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent">
                  Virtual Assistant Solutions
                </span>
              </h2>
              
              <div className="bg-[#F8F5FF] rounded-[20px] p-8">
                <p className="text-[#444444] text-lg">
                  Synthecity specializes in providing premier outsourced virtual 
                  assistant solutions. Hire skilled and dedicated virtual assistants 
                  through us to optimize your operations, reduce costs, and achieve 
                  unparalleled business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Section */}
      <StreamlinedSection />

      {/* Portfolio Section */}
      <PortfolioSection />
    </main>
  )
}
