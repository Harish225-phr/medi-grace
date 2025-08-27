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
import treatmentGeneral from "@/assets/treatment-general.jpg";
import treatmentDental from "@/assets/treatment-dental.jpg";
import treatmentCardio from "@/assets/treatment-cardio.jpg";
import treatmentPhysio from "@/assets/treatment-physio.jpg";

const Treatments = () => {
  const treatments = [
    {
      title: "General Medicine",
      shortDesc: "Comprehensive primary findskin.doctor services for all ages",
      fullDesc: "Our general medicine department provides comprehensive primary findskin.doctor services including routine checkups, preventive care, chronic disease management, and acute illness treatment. Our experienced physicians focus on building long-term relationships with patients to ensure continuity of care and optimal health outcomes.",
      image: treatmentGeneral,
      icon: Heart,
      duration: "30-60 min",
      specialists: "15+ Doctors",
      features: ["Annual Physical Exams", "Chronic Disease Management", "Preventive Care", "Health Screenings", "Vaccination Services", "Telemedicine Consultations"],
      category: "Primary Care"
    },
    {
      title: "Dental Care",
      shortDesc: "Complete oral health services from prevention to advanced procedures",
      fullDesc: "Our dental care services encompass everything from routine cleanings and preventive care to advanced restorative and cosmetic procedures. With state-of-the-art equipment and experienced dental professionals, we ensure optimal oral health and beautiful smiles for patients of all ages.",
      image: treatmentDental,
      icon: Star,
      duration: "30-120 min",
      specialists: "12+ Dentists",
      features: ["Routine Cleanings", "Fillings & Crowns", "Root Canal Therapy", "Teeth Whitening", "Orthodontics", "Oral Surgery"],
      category: "Dental Care"
    },
    {
      title: "Cardiology",
      shortDesc: "Expert cardiovascular care and heart health management",
      fullDesc: "Our cardiology department provides comprehensive cardiovascular care including diagnostic testing, treatment planning, and ongoing management of heart conditions. Our board-certified cardiologists use the latest technology to diagnose and treat various heart conditions, from routine monitoring to complex interventions.",
      image: treatmentCardio,
      icon: Activity,
      duration: "45-90 min",
      specialists: "8+ Cardiologists",
      features: ["ECG & Stress Testing", "Echocardiography", "Cardiac Catheterization", "Heart Disease Management", "Hypertension Treatment", "Cholesterol Management"],
      category: "Specialty Care"
    },
    {
      title: "Physical Therapy",
      shortDesc: "Rehabilitation and recovery services for optimal mobility",
      fullDesc: "Our physical therapy department specializes in helping patients recover from injuries, surgeries, and medical conditions that affect movement and function. Our licensed physical therapists create personalized treatment plans to reduce pain, improve mobility, and enhance quality of life.",
      image: treatmentPhysio,
      icon: Bone,
      duration: "45-60 min",
      specialists: "20+ Therapists",
      features: ["Post-Surgery Rehabilitation", "Sports Injury Recovery", "Pain Management", "Mobility Training", "Strength Building", "Ergonomic Assessment"],
      category: "Rehabilitation"
    },
    {
      title: "Pediatrics",
      shortDesc: "Specialized findskin.doctor for infants, children, and adolescents",
      fullDesc: "Our pediatric department provides comprehensive findskin.doctor services for children from birth through adolescence. Our pediatricians are specially trained to address the unique medical, emotional, and developmental needs of young patients and their families.",
      image: treatmentGeneral,
      icon: Baby,
      duration: "30-45 min",
      specialists: "10+ Pediatricians",
      features: ["Well-Child Visits", "Immunizations", "Growth Monitoring", "Developmental Assessments", "Acute Illness Care", "Adolescent Medicine"],
      category: "Pediatric Care"
    },
    {
      title: "Neurology",
      shortDesc: "Comprehensive care for neurological conditions and disorders",
      fullDesc: "Our neurology department specializes in diagnosing and treating conditions affecting the nervous system, including the brain, spinal cord, and peripheral nerves. Our neurologists use advanced diagnostic tools and evidence-based treatments to provide comprehensive care.",
      image: treatmentCardio,
      icon: Brain,
      duration: "60-90 min",
      specialists: "6+ Neurologists",
      features: ["EEG Testing", "MRI Analysis", "Stroke Care", "Epilepsy Management", "Headache Treatment", "Memory Disorders"],
      category: "Specialty Care"
    },
    {
      title: "Ophthalmology",
      shortDesc: "Complete eye care services from routine exams to surgery",
      fullDesc: "Our ophthalmology department provides comprehensive eye care services including routine eye exams, treatment of eye diseases, and surgical procedures. Our eye care specialists use the latest technology to preserve and improve vision for patients of all ages.",
      image: treatmentDental,
      icon: Eye,
      duration: "30-120 min",
      specialists: "8+ Eye Specialists",
      features: ["Comprehensive Eye Exams", "Cataract Surgery", "Glaucoma Treatment", "Retinal Care", "LASIK Surgery", "Pediatric Eye Care"],
      category: "Specialty Care"
    },
    {
      title: "Emergency Medicine",
      shortDesc: "24/7 emergency care for urgent medical conditions",
      fullDesc: "Our emergency department provides 24/7 urgent medical care for patients with acute illnesses and injuries. Our emergency medicine physicians and trauma specialists are equipped to handle everything from minor injuries to life-threatening conditions with rapid, expert care.",
      image: treatmentPhysio,
      icon: Shield,
      duration: "Varies",
      specialists: "24/7 Coverage",
      features: ["Trauma Care", "Cardiac Emergencies", "Stroke Response", "Pediatric Emergencies", "Fast Track Services", "Ambulance Services"],
      category: "Emergency Care"
    }
  ];

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
              {treatments.map((treatment, index) => (
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
                          {treatment.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <treatment.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {treatment.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                      {treatment.shortDesc}
                    </CardDescription>

                    {/* Treatment Info */}
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{treatment.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{treatment.specialists}</span>
                      </div>
                    </div>

                    {/* Features */}
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
              ))}
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