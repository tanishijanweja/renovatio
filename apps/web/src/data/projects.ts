export type ProjectCategory =
  | "Residential"
  | "Renovation"
  | "Interior"
  | "Hospitality";

export interface Project {
  slug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  year: string;
  area: string;
  client: string;
  description: string;
  story: string;
  materials: string[];
  coverImage: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "kitchen-interiors",
    name: "Kitchen Interiors",
    location: "Gurugram",
    category: "Residential",
    year: "2023",
    area: "4,500 sq ft",
    client: "Private residence",
    description:
      "A contemporary family home organized around a central courtyard — where light, air, and daily life converge.",
    story:
      "Set on a tight urban plot, the house turns inward. A double-height living volume opens to a planted courtyard that anchors every room. Floor-to-ceiling glazing dissolves the threshold between inside and out, while deep overhangs and jali screens temper the northern light. Materials are restrained — Kota stone, teak, and lime plaster — chosen to age quietly.",
    materials: ["Kota stone", "Teak", "Lime plaster", "Jali screen"],
    coverImage: {
      src: "/work/renov_1.png",
      alt: "Courtyard House — double-height living space with floor-to-ceiling glazing",
    },
    gallery: [
      {
        src: "/work/renov_2.png",
        alt: "Courtyard House — terracotta-screened courtyard at dusk",
      },
      {
        src: "/work/renov_3.png",
        alt: "Courtyard House — minimal concrete and teak interior detail",
      },
    ],
    featured: true,
  },
  {
    slug: "haveli-courtyard",
    name: "Haveli Courtyard",
    location: "Jaipur",
    category: "Renovation",
    year: "2022",
    area: "3,200 sq ft",
    client: "Heritage family home",
    description:
      "A sensitive restoration of a historic haveli courtyard — preserving its terracotta soul while making it liveable for today.",
    story:
      "The project began with careful documentation of the existing haveli — its proportion, its screens, its patina. New insertions are legible yet quiet: a steel-framed roof that floats above the old walls, contemporary services threaded through original masonry. The terracotta jali, cleaned and repaired by local craftspeople, again filters the desert light.",
    materials: ["Terracotta jali", "Lime mortar", "Reclaimed teak", "Steel"],
    coverImage: {
      src: "/work/renov_2.png",
      alt: "Haveli Courtyard — terracotta-screened courtyard house at dusk",
    },
    gallery: [
      {
        src: "/work/renov_1.png",
        alt: "Haveli Courtyard — restored arched colonnade",
      },
      {
        src: "/work/renov_4.png",
        alt: "Haveli Courtyard — stone threshold detail",
      },
    ],
    featured: true,
  },
  {
    slug: "the-teak-loft",
    name: "The Teak Loft",
    location: "Bengaluru",
    category: "Interior",
    year: "2024",
    area: "1,800 sq ft",
    client: "Private apartment",
    description:
      "A minimal apartment interior where concrete, teak, and indirect light find a precise balance.",
    story:
      "The brief was restraint. Existing concrete soffits were left exposed, new teak joinery inserted as warm counterpoint. Lighting is indirect throughout — coves, reveals, and hidden sources that wash surfaces rather than spotlight them. Storage is concealed, thresholds are flush, and every junction is considered.",
    materials: ["Exposed concrete", "Teak", "Linen", "Brass"],
    coverImage: {
      src: "/work/renov_3.png",
      alt: "The Teak Loft — minimal concrete and teak interior with indirect lighting",
    },
    gallery: [
      {
        src: "/work/renov_5.png",
        alt: "The Teak Loft — joinery and brass fixture detail",
      },
      {
        src: "/work/renov_1.png",
        alt: "The Teak Loft — living area with concealed storage",
      },
    ],
    featured: true,
  },
  {
    slug: "forest-retreat",
    name: "Forest Retreat",
    location: "Rishikesh",
    category: "Hospitality",
    year: "2023",
    area: "6,000 sq ft",
    client: "Boutique hospitality",
    description:
      "A stone-clad weekend retreat set into a forested hillside — quiet, grounded, and attuned to its landscape.",
    story:
      "The retreat is cut into the slope, its stone walls retaining earth and framing valley views. Deep stone piers and timber decks mediate between building and forest. Interiors are spare — local stone, reclaimed timber, hand-thrown ceramics — so the landscape remains the primary experience.",
    materials: ["Local stone", "Reclaimed timber", "Corten", "Ceramic"],
    coverImage: {
      src: "/work/renov_4.png",
      alt: "Forest Retreat — stone-clad weekend retreat set into a forested hillside",
    },
    gallery: [
      {
        src: "/work/renov_3.png",
        alt: "Forest Retreat — timber deck overlooking the valley",
      },
      {
        src: "/work/renov_2.png",
        alt: "Forest Retreat — stone pier and planting detail",
      },
    ],
    featured: true,
  },
  {
    slug: "brass-and-stone",
    name: "Brass & Stone",
    location: "New Delhi",
    category: "Hospitality",
    year: "2024",
    area: "2,800 sq ft",
    client: "Boutique hotel",
    description:
      "A boutique hotel lobby where handcrafted brass, stone, and warm light compose a quiet arrival.",
    story:
      "Conceived as a contemporary haveli threshold, the lobby layers brass inlays, honed stone, and timber screens. Custom fixtures — hand-hammered brass pendants, stone consoles — were developed with local makers. The palette is warm and matte, the light low and even, the scale intimate despite the double height.",
    materials: ["Honed stone", "Brass", "Timber screen", "Handmade tile"],
    coverImage: {
      src: "/work/renov_5.png",
      alt: "Brass & Stone — boutique hotel lobby with handcrafted brass fixtures",
    },
    gallery: [
      {
        src: "/work/renov_1.png",
        alt: "Brass & Stone — lobby stone and brass detail",
      },
      {
        src: "/work/renov_4.png",
        alt: "Brass & Stone — timber screen at dusk",
      },
    ],
    featured: false,
  },
];

export const CATEGORIES: ProjectCategory[] = [
  "Residential",
  "Renovation",
  "Interior",
  "Hospitality",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}
