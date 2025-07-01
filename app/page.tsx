// Langkah 1: Impor semua komponen yang sudah kita buat
import HeroSection from "@/components/hero-section";
import CaseStudySection from "@/components/case-study-section";
import OtherProjectsSection from "@/components/other-projects-section"; // <--- TAMBAHKAN INI
import ServicesPricingSection from "@/components/services-pricing-section";
import OrderForm from "@/components/order-form";
import Footer from "@/components/footer";

// Langkah 2: Susun komponennya di dalam halaman utama
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <HeroSection />
      <CaseStudySection />
      {/* <OtherProjectsSection />  */}
      <ServicesPricingSection />
      <OrderForm />
      <Footer />
    </main>
  );
}
