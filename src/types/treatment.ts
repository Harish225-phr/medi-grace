// Treatment data structure from JSON array
export interface Treatment {
  post_id: number;
  title: string;
  excerpt: string;
  image: string;
  doctor: string;
  category?: string;
  duration?: string;
}

// WordPress REST API post structure
export interface WordPressPost {
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
      id: number;
      name: string;
      description?: string;
      avatar_urls?: {
        [key: string]: string;
      };
    }>;
    "wp:featuredmedia"?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          [key: string]: {
            source_url: string;
            width: number;
            height: number;
          };
        };
      };
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      taxonomy: string;
      slug: string;
    }>>;
  };
}

// Props for TreatmentList component
export interface TreatmentListProps {
  treatments?: Treatment[];
  loading?: boolean;
}

// Response from WordPress API when fetching multiple posts
export interface WordPressPostsResponse {
  posts: WordPressPost[];
  total: number;
  totalPages: number;
}