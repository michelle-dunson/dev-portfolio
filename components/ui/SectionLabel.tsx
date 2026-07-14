import styles from "./SectionLabel.module.scss";

interface SectionLabelProps {
    children: React.ReactNode;
    variant?: "default" | "accent";
}

export default function SectionLabel({
    children,
    variant = "default",
}: SectionLabelProps) {
    const variantClass = variant === "accent" ? styles["label--accent"] : "";

    return (
        <span className={`${styles.label} ${variantClass}`}>{children}</span>
    );
}
