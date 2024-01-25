import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            className="group flex font-semibold items-center self-center justify-center w-[7rem] gap-2 py-[0.7rem] sm:py-[0.9rem] mt-2
                     text-darklord/80 dark:text-main/75 hover:text-darklord dark:hover:text-main borderBlack borderDevil bg-stone-400 bg-opacity-50
                     dark:bg-[#060606] rounded-full focus:scale-110 hover:scale-110 hover:bg-stone-500 hover:bg-opacity-100 dark:hover:bg-black
                       dark:hover:bg-opacity-80 active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px] disabled:scale-110 disabled:bg-opacity-50"
            type="submit"
            disabled={pending}
        >
            {pending ? (
                <div className="h-6 w-5 animate-spin rounded-full border-b-2 border-darklord dark:border-main"></div>
            ) : (
                <>
                    Submit <FaPaperPlane className="text-sm opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            )}
        </button>
    )
}
