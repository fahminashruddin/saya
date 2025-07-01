import { Check, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ServicesPricingSection() {
  const basicFeatures = [
    "Layanan Sosial Media Lengkap",
    "Website Siap Pakai",
    "Support Teknis Dasar",
  ];

  const premiumFeatures = [
    "Semua di Paket Sosmed",
    "+ Layanan Produk Digital",
    "Support Prioritas",
  ];

  return (
    <section className="min-h-screen text-white py-16 lg:py-24" id="layanan">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Layanan yang Saya Tawarkan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Part 1: SMM Panel Website Rental Service */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Sewa Website SMM Panel Siap Pakai
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dapatkan website SMM Panel profesional tanpa perlu coding. Siap
              digunakan dalam hitungan menit.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Card */}
            <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 transform cursor-pointer">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  Paket Sosmed
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      Rp 100.000
                    </span>
                    <span className="text-gray-400 text-lg">/bulan</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {basicFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-8 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                >
                  Lihat Demo
                </Button>
              </CardContent>
            </Card>

            {/* Premium Card */}
            <Card className="bg-gray-800 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:scale-105 transform cursor-pointer relative shadow-lg shadow-blue-500/20">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 text-sm font-semibold">
                  Paling Populer
                </Badge>
              </div>

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  Paket Lengkap
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Rp 125.000
                    </span>
                    <span className="text-gray-400 text-lg">/bulan</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                  Sewa Sekarang
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Part 2: Custom Website Development Service */}
        <div className="bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-700/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Jasa Pembuatan Website Custom
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Wujudkan website impian Anda, mulai dari toko online, company
                profile, hingga portofolio custom. Diskusikan kebutuhan Anda dan
                saya akan memberikan solusi terbaik dengan desain yang modern
                dan profesional.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200"
              >
                <a href="#kontak">Diskusikan Proyek Anda</a>
              </Button>
            </div>

            {/* Right Column - Icon */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    {/* Browser Window */}
                    <div className="w-32 h-24 md:w-40 md:h-28 bg-gray-700 rounded-lg border-2 border-gray-600 relative overflow-hidden">
                      {/* Browser Header */}
                      <div className="h-6 bg-gray-600 flex items-center px-2 gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      {/* Browser Content */}
                      <div className="p-2 flex items-center justify-center h-full">
                        <div className="text-blue-400 font-mono text-lg md:text-xl">
                          {"< />"}
                        </div>
                      </div>
                    </div>
                    {/* Code Icon Overlay */}
                    <div className="absolute -bottom-3 -right-3 bg-gray-800 rounded-lg p-2 border-2 border-purple-500 shadow-lg">
                      <Code className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl -z-10 scale-110 group-hover:scale-125 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
