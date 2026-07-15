import { SITE_META } from "@/lib/constants";
import styles from "./Footer.module.scss";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <p className={styles.text}>
                    Built with too much coffee and not enough sleep.
                </p>
                <p className={styles.text}>
                    © {year} {SITE_META.name}
                    <span className={styles.accent}> ✦</span>
                </p>
            </div>
        </footer>
    );
}
