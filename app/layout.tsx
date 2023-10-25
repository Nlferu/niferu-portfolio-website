import "@/styles/globals.css"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ThemeSwitch from "@/components/theme-switch"
import ThemeContextProvider from "@/context/theme-context"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

/**
 * This is our website title and description
 * we can override it in any other page of our website
 */
export const metadata = {
    title: "Niferu Portfolio",
    description: "Portfolio",
}

/** This below will be adding below stuff to all of our website pages */
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            {/* <body className={`${inter.className} bg-gray-500 text-gray-950 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-gray-50 dark:text-opacity-90`}> */}
            <body className={`${inter.className} pt-28 sm:pt-36 bg-gray-200 dark:bg-devil`}>
                <div className="bg-[#f8f8f8] dark:bg-[#671f91a8] absolute top-[1rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
                <div className="bg-[#fcfcfc] dark:bg-[#48457c] absolute top-[9rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />

                        <Toaster
                            position="top-right"
                            containerStyle={{
                                top: "5rem",
                            }}
                        />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    )
}
