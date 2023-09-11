import "@/styles/globals.css"
import Nav from "@/components/nav"
import Cursor from "@/components/cursor"
import Footer from "@/components/footer"
import page from "@/styles/page.module.css"

/**
 * This is our website title and description
 * we can override it in any other page of our website
 */

export const metadata = {
    title: "Neftyr Portfolio",
    description: "Portfolio",
}

/** This below will be adding below stuff to all of our website pages */

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body class={page.custom}>
                <div class={page.firstColor}></div>
                <div class={page.secondColor}></div>
                <Nav />
                <Cursor />
                {children}
                <Footer />
            </body>
        </html>
    )
}
