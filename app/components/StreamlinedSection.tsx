import Image from 'next/image'

export default function StreamlinedSection() {
  return (
    <section className="py-20 bg-white relative min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-left mb-20">
          <h2 className="text-[40px] font-bold mb-4">
            Streamlined Efficiency,{' '}
            <span className="bg-gradient-to-r from-[#6953D3] via-[#A14EEE] to-[#F98085] bg-clip-text text-transparent">
              Enhanced Growth
            </span>
          </h2>
          <p className="text-[#444444] text-lg">
            Synthecity's Integrated Virtual Assistant Solutions and Dynamic Web Development Services
          </p>
        </div>

        {/* Icons with absolute positioning */}
        <div className="relative h-[500px]">
          {/* Shopify Icon - Top Left */}
          <div className="absolute left-0 top-0">
            <div className="relative w-[129px] h-[129px] rounded-full bg-[#6953D3] flex items-center justify-center">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src="/icons/shopify-icon.png"
                  alt="Shopify"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* WordPress Icon - Center Left */}
          <div className="absolute left-[30%] top-[30%]">
            <div className="relative w-[101px] h-[101px] rounded-full bg-[#D8B1F9] flex items-center justify-center">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src="/icons/wordpress-icon.png"
                  alt="WordPress"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Headset Icon - Center Right */}
          <div className="absolute right-[30%] top-[20%]">
            <div className="relative w-[102px] h-[102px] rounded-full bg-[#F4C3C3] flex items-center justify-center">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src="/icons/headset-icon.png"
                  alt="Customer Support"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* React Icon - Top Right */}
          <div className="absolute right-0 top-0">
            <div className="relative w-[85px] h-[85px] rounded-full bg-[#EAE5FF] flex items-center justify-center">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src="/icons/react-icon.png"
                  alt="React"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Users Icon - Bottom Right */}
          <div className="absolute right-[20%] bottom-0">
            <div className="relative w-[129px] h-[129px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
              <div className="relative w-[90px] h-[90px]">
                <Image
                  src="/icons/users-icon.png"
                  alt="Team"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Small Decorative Circles */}
          <div className="absolute left-[20%] top-[40%] w-[20px] h-[20px] rounded-full bg-[#EAE5FF]"></div>
          <div className="absolute right-[40%] top-[60%] w-[20px] h-[20px] rounded-full bg-[#F4C3C3]"></div>
          <div className="absolute left-[40%] bottom-[20%] w-[20px] h-[20px] rounded-full bg-[#D8B1F9]"></div>
        </div>
      </div>
    </section>
  )
} 