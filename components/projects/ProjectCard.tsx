"use client";

import Image from "next/image";
import type { WeekendProject } from "@/lib/types";
import { setCursorVariant } from "@/components/ui/CustomCursor";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
    project: WeekendProject;
    rotation?: number;
    settleDelay?: number;
}

export default function ProjectCard({
    project,
    rotation = 0,
    settleDelay = 0,
}: ProjectCardProps) {
    const initial = project.title.charAt(0);
    const accentColor = project.accentColor ?? "#7f5af0";
    const hasThumbnail = Boolean(project.thumbnail);

    return (
        <div
            className={styles.wrapper}
            style={
                {
                    "--rotation": `${rotation}deg`,
                    "--settle-delay": `${settleDelay}ms`,
                } as React.CSSProperties
            }
        >
            <a
                href={project.url}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorVariant("project")}
                onMouseLeave={() => setCursorVariant("default")}
                aria-label={`${project.title} — opens in new tab`}
            >
                <span className={styles.pin} aria-hidden="true">
                    <span className={styles.pinHead} />
                    <span className={styles.pinNeedle} />
                </span>

                <div
                    className={styles.photo}
                    style={{ backgroundColor: accentColor }}
                >
                    {hasThumbnail ? (
                        <Image
                            src={project.thumbnail!}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 50vw, 256px"
                            className={styles.photoImage}
                        />
                    ) : (
                        <span className={styles.photoInitial} aria-hidden="true">
                            {initial}
                        </span>
                    )}
                    <div className={styles.photoGrain} aria-hidden="true" />
                </div>

                <div className={styles.caption}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.tagline}>{project.tagline}</p>
                </div>
            </a>
        </div>
    );
}
