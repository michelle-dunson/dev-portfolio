"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./RotatingText.module.scss";

interface RotatingTextProps {
    words: string[];
    interval?: number;
}

export default function RotatingText({
    words,
    interval = 2800,
}: RotatingTextProps) {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    const longestWord = useMemo(
        () =>
            words.reduce(
                (longest, word) =>
                    word.length > longest.length ? word : longest,
                words[0],
            ),
        [words],
    );

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (prefersReducedMotion) return;

        const timer = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setVisible(true);
            }, 300);
        }, interval);

        return () => clearInterval(timer);
    }, [words.length, interval]);

    return (
        <span className={styles.wrapper} aria-live="polite">
            <span className={styles.sizer} aria-hidden="true">
                {longestWord}
            </span>
            <span
                className={`${styles.word} ${visible ? styles["word--visible"] : ""}`}
            >
                {words[index]}
            </span>
        </span>
    );
}
