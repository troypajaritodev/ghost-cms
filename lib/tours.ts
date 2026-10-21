/**
 * Eco-tourism packages (PRD Module 2 / FR-2.1–2.2).
 * Rates are placeholder tariffs in PHP, per person, inclusive of the
 * environmental fee — replace with the published schedule from the park office.
 */

export type TourDifficulty = "EASY" | "MODERATE" | "CHALLENGING";

export type Tour = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  duration: string;
  departure: string;
  ratePerPerson: number;
  maxCapacity: number;
  difficulty: TourDifficulty;
  inclusions: string[];
  image: string;
  imageAlt: string;
};

export const difficultyLabel: Record<TourDifficulty, string> = {
  EASY: "Easy",
  MODERATE: "Moderate",
  CHALLENGING: "Challenging",
};

export const tours: Tour[] = [
  {
    slug: "guided-birdwatching-expedition",
    title: "Guided birdwatching expedition",
    category: "Birdwatching",
    summary:
      "A slow morning run along the marsh edge with a trained spotter, timed to the migratory season and the tide.",
    duration: "3–4 hours",
    departure: "05:30, park jetty",
    ratePerPerson: 1850,
    maxCapacity: 6,
    difficulty: "EASY",
    inclusions: ["Licensed guide", "Life jacket", "Binoculars", "Environmental fee"],
    image: "/images/ducklings.jpg",
    imageAlt: "Philippine Duck and ducklings in shallow wetland water",
  },
  {
    slug: "sunrise-boat-tour",
    title: "Sunrise boat tour",
    category: "Scenic",
    summary:
      "Out before the light, back before the heat. The classic first look at the lake and the mountains behind it.",
    duration: "2 hours",
    departure: "05:00, park jetty",
    ratePerPerson: 1200,
    maxCapacity: 8,
    difficulty: "EASY",
    inclusions: ["Boat and operator", "Life jacket", "Environmental fee"],
    image: "/images/hero-lake.jpg",
    imageAlt: "Open water and distant mountains under a wide sky at Naujan Lake",
  },
  {
    slug: "lakeside-community-homestay",
    title: "Lakeside community homestay",
    category: "Cultural",
    summary:
      "An overnight with a host family in a lakeside barangay — fishing stories, local cooking, and a dawn paddle.",
    duration: "2 days, 1 night",
    departure: "14:00, barangay hall",
    ratePerPerson: 2400,
    maxCapacity: 4,
    difficulty: "MODERATE",
    inclusions: ["Homestay", "All meals", "Village guide", "Environmental fee"],
    image: "/images/shoreline.jpg",
    imageAlt: "Shoreline vegetation and quiet water along Naujan Lake",
  },
  {
    slug: "educational-research-trek",
    title: "Educational research trek",
    category: "Research",
    summary:
      "A field session for student groups: transect walks, water sampling points and an introduction to wetland survey methods.",
    duration: "6 hours",
    departure: "06:00, park office",
    ratePerPerson: 1500,
    maxCapacity: 15,
    difficulty: "CHALLENGING",
    inclusions: ["Research guide", "Field sheets", "Boat transfer", "Environmental fee"],
    image: "/images/lake-canopy.jpg",
    imageAlt: "Dense shoreline canopy meeting the water at Naujan Lake",
  },
];
