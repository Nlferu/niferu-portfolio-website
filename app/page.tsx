import Cursor from "@/components/cursor"
import Particle from "@/components/particles"
import Intro from "@/components/intro"
import SectionDivider from "@/components/section-divider"
import About from "@/components/about"
import Projects from "@/components/projects"

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Cursor />
            <Particle />
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
        </main>
    )
}
