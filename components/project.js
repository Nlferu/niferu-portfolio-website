import Image from "next/image"

export default function Project({ title, description, tags, imageUrl }) {
    return (
        <section>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>

            <Image src={imageUrl} alt="Project I worked on" quality={95} />
        </section>
    )
}
