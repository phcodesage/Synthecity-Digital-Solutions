import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero-bg.png"
            alt="About Us Background"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
        </div>

        {/* White Curve Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,96L80,106.7C160,117,320,139,480,154.7C640,171,800,181,960,165.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-64">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/80 mb-4">
            <span>Nav</span>
            <span>/</span>
            <span>Home</span>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-[56px] font-bold text-white mb-6">
                About Us
              </h1>
              <div className="bg-white/10 backdrop-blur-md rounded-[20px] p-8">
                <h2 className="text-[40px] font-bold mb-6">
                  Empowering Businesses Globally:{' '}
                  <span className="text-transparent bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text">
                    Your Premier Digital
                  </span>{' '}
                  <span className="text-[#F98085]">
                    Solution Provider
                  </span>
                </h2>
                <p className="text-white text-lg leading-relaxed">
                  At Synthecity Digital Solutions, we are a collective of tech-savvy professionals, 
                  each a maestro in our respective fields of Virtual Assistance, Customer Service, 
                  Arts & Design, Social Media Management, Web App Programming encompassing 
                  various languages and frameworks, and Sales & Marketing. Drawing from our 
                  experiences ranging from roles in employment to freelancing, we identified a 
                  common pain point prevalent in the industry—excessive charges for digital 
                  solutions and undercompensation for skilled experts.
                </p>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative h-[500px]">
              <Image
                src="/about-illustration.png"
                alt="About Us Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the About page content will go here */}
    </main>
  )
} 