"use server"

import { Resend } from "resend"
import { validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData) {
    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")

    if (!validateString(senderEmail, 100)) {
        return {
            error: "Invalid sender email",
        }
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        }
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "wargacki.patryq@gmail.com",
            subject: "Message From Neftyr Portfolio Website",
            reply_to: senderEmail,
            text: message,
        })
    } catch (error) {
        return {
            error: error.message,
        }
    }
}
