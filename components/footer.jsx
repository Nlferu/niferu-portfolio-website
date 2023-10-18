import footer from "@/styles/footer.module.css"

export default function Footer() {
    return (
        <footer className={footer.footer}>
            <small className={footer.small}>&copy; 2030 Niferu. All rights reserved.</small>
            <p className={footer.p}>
                <span>About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email
                & Resend, Vercel hosting.
            </p>
        </footer>
    )
}
