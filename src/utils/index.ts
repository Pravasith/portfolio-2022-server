import rateLimit from "express-rate-limit"

export const random15Id = () => {
    let result = ""
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 15; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]

    return result
}

export const rateLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 1 Day
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
