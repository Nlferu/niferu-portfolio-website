import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            className="group flex font-semibold items-center self-center justify-center w-[7rem] gap-2 py-[0.7rem] sm:py-[0.9rem]
                     text-nite dark:text-alfa hover:text-lord dark:hover:text-god borderBlack borderDevil bg-stone-400 bg-opacity-50
                     dark:bg-black dark:bg-opacity-50 rounded-full focus:scale-110 hover:scale-110 hover:bg-stone-500 hover:bg-opacity-100 dark:hover:bg-black
                       dark:hover:bg-opacity-80 active:scale-105 duration-custom ease-customBezier hover:translate-y-[-4px] disabled:scale-100 disabled:bg-opacity-50"
            type="submit"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-lord dark:border-god"></div>
            ) : (
                <>
                    Submit <FaPaperPlane className="text-sm opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </>
            )}
        </button>
    )
}
