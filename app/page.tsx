import Hero from "./containers/hero";
import About from "./containers/about";
import Skills from "./containers/skills";
import Experience from "./containers/experience";
import Contact from "./containers/contact";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </>
    );
};
