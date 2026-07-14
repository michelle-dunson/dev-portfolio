"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SECTIONS } from "@/lib/constants";
import type { SectionId } from "@/lib/types";
import styles from "./FloatingNav.module.scss";

export default function FloatingNav() {
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
            { rootMargin: "-42% 0px -48% 0px", threshold: 0 },
        );

        sectionElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className={styles.nav} aria-label="Page sections">
            <div className={styles.pill}>
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
                        {section.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
