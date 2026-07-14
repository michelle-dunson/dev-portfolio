import type { WeekendProject } from "@/lib/types";
import ProjectCard from "@/components/projects/ProjectCard";
import styles from "./ProjectGrid.module.scss";

interface ProjectGridProps {
    projects: WeekendProject[];
}

const ROTATIONS = [-2.5, 1.8, -1.4, 2.2, -0.9, 1.6, -1.8, 0.7];

export default function ProjectGrid({ projects }: ProjectGridProps) {
    return (
        <div className={styles.frame}>
            <div className={styles.board}>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            rotation={ROTATIONS[index % ROTATIONS.length]}
                            settleDelay={(index % 6) * 80}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
