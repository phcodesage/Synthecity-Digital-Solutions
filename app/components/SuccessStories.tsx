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
  }
]

export default function SuccessStories() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg relative"
            >
              <div className="text-[#6953D3] text-5xl absolute top-4 left-4">"</div>
              <p className="text-gray-600 mb-4 pt-8">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-4">
            Ready to Hire an Expert or Explore Flexible Options?
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Let's assess your requirements and explore the options together to ensure 
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