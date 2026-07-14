import { CONTACT_COPY, SITE_META } from "@/lib/constants";
import Button from "@/components/ui/Button";
import Tape from "@/components/ui/Tape";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.postcard}>
                    <Tape length="long" color="mint" className={styles.tape} />
                    <span className={styles.stamp} aria-hidden="true">
                        ✉
                    </span>
                    <p className={styles.label}>{CONTACT_COPY.label}</p>
                    <h2 className={styles.title}>{CONTACT_COPY.title}</h2>
                    <p className={styles.subtitle}>{CONTACT_COPY.subtitle}</p>

                    <div className={styles.actions}>
                        <Button
                            href={`mailto:${SITE_META.email}`}
                            variant="cobalt"
                        >
                            {CONTACT_COPY.emailCta} ↗
                        </Button>
                        <a
                            href={`mailto:${SITE_META.email}`}
                            className={styles.emailLink}
                        >
                            {SITE_META.email}
                        </a>
                    </div>

                    <nav className={styles.socials} aria-label="Social links">
                        {SITE_META.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                className={styles.socialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.label} ↗
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
