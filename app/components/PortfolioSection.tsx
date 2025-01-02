import Link from 'next/link'

export default function PortfolioSection() {
  return (
    <section className="py-[84px] bg-[#F9F4F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-[40px] font-bold mb-6 text-[#333333]">
            Explore Our Diverse Portfolio Showcasing
            <br />
            <span className="bg-gradient-to-r from-[#6953D3] via-[#8566F1] to-[#A14EEE] bg-clip-text text-transparent">
              Excellence
            </span>{' '}
            in Action!
          </h2>
          
          <p className="text-[#444444] text-[22px] font-medium font-inter mb-10">
            Witness the power of our expertise! Browse through our captivating portfolio carousel to discover the 
            diverse range of projects that exemplify our commitment to excellence. Each project is a testament to 
            our dedication and proficiency. Click below to explore our portfolio gallery and witness the quality and 
            innovation we bring to every endeavor.
          </p>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center w-[369px] h-[56px] bg-[#6953D3] text-white rounded-full hover:bg-[#5842c3] transition-colors text-[22px] font-medium font-inter"
          >
            Explore Our Portfolio!
          </Link>
        </div>
      </div>
    </section>
  )
} 