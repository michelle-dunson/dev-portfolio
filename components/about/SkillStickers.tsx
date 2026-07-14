import { SKILL_STICKERS } from "@/lib/constants";
import styles from "./SkillStickers.module.scss";

export default function SkillStickers() {
    return (
        <ul className={styles.sheet} aria-label="Skills">
            {SKILL_STICKERS.map((skill) => {
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
                        ].join(" ")}
                        style={
                            {
                                "--rotate": `${skill.rotation ?? 0}deg`,
                            } as React.CSSProperties
                        }
                    >
                        {skill.emoji && (
                            <span className={styles.emoji} aria-hidden="true">
                                {skill.emoji}
                            </span>
                        )}
                        <span className={styles.label}>{skill.label}</span>
                    </li>
                );
            })}
        </ul>
    );
}
