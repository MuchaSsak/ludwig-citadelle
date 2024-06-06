import {
  AreaChart,
  CalendarHeart,
  Dice6,
  Home,
  KeyRound,
  MessageCirclePlus,
  MessageSquareQuote,
  Search,
  UsersRound,
} from "lucide-react";

// Supabase
export const SUPABASE_PUBLIC_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwcHdwa3Vhc3Rva3hteGV4ZHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxOTI5NzcsImV4cCI6MjAzMDc2ODk3N30.mEpVbrXLqtp4AOZYrHy7Utje5IocpJq-kOKMgWi_lzY";
export const SUPABASE_PROJECT_URL = "https://uppwpkuastokxmxexdym.supabase.co";

// Project metadata
export const LAYOUT_METADATA = {
  title: "Ludwig Citadelle",
  description:
    "Ludwig Citadelle is a place where you can view Mrs. Ludwig's best quotes taken out of context. Collected over the course of a few years by a couple of amused friends.",
  keywords: [
    "ludwig",
    "citadelle",
    "context",
    "fortress",
    "quotes",
    "without",
    "concrete",
    "domination",
  ],
};

// NavBar links
export const NAVBAR_LINKS_VISIBLE = [
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Stats",
    href: "/stats",
  },
  {
    title: "QOTD",
    href: "/qotd",
  },
  {
    title: "Suggest",
    href: "/suggest",
  },
];
export const NAVBAR_LINKS_HAMBURGER = [
  {
    title: "Home",
    href: "/",
    Icon: Home,
  },
  {
    title: "LudwigAPI",
    href: "/ludwig-api",
    Icon: KeyRound,
  },
  {
    title: "Team",
    href: "/team",
    Icon: UsersRound,
  },
  {
    title: "Stats",
    href: "/stats",
    Icon: AreaChart,
  },
  {
    title: "QOTD",
    href: "/qotd",
    Icon: CalendarHeart,
  },
  {
    title: "Suggest",
    href: "/suggest",
    Icon: MessageCirclePlus,
  },
];
// TODO: Write NAVBAR_LUDWIG_API_LINKS descriptions
export const NAVBAR_LUDWIG_API_LINKS = [
  {
    title: "All quotes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ea. Veniam dolor accusamus tempore reprehenderit enim quasi dolores consequuntur ipsum modi fuga laboriosam nemo quis aut, numquam nostrum quia eaque?",
    href: "/ludwig-api/all-quotes",
    Icon: MessageSquareQuote,
  },
  {
    title: "Search quote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ea. Veniam dolor accusamus tempore reprehenderit enim quasi dolores consequuntur ipsum modi fuga laboriosam nemo quis aut, numquam nostrum quia eaque?",
    href: "/ludwig-api/search-quote",
    Icon: Search,
  },
  {
    title: "Random quote",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ea. Veniam dolor accusamus tempore reprehenderit enim quasi dolores consequuntur ipsum modi fuga laboriosam nemo quis aut, numquam nostrum quia eaque?",
    href: "/ludwig-api/random-quote",
    Icon: Dice6,
  },
  {
    title: "QOTD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, ea. Veniam dolor accusamus tempore reprehenderit enim quasi dolores consequuntur ipsum modi fuga laboriosam nemo quis aut, numquam nostrum quia eaque?",
    href: "/ludwig-api/qotd",
    Icon: CalendarHeart,
  },
];

// Links
export const LUDWIG_CITADELLE_GITHUB_LINK =
  "https://github.com/MuchaSsak/ludwig-citadelle";
export const CONTACT_EMAIL = "MuchaSsak.social@gmail.com";
export const LOZA_EMAIL = "loza@muszarski.pl";

// Quotes
export const QUOTE_CARD_COLORS = [
  "#F83D3D",
  "#F86C3D",
  "#FF8847",
  "#F8BE3D",
  "#A9F83D",
  "#3DF897",
  "#3DF8C5",
  "#3DF4F8",
  "#3DC5F8",
  "#3DA2F8",
  "#3D7EF8",
  "#AA6AFF",
  "#9341FF",
  "#C541FF",
  "#F67AFC",
  "#FF47A8",
  "#FF4788",
];
export const QUOTE_CARD_REPORT_OPTIONS = [
  "Duplicate",
  "Offensive",
  "Indirect quotation",
  "Wrongly written (grammar, typos etc.)",
  "Has assigned the wrong grade or tags",
  "None of the above",
];
export const MAX_QUOTES_PER_PAGE = 10;
export const QUOTES_SORTINGS: QuoteSorting[] = [
  {
    value: "ID descending",
    column: "id",
    isAscending: false,
  },
  {
    value: "ID ascending",
    column: "id",
    isAscending: true,
  },
  {
    value: "Alphabetical order",
    column: "quote",
    isAscending: true,
  },
  {
    value: "Reverse-alphabetical order",
    column: "quote",
    isAscending: false,
  },
];
export const DEFAULT_QUOTES_SORTING: QuoteSorting = QUOTES_SORTINGS[0];
export const QUOTES_TAGS = [
  "Classic",
  "Roast",
  "Irritated",
  "Poetry",
  "Wisdom",
  "Mocking",
  "Intimidating",
];
export const QUOTES_GRADES = ["1TP", "2TP", "3TP", "4TP", "5TP"];
