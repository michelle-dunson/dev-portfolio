import type { NavSection, SiteMeta } from "./types";
import type { ObsessionNote, SkillSticker } from "./types";

export const SECTIONS: NavSection[] = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const SITE_META: SiteMeta = {
  name: "Michelle Gang",
  role: "Frontend Developer",
  tagline: "Part frontend developer. Part internet tinkerer.",
  email: "hello@michellegang.com",
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/michelle-gang" },
    { label: "GitHub", url: "https://github.com/michelle-dunson" },
  ],
};

export const HERO_COPY = {
  headline: "The internet could use more",
  subline:
    "So I build colorful frontend experiences that surprise people, solve small problems, and occasionally celebrate obscure hobbies.",
  scrollHint: "scroll down — there's a cork board ↓",
};

export const ABOUT_COPY = {
  label: "About me",
  title: "Hi, I'm Michelle.",
  paragraphs: [
    "I enjoy building the kind of websites that make people stop and think, \"That's clever.\"",
    "Most of my projects start with a simple question:",
    "What if choosing a knitting pattern felt like a game show?",
    "What if your birthday could generate the soundtrack to your life?",
    "I love combining APIs, animation, and thoughtful UI to turn strange ideas into polished projects.",
    "When I'm not coding, you can find me crafting with yarn, playing video games, or trying and failing to convince myself that I don't need yet another hobby.",
  ],
  obsessionsTitle: "Current obsessions",
};

export const SKILL_STICKERS: SkillSticker[] = [
  {
    id: "react",
    label: "React",
    color: "cobalt",
    shape: "pill",
    size: "lg",
    rotation: -7,
    emoji: "⚛️",
    placement: { top: "8%", left: "4%" },
  },
  {
    id: "typescript",
    label: "TypeScript",
    color: "lavender",
    shape: "tag",
    size: "md",
    rotation: 6,
    placement: { top: "10%", right: "5%" },
  },
  {
    id: "scss",
    label: "SCSS",
    color: "bubblegum",
    shape: "burst",
    size: "md",
    rotation: -4,
    emoji: "🎨",
    placement: { top: "42%", left: "12%" },
  },
  {
    id: "motion",
    label: "Motion",
    color: "mint",
    shape: "circle",
    size: "sm",
    rotation: 9,
    placement: { bottom: "26%", left: "6%" },
  },
  {
    id: "apis",
    label: "APIs",
    color: "sunshine",
    shape: "squircle",
    size: "md",
    variant: "outline",
    rotation: -5,
    emoji: "🔌",
    placement: { bottom: "10%", left: "14%" },
  },
  {
    id: "a11y",
    label: "A11y",
    color: "mint",
    shape: "pill",
    size: "sm",
    variant: "outline",
    rotation: 4,
    placement: { top: "38%", right: "3%" },
  },
  {
    id: "next",
    label: "Next.js",
    color: "charcoal",
    shape: "squircle",
    size: "lg",
    rotation: -3,
    placement: { bottom: "16%", right: "6%" },
  },
  {
    id: "craft",
    label: "Craft",
    color: "bubblegum",
    shape: "circle",
    size: "md",
    rotation: 8,
    emoji: "✂️",
    placement: { bottom: "28%", right: "18%" },
  },
];

export const OBSESSION_NOTES: ObsessionNote[] = [
  {
    id: "knitting",
    emoji: "🧶",
    label: "Fiber arts",
    note: "Crocheting a blanket I'll finish in 2028.",
    color: "bubblegum",
    rotation: -3,
  },
  {
    id: "coffee",
    emoji: "☕",
    label: "Coffee order",
    note: "Iced americano, extra shot, extra ice.",
    color: "sunshine",
    rotation: 2,
  },
  {
    id: "games",
    emoji: "🎮",
    label: "Games",
    note: "Cozy simulators & anything with a good soundtrack.",
    color: "cobalt",
    rotation: -2,
  },
  {
    id: "css",
    emoji: "🎵",
    label: "On repeat",
    note: "Noah Kahan, Hayley Williams, Transviolet.",
    color: "lavender",
    rotation: 4,
  },
];

export const CONTACT_COPY = {
  label: "Say hello",
  title: "Let's make something weird together",
  subtitle: "Open to agency roles, product work, freelance projects, or just a chat.",
  emailCta: "Send me a note",
};

export const ROTATING_HERO_WORDS = [
  "whimsy",
  "surprise",
  "color",
  "delight",
  "weird ideas",
];

export const PROJECTS_SECTION_COPY = {
  label: "Weekend builds",
  title: "Pinned to the board",
  subtitle:
    "A few of my favorite builds, and a peek into the life of a serial hobby collector.",
};
