import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Fuzzy_Bubbles } from "next/font/google";
import { SITE_META } from "@/lib/constants";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.scss";

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
    weight: ["700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const fuzzyBubbles = Fuzzy_Bubbles({
    subsets: ["latin"],
    variable: "--font-hand",
    display: "swap",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: `${SITE_META.name} — ${SITE_META.role}`,
    description: SITE_META.tagline,
    openGraph: {
        title: `${SITE_META.name} — Weekend Projects Portfolio`,
        description: SITE_META.tagline,
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${syne.variable} ${plusJakarta.variable} ${fuzzyBubbles.variable}`}
        >
            <body>
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
