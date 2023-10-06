import "@/styles/globals.css"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Header from "@/components/header"
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
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </ActiveSectionContextProvider>
            </body>
        </html>
    )
}
