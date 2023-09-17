import "@/styles/globals.css"
import Header from "@/components/header"
import Particle from "@/components/particles"
import Footer from "@/components/footer"

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
            <body>
                <Header />
                <Particle />
                {children}
                <Footer />
            </body>
        </html>
    )
}
