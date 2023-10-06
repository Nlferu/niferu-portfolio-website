import React from "react"
import abstractImg from "@/public/abstract.png"
import stablecoinImg from "@/public/stablecoin.png"
import digitalImg from "@/public/digital.png"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"

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
]

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
]

export const skillsData = [
    {
        title: "Solidity",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
        href: "https://docs.soliditylang.org",
        height: 40,
        width: 40,
    },
    {
        title: "Python",
        imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        href: "https://www.python.org",
        height: 40,
        width: 40,
    },
    {
        title: "JavaScript",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
        href: "https://www.javascript.com",
        height: 40,
        width: 40,
    },
    {
        title: "TypeScript",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
        href: "https://www.typescriptlang.org",
        height: 40,
        width: 40,
    },
    { title: "MQL5", imageUrl: "https://c.mql5.com/i/community/logo_mql5-2.png", href: "https://www.mql5.com", width: 57, height: 37 },
    {
        title: "Java",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        href: "https://www.java.com",
        height: 40,
        width: 40,
    },
    {
        title: "HTML",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        href: "https://www.w3.org/html/",
        height: 40,
        width: 40,
    },
    {
        title: "CSS",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        href: "https://www.w3schools.com/css/",
        height: 40,
        width: 40,
    },
    {
        title: "Tailwind",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        href: "https://tailwindcss.com/",
        width: 40,
        height: 40,
    },
    {
        title: "Framer Motion",
        imageUrl: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
        href: "https://www.framer.com/motion/",
        width: 40,
        height: 40,
    },
    { title: "NextJs", imageUrl: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", href: "https://nextjs.org", width: 70, height: 60 },
    {
        title: "React",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        href: "https://reactjs.org",
        height: 40,
        width: 40,
    },
    {
        title: "GraphQL",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png",
        href: "https://graphql.org/",
        width: 40,
        height: 40,
    },
    {
        title: "Apollo",
        imageUrl: "https://static-00.iconduck.com/assets.00/apollo-icon-2048x2048-zl6zcxhq.png",
        href: "https://www.apollographql.com/docs/react/",
        width: 40,
        height: 40,
    },
    {
        title: "Foundry",
        imageUrl: "https://raw.githubusercontent.com/foundry-rs/.github/main/profile/logo.png",
        href: "https://github.com/foundry-rs",
        height: 40,
        width: 40,
    },
    {
        title: "Hardhat",
        imageUrl: "https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png",
        href: "https://hardhat.org/",
        height: 30,
        width: 40,
    },
    {
        title: "Brownie",
        imageUrl: "https://www.scnsoft.com/technologies-logos/blockchain/brownie-logo.svg",
        href: "https://eth-brownie.readthedocs.io/en/stable/",
        height: 40,
        width: 40,
    },
    { title: "Git", imageUrl: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", href: "https://git-scm.com", width: 40, height: 40 },
    {
        title: "Bash",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png",
        href: "https://www.gnu.org/software/bash/manual/bash.html",
        height: 40,
        width: 40,
    },
    {
        title: "PowerShell",
        imageUrl: "https://static-00.iconduck.com/assets.00/powershell-icon-256x193-nsgfym8m.png",
        href: "https://learn.microsoft.com",
        height: 35,
        width: 40,
    },
    {
        title: "Makefile",
        imageUrl: "https://static-00.iconduck.com/assets.00/text-x-makefile-icon-394x512-gezezj2o.png",
        href: "https://makefiletutorial.com/",
        width: 40,
        height: 50,
    },
]

export const experienceData = [
    {
        title: "Derivatives Specialist",
        location: "State Street Bank",
        description: "I graduated after 3 years of studying and immediately found a job as a derivatives specialist.",
        icon: React.createElement(LuGraduationCap),
        date: "2016-2020",
    },
    {
        title: "Senior Specialist Operations Department",
        location: "Brown Brothers Harriman",
        description: "I'm working as senior specialist managing fund mergers, client onboardings and transfers of securities into custody",
        icon: React.createElement(CgWorkAlt),
        date: "2020 - present",
    },
    {
        title: "Full-Stack Developer",
        location: "Krakow, Poland",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes Solidity, Python, JavaScript, MQL5, React, Next.js and more. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2020 - present",
    },
]
