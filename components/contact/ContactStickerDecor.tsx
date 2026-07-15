"use client";

import { useEffect, useRef, useState } from "react";
import { SKILL_STICKERS } from "@/lib/constants";
import styles from "./ContactStickerDecor.module.scss";

export default function ContactStickerDecor() {
    const decorRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = decorRef.current;
        if (!node) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={decorRef}
            className={`${styles.decor} ${visible ? styles["decor--visible"] : ""}`}
            aria-hidden="true"
        >
            <ul className={styles.sheet}>
                {SKILL_STICKERS.map((skill, index) => {
                    const size = skill.size ?? "md";
                    const variant = skill.variant ?? "fill";

                    return (
                        <li
                            key={skill.id}
                            className={[
                                styles.sticker,
                                styles[`sticker--${skill.color}`],
                                styles[`sticker--${skill.shape}`],
                                styles[`sticker--${size}`],
                                styles[`sticker--${variant}`],
                                styles[`sticker--${skill.id}`],
                            ].join(" ")}
                            style={
                                {
                                    "--rotate": `${skill.rotation ?? 0}deg`,
                                    "--index": index,
                                    ...skill.placement,
                                } as React.CSSProperties
                            }
                        >
                            {skill.emoji && (
                                <span className={styles.emoji}>{skill.emoji}</span>
                            )}
                            <span className={styles.label}>{skill.label}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
