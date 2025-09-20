export type Treatment = {
  title: string;
  description: string;
  image: string;
  shortDesc?: string;
  fullDesc?: string;
  icon?: string;
  duration?: string;
  specialists?: string;
  features?: string[];
  category?: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date?: string;
  authorRole?: string;
  readTime?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  fullContent?: string;
};

export type Dermatologist = {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: number;
  specialties: string[];
  image: string;
  availability: string;
  description: string;
  location?: string;
  education?: string;
};

export type WPPage = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  acf?: {
    banner_heading?: string;
    banner_description?: string;
    services_description?: string;
    treatments_json?: Treatment[];
    blog_description?: string;
    blog_json?: BlogPost[];
    dermatologists_json?: Dermatologist[];
    dermatologists_des?: string;
    // yahan baaki fields add karte ja jab banaye
  };
};
