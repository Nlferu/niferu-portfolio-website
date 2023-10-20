import React from "react"
import contactStyle from "@/styles/contact.module.css"
import { FaPaperPlane } from "react-icons/fa"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            className={`${contactStyle.submitButton} ${contactStyle.sbutton} ${pending ? contactStyle.disabledButton : ""}`}
            type="submit"
            disabled={pending}
        >
            {pending ? (
                <div className={contactStyle.spinner}></div>
            ) : (
                <>
                    Submit <FaPaperPlane className={contactStyle.icon} />{" "}
                </>
            )}
        </button>
    )
}
