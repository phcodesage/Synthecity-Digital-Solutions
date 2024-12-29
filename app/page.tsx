import HeroSection from '@/app/components/HeroSection'
import BlogCard from '@/app/components/BlogCard'
import Image from 'next/image'
import Link from 'next/link'

const LATEST_BLOGS = [
  {
    image: '/blog-1.png',
    title: 'Lorem ipsum dolor sit',
    href: '/blog/1',
    date: '2024-03-20',
    category: 'Web Development'
  },
  {
    image: '/blog-2.png',
    title: 'Lorem ipsum dolor sit',
    href: '/blog/2',
    date: '2024-03-19',
    category: 'Digital Marketing'
  },
  {
    image: '/blog-3.png',
    title: 'Lorem ipsum dolor sit',
    href: '/blog/3',
    date: '2024-03-18',
    category: 'UI/UX Design'
  },
  {
    image: '/blog-4.png',
    title: 'Lorem ipsum dolor sit',
    href: '/blog/4',
    date: '2024-03-17',
    category: 'Technology'
  }
]

export default function Home() {
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

      {/* Latest Blogs Section */}
      <section className="py-20 bg-[#F9F4F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-medium">
              Latest <span className="text-[#6953D3]">Blogs</span>
            </h2>
            <Link 
              href="/blog"
              className="text-[#6953D3] hover:text-[#5842c3] transition-colors hidden sm:inline-flex items-center gap-2"
            >
              View All
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LATEST_BLOGS.map((blog, index) => (
              <BlogCard
                key={index}
                {...blog}
              />
            ))}
          </div>
          {/* Mobile View All Button */}
          <div className="mt-8 text-center sm:hidden">
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-[#6953D3] text-[#6953D3] hover:bg-[#6953D3] hover:text-white transition-colors text-sm font-medium gap-2"
            >
              View All Blogs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
