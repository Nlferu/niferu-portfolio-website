import "@/styles/globals.css"
import Header from "@/components/header"
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
            <body className={page.custom}>
                <div className={page.firstColor}></div>
                <div className={page.secondColor}></div>
                <Header />
                <Cursor />
                {children}
                <Footer />
            </body>
        </html>
    )
}
