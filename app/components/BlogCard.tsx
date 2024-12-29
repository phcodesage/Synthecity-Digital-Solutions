import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  image: string
  title: string
  href: string
  date: string
  category: string
}

export default function BlogCard({ image, title, href, date, category }: BlogCardProps) {
  return (
    <Link href={href} className="group">
      <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-[250px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-[#6953D3]">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">
            {new Date(date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
          <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-[#6953D3] transition-colors">
            {title}
          </h3>
          <span className="inline-flex items-center text-[#6953D3] text-sm font-medium group-hover:gap-2 transition-all">
            Read more
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
} 