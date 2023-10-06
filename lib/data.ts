import abstractImg from "@/public/abstract.png"
import stablecoinImg from "@/public/stablecoin.png"
import digitalImg from "@/public/digital.png"

/** @dev Adding "as const" at the end specifying each object separately (In case we don't have "as const" this objects will be any strings) */
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const

export const projectsData = [
    {
        title: "Abstract Impulse NFT",
        description:
            "NFT marketplace designed for artists. It empowers private art creators to have a tailor-made NFT marketplace and maximizes sale profits by posting an auction in a decentralized and automated way, thanks to Chainlink Keepers.",
        tags: ["Solidity", "JavaScript", "Hardhat", "Graph", "React", "Next.js"],
        imageUrl: abstractImg,
        href: "https://abstract-impulse-front-end.vercel.app/",
    },
    {
        title: "Digital Rights Maykr",
        description:
            "Platform, features an on-chain storage system that ensures the safekeeping of valuable creative works. It issues unique copyright certificates to users under ERC4671. With the ability to lend certificated art to other parties.",
        tags: ["Solidity", "TypeScript", "Hardhat", "React", "Next.js"],
        imageUrl: digitalImg,
        href: "https://digital-rights-maykr.vercel.app/create_certificate",
    },
    {
        title: "NFR Stablecoin",
        description: "Digital currency designed for stability and reliability. It's anchored to $1.00, ensuring a consistent value.",
        tags: ["Solidity", "Foundry", "Remix", "Makefile"],
        imageUrl: stablecoinImg,
        href: "https://github.com/Neftyr/NFR-DeFi-Stablecoin",
    },
] as const

export const skills = [
    "Solidity",
    "Python",
    "JavaScript",
    "TypeScript",
    "MQL5",
    "Java",
    "HTML",
    "CSS",
    "Tailwind",
    "Framer Motion",
    "NextJS",
    "React",
    "GraphQL",
    "Apollo",
    "Foundry",
    "Hardhat",
    "Brownie",
    "Git",
    "Bash",
    "PowerShell",
    "Makefile",
] as const
