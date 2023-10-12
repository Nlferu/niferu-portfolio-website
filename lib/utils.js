export function validateString(value, maxLength) {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false
    }

    return true
}
