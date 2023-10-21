import "@/styles/globals.css"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThemeSwitch from "@/components/theme-switch"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

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
            <body className={inter.className}>
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </ActiveSectionContextProvider>

                <ThemeSwitch />
                <Toaster
                    position="top-right"
                    containerStyle={{
                        top: "5rem",
                    }}
                />
            </body>
        </html>
    )
}
