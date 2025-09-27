// Example usage of the TreatmentList and TreatmentDetail components

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TreatmentList from '@/components/TreatmentList';
import TreatmentDetail from '@/pages/TreatmentDetail';
import { Treatment } from '@/types/treatment';

// NO HARDCODED DATA - Fetch dynamic data from your WordPress API
// This shows how to fetch dynamic treatments data

// Example of how to use TreatmentList component
const TreatmentsPage: React.FC = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        setLoading(true);
        
        // FETCH DYNAMIC DATA - NO HARDCODED IDs
        const response = await fetch('https://findskin.doctor/wp-json/wp/v2/pages/2466');
        
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

        // Transform the data to match our Treatment interface - ALL DYNAMIC
        const formattedTreatments: Treatment[] = treatmentsData.map((item: any) => ({
          post_id: item.post_id, // DYNAMIC post ID from your data
          title: item.title,
          excerpt: item.description || item.excerpt,
          image: item.image,
          doctor: item.doctor || item.author || "Medical Team",
          category: item.category,
          duration: item.duration
        }));
        
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
    <div>
      <h1>Our Treatments</h1>
      <TreatmentList treatments={treatments} loading={loading} />
    </div>
  );
};

// Example of complete routing setup
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Treatments list page */}
        <Route path="/treatments" element={<TreatmentsPage />} />
        
        {/* Treatment detail page - postId parameter will be available in TreatmentDetail */}
        <Route path="/treatment/:postId" element={<TreatmentDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

/*
HOW TO USE:

1. TreatmentList Component:
   - Pass an array of treatments with the structure defined in Treatment interface
   - Each treatment must have: post_id, title, excerpt, image, doctor
   - Optional fields: category, duration
   - The component will display cards with "Learn More" buttons
   - Clicking "Learn More" navigates to `/treatment/{post_id}`

2. TreatmentDetail Component:
   - Automatically gets postId from React Router params
   - Fetches full post data from WordPress REST API: https://findskin.doctor/wp-json/wp/v2/posts/{post_id}
   - Displays title and full content using dangerouslySetInnerHTML
   - Includes loading states and error handling
   - Shows a "Back to Treatments" button

3. Data Flow:
   JSON Array → TreatmentList (shows excerpts) → User clicks "Learn More" → 
   TreatmentDetail (fetches full content from WordPress API)

4. Required Dependencies:
   - react-router-dom (for navigation)
   - react-helmet-async (for SEO in TreatmentDetail)
   - Your UI components (Button, Card, etc.)

5. API Requirements:
   - WordPress site should have REST API enabled
   - Posts should be accessible at: https://findskin.doctor/wp-json/wp/v2/posts/{id}
   - Include ?_embed parameter to get featured images and author info
*/