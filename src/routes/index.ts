import { Router } from "express"
import dotenv from "dotenv"
import models from "@models/index"
import { ETextBlockTypes, ETextTypes } from "@models/TextBlocks/interface"
import { API_ROUTE_URLS, BASE_URLS } from "@lib/server/api"

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
        name: "home-section-4",
        type: ETextBlockTypes.HOME_PAGE,
        textBlocks: [
            {
                type: ETextTypes.H1,
                text: `Write to me!`,
            },
        ],
    })

    res.send(textBlock)
})

router.get(API_ROUTE_URLS.GET_TEXT_BLOCKS, async (req, res) => {
    const { TextBlocks } = models
    const { type } = req.query

    const textBlock = await TextBlocks.find({
        type,
    })

    res.send(textBlock)
})

export default router
