"use client"

import React, { useState, ChangeEvent } from "react"
import SectionHeading from "./section-heading"
import SubmitButton from "./submit-button"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { sendEmail } from "@/actions/sendEmail"
import { useTheme } from "@/context/theme-context"

export default function Contact() {
    const [formData, setFormData] = useState({ senderEmail: "", message: "" })
    const { ref } = useSectionInView("Contact", 1)
    const { theme } = useTheme()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const resetForm = () => {
        setFormData({ senderEmail: "", message: "" })
    }

    return (
        <motion.section
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            ref={ref}
            id="contact"
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-stone-900 dark:text-white">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:wargacki.patryq@gmail.com">
                    wargacki.patryq@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                className="flex flex-col mt-10 text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData)

                    if (error) {
                        toast.error(error, {
                            style: {
                                border: "1px solid #713200",
                                background: theme === "light" ? "white" : "rgba(37, 32, 35, 0.4)",
                                padding: "15px",
                                color: theme === "light" ? "black" : "rgba(203, 207, 204, 1)",
                            },
                            iconTheme: {
                                primary: "#713200",
                                secondary: theme === "light" ? "white" : "black",
                            },
                        })
                        /** @dev Using retrun to stop function after error */
                        return
                    }

                    toast.success("Email sent successfully!", {
                        style: {
                            border: theme === "light" ? "1px solid #713200" : "1px solid rgba(67, 52, 28, 0.8)",
                            background: theme === "light" ? "white" : "rgba(37, 32, 35, 0.4)",
                            padding: "15px",
                            color: theme === "light" ? "black" : "rgba(203, 207, 204, 1)",
                        },
                        iconTheme: {
                            primary: "rgba(49, 169, 73, 1)",
                            secondary: theme === "light" ? "white" : "black",
                        },
                    })
                    resetForm()
                }}
            >
                <input
                    className="h-12 px-4 rounded-lg bg-white bg-opacity-80 focus:bg-opacity-100 borderBlack borderDevil focus:outline focus:outline-2 focus:outline-offset-0 dark:focus:outline-offset-2 focus:outline-stone-500 dark:focus:outline-[#805d39] transition-all duration-75"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={100}
                    placeholder="Your email"
                    value={formData.senderEmail}
                    onChange={handleInputChange}
                />
                <textarea
                    className="h-52 p-4 px-3 rounded-lg bg-white bg-opacity-80 focus:bg-opacity-100 my-[1rem] borderBlack borderDevil focus:outline focus:outline-2 focus:outline-offset-0 dark:focus:outline-offset-2 focus:outline-stone-500 dark:focus:outline-[#805d39] transition-all duration-75"
                    name="message"
                    required
                    maxLength={5000}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleInputChange}
                />

                <SubmitButton />
            </form>
        </motion.section>
    )
}
