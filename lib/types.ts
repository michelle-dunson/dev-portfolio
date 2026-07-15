export interface WeekendProject {
  id: string;
  title: string;
  tagline: string;
  url: string;
  tags: string[];
  year?: number;
  thumbnail?: string;
  accentColor?: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteMeta {
  name: string;
  role: string;
  tagline: string;
  email: string;
  socials: SocialLink[];
}

export type SectionId = "hero" | "projects" | "about" | "contact";

export interface NavSection {
  id: SectionId;
  label: string;
}

export interface SkillSticker {
  id: string;
  label: string;
  color: "cobalt" | "sunshine" | "mint" | "bubblegum" | "lavender" | "charcoal";
  shape: "pill" | "circle" | "squircle" | "tag" | "burst";
  variant?: "fill" | "outline";
  size?: "sm" | "md" | "lg";
  rotation?: number;
  emoji?: string;
  placement: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export interface ObsessionNote {
  id: string;
  emoji: string;
  label: string;
  note: string;
  color: "sunshine" | "mint" | "bubblegum" | "lavender" | "cobalt";
  rotation?: number;
}
