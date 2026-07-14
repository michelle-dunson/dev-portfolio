import { ABOUT_COPY, OBSESSION_NOTES, SITE_META } from "@/lib/constants";
import SkillStickers from "@/components/about/SkillStickers";
import Tape from "@/components/ui/Tape";
import styles from "./About.module.scss";

export default function About() {
    const intro = ABOUT_COPY.paragraphs.slice(0, 2);
    const questions = ABOUT_COPY.paragraphs.slice(2, 4);
    const closing = ABOUT_COPY.paragraphs.slice(4);

    return (
        <section id="about" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.scrapbook}>
                    <span className={styles.sectionTag}>
                        {ABOUT_COPY.label}
                    </span>
                    <Tape
                        length="long"
                        color="yellow"
                        className={styles.tapeTop}
                    />
                    <h2 className={styles.title}>{ABOUT_COPY.title}</h2>

                    {intro.map((paragraph) => (
                        <p
                            key={paragraph.slice(0, 30)}
                            className={styles.paragraph}
                        >
                            {paragraph}
                        </p>
                    ))}

                    <div className={styles.questions}>
                        {questions.map((q) => (
                            <p key={q} className={`hand ${styles.question}`}>
                                {q}
                            </p>
                        ))}
                    </div>

                    {closing.map((paragraph) => (
                        <p
                            key={paragraph.slice(0, 30)}
                            className={styles.paragraph}
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.obsessions}>
                        <h3 className={`hand ${styles.obsessionsTitle}`}>
                            {ABOUT_COPY.obsessionsTitle}
                        </h3>
                        <ul className={styles.notesGrid}>
                            {OBSESSION_NOTES.map((note) => (
                                <li
                                    key={note.id}
                                    className={`${styles.stickyNote} ${styles[`note--${note.color}`]}`}
                                    style={
                                        {
                                            "--note-rotate": `${note.rotation ?? 0}deg`,
                                        } as React.CSSProperties
                                    }
                                >
                                    <span
                                        className={styles.noteEmoji}
                                        aria-hidden="true"
                                    >
                                        {note.emoji}
                                    </span>
                                    <span className={styles.noteLabel}>
                                        {note.label}
                                    </span>
                                    <p className={`hand ${styles.noteText}`}>
                                        {note.note}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.skillsBlock}>
                        <h3 className={styles.skillsTitle}>
                            {ABOUT_COPY.skillsTitle}
                        </h3>
                        <SkillStickers />
                    </div>

                    <p className={`hand ${styles.signature}`}>
                        — {SITE_META.name.split(" ")[0]} ✦
                    </p>
                </div>
            </div>
        </section>
    );
}
