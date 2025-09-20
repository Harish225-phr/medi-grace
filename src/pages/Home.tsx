import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User, Calendar } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import WhatsAppButton from "@/components/WhatsAppButton";
import useTreatments from "@/hooks/useTreatments";
import useWordpressPage from "@/hooks/useWordpressPage";
import useBlogPosts from "@/hooks/useBlogPosts";
import useDermatologists from "@/hooks/useDermatologists";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import { Star, Award, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";



const Home = () => {
  // Fetch treatments data dynamically with limit of 4 for home page
  const { treatments: featuredTreatments = [], loading: treatmentsLoading } = useTreatments(2466, 4);
  
  // Fetch page data for services description
  const { page } = useWordpressPage(2466);
  
  // Fetch blog posts data dynamically with limit of 4 for home page
  const { blogPosts: featuredBlogs = [], loading: blogsLoading } = useBlogPosts(2466, 4);
  
  // Fetch dermatologists data dynamically with limit of 3 for home page
  const { dermatologists: featuredDermatologists = [], loading: dermatologistsLoading } = useDermatologists(2466, 3);

  return (
    <>
      <Helmet>
        <title>findskin.doctor+ | Modern Medical Excellence & Compassionate Care</title>
        <meta name="description" content="Experience world-class findskin.doctor with findskin.doctor+. Modern facilities, expert medical team, and personalized patient care. Book your appointment today." />
        <meta name="keywords" content="findskin.doctor, medical care, hospital, clinic, doctors, health services, medical treatment" />
        <meta property="og:title" content="findskin.doctor+ | Modern Medical Excellence & Compassionate Care" />
        <meta property="og:description" content="Experience world-class findskin.doctor with findskin.doctor+. Modern facilities, expert medical team, and personalized patient care." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <HeroCarousel pageId={2466}/>

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
                {page?.acf?.services_description || "We provide comprehensive findskin.doctor services with cutting-edge technology and experienced medical professionals dedicated to your well-being."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {treatmentsLoading ? (
                // Loading skeleton
                Array(4).fill(0).map((_, index) => (
                  <Card
                    key={index}
                    className="animate-pulse bg-gradient-card border-0 shadow-soft"
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
                Array.isArray(featuredTreatments) && featuredTreatments.length > 0 ? 
                featuredTreatments.map((treatment, index) => (
                  <Card
                    key={index}
                    className="group bg-gradient-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg h-48">
                        <img
                          src={treatment.image}
                          alt={`${treatment.title} - Professional medical treatment at findskin.doctor+`}
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
                        {treatment.description || treatment.shortDesc}
                      </CardDescription>
                      <Link to="/treatments">
                        <Button
                          variant="medical-outline"
                          size="sm"
                          className="group/btn w-full"
                        >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button></Link>
                    </CardContent>
                  </Card>
                )) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No treatments available</p>
                  </div>
                )
              )}
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
                {page?.acf?.blog_description || "Stay updated with our latest skincare tips, beauty insights, and expert advice from our dermatology team."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {blogsLoading ? (
                // Loading skeleton
                Array(4).fill(0).map((_, index) => (
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
                Array.isArray(featuredBlogs) && featuredBlogs.length > 0 ?
                featuredBlogs.map((post, index) => (
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
                          <span>{post.date || "Recent"}</span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </CardDescription>

                      <Link to="/blog">
                        <Button
                          variant="wellness-outline"
                          size="sm"
                          className="group/btn w-full"
                        >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button></Link>
                    </CardContent>
                  </Card>
                )) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No blog posts available</p>
                  </div>
                )
              )}
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
              About <span className="bg-gradient-primary bg-clip-text text-transparent">findskin.doctor</span>
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
                {page?.acf?.dermatologists_des || "Meet our board-certified dermatologists who bring years of experience and expertise to provide you with the best skincare solutions."}
              </p>
            </div>
            

     {/* Doctor Grid */}
         <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dermatologistsLoading ? (
                // Loading skeleton
                Array(3).fill(0).map((_, index) => (
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
                Array.isArray(featuredDermatologists) && featuredDermatologists.length > 0 ?
                featuredDermatologists.map((doctor, index) => (
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


 <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Unique Selling Proposition
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Our dermatologists are dedicated to providing personalized care and the latest treatments for all skin types. 
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
       
        
        <TestimonialsMarquee />
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default Home;