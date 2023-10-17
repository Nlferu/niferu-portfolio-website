import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"
import type { SectionName } from "./types"

/** @dev Setting default value for threshold to 75% */
export function useSectionInView(sectionName: SectionName, viewField = 0.75) {
    const { ref, inView } = useInView({
        /** @dev If (viewField)% for example 75% (0-1 scale) of content is in view bool will be true */
        threshold: viewField,
    })
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        /** @dev If section in view and time since click is more than 1s then set this section as active */
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick])

    return { ref }
}
