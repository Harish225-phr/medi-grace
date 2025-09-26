import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Search,
  Tag,
  Heart,
  Clock,
  Users,
  Shield
} from "lucide-react";

interface Treatment {
  post_id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  duration?: string;
  specialists?: string;
}

interface TreatmentListProps {
  treatments?: Treatment[];
  loading?: boolean;
}

const TreatmentList = ({ treatments = [], loading = false }: TreatmentListProps) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Use provided treatments from API
  const treatmentsList = treatments;

  // Process treatments to add default values
  const processedTreatments = treatmentsList.map(treatment => ({
    ...treatment,
    category: treatment.category || "Medical Care",
    duration: treatment.duration || "30-60 min",
    specialists: treatment.specialists || "Expert Team"
  }));

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(processedTreatments.map(treatment => treatment.category)))];

  // Filter treatments based on search and category
  const filteredTreatments = processedTreatments.filter(treatment => {
    const matchesSearch = treatment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || treatment.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-br from-background to-accent/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search treatments, conditions, or specialties..."
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

      {/* Treatments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              <Heart className="inline-block w-10 h-10 mr-3 text-primary" />
              Available Treatments
              {selectedCategory !== "All" && (
                <span className="text-primary ml-2">- {selectedCategory}</span>
              )}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {filteredTreatments.length} {filteredTreatments.length === 1 ? 'treatment' : 'treatments'} available
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
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
              filteredTreatments.map((treatment, index) => (
                <Card
                  key={treatment.post_id}
                  className="group bg-card border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={treatment.image}
                        alt={`${treatment.title} - Professional medical treatment at findskin.doctor+`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-primary">
                          {treatment.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {treatment.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {treatment.description}
                    </CardDescription>

                    {/* Treatment Info */}
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{treatment.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{treatment.specialists}</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="medical" 
                        size="sm" 
                        className="flex-1 group/btn"
                        onClick={() => navigate(`/treatment/${treatment.post_id}`)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                      <a href="tel:+917589951677" className="block">
                        <Button 
                          variant="medical-outline" 
                          size="sm"
                        >
                          Book Now
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {!loading && filteredTreatments.length === 0 && (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No Treatments Found</h3>
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

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-br from-destructive/5 to-destructive/10">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-destructive mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Immediate Medical Attention?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our emergency department is available 24/7 for urgent medical conditions. 
              Don't wait - get the help you need right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="destructive" size="lg">
                Emergency: +91 75899 51677
              </Button>
              <Button variant="outline" size="lg">
                General Appointments: +91 75899 51677
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentList;