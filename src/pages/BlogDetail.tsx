import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2,
  BookOpen,
  AlertCircle
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getBlogPostById } from "@/service/pageService";

interface BlogPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      name: string;
      description?: string;
    }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    "wp:term"?: Array<Array<{
      name: string;
      taxonomy: string;
    }>>;
  };
}

const BlogDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!postId) {
        setError("Blog post ID not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Fetch blog post with embedded data (author, featured media, categories)
        const response = await fetch(
          `https://findskin.doctor/wp-json/wp/v2/posts/${postId}?_embed`
        );
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found");
          }
          throw new Error("Failed to fetch blog post");
        }
        
        const data = await response.json();
        setBlogPost(data);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(err instanceof Error ? err.message : "Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [postId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAuthorName = () => {
    return blogPost?._embedded?.author?.[0]?.name || "findskin.doctor Team";
  };

  const getFeaturedImage = () => {
    return blogPost?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  };

  const getCategories = () => {
    return blogPost?._embedded?.["wp:term"]?.[0]?.filter(term => term.taxonomy === "category") || [];
  };

  const getTags = () => {
    return blogPost?._embedded?.["wp:term"]?.[1]?.filter(term => term.taxonomy === "post_tag") || [];
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogPost?.title.rendered,
          text: blogPost?.excerpt.rendered.replace(/<[^>]*>/g, ''),
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-gradient-to-br from-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Loading skeleton */}
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded mb-6 w-32"></div>
              <div className="h-64 bg-gray-300 rounded-lg mb-8"></div>
              <div className="h-12 bg-gray-300 rounded mb-4"></div>
              <div className="h-6 bg-gray-300 rounded mb-8 w-64"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found | findskin.doctor+</title>
        </Helmet>
        
        <main className="pt-20 min-h-screen bg-gradient-to-br from-background to-accent/10">
          <div className="container mx-auto px-4 lg:px-6 py-12">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-12">
                <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {error}
                </h1>
                <p className="text-muted-foreground mb-8">
                  The blog post you're looking for might have been removed or doesn't exist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/blog')}
                    variant="medical"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                  <Button 
                    onClick={() => navigate('/')}
                    variant="outline"
                  >
                    Go Home
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (!blogPost) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{blogPost.title.rendered} | findskin.doctor+ Health Blog</title>
        <meta 
          name="description" 
          content={blogPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)} 
        />
        <meta property="og:title" content={blogPost.title.rendered} />
        <meta 
          property="og:description" 
          content={blogPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)} 
        />
        <meta property="og:type" content="article" />
        {getFeaturedImage() && (
          <meta property="og:image" content={getFeaturedImage()} />
        )}
        <link rel="canonical" href={`/blog/${postId}`} />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gradient-to-br from-background to-accent/10">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <Button
            onClick={() => navigate('/blog')}
            variant="ghost"
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>

        {/* Featured Image */}
        {getFeaturedImage() && (
          <section className="container mx-auto px-4 lg:px-6 mb-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-xl shadow-large">
                <img
                  src={getFeaturedImage()}
                  alt={blogPost._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || blogPost.title.rendered}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="container mx-auto px-4 lg:px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-xl shadow-soft p-8 md:p-12">
              {/* Categories */}
              {getCategories().length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {getCategories().map((category, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary text-white">
                      {category.name}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 
                className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: blogPost.title.rendered }}
              />

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{getAuthorName()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(blogPost.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>5 min read</span>
                </div>
                <Button
                  onClick={handleShare}
                  variant="ghost"
                  size="sm"
                  className="ml-auto"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: blogPost.content.rendered }}
              />

              {/* Tags */}
              {getTags().length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {getTags().map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 lg:px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Take Care of Your Health?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Book a consultation with our expert medical team and get personalized care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="medical" size="lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                  <Button 
                    onClick={() => navigate('/blog')}
                    variant="outline" 
                    size="lg"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Read More Articles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default BlogDetail;