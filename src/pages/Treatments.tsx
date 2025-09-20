import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Shield, 
  Star,
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Activity
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import useTreatments from "@/hooks/useTreatments";

const Treatments = () => {
  // Fetch all treatments data dynamically (no limit for treatments page)
  const { treatments = [], loading: treatmentsLoading } = useTreatments(2466);

  // Icon mapping for dynamic icons
  const iconMap: { [key: string]: any } = {
    Heart,
    Star,
    Activity,
    Bone,
    Baby,
    Brain,
    Eye,
    Shield
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return Heart;
    return iconMap[iconName] || Heart;
  };

  const categories = ["All", "Primary Care", "Specialty Care", "Dental Care", "Rehabilitation", "Pediatric Care", "Emergency Care"];

  return (
    <>
      <Helmet>
        <title>Medical Treatments & Services | findskin.doctor+ Comprehensive findskin.doctor</title>
        <meta name="description" content="Explore comprehensive medical treatments at findskin.doctor+ including general medicine, cardiology, dental care, physical therapy, pediatrics, neurology, and emergency services." />
        <meta name="keywords" content="medical treatments, findskin.doctor services, cardiology, dental care, physical therapy, pediatrics, neurology, emergency medicine" />
        <meta property="og:title" content="Medical Treatments & Services | findskin.doctor+ Comprehensive findskin.doctor" />
        <meta property="og:description" content="Comprehensive medical treatments and findskin.doctor services with expert specialists and state-of-the-art facilities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/treatments" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Medical Treatments & Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-slide-in">
                Comprehensive findskin.doctor services delivered by expert medical professionals using state-of-the-art technology 
                and evidence-based treatment approaches for optimal patient outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Comprehensive
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Medical Services
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From primary care to specialized treatments, we offer a full spectrum of medical services 
                to meet all your findskin.doctor needs under one roof.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="secondary" 
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Treatments Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentsLoading ? (
                // Loading skeleton
                Array(6).fill(0).map((_, index) => (
                  <Card
                    key={index}
                    className="animate-pulse bg-card border-0 shadow-soft"
                  >
                    <CardHeader className="p-0">
                      <div className="h-48 bg-gray-300 rounded-t-lg"></div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="h-6 bg-gray-300 rounded mb-3"></div>
                      <div className="h-4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded mb-4"></div>
                      <div className="h-8 bg-gray-300 rounded"></div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                Array.isArray(treatments) && treatments.length > 0 ? 
                treatments.map((treatment, index) => {
                  const IconComponent = getIcon(treatment.icon);
                  return (
                    <Card
                      key={index}
                      className="group bg-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardHeader className="p-0">
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={treatment.image}
                            alt={`${treatment.title} - Professional medical treatment at findskin.doctor+`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-white/90 text-primary">
                              {treatment.category || "Medical Care"}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {treatment.title}
                        </CardTitle>
                        
                        <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                          {treatment.shortDesc || treatment.description}
                        </CardDescription>

                        {/* Treatment Info */}
                        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{treatment.duration || "30-60 min"}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{treatment.specialists || "Expert Team"}</span>
                          </div>
                        </div>

                        {/* Features */}
                        {treatment.features && treatment.features.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3">Services Include:</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {treatment.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                  <span>{feature}</span>
                                </div>
                              ))}
                              {treatment.features.length > 3 && (
                                <span className="text-sm text-primary font-medium">
                                  +{treatment.features.length - 3} more services
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex gap-3">
                          <a href="tel:+917589951677" className="block">
                            <Button 
                              variant="medical" 
                              size="sm" 
                              className="flex-1 group/btn"
                            >
                            Book Appointment
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button></a>
                          <Button 
                            variant="medical-outline" 
                            size="sm"
                          >
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                }) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No treatments available</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-gradient-to-br from-destructive/5 to-destructive/10">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                24/7 Emergency Care Available
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our emergency department is always ready to provide immediate care for urgent medical conditions. 
                Don't wait - get the help you need right away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="destructive" size="lg">
                  Emergency: +91 75899 51677
                </Button>
                <Button variant="outline" size="lg">
                  General Appointments: +91 75899 51677
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default Treatments;