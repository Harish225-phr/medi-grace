import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award, Clock, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import useDermatologists from "@/hooks/useDermatologists";
import useWordpressPage from "@/hooks/useWordpressPage";

const Dermatologists = () => {
  // Fetch dermatologists data dynamically (no limit for dermatologists page)
  const { dermatologists = [], loading: dermatologistsLoading } = useDermatologists(2466);
  
  // Fetch page data for dermatologists description
  const { page } = useWordpressPage(2466);

  return (
    <>
      <Helmet>
        <title>Our Expert Dermatologists | findskin.doctor - Professional Skin Care Team</title>
        <meta name="description" content="Meet our team of experienced dermatologists at findskin.doctor. Board-certified specialists in medical, cosmetic, and surgical dermatology. Book your consultation today." />
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
                {page?.acf?.dermatologists_des || "Our board-certified dermatologists combine years of experience with the latest technologies to provide exceptional skincare solutions tailored to your unique needs."}
              </p>
            </div>
          </div>
        </section>

        {/* Dermatologists Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dermatologistsLoading ? (
                // Loading skeleton
                Array(6).fill(0).map((_, index) => (
                  <Card
                    key={index}
                    className="animate-pulse bg-card border-0 shadow-soft"
                  >
                    <CardContent className="p-0">
                      <div className="h-64 bg-gray-300 rounded-t-lg"></div>
                      <div className="p-6">
                        <div className="h-6 bg-gray-300 rounded mb-3"></div>
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded mb-4"></div>
                        <div className="h-8 bg-gray-300 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                Array.isArray(dermatologists) && dermatologists.length > 0 ?
                dermatologists.map((doctor, index) => (
                  <Card
                    key={index}
                    className="group bg-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={doctor.image}
                          alt={`${doctor.name} - ${doctor.specialty} at findskin.doctor`}
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
                            <span>{doctor.education || "Board Certified"}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{doctor.location || "Main Clinic"}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{doctor.availability}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {doctor.specialties && doctor.specialties.slice(0, 3).map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                        <a href="tel:+917589951677" className="block mb-2">
                          <Button variant="medical" className="w-full group/btn">
                            Book Consultation
                            <Award className="ml-2 w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                )) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No dermatologists available</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default Dermatologists;