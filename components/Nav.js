import Link from "next/link"
import nav from "@/styles/nav.module.css"

export default function Nav() {
    return (
        <nav className={nav.nav}>
            <Link className={nav.title} href="/">
                Niferu <span className={nav.dot}>.</span>
            </Link>
            <Link className={nav.underline} href="/">
                Home
            </Link>
            <Link className={nav.underline} href="/">
                About
            </Link>
            <Link className={nav.underline} href="/">
                Education
            </Link>
            <Link className={nav.underline} href="/">
                Skills
            </Link>
            <Link className={nav.underline} href="/">
                Contact
            </Link>
            <Link className={nav.underline} href="/">
                Projects
            </Link>
        </nav>
    )
}
