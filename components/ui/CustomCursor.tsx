"use client";

import { useEffect, useState } from "react";
import styles from "./CustomCursor.module.scss";

type CursorVariant = "default" | "project" | "secret";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [variant, setVariant] = useState<CursorVariant>("default");
    const [visible, setVisible] = useState(false);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const isTouchDevice =
            "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (isTouchDevice || prefersReducedMotion) return;

        setEnabled(true);
        document.body.classList.add("custom-cursor-active");

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        const handleVariantChange = (e: Event) => {
            const customEvent = e as CustomEvent<CursorVariant>;
            setVariant(customEvent.detail);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("cursor-variant", handleVariantChange);

        return () => {
            document.body.classList.remove("custom-cursor-active");
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("cursor-variant", handleVariantChange);
        };
    }, []);

    if (!enabled) return null;

    return (
        <div
            className={`${styles.cursor} ${styles[`cursor--${variant}`]} ${
                visible ? styles["cursor--visible"] : ""
            }`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            aria-hidden="true"
        />
    );
}

export function setCursorVariant(variant: CursorVariant) {
    document.dispatchEvent(
        new CustomEvent<CursorVariant>("cursor-variant", { detail: variant }),
    );
}
