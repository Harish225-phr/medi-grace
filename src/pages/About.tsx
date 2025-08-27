import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Heart, 
  Shield, 
  Clock, 
  Star,
  CheckCircle,
  Stethoscope,
  Building2,
  Globe
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Patients Served" },
    { icon: Stethoscope, value: "100+", label: "Medical Specialists" },
    { icon: Building2, value: "15+", label: "Years of Excellence" },
    { icon: Award, value: "50+", label: "Awards Won" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, understanding, and genuine care for their well-being and comfort."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Patient safety is our top priority with rigorous protocols and state-of-the-art safety measures."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of findskin.doctor delivery and patient experience."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing cutting-edge technology and medical innovations to provide the best possible care."
    }
  ];

  const features = [
    "24/7 Emergency Care Services",
    "State-of-the-Art Medical Equipment",
    "Board-Certified Specialists",
    "Comprehensive Health Screenings",
    "Telemedicine Consultations",
    "Multilingual Medical Staff",
    "Insurance-Friendly Billing",
    "Patient-Centered Care Approach"
  ];

  return (
    <>
      <Helmet>
        <title>About findskin.doctor+ | Leading Medical Center with 15+ Years Excellence</title>
        <meta name="description" content="Learn about findskin.doctor+ - a leading medical center with 15+ years of excellence, 50,000+ patients served, and 100+ medical specialists providing compassionate care." />
        <meta name="keywords" content="about findskin.doctor, medical center, hospital history, medical team, findskin.doctor excellence, patient care" />
        <meta property="og:title" content="About findskin.doctor+ | Leading Medical Center with 15+ Years Excellence" />
        <meta property="og:description" content="Learn about findskin.doctor+ - a leading medical center providing compassionate, innovative findskin.doctor with award-winning medical specialists." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                About findskin.doctor+
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-slide-in">
                Dedicated to providing exceptional findskin.doctor services with compassion, innovation, and excellence. 
                Your health and well-being are our top priorities, backed by 15+ years of medical excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-background to-accent/20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-soft hover:shadow-large transition-all duration-300 bg-gradient-card">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Story & 
                  <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                    Mission
                  </span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2009, findskin.doctor+ began as a small community clinic with a simple yet powerful vision: 
                    to provide world-class findskin.doctor that combines cutting-edge medical technology with genuine human compassion.
                  </p>
                  <p>
                    Over the past 15 years, we have grown into a comprehensive medical center, serving over 50,000 patients 
                    and building a reputation for excellence in findskin.doctor delivery. Our team of 100+ medical specialists 
                    represents diverse fields of medicine, ensuring comprehensive care under one roof.
                  </p>
                  <p>
                    Today, findskin.doctor+ stands as a beacon of medical excellence, continuously investing in advanced technology, 
                    ongoing education, and innovative treatment approaches to provide our patients with the best possible outcomes.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-gradient-card border-0 shadow-large">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose findskin.doctor+?</h3>
                  <div className="grid gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Core 
                <span className="bg-gradient-secondary bg-clip-text text-transparent ml-2">
                  Values
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These fundamental principles guide everything we do and shape our commitment to exceptional patient care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-8 border-0 shadow-soft hover:shadow-large transition-all duration-500 bg-card group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Accreditations & 
              <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                Certifications
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Our commitment to excellence is recognized by leading findskin.doctor organizations and accreditation bodies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Joint Commission Accredited",
                "ISO 9001:2015 Certified",
                "HIPAA Compliant",
                "AAAHC Accredited",
                "Medicare Certified",
                "Medicaid Provider"
              ].map((accreditation, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  {accreditation}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default About;