'use client'

import Image from 'next/image'

interface Testimonial {
  content: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Alexander Smith",
    role: "Client",
    avatar: "/avatars/client1.png"
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Alexander Smith",
    role: "Client",
    avatar: "/avatars/client2.png"
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Alexander Smith",
    role: "Client",
    avatar: "/avatars/client3.png"
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Alexander Smith",
    role: "Client",
    avatar: "/avatars/client4.png"
  }
]

export default function SuccessStories() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Lines */}
      <div className="absolute left-0 top-0 w-[300px] h-full opacity-50 pointer-events-none">
        <Image
          src="/lines-bg.png"
          alt="Background Pattern"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Client Success Stories:
            <br />
            <span className="text-[#6953D3]">Hear What Our Customers Say!</span>
          </h2>
          <p className="text-gray-600">
            Discover firsthand experiences and glowing feedback from our valued clients. 
            Our testimonials showcase the impact of our services on businesses like yours. 
            These client success stories reflect the collaborative partnerships we build 
            and the tangible results achieved together.
          </p>
        </div>

        {/* Desktop Layout (Large Screens) */}
        <div className="hidden lg:block relative">
          <div className="relative flex justify-center min-h-[900px]">
            {/* First Card - Left Side */}
            <div className="absolute left-[5%] top-[35%]">
              <TestimonialCard {...testimonials[0]} />
            </div>
            
            {/* Second Card - Right of First Card */}
            <div className="absolute left-[calc(5%+360px)] top-[25%]">
              <TestimonialCard {...testimonials[1]} />
            </div>
            
            {/* Third Card - Right Side Top */}
            <div className="absolute right-[5%] top-0">
              <TestimonialCard {...testimonials[2]} />
            </div>
            
            {/* Fourth Card - Right Side Bottom */}
            <div className="absolute right-[5%] bottom-[10%]">
              <TestimonialCard {...testimonials[3]} />
            </div>
          </div>
        </div>

        {/* Tablet/Mobile Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-4">
            Ready to Hire an Expert or Explore Flexible Options?
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Let&apos;s assess your requirements and explore the options together to ensure 
            the perfect match for your business success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex-1 w-full max-w-md">
              <input
                type="email"
                placeholder="Write your email here!"
                className="w-full px-4 py-2 rounded-full border border-[#6953D3] focus:outline-none focus:ring-2 focus:ring-[#6953D3]"
              />
            </div>
            <button className="px-6 py-2 bg-[#6953D3] text-white rounded-full hover:bg-[#5842c3] transition-colors">
              Submit
            </button>
            <span className="text-gray-500">OR</span>
            <button className="flex items-center gap-2 px-6 py-2 bg-[#6953D3] text-white rounded-full hover:bg-[#5842c3] transition-colors">
              <span className="material-icons">mail</span>
              Email us!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonial Card Component
function TestimonialCard({ content, author, role, avatar, className = '' }: Testimonial & { className?: string }) {
  return (
    <div className={`bg-white p-8 rounded-[20px] relative w-[340px] h-[400px] flex flex-col 
      shadow-[2px_4px_34.8px_1px_rgba(163,146,191,0.25)] ${className}`}
    >
      <div>
        <div className="text-[#6953D3] absolute top-8 left-8">
          <Image
            src="/icons/quote-mark.png"
            alt="Quote"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <p className="text-gray-600 mt-20 text-[18px] leading-[27px]">{content}</p>
      </div>
      
      <div className="flex items-center mt-auto pt-8 border-t border-gray-100">
        <div className="w-[52px] h-[52px] rounded-full overflow-hidden mr-4">
          <Image
            src={avatar}
            alt={author}
            width={52}
            height={52}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-[18px] text-gray-900">{author}</h4>
          <p className="text-gray-500 text-[14px]">{role}</p>
        </div>
      </div>
    </div>
  )
} 