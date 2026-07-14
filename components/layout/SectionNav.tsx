"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SECTIONS } from "@/lib/constants";
import type { SectionId } from "@/lib/types";
import styles from "./SectionNav.module.scss";

const SHORT_LABELS: Record<SectionId, string> = {
    hero: "⌂",
    projects: "◆",
    about: "◎",
    contact: "✉",
};

export default function SectionNav() {
    const [activeSection, setActiveSection] = useState<SectionId>("hero");

    useEffect(() => {
        const sectionElements = SECTIONS.map((s) =>
            document.getElementById(s.id),
        ).filter(Boolean) as HTMLElement[];

        if (sectionElements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id as SectionId);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            },
        );

        sectionElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className={styles.nav} aria-label="Page sections">
            {SECTIONS.map((section) => (
                <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className={`${styles.link} ${
                        activeSection === section.id
                            ? styles["link--active"]
                            : ""
                    }`}
                >
                    <span className={styles.linkLabel}>{section.label}</span>
                    <span className={styles.linkShort} aria-hidden="true">
                        {SHORT_LABELS[section.id]}
                    </span>
                </Link>
            ))}
        </nav>
    );
}
