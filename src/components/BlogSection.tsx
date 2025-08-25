import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "10 Essential Tips for a Healthier Lifestyle",
      excerpt: "Discover simple yet effective ways to improve your daily health habits, from nutrition choices to exercise routines that can transform your well-being.",
      image: blog1,
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
    },
    {
      title: "The Future of Medical Technology in Healthcare",
      excerpt: "Explore how cutting-edge innovations like AI diagnostics and telemedicine are revolutionizing patient care and medical treatments.",
      image: blog2,
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
    },
    {
      title: "Mental Health: Breaking the Stigma",
      excerpt: "Understanding the importance of mental wellness and how to seek help when needed. Learn about modern approaches to mental healthcare.",
      image: blog3,
      author: "Dr. Emily Rodriguez",
      date: "March 8, 2024",
    },
    {
      title: "Exercise and Physical Therapy: A Winning Combination",
      excerpt: "How regular exercise combined with professional physical therapy can accelerate recovery and prevent future injuries.",
      image: blog4,
      author: "Dr. James Williams",
      date: "March 5, 2024",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Health
            <span className="bg-gradient-secondary bg-clip-text text-transparent ml-2">
              Insights
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay informed with our latest articles on health, wellness, and medical breakthroughs from our team of expert healthcare professionals.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group bg-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
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
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;