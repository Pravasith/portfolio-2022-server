export const random15Id = () => {
    let result = ""
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 15; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]

    return result
}
