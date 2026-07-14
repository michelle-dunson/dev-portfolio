import styles from "./Tape.module.scss";

interface TapeProps {
    length?: "short" | "medium" | "long";
    color?: "default" | "yellow" | "mint" | "pink";
    className?: string;
}

export default function Tape({
    length = "medium",
    color = "default",
    className = "",
}: TapeProps) {
    const colorClass = color !== "default" ? styles[`tape--${color}`] : "";

    return (
        <span
            className={`${styles.tape} ${styles[`tape--${length}`]} ${colorClass} ${className}`}
            aria-hidden="true"
        />
    );
}
