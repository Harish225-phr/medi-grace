import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import TreatmentsSection from "@/components/TreatmentsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <TreatmentsSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;