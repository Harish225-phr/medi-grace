import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Clock, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const Dermatologists = () => {
  const dermatologists = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Medical & Cosmetic Dermatology",
      experience: "12+ Years",
      rating: 4.9,
      reviews: 245,
      location: "Main Clinic",
      education: "Harvard Medical School",
      specialties: ["Acne Treatment", "Anti-Aging", "Laser Therapy", "Skin Cancer"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      availability: "Mon-Fri: 9AM-6PM",
      description: "Specialized in advanced acne treatments and cosmetic procedures with over a decade of experience.",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Pediatric & Adult Dermatology",
      experience: "15+ Years",
      rating: 4.8,
      reviews: 189,
      location: "Main Clinic",
      education: "Stanford Medical School",
      specialties: ["Eczema", "Psoriasis", "Pediatric Care", "Dermatoscopy"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      availability: "Tue-Sat: 10AM-7PM",
      description: "Expert in treating complex skin conditions for both children and adults with a gentle approach.",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Aesthetic & Surgical Dermatology",
      experience: "10+ Years",
      rating: 4.9,
      reviews: 298,
      location: "Aesthetic Center",
      education: "Johns Hopkins Medical School",
      specialties: ["Botox", "Fillers", "Chemical Peels", "Scar Treatment"],
      image: "https://images.unsplash.com/photo-1594824883255-f39e035b5e04?w=300&h=300&fit=crop&crop=face",
      availability: "Mon-Wed, Fri: 8AM-5PM",
      description: "Leading aesthetic dermatologist specializing in natural-looking cosmetic enhancements.",
    },
    {
      name: "Dr. James Williams",
      specialty: "Men's Dermatology & Hair Loss",
      experience: "8+ Years",
      rating: 4.7,
      reviews: 156,
      location: "Men's Care Unit",
      education: "UCLA Medical School",
      specialties: ["Male Pattern Baldness", "Beard Care", "Sports Dermatology", "Men's Skincare"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      availability: "Thu-Mon: 9AM-6PM",
      description: "Dedicated to addressing unique skincare and hair concerns specific to men's needs.",
    },
    {
      name: "Dr. Lisa Park",
      specialty: "Holistic & Natural Dermatology",
      experience: "11+ Years",
      rating: 4.8,
      reviews: 203,
      location: "Wellness Center",
      education: "Mayo Clinic Medical School",
      specialties: ["Natural Treatments", "Sensitive Skin", "Rosacea", "Nutrition Counseling"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=face",
      availability: "Mon-Fri: 10AM-4PM",
      description: "Combines traditional dermatology with natural approaches for comprehensive skin wellness.",
    },
    {
      name: "Dr. Robert Johnson",
      specialty: "Mohs Surgery & Skin Cancer",
      experience: "18+ Years",
      rating: 4.9,
      reviews: 312,
      location: "Surgical Suite",
      education: "Yale Medical School",
      specialties: ["Mohs Surgery", "Skin Cancer", "Dermatopathology", "Reconstructive Surgery"],
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face",
      availability: "Tue-Thu: 7AM-3PM",
      description: "Renowned Mohs surgeon with exceptional expertise in skin cancer treatment and reconstruction.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Expert Dermatologists | GlowSkin - Professional Skin Care Team</title>
        <meta name="description" content="Meet our team of experienced dermatologists at GlowSkin. Board-certified specialists in medical, cosmetic, and surgical dermatology. Book your consultation today." />
        <meta name="keywords" content="dermatologists, skin doctors, dermatology specialists, skin care experts, cosmetic dermatology, medical dermatology" />
        <link rel="canonical" href="/dermatologists" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Meet Our Expert
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Dermatologists
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our board-certified dermatologists combine years of experience with the latest technologies to provide exceptional skincare solutions tailored to your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Dermatologists Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dermatologists.map((doctor, index) => (
                <Card
                  key={index}
                  className="group bg-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={doctor.image}
                        alt={`${doctor.name} - ${doctor.specialty} at GlowSkin`}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                          {doctor.experience}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-sm">{doctor.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {doctor.name}
                      </h3>
                      
                      <p className="text-primary font-medium mb-3">
                        {doctor.specialty}
                      </p>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {doctor.description}
                      </p>
                      
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="w-4 h-4" />
                          <span>{doctor.education}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{doctor.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{doctor.availability}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {doctor.specialties.slice(0, 3).map((specialty, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="medical" className="w-full group/btn">
                        Book Consultation
                        <Award className="ml-2 w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default Dermatologists;