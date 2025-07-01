import Image from "next/image";
import { Users, ShoppingCart, DollarSign, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudySection() {
  const achievements = [
    {
      icon: Users,
      number: "60,000+",
      label: "Registered Users",
    },
    {
      icon: ShoppingCart,
      number: "500,000+",
      label: "Orders Processed",
    },
    {
      icon: DollarSign,
      number: "Profitable",
      label: "Business Status",
    },
    {
      icon: Star,
      number: "4.8/5",
      label: "Avg. User Rating",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gray-900 text-white py-16 lg:py-24"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Project
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/MacBook1.png?height=600&width=800"
                  alt="Ordersosmed.id Dashboard Screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Title and Subtitle */}
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                Founder & Manager at{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <a href="https://ordersosmed.id">Ordersosmed.id</a>
                </span>
              </h3>
              <p className="text-xl text-blue-400 font-medium">
                Building a Profitable SMM Panel Platform from Scratch
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Ordersosmed.id is a comprehensive Social Media Marketing (SMM)
              panel platform that I founded and developed to provide affordable,
              high-quality social media services to businesses and individuals.
              The platform offers automated solutions for Instagram, Facebook,
              Twitter, and other social media platforms, serving thousands of
              users across Indonesia and Southeast Asia.
            </p>

            {/* Challenge Section */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white">The Challenge</h4>
              <p className="text-gray-300 leading-relaxed">
                The SMM industry was fragmented with unreliable providers, poor
                user experiences, and inconsistent service quality. Small
                businesses and content creators needed an affordable,
                trustworthy platform that could deliver consistent results while
                providing excellent customer support and transparent pricing
                structures.
              </p>
            </div>

            {/* Solution Section */}
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white">
                My Role & Solution
              </h4>
              <p className="text-gray-300 leading-relaxed">
                As founder and technical lead, I designed and developed the
                entire platform from ground up using modern web technologies. I
                implemented automated order processing, real-time analytics,
                secure payment integration, and a user-friendly dashboard. I
                also established partnerships with reliable service providers
                and built a comprehensive customer support system.
              </p>
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h4 className="text-3xl font-bold mb-4">Key Achievements</h4>
            <p className="text-gray-400 text-lg">
              Measurable impact and business success
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl md:text-4xl font-bold text-white">
                        {achievement.number}
                      </div>
                      <div className="text-gray-400 font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
