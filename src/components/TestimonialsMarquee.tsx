import { Star } from "lucide-react";

const TestimonialsMarquee = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing results! My skin has never looked better. The team is so professional and caring.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "Finally found a skincare clinic that understands men's needs. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      text: "The acne treatment worked wonders. My confidence is back! Thank you findskin.doctor.",
      rating: 5,
    },
    {
      name: "David Kim",
      text: "Professional service, modern facilities, and incredible results. Worth every penny!",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      text: "The anti-aging facial gave me a natural glow. The staff is knowledgeable and friendly.",
      rating: 5,
    },
    {
      name: "James Wilson",
      text: "Best skincare experience ever! The personalized treatment plan exceeded my expectations.",
      rating: 5,
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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