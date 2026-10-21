/**
 * Eco-tourism packages (PRD Module 2 / FR-2.1–2.2).
 * Rates are placeholder tariffs in PHP, per person, inclusive of the
 * environmental fee — replace with the published schedule from the park office.
 */

export type TourDifficulty = "EASY" | "MODERATE" | "CHALLENGING";

export type ItineraryStop = {
  time: string;
  title: string;
  detail: string;
};

export type TariffLine = {
  label: string;
  amount: number;
};

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
  itinerary: ItineraryStop[];
  tariff: TariffLine[];
  bring: string[];
  notes: string[];
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
    itinerary: [
      {
        time: "05:30",
        title: "Briefing at the jetty",
        detail:
          "Life jackets fitted, spotting scope handed out, and a short run-through of the nesting-season rules.",
      },
      {
        time: "05:50",
        title: "First light on the open water",
        detail:
          "The boat works the eastern edge where flocks roost overnight, engine at idle, drifting with the current.",
      },
      {
        time: "07:15",
        title: "Marsh channel and photography stop",
        detail:
          "A 20-minute stop at a designated photography point — no landing, no flash, engines off.",
      },
      {
        time: "08:45",
        title: "Return and species log",
        detail:
          "Back at the jetty. The guide logs the morning's species list for the park's monthly records.",
      },
    ],
    tariff: [
      { label: "Boat rental and operator", amount: 700 },
      { label: "Licensed birding guide", amount: 600 },
      { label: "Environmental fee", amount: 300 },
      { label: "Binocular hire", amount: 250 },
    ],
    bring: [
      "Neutral-coloured clothing",
      "Sun hat and rain shell",
      "Reusable water bottle",
      "Insect repellent",
    ],
    notes: [
      "Best between October and March, when migratory species are present.",
      "Not recommended for children under 7 — the boat sits low and quiet.",
    ],
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
    itinerary: [
      {
        time: "05:00",
        title: "Departure",
        detail:
          "Board at the park jetty while the water is still flat. Life jackets on before the engine starts.",
      },
      {
        time: "05:25",
        title: "Sunrise viewpoint",
        detail:
          "The boat holds position east of the jetty as the ridge line lights up behind the lake.",
      },
      {
        time: "06:15",
        title: "Loop past the fishing grounds",
        detail:
          "A slow circuit of the sustainable-use zone, passing boats setting out for the morning catch.",
      },
      {
        time: "07:00",
        title: "Return",
        detail: "Back at the jetty in time for breakfast in town.",
      },
    ],
    tariff: [
      { label: "Boat rental and operator", amount: 700 },
      { label: "Fuel and crew", amount: 200 },
      { label: "Environmental fee", amount: 300 },
    ],
    bring: ["Light jacket", "Camera", "Reusable water bottle"],
    notes: [
      "Departs strictly at 05:00 — late arrivals cannot be waited for.",
      "Cancelled without charge if the coast guard issues a small-craft warning.",
    ],
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
    itinerary: [
      {
        time: "Day 1 · 14:00",
        title: "Arrival and orientation",
        detail:
          "Meet the host family and the barangay guide. Walk-through of the buffer-zone rules and household arrangements.",
      },
      {
        time: "Day 1 · 17:30",
        title: "Shoreline walk and dinner",
        detail:
          "A short walk to the landing area as the boats come in, then a shared dinner of lake fish and local produce.",
      },
      {
        time: "Day 2 · 05:30",
        title: "Dawn paddle",
        detail:
          "Out on a small paddle boat with the host, staying inside the marked channel.",
      },
      {
        time: "Day 2 · 09:00",
        title: "Departure",
        detail: "Breakfast, then transfer back to the park office.",
      },
    ],
    tariff: [
      { label: "Homestay (per night)", amount: 900 },
      { label: "Meals (4)", amount: 700 },
      { label: "Village guide", amount: 500 },
      { label: "Environmental fee", amount: 300 },
    ],
    bring: [
      "Modest, comfortable clothing",
      "Sleeping clothes and towel",
      "Refillable water bottle",
      "Cash for local purchases",
    ],
    notes: [
      "Accommodation is basic — shared bathroom, fan-cooled room.",
      "Alcohol is not permitted inside the homestay.",
    ],
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
    itinerary: [
      {
        time: "06:00",
        title: "Safety briefing and method overview",
        detail:
          "Survey ethics, permits, and how the data feeds the park's monitoring programme.",
      },
      {
        time: "06:45",
        title: "Transect walk",
        detail:
          "A guided transect along the buffer zone, recording vegetation cover and bird sightings on standard field sheets.",
      },
      {
        time: "10:00",
        title: "Water sampling points",
        detail:
          "Three established sampling points accessed by boat. Students record temperature, clarity and bank condition.",
      },
      {
        time: "12:00",
        title: "Debrief",
        detail: "Consolidate the day's sheets and hand a copy to the park office.",
      },
    ],
    tariff: [
      { label: "Boat transfer", amount: 500 },
      { label: "Research guide", amount: 700 },
      { label: "Environmental fee", amount: 300 },
    ],
    bring: [
      "Closed shoes with grip",
      "Long trousers",
      "Field notebook and pencil",
      "Waterproof bag for devices",
    ],
    notes: [
      "Group bookings only, minimum of 8 participants.",
      "The transect crosses uneven ground and shallow water — not suitable for limited mobility.",
    ],
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export function tariffTotal(tour: Tour): number {
  return tour.tariff.reduce((sum, line) => sum + line.amount, 0);
}
