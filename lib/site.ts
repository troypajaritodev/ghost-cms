/**
 * Single source of truth for site-wide copy, navigation and park facts.
 * Facts here are deliberately limited to figures that are publicly documented.
 */

export const site = {
  name: "Naujan Lake Visitor Hub",
  park: "Naujan Lake National Park",
  tagline: "Eco-tourism & wildlife information",
  location: "Naujan, Oriental Mindoro, Philippines",
  region: "Oriental Mindoro · Philippines",
  ramsar: "Ramsar Site No. 1008",
  hours: "6:00 AM – 5:00 PM daily",
  emergency: "911",
  description:
    "The official visitor hub for Naujan Lake National Park — a Ramsar Wetland of International Importance in Oriental Mindoro, Philippines. Plan a guided boat tour, explore the wildlife catalog, and read current park advisories.",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Park overview and latest highlights",
  },
  {
    label: "Wildlife",
    href: "/wildlife",
    description: "Birds, fish, reptiles and wetland flora",
  },
  {
    label: "Eco-Tours",
    href: "/tours",
    description: "Guided boat tours and accredited operators",
  },
  {
    label: "Guidelines",
    href: "/guidelines",
    description: "Park rules, lake zoning and safety",
  },
  {
    label: "Advisories",
    href: "/advisories",
    description: "Announcements and seasonal alerts",
  },
];

export const visitorLinks = [
  { label: "Plan a visit", href: "/inquire" },
  { label: "Park guidelines", href: "/guidelines" },
  { label: "Newsletter", href: "/subscribe" },
  { label: "Advisories", href: "/advisories" },
];

/** Hero figures shown in the stats rail. */
export const heroStats = [
  { value: "8,125", unit: "ha", label: "Lake surface area" },
  { value: "5th", unit: "", label: "Largest lake in the Philippines" },
  { value: "1008", unit: "", label: "Ramsar site number" },
  { value: "Oct–Mar", unit: "", label: "Migratory bird season" },
];

/**
 * Photography is served locally from /public/images.
 * All source files are CC BY-SA 4.0 via Wikimedia Commons.
 */
export const imageCredits = [
  {
    file: "hero-lake.jpg",
    title: "Naujan Lake National Park View 2",
    author: "Wikimedia Commons contributor",
    license: "CC BY-SA 4.0",
  },
] as const;
