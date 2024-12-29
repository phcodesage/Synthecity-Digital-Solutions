import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Elevate Your <span className="text-purple-600">Digital Presence</span> today!
              </h1>
              <p className="text-gray-600 mb-8">
                Comprehensive Virtual Assistant Services and Cutting-Edge Web Development Solutions by Synthecify Digital Solutions
              </p>
              <Link 
                href="/contact"
                className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors inline-flex items-center"
              >
                Get Started
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/hero-image.png" // Add your hero image
                alt="Digital Services Illustration"
                width={500}
                height={500}
                priority
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            VA and Web Development Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Virtual Assistant Services</h3>
              <p className="text-gray-600">
                Professional VA services to help manage your business operations efficiently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Custom web solutions built with cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
