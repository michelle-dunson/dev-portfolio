import Link from "next/link";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "ghost" | "cobalt";
type ButtonSize = "default" | "small";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    onClick?: () => void;
    className?: string;
    external?: boolean;
}

export default function Button({
    children,
    href,
    variant = "primary",
    size = "default",
    onClick,
    className = "",
    external = false,
}: ButtonProps) {
    const classes = [
        styles.button,
        styles[`button--${variant}`],
        size === "small" ? styles["button--small"] : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    className={classes}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            );
        }

        return (
            <Link href={href} className={classes} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" className={classes} onClick={onClick}>
            {children}
        </button>
    );
}
