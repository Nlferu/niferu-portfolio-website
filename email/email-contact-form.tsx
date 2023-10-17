import React from "react"
import emailStyle from "@/styles/email.module.css"
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components"

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

export default function EmailContactForm({ message, senderEmail }: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Body className={emailStyle.body}>
                <Container>
                    <Section className={emailStyle.section}>
                        <Heading className={emailStyle.heading}>Message from the Neftyr contact form</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>The sender's email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}
