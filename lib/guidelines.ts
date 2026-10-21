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
