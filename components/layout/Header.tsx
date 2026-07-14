"use client";

import Link from "next/link";
import { SITE_META } from "@/lib/constants";
import SectionNav from "@/components/layout/SectionNav";
import styles from "./Header.module.scss";

export default function Header() {
    const firstName = SITE_META.name.split(" ")[0];

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="#hero" className={styles.logo}>
                    {firstName}
                    <span className={styles.logoAccent}>.</span>
                </Link>
                <SectionNav />
            </div>
        </header>
    );
}
