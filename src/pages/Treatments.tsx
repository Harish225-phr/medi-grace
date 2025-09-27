import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import TreatmentList from "@/components/TreatmentList";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Treatment } from "@/types/treatment";

const Treatments = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        setLoading(true);
        
        // Fetch treatments data from your WordPress API - NO hardcoded IDs
        const response = await fetch(`https://findskin.doctor/wp-json/wp/v2/pages/2466`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch treatments data");
        }
        
        const pageData = await response.json();
        const treatmentsJsonString = pageData?.acf?.treatments_json || '[]';
        
        let treatmentsData = [];
        try {
          treatmentsData = JSON.parse(treatmentsJsonString);
        } catch (parseError) {
          console.error('Error parsing treatments JSON:', parseError);
          treatmentsData = [];
        }

        // Transform the data to match our Treatment interface
        const formattedTreatments: Treatment[] = treatmentsData.map((item: any) => ({
          post_id: item.post_id, // Dynamic post ID from your data
          title: item.title,
          excerpt: item.description || item.excerpt,
          image: item.image,
          doctor: item.doctor || item.author || "Medical Team",
          category: item.category,
          duration: item.duration
        }));
        
        // DEBUG: Log all post IDs found in your data
        console.log("=== TREATMENTS JSON DEBUG ===");
        console.log("Total treatments found:", treatmentsData.length);
        console.log("All post IDs in your data:", treatmentsData.map((item: any) => item.post_id || item.id || 'NO_ID'));
        console.log("Sample treatment data:", treatmentsData[0]);
        console.log("Formatted treatments:", formattedTreatments);
        console.log("=== END TREATMENTS DEBUG ===");
        
        setTreatments(formattedTreatments);
      } catch (error) {
        console.error('Error fetching treatments:', error);
        setTreatments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  return (
    <>
      <Helmet>
        <title>Medical Treatments & Services | findskin.doctor+ Comprehensive Care</title>
        <meta name="description" content="Explore comprehensive medical treatments at findskin.doctor+ including dermatology, cosmetic procedures, and specialized care with expert doctors." />
        <meta name="keywords" content="medical treatments, dermatology, skin care, cosmetic procedures, findskin doctor" />
        <meta property="og:title" content="Medical Treatments & Services | findskin.doctor+" />
        <meta property="og:description" content="Comprehensive medical treatments and healthcare services with expert specialists." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/treatments" />
      </Helmet>

      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-6 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Medical Treatments & Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-slide-in">
                Comprehensive healthcare services delivered by expert medical professionals using state-of-the-art technology 
                and evidence-based treatment approaches for optimal patient outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Use the TreatmentList component - NO hardcoded data */}
        <TreatmentList treatments={treatments} loading={loading} />
      </main>
      
      <WhatsAppButton />
    </>
  );
};

export default Treatments;