import { HERO_COPY, ROTATING_HERO_WORDS, SITE_META } from "@/lib/constants";
import RotatingText from "@/components/ui/RotatingText";
import Sticker from "@/components/ui/Sticker";
import Tape from "@/components/ui/Tape";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.colorBlock} aria-hidden="true" />
            <Sticker size="lg" className={styles.stickerStar}>
                ★
            </Sticker>
            <Sticker size="md" className={styles.stickerSmile}>
                ✿
            </Sticker>
            <Sticker size="sm" className={styles.stickerSparkle}>
                ✦
            </Sticker>

            <div className={styles.inner}>
                <div className={styles.main}>
                    <div className={styles.nameCard}>
                        <Tape
                            length="medium"
                            color="pink"
                            className={styles.nameTape}
                        />
                        <p className={`hand ${styles.name}`}>
                            {SITE_META.name}
                        </p>
                        <p className={styles.role}>{SITE_META.role}</p>
                    </div>

                    <h1 className={styles.headline}>
                        <span className={styles.headlineLine}>
                            {HERO_COPY.headline}
                        </span>
                        <span className={styles.rotatingLine}>
                            <RotatingText words={ROTATING_HERO_WORDS} />
                        </span>
                    </h1>

                    <p className={styles.subline}>{HERO_COPY.subline}</p>

                    <p className={`hand ${styles.scrollHint}`}>
                        {HERO_COPY.scrollHint}
                    </p>
                </div>

                <aside className={styles.collage}>
                    <div className={styles.collageCard}>
                        <Tape length="short" className={styles.collageTape} />
                        <span className={styles.collageEmoji}>📸</span>
                        <p className={`hand ${styles.collageCaption}`}>
                            builder of weird little apps
                        </p>
                    </div>
                    <div
                        className={`${styles.collageCard} ${styles.collageCardAlt}`}
                    >
                       <Tape length="medium" color="mint" className={styles.collageTape} />
                        <span className={styles.collageEmoji}>🧶</span>
                        <p className={`hand ${styles.collageCaption}`}>
                            serial hobby collector
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
}
