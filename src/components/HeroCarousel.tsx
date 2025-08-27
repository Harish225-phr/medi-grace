import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import skincareHero1 from "@/assets/skincare-hero-1.jpg";
import skincareHero2 from "@/assets/skincare-hero-2.jpg";
import skincareHero3 from "@/assets/skincare-hero-3.jpg";
import skincareHero4 from "@/assets/skincare-hero-4.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: skincareHero1,
      title: "Glow Naturally, Care Confidently",
      subtitle: "Discover your skin's true potential with our personalized skincare treatments designed for every skin type and concern.",
    },
    {
      image: skincareHero2,
      title: "Modern Skincare, Beautiful Results",
      subtitle: "Experience the latest in skincare technology in our serene, spa-like environment designed for your comfort and relaxation.",
    },
    {
      image: skincareHero3,
      title: "Premium Products, Expert Care",
      subtitle: "Using only the finest skincare formulations and professional-grade treatments to give you visible, lasting results.",
    },
    {
      image: skincareHero4,
      title: "For Every Skin, Every Age, Every Gender",
      subtitle: "Inclusive skincare solutions that celebrate diversity and help everyone achieve their healthiest, most radiant skin.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
          
          <div className="relative z-10 flex items-center h-full">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="max-w-2xl animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight font-poppins">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/dermatologists">
                    <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-white font-medium animate-float group">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Consultation
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <a href="tel:+917589951677">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-medium group">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Free Skin Analysis
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        onClick={goToPrevious}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        onClick={goToNext}
      >
        <ArrowRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;