import { PROJECTS_SECTION_COPY } from "@/lib/constants";
import { weekendProjects } from "@/content/projects";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionLabel from "@/components/ui/SectionLabel";
import styles from "./WeekendProjects.module.scss";
import gridStyles from "../projects/ProjectGrid.module.scss";

export default function WeekendProjects() {
    return (
        <section id="projects" className={gridStyles.section}>
            <div className={gridStyles.sectionInner}>
                <header className={styles.header}>
                    <SectionLabel>{PROJECTS_SECTION_COPY.label}</SectionLabel>
                    <h2 className={styles.title}>
                        {PROJECTS_SECTION_COPY.title}
                    </h2>
                    <p className={styles.subtitle}>
                        {PROJECTS_SECTION_COPY.subtitle}
                    </p>
                </header>
                <ProjectGrid projects={weekendProjects} />
            </div>
        </section>
    );
}
