"use server"

import React from "react"
import EmailContactForm from "@/email/email-contact-form"
import { Resend } from "resend"
import { validateString, getErrorMessage } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
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

    let data

    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.com>", //dev
            to: "wargacki.patryq@gmail.com",
            subject: "Message From Neftyr Portfolio Website",
            reply_to: senderEmail,
            react: React.createElement(EmailContactForm, {
                message: message,
                senderEmail: senderEmail,
            }),
        })
    } catch (error) {
        return {
            error: getErrorMessage(error),
        }
    }

    return { data }
}
