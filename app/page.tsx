import FloatingNav from "@/components/layout/FloatingNav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WeekendProjects from "@/components/sections/WeekendProjects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <FloatingNav />
            <main>
                <Hero />
                <WeekendProjects />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
