export type WPPage = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  acf?: {
    banner_heading?: string;
    banner_description?: string;
    // yahan baaki fields add karte ja jab banaye
  };
};
