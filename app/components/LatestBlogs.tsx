'use client'

import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  title: string
  image: string
  date: string
  category: string
  href: string
}

const blogPosts: BlogPost[] = [
  {
    title: "How Virtual Assistants Can Transform Your Business Operations",
    image: "/blog/post1.jpg",
    date: "March 15, 2024",
    category: "Virtual Assistance",
    href: "/blog/va-transform-business"
  },
  {
    title: "Web Development Trends to Watch in 2024",
    image: "/blog/post2.jpg",
    date: "March 10, 2024",
    category: "Web Development",
    href: "/blog/web-dev-trends-2024"
  },
  {
    title: "Maximizing Efficiency with Digital Solutions",
    image: "/blog/post3.jpg",
    date: "March 5, 2024",
    category: "Digital Solutions",
    href: "/blog/maximizing-efficiency"
  }
]

export default function LatestBlogs() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and tips in virtual assistance 
            and web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link 
              key={index} 
              href={post.href}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#6953D3]">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#6953D3] transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 