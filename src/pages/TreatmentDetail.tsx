import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WordPressPost } from "@/types/treatment";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2,
  Heart,
  AlertCircle,
  Phone
} from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";



const TreatmentDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  const [treatmentPost, setTreatmentPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // DEBUG: Log what we get from route params
  console.log("=== ROUTE PARAMS DEBUG ===");
  console.log("Raw postId from useParams:", postId);
  console.log("PostId type:", typeof postId);
  console.log("PostId length:", postId?.length);
  console.log("Current window location:", window.location.href);
  console.log("=== END ROUTE DEBUG ===");

  useEffect(() => {
    const fetchTreatmentData = async () => {
      if (!postId) {
        setError("Treatment ID not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Try fetching as a post first, then as a page if it fails
        let postData: WordPressPost | null = null;
        let fetchError: string | null = null;
        
        // First, try as a post
        try {
          const postResponse = await fetch(`https://findskin.doctor/wp-json/wp/v2/posts/${postId}?_embed`);
          if (postResponse.ok) {
            postData = await postResponse.json();
          } else if (postResponse.status !== 404) {
            throw new Error(`Post API error: ${postResponse.status}`);
          }
        } catch (err) {
          console.log('Post fetch failed, trying pages...', err);
        }
        
        // If post fetch failed, try as a page
        if (!postData) {
          try {
            const pageResponse = await fetch(`https://findskin.doctor/wp-json/wp/v2/pages/${postId}?_embed`);
            if (pageResponse.ok) {
              postData = await pageResponse.json();
            } else if (pageResponse.status === 404) {
              fetchError = "Treatment not found - this ID doesn't exist as either a post or page";
            } else {
              fetchError = `Page API error: ${pageResponse.status}`;
            }
          } catch (err) {
            fetchError = `Failed to fetch from both posts and pages APIs: ${err}`;
          }
        }
        
        if (!postData) {
          throw new Error(fetchError || "Treatment not found");
        }
        
        setTreatmentPost(postData);
      } catch (err) {
        console.error("=== TREATMENT DETAIL DEBUG INFO ===");
        console.error("Error fetching treatment:", err);
        console.error("Post ID from URL params:", postId);
        console.error("Post ID type:", typeof postId);
        console.error("Current URL:", window.location.href);
        console.error("Tried URLs:", [
          `https://findskin.doctor/wp-json/wp/v2/posts/${postId}?_embed`,
          `https://findskin.doctor/wp-json/wp/v2/pages/${postId}?_embed`
        ]);
        console.error("=== END DEBUG INFO ===");
        setError(err instanceof Error ? err.message : "Failed to load treatment details");
      } finally {
        setLoading(false);
      }
    };

    fetchTreatmentData();
  }, [postId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAuthorName = () => {
    return treatmentPost?._embedded?.author?.[0]?.name || "findskin.doctor Team";
  };

  const getFeaturedImage = () => {
    return treatmentPost?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  };

  const getCategories = () => {
    return treatmentPost?._embedded?.["wp:term"]?.[0]?.filter(term => term.taxonomy === "category") || [];
  };

  const getTags = () => {
    return treatmentPost?._embedded?.["wp:term"]?.[1]?.filter(term => term.taxonomy === "post_tag") || [];
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: treatmentPost?.title.rendered,
          text: treatmentPost?.excerpt.rendered.replace(/<[^>]*>/g, ''),
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
          <title>Treatment Not Found | findskin.doctor+</title>
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
                  The treatment you're looking for might have been removed or doesn't exist.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/treatments')}
                    variant="medical"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Back to Treatments
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

  if (!treatmentPost) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{treatmentPost.title.rendered} | findskin.doctor+ Treatment Details</title>
        <meta 
          name="description" 
          content={treatmentPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)} 
        />
        <meta property="og:title" content={treatmentPost.title.rendered} />
        <meta 
          property="og:description" 
          content={treatmentPost.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160)} 
        />
        <meta property="og:type" content="article" />
        {getFeaturedImage() && (
          <meta property="og:image" content={getFeaturedImage()} />
        )}
        <link rel="canonical" href={`/treatment/${postId}`} />
      </Helmet>

      <main className="pt-20 min-h-screen bg-gradient-to-br from-background to-accent/10">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <Button
            onClick={() => navigate('/treatments')}
            variant="ghost"
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Treatments
          </Button>
        </div>

        {/* Featured Image */}
        {getFeaturedImage() && (
          <section className="container mx-auto px-4 lg:px-6 mb-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-xl shadow-large">
                <img
                  src={getFeaturedImage()}
                  alt={treatmentPost._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || treatmentPost.title.rendered}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </section>
        )}

        {/* Treatment Content */}
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
                dangerouslySetInnerHTML={{ __html: treatmentPost.title.rendered }}
              />

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{getAuthorName()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(treatmentPost.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Professional Treatment</span>
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
                dangerouslySetInnerHTML={{ __html: treatmentPost.content.rendered }}
              />

              {/* Tags */}
              {getTags().length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Related Topics</h3>
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
                  Ready to Start Your Treatment?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Book a consultation with our expert medical team to discuss this treatment and create a personalized care plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+917589951677">
                    <Button variant="medical" size="lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Book Consultation
                    </Button>
                  </a>
                  <Button 
                    onClick={() => navigate('/treatments')}
                    variant="outline" 
                    size="lg"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    View All Treatments
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

export default TreatmentDetail;