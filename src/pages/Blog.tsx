import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import useBlogPosts from "@/hooks/useBlogPosts";
import useWordpressPage from "@/hooks/useWordpressPage";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // JSON array of blog blocks - replace this with your actual data source
  const blogBlocks = [
    {
      post_id: 43,
      title: "10 Essential Tips for a Healthier Lifestyle",
      excerpt: "Discover simple yet effective ways to improve your daily health habits, from nutrition choices to exercise routines that can transform your well-being and boost your energy levels.",
      image: "https://findskin.doctor/wp-content/uploads/2025/07/lady-dermatologist-in-Chandigarh.jpg",
      author: "Dr. Sarah Johnson"
    }
    // Add more blog blocks here with their actual post_id values
  ];

  // Fetch blog posts dynamically (no limit for blog page)
  const { blogPosts = [], loading: blogsLoading } = useBlogPosts(2466);
  
  // Fetch page data for blog description
  const { page } = useWordpressPage(2466);

  // Image mapping for blog posts - handle both API URLs and local fallbacks
  const imageMap: { [key: string]: string } = {
    "blog-1.jpg": blog1,
    "blog-2.jpg": blog2,
    "blog-3.jpg": blog3,
    "blog-4.jpg": blog4,
    blog1,
    blog2,
    blog3,
    blog4
  };

  // Process blog posts to combine API data with blog blocks
  const processedBlogPosts = [
    // Use blogBlocks as primary source, fallback to API data
    ...blogBlocks.map(block => ({
      ...block,
      post_id: block.post_id,
      image: block.image,
      date: "Recent",
      authorRole: "Medical Professional",
      readTime: "5 min read",
      category: "Health",
      tags: ["Health"],
      featured: false,
      fullContent: block.excerpt
    })),
    // Add any additional blog posts from API that don't have post_id conflicts
    ...blogPosts.filter(post => !blogBlocks.some(block => block.post_id === post.post_id)).map(post => ({
      ...post,
      post_id: post.post_id || Math.random(), // fallback for posts without post_id
      // Use the image directly if it's a complete URL, otherwise try mapping, then fallback
      image: post.image && (post.image.startsWith('http') || post.image.startsWith('/')) 
             ? post.image 
             : imageMap[post.image] || blog1,
      date: post.date || "Recent",
      authorRole: post.authorRole || "Medical Professional",
      readTime: post.readTime || "5 min read",
      category: post.category || "Health",
      tags: post.tags || ["Health"],
      featured: post.featured || false,
      fullContent: post.fullContent || post.excerpt
    }))
  ];

  // Extract unique categories from processed blog posts
  const categories = ["All", ...Array.from(new Set(processedBlogPosts.map(post => post.category)))];
  
  const featuredPosts = processedBlogPosts.filter(post => post.featured);
  const regularPosts = processedBlogPosts.filter(post => !post.featured);

  const filteredPosts = processedBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Health Blog & Medical Insights | findskin.doctor+ Expert Articles</title>
        <meta name="description" content="Read expert health articles, medical insights, and wellness tips from findskin.doctor+ medical professionals. Stay informed about health, treatments, and medical innovations." />
        <meta name="keywords" content="health blog, medical articles, wellness tips, findskin.doctor insights, medical news, health information, doctor advice" />
        <meta property="og:title" content="Health Blog & Medical Insights | findskin.doctor+ Expert Articles" />
        <meta property="og:description" content="Expert health articles and medical insights from findskin.doctor+ professionals covering wellness, treatments, and medical innovations." />
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
                {page?.acf?.blog_description || "Stay informed with expert articles, wellness tips, and the latest medical insights from our team of findskin.doctor professionals and specialists."}
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
        {!blogsLoading && featuredPosts.length > 0 && selectedCategory === "All" && (
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
                        onClick={() => navigate(`/blog/${post.post_id}`)}
                      >
                        Learn More
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
              {blogsLoading ? (
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
                filteredPosts.map((post, index) => (
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
                        onClick={() => navigate(`/blog/${post.post_id}`)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {!blogsLoading && filteredPosts.length === 0 && (
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