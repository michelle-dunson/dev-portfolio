"use client";

import { useCallback, useRef, useState } from "react";
import type { WeekendProject } from "@/lib/types";
import ProjectCard from "@/components/projects/ProjectCard";
import styles from "./ProjectGrid.module.scss";

interface ProjectGridProps {
    projects: WeekendProject[];
}

const ROTATIONS = [-2.5, 1.8, -1.4, 2.2, -0.9, 1.6, -1.8, 0.7];
const SWIPE_THRESHOLD = 48;

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const count = projects.length;
    const canGoPrev = index > 0;
    const canGoNext = index < count - 1;
    const current = projects[index];

    const goPrev = useCallback(
        () => setIndex((i) => Math.max(0, i - 1)),
        [],
    );
    const goNext = useCallback(
        () => setIndex((i) => Math.min(count - 1, i + 1)),
        [count],
    );

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;

        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > SWIPE_THRESHOLD && canGoPrev) goPrev();
        else if (delta < -SWIPE_THRESHOLD && canGoNext) goNext();

        touchStartX.current = null;
    };

    return (
        <div className={styles.frame}>
            <div className={styles.board}>
                <div
                    className={styles.carousel}
                    aria-roledescription="carousel"
                    aria-label="Weekend projects"
                >
                    <button
                        type="button"
                        className={styles.arrow}
                        onClick={goPrev}
                        disabled={!canGoPrev}
                        aria-label="Previous project"
                    >
                        <span aria-hidden="true">←</span>
                    </button>

                    <div
                        className={styles.carouselViewport}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            key={current.id}
                            className={styles.carouselSlide}
                            aria-live="polite"
                        >
                            <ProjectCard
                                project={current}
                                rotation={ROTATIONS[index % ROTATIONS.length]}
                                settleDelay={0}
                                imageSizes="(max-width: 767px) 70vw, 256px"
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className={styles.arrow}
                        onClick={goNext}
                        disabled={!canGoNext}
                        aria-label="Next project"
                    >
                        <span aria-hidden="true">→</span>
                    </button>

                    <p className={styles.carouselStatus}>
                        <span className="sr-only">
                            Project {index + 1} of {count}:{" "}
                        </span>
                        <span aria-hidden="true">
                            {index + 1} / {count}
                        </span>
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            rotation={ROTATIONS[i % ROTATIONS.length]}
                            settleDelay={(i % 6) * 80}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
