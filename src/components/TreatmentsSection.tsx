import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import treatmentGeneral from "@/assets/treatment-general.jpg";
import treatmentDental from "@/assets/treatment-dental.jpg";
import treatmentCardio from "@/assets/treatment-cardio.jpg";
import treatmentPhysio from "@/assets/treatment-physio.jpg";

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "General Medicine",
      description: "Comprehensive primary care services including routine checkups, preventive care, and management of chronic conditions.",
      image: treatmentGeneral,
    },
    {
      title: "Dental Care",
      description: "Complete dental services from routine cleanings to advanced procedures, ensuring optimal oral health and beautiful smiles.",
      image: treatmentDental,
    },
    {
      title: "Cardiology",
      description: "Expert cardiovascular care including heart health assessments, treatment plans, and advanced cardiac interventions.",
      image: treatmentCardio,
    },
    {
      title: "Physical Therapy",
      description: "Rehabilitation and recovery services to restore movement, reduce pain, and improve quality of life through personalized therapy.",
      image: treatmentPhysio,
    },
  ];

  return (
    <section id="treatments" className="py-20 bg-gradient-to-br from-background to-accent/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Medical
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Treatments
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive findskin.doctor services with cutting-edge technology and experienced medical professionals dedicated to your well-being and recovery.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={index}
              className="group bg-gradient-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
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

export default TreatmentsSection;