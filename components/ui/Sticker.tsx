import styles from "./Sticker.module.scss";

interface StickerProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export default function Sticker({
    children,
    size = "md",
    className = "",
}: StickerProps) {
    const sizeClass =
        size === "lg"
            ? styles["sticker--lg"]
            : size === "sm"
              ? styles["sticker--sm"]
              : "";

    return (
        <span
            className={`${styles.sticker} ${sizeClass} ${className}`}
            aria-hidden="true"
        >
            {children}
        </span>
    );
}
