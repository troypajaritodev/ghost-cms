/**
 * Park rules for Naujan Lake National Park (PRD Module 3 / FR-3.1).
 * Keep entries short enough to scan on a phone at the dock.
 */

export type ParkRule = {
  icon: "litter" | "camera" | "fish" | "lifejacket" | "route" | "collect";
  title: string;
  body: string;
  note?: string;
};

export const parkRules: ParkRule[] = [
  {
    icon: "litter",
    title: "Leave no trace",
    body: "Everything you carry in goes back out with you. There are no bins on the water and no collection service on the islands.",
    note: "Single-use plastic is discouraged at all access points.",
  },
  {
    icon: "camera",
    title: "No flash during nesting",
    body: "Flash and sustained close approach disturb nesting birds and can cause nest abandonment. Keep to the marked viewing distance.",
    note: "Guides will signal when a nest is within range.",
  },
  {
    icon: "fish",
    title: "Fishing is regulated",
    body: "Angling is allowed only in the sustainable-use zone with handline or rod and reel. Nets, traps, electrofishing and explosives are prohibited park-wide.",
  },
  {
    icon: "lifejacket",
    title: "Life jackets, always",
    body: "Every passenger wears a fitted life jacket for the whole trip, not just while the boat is moving. Operators carry child sizes on request.",
  },
  {
    icon: "route",
    title: "Stay on the marked route",
    body: "Boats follow the buoyed channels and may not beach on nesting islands. Landing is permitted only at designated stops.",
  },
  {
    icon: "collect",
    title: "Take nothing wild",
    body: "Plants, shells, eggs, nests and animals are protected. Photographs and notes are the only things that leave with you.",
    note: "Research collection requires a permit from the park office.",
  },
];

export type ZoneTone = "core" | "use" | "buffer";

export type Zone = {
  id: string;
  tone: ZoneTone;
  name: string;
  access: string;
  summary: string;
  allowed: string[];
  restricted: string[];
  /** Relative width of the zone in the legend bar. */
  share: string;
};

/** Lake zoning system (PRD Module 3 / FR-3.2). */
export const lakeZones: Zone[] = [
  {
    id: "strict",
    tone: "core",
    name: "Strict protection zone",
    access: "Closed to tourism",
    summary:
      "Core breeding and spawning grounds — the nesting islands, the marsh edges and the deepest basin of the lake.",
    allowed: ["Ranger patrols", "Monitoring with a park permit"],
    restricted: ["All boat entry", "Fishing of any kind", "Drone flights"],
    share: "22%",
  },
  {
    id: "sustainable",
    tone: "use",
    name: "Sustainable use zone",
    access: "Regulated access",
    summary:
      "The open water where guided tours run, with designated photography points and controlled angling.",
    allowed: [
      "Guided boat tours",
      "Birdwatching from marked points",
      "Handline and rod-and-reel angling",
    ],
    restricted: [
      "Nets, traps and electrofishing",
      "Beaching on islands",
      "Unaccompanied boat hire",
    ],
    share: "40%",
  },
  {
    id: "buffer",
    tone: "buffer",
    name: "Buffer zone",
    access: "Controlled access",
    summary:
      "The shoreline and lakeside communities, where entry is managed together with the barangay and the park office.",
    allowed: [
      "Community homestays",
      "Marked jetties and access points",
      "Registered small-scale fishing",
    ],
    restricted: [
      "New permanent structures",
      "Waste discharge",
      "Clearing of shoreline vegetation",
    ],
    share: "38%",
  },
];
