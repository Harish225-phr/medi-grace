import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  Search,
  Tag,
  TrendingUp,
  BookOpen
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      title: "10 Essential Tips for a Healthier Lifestyle",
      excerpt: "Discover simple yet effective ways to improve your daily health habits, from nutrition choices to exercise routines that can transform your well-being and boost your energy levels.",
      fullContent: "Living a healthier lifestyle doesn't have to be complicated. Small, consistent changes in your daily routine can lead to significant improvements in your overall well-being...",
      image: blog1,
      author: "Dr. Sarah Johnson",
      authorRole: "General Practitioner",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Wellness",
      tags: ["Health Tips", "Lifestyle", "Nutrition", "Exercise"],
      featured: true
    },
    {
      title: "The Future of Medical Technology in Healthcare",
      excerpt: "Explore how cutting-edge innovations like AI diagnostics, telemedicine, and robotic surgery are revolutionizing patient care and medical treatments in the 21st century.",
      fullContent: "Medical technology is advancing at an unprecedented pace, bringing new possibilities for diagnosis, treatment, and patient care...",
      image: blog2,
      author: "Dr. Michael Chen",
      authorRole: "Chief Technology Officer",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Technology",
      tags: ["Medical Technology", "AI", "Innovation", "Future"],
      featured: true
    },
    {
      title: "Mental Health: Breaking the Stigma",
      excerpt: "Understanding the importance of mental wellness and how to seek help when needed. Learn about modern approaches to mental healthcare and support systems.",
      fullContent: "Mental health is just as important as physical health, yet stigma often prevents people from seeking the help they need...",
      image: blog3,
      author: "Dr. Emily Rodriguez",
      authorRole: "Psychiatrist",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Mental Health",
      tags: ["Mental Health", "Wellness", "Support", "Awareness"],
      featured: false
    },
    {
      title: "Exercise and Physical Therapy: A Winning Combination",
      excerpt: "How regular exercise combined with professional physical therapy can accelerate recovery, prevent future injuries, and improve overall quality of life.",
      fullContent: "The combination of structured exercise and physical therapy creates a powerful approach to rehabilitation and injury prevention...",
      image: blog4,
      author: "Dr. James Williams",
      authorRole: "Physical Therapist",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Physical Therapy",
      tags: ["Exercise", "Recovery", "Physical Therapy", "Fitness"],
      featured: false
    },
    {
      title: "Preventive Care: Your First Line of Defense",
      excerpt: "Learn why preventive healthcare is crucial for early detection and prevention of diseases. Discover essential screenings and check-ups you shouldn't miss.",
      fullContent: "Preventive care is one of the most important investments you can make in your health. Regular check-ups and screenings can...",
      image: blog1,
      author: "Dr. Lisa Park",
      authorRole: "Preventive Medicine Specialist",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Preventive Care",
      tags: ["Prevention", "Screening", "Health", "Early Detection"],
      featured: false
    },
    {
      title: "Understanding Heart Health: Risk Factors and Prevention",
      excerpt: "Comprehensive guide to maintaining cardiovascular health, understanding risk factors, and implementing lifestyle changes for a healthy heart.",
      fullContent: "Heart disease remains one of the leading causes of death globally, but many cases are preventable through lifestyle modifications...",
      image: blog2,
      author: "Dr. Robert Kim",
      authorRole: "Cardiologist",
      date: "February 28, 2024",
      readTime: "11 min read",
      category: "Cardiology",
      tags: ["Heart Health", "Prevention", "Cardiology", "Lifestyle"],
      featured: false
    },
    {
      title: "Nutrition During Pregnancy: A Complete Guide",
      excerpt: "Essential nutrition guidelines for expectant mothers, including key nutrients, foods to avoid, and healthy meal planning for optimal maternal and fetal health.",
      fullContent: "Proper nutrition during pregnancy is crucial for both mother and baby's health. Understanding what to eat and what to avoid...",
      image: blog3,
      author: "Dr. Maria Gonzalez",
      authorRole: "Obstetrician",
      date: "February 25, 2024",
      readTime: "13 min read",
      category: "Obstetrics",
      tags: ["Pregnancy", "Nutrition", "Maternal Health", "Diet"],
      featured: false
    },
    {
      title: "Managing Chronic Pain: Modern Approaches",
      excerpt: "Explore contemporary methods for managing chronic pain, including non-pharmaceutical options, lifestyle modifications, and integrated care approaches.",
      fullContent: "Chronic pain affects millions of people worldwide, but modern medicine offers numerous approaches to help manage and reduce pain...",
      image: blog4,
      author: "Dr. David Lee",
      authorRole: "Pain Management Specialist",
      date: "February 22, 2024",
      readTime: "10 min read",
      category: "Pain Management",
      tags: ["Chronic Pain", "Pain Management", "Treatment", "Therapy"],
      featured: false
    }
  ];

  const categories = ["All", "Wellness", "Technology", "Mental Health", "Physical Therapy", "Preventive Care", "Cardiology", "Obstetrics", "Pain Management"];
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Health Blog & Medical Insights | HealthCare+ Expert Articles</title>
        <meta name="description" content="Read expert health articles, medical insights, and wellness tips from HealthCare+ medical professionals. Stay informed about health, treatments, and medical innovations." />
        <meta name="keywords" content="health blog, medical articles, wellness tips, healthcare insights, medical news, health information, doctor advice" />
        <meta property="og:title" content="Health Blog & Medical Insights | HealthCare+ Expert Articles" />
        <meta property="og:description" content="Expert health articles and medical insights from HealthCare+ professionals covering wellness, treatments, and medical innovations." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/blog" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Health Blog & Medical Insights
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-slide-in">
                Stay informed with expert articles, wellness tips, and the latest medical insights 
                from our team of healthcare professionals and specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search articles, topics, or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-3 text-lg"
                  />
                </div>
                <Button variant="medical" size="lg">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Badge 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "secondary"}
                    className={`px-4 py-2 cursor-pointer transition-all duration-300 ${
                      selectedCategory === category 
                        ? "bg-primary text-white" 
                        : "hover:bg-primary hover:text-white"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && selectedCategory === "All" && (
          <section className="py-20">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  <TrendingUp className="inline-block w-10 h-10 mr-3 text-primary" />
                  Featured Articles
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our most popular and impactful health articles, handpicked by our editorial team.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="group bg-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                  >
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden h-64">
                        <img
                          src={post.image}
                          alt={`${post.title} - Health article by ${post.author}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-primary text-white">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-primary">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription className="text-muted-foreground mb-6 leading-relaxed text-base">
                        {post.excerpt}
                      </CardDescription>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        variant="medical" 
                        className="group/btn w-full"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                <BookOpen className="inline-block w-10 h-10 mr-3 text-secondary" />
                All Articles
                {selectedCategory !== "All" && (
                  <span className="text-secondary ml-2">- {selectedCategory}</span>
                )}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group bg-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={`${post.title} - Health article by ${post.author}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-primary">
                          {post.category}
                        </Badge>
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-primary text-white">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      )}
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
                    
                    <CardTitle className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {post.authorRole}
                      </div>
                    </div>
                    
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

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">No Articles Found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filter criteria.
                </p>
                <Button 
                  variant="medical-outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated with Health Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter and never miss important health information, 
                medical breakthroughs, and wellness tips from our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button variant="medical" size="lg">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe anytime. Your privacy is protected.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default Blog;