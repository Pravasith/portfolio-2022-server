import { Router } from "express"
import dotenv from "dotenv"
import models from "@models/index"
import { ETextTypes } from "@models/TextBlocks/interface"
import { API_ROUTE_URLS, BASE_URLS } from "@lib/server/api"

// import urls from "./urls"

dotenv.config()

const router = Router()

router.get(BASE_URLS.HOME, (_, res) => {
    res.send({
        hello: "Welcome to Pravasith's BE Server!",
    })
})

router.get(API_ROUTE_URLS.CREATE_TEXT_BLOCK, async (_, res) => {
    const { TextBlocks } = models

    const textBlock = await TextBlocks.create({
        name: "home-section-1",
        textBlocks: [
            {
                type: ETextTypes.H1,
                text: `A Product Designer :br: turned:br: Software Engineer.`,
            },
            {
                type: ETextTypes.P,
                text: "Hey, I'm Pravas 👋🏼, a :span:>Full Stack TypeScript/JavaScript<:span: developer who is passionate about delivering the best :span:> User Experiences 🎨<:span: & loves :span:> optimizing data 🚀<:span: by utilizing data structures and writing algorithms.",
            },
        ],
    })

    res.send(textBlock)
})

export default router
