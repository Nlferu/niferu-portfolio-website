import "../styles/globals.css"

export const metadata = {
    title: "Neftyr Portfolio",
    description: "Portfolio",
}

export default function RootLayout({ children }) {
    return (
        <html>
            <body>{children}</body>
        </html>
    )
}
