import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User, Calendar } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import WhatsAppButton from "@/components/WhatsAppButton";
import treatmentGeneral from "@/assets/treatment-general.jpg";
import treatmentDental from "@/assets/treatment-dental.jpg";
import treatmentCardio from "@/assets/treatment-cardio.jpg";
import treatmentPhysio from "@/assets/treatment-physio.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const Home = () => {
  const featuredTreatments = [
    {
      title: "General Medicine",
      description: "Comprehensive primary care services including routine checkups, preventive care, and management of chronic conditions.",
      image: treatmentGeneral,
    },
    {
      title: "Dental Care", 
      description: "Complete dental services from routine cleanings to advanced procedures, ensuring optimal oral health.",
      image: treatmentDental,
    },
    {
      title: "Cardiology",
      description: "Expert cardiovascular care including heart health assessments and advanced cardiac interventions.",
      image: treatmentCardio,
    },
    {
      title: "Physical Therapy",
      description: "Rehabilitation services to restore movement, reduce pain, and improve quality of life.",
      image: treatmentPhysio,
    },
  ];

  const featuredBlogs = [
    {
      title: "10 Essential Tips for a Healthier Lifestyle",
      excerpt: "Discover simple yet effective ways to improve your daily health habits and transform your well-being.",
      image: blog1,
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
    },
    {
      title: "The Future of Medical Technology in Healthcare",
      excerpt: "Explore how cutting-edge innovations are revolutionizing patient care and medical treatments.",
      image: blog2,
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
    },
    {
      title: "Mental Health: Breaking the Stigma",
      excerpt: "Understanding the importance of mental wellness and modern approaches to mental healthcare.",
      image: blog3,
      author: "Dr. Emily Rodriguez",
      date: "March 8, 2024",
    },
    {
      title: "Exercise and Physical Therapy: A Winning Combination",
      excerpt: "How regular exercise combined with professional therapy can accelerate recovery.",
      image: blog4,
      author: "Dr. James Williams",
      date: "March 5, 2024",
    },
  ];

  return (
    <>
      <Helmet>
        <title>HealthCare+ | Modern Medical Excellence & Compassionate Care</title>
        <meta name="description" content="Experience world-class healthcare with HealthCare+. Modern facilities, expert medical team, and personalized patient care. Book your appointment today." />
        <meta name="keywords" content="healthcare, medical care, hospital, clinic, doctors, health services, medical treatment" />
        <meta property="og:title" content="HealthCare+ | Modern Medical Excellence & Compassionate Care" />
        <meta property="og:description" content="Experience world-class healthcare with HealthCare+. Modern facilities, expert medical team, and personalized patient care." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <HeroCarousel />

        {/* Treatments Preview Section */}
        <section className="py-20 bg-gradient-to-br from-background to-accent/30">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Medical
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Treatments
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                We provide comprehensive healthcare services with cutting-edge technology and experienced medical professionals dedicated to your well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {featuredTreatments.map((treatment, index) => (
                <Card
                  key={index}
                  className="group bg-gradient-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg h-48">
                      <img
                        src={treatment.image}
                        alt={`${treatment.title} - Professional medical treatment at HealthCare+`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {treatment.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                      {treatment.description}
                    </CardDescription>
                    <Button 
                      variant="medical-outline" 
                      size="sm" 
                      className="group/btn w-full"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/treatments">
                <Button variant="medical" size="lg" className="animate-float">
                  View All Treatments
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Blog
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Stay updated with our latest skincare tips, beauty insights, and expert advice from our dermatology team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {featuredBlogs.map((post, index) => (
                <Card
                  key={index}
                  className="group bg-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={`${post.title} - Health article by ${post.author}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <Button 
                      variant="wellness-outline" 
                      size="sm" 
                      className="group/btn w-full"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/blog">
                <Button variant="wellness" size="lg" className="animate-float">
                  View All Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-16 bg-gradient-to-br from-background to-primary/10">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">GlowSkin</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              We are a premier skincare clinic dedicated to helping you achieve healthy, radiant skin. Our expert team combines cutting-edge technology with personalized care to deliver exceptional results for every client.
            </p>
            <Link to="/about">
              <Button variant="medical-outline" size="lg">
                View More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Dermatologists Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Expert
                <span className="bg-gradient-secondary bg-clip-text text-transparent ml-2">
                  Dermatologists
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Meet our board-certified dermatologists who bring years of experience and expertise to provide you with the best skincare solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Years Experience</h3>
                <p className="text-muted-foreground">Average experience of our dermatologists</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Expert Doctors</h3>
                <p className="text-muted-foreground">Board-certified dermatology specialists</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1K+</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Happy Clients</h3>
                <p className="text-muted-foreground">Satisfied clients with amazing results</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/dermatologists">
                <Button variant="wellness" size="lg" className="animate-float">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <TestimonialsMarquee />
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default Home;