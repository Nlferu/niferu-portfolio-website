import abstractImg from "@/public/abstract.png"
import stablecoinImg from "@/public/stablecoin.png"
import digitalImg from "@/public/digital.png"

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
        name: "Education",
        hash: "#education",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
]

export const projectsData = [
    {
        title: "Abstract Impulse NFT",
        description:
            "NFT marketplace designed for artists. It empowers private art creators to have a tailor-made NFT marketplace and maximizes sale profits by posting an auction in a decentralized and automated way, thanks to Chainlink Keepers.",
        tags: ["Solidity", "JavaScript", "Hardhat", "Graph", "React", "Next.js"],
        imageUrl: abstractImg,
    },
    {
        title: "Digital Rights Maykr",
        description:
            "Platform, features an on-chain storage system that ensures the safekeeping of valuable creative works. It issues unique copyright certificates to users under ERC4671. With the ability to lend certificated art to other parties.",
        tags: ["Solidity", "TypeScript", "Hardhat", "React", "Next.js"],
        imageUrl: digitalImg,
    },
    {
        title: "NFR Stablecoin",
        description: "Digital currency designed for stability and reliability. It's anchored to $1.00, ensuring a consistent value.",
        tags: ["Solidity", "Foundry", "Remix", "Makefile"],
        imageUrl: stablecoinImg,
    },
]
