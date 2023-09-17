import Cursor from "@/components/cursor"
import Particle from "@/components/particles"
import Intro from "@/components/intro"

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Cursor />
            <Particle />
            <Intro />
        </main>
    )
}
