import body from "@/styles/main.module.css"
import Cursor from "@/components/cursor"
import Intro from "@/components/intro"

export default function Home() {
    return (
        <main className={body.body}>
            <Cursor />
            <Intro />
        </main>
    )
}
