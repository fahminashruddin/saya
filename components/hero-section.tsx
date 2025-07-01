import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Ideas into{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                I'm a passionate digital creator with over 5 years of experience
                in web development, UI/UX design, and digital strategy. I
                specialize in crafting beautiful, functional experiences that
                bridge the gap between creativity and technology, helping
                businesses and individuals bring their visions to life in the
                digital world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Tombol View My Work */}
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                View My Work
              </a>

              {/* Tombol Order Service */}
              <a
                href="#layanan"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-300 border-2 border-gray-600 rounded-lg hover:border-gray-400 hover:text-white transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Order Service
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
                <Image
                  src="/profil.jpeg?height=400&width=400"
                  alt="Professional portrait"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-xl -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
