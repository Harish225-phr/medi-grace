import { Star } from "lucide-react";
import useReviews from "@/hooks/useReviews";

const TestimonialsMarquee = () => {
  // Fetch reviews data dynamically
  const { reviews = [], loading: reviewsLoading } = useReviews(2466);

  // Only show component if we have API data
  if (reviewsLoading) {
    // Show loading skeleton
    return (
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real reviews from our satisfied clients who experienced amazing transformations
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-pulse space-x-8">
            {Array(6).fill(0).map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-card border border-border/50 rounded-xl p-6 shadow-soft w-80"
              >
                <div className="flex items-center mb-4 space-x-1">
                  {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
                  ))}
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
                <div className="h-5 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Only show if we have API reviews
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return null; // Don't render anything if no API data
  }

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...reviews, ...reviews];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real reviews from our satisfied clients who experienced amazing transformations
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-[marquee_30s_linear_infinite] space-x-8">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-card border border-border/50 rounded-xl p-6 shadow-soft w-80"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="font-semibold text-foreground">
                - {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;