import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for managing online store operations with real-time analytics.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "UI Design"],
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description:
        "Complete brand identity package including logo, colors, and marketing materials.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Logo Design", "Branding", "Figma"],
    },
    {
      id: 3,
      title: "Content Marketing Strategy",
      description:
        "Comprehensive content strategy that increased engagement by 300% in 6 months.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Copywriting", "SEO", "Strategy"],
    },
    {
      id: 4,
      title: "Mobile App UI/UX",
      description:
        "User-centered design for a fitness tracking app with intuitive navigation.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["UI Design", "UX Research", "Prototyping"],
    },
    {
      id: 5,
      title: "Restaurant Website",
      description:
        "Responsive website with online ordering system and reservation management.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "UI Design"],
    },
    {
      id: 6,
      title: "Social Media Campaign",
      description:
        "Multi-platform campaign that generated 50K+ impressions and 2K+ conversions.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Social Media", "Copywriting", "Analytics"],
    },
  ];

  return (
    <section className="min-h-screen text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyek Lainnya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Kumpulan proyek yang telah saya kerjakan dengan berbagai klien dan
            teknologi
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-4">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-700 text-gray-300 hover:bg-gray-600 text-xs px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* View Details Link */}
                <div className="pt-2">
                  <a
                    href={`#project-${project.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 group/link"
                  >
                    Lihat Detail
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105">
            Lihat Semua Proyek
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
