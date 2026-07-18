import type { WeekendProject } from "@/lib/types";

// Each entry needs: title, tagline, url, tags.
// Optional: thumbnail (/images/projects/{id}.png), accentColor, featured.
export const weekendProjects: WeekendProject[] = [
    {
        id: "paper-games",
        title: "Paper Games",
        tagline: "Classic paper games, no pencil required.",
        url: "https://paper-games.vercel.app/",
        thumbnail: "/images/projects/paper-games.png",
        tags: ["React", "Typescript", "Next.js", "Game Logic", "CSS Animations"],
        accentColor: "#7f5af0",
    },
    {
        id: "ravelry-roulette",
        title: "Ravelry Roulette",
        tagline: "For knitters who have 2,000 favorites and still say, 'I have nothing to make.'",
        url: "https://ravelry-roulette.vercel.app/",
        thumbnail: "/images/projects/ravelry-roulette.png",
        tags: ["TypeScript", "React", "Next.js", "API Integration", "Interactive UI"],
        accentColor: "#ff8906",
    },
    {
        id: "nostalgia-fm",
        title: "Nostalgia.fm",
        tagline: "Prepare to remember every road trip, school dance, and burned CD.",
        url: "https://nostalgia-fm.vercel.app/",
        thumbnail: "/images/projects/nostalgia-fm.png",
        tags: ["React", "Spotify API", "Next.js", "Typescript", "Data Visualization"],
        accentColor: "#e53170",
    },
    {
        id: "woordle",
        title: "Woordle",
        tagline: "Wordle, but in Dutch. Why Dutch? Waarom niet?",
        url: "https://woordle-game.vercel.app/",
        thumbnail: "/images/projects/woordle.png",
        tags: ["React", "Typescript", "Next.js", "Game Logic", "CSS Animations"],
        accentColor: "#1e56a0",
    },
];
