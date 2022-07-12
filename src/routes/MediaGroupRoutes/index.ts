import models from "@models/index"
import { API_ROUTE_URLS } from "@lib/server/api"

import { random15Id } from "@utils/index"
import { EMediaType } from "@models/MediaBlockModel/interface"

import { RequestHandler } from "express"

const { MediaGroupModel } = models

export const addMediaGroup: RequestHandler = async (_, res) => {
    const mediaBlock1 = {
        id: "meal-delivery-app-" + random15Id(),
        src: "https://res.cloudinary.com/pravasith/image/upload/v1657572977/Portfolio%202022/meal-delivery-app-01-cover-image.png",
        alt: "Meal Delivery App, cover image.",
        type: EMediaType.IMAGE,
        page: "meal-delivery-app",
        width: 1222,
        height: 982,
        caption: null,
        showCaption: false,
        hyperlink: null,
        order: 1,
    }

    const mediaBlock2 = {
        id: "meal-delivery-app-" + random15Id(),
        src: "https://res.cloudinary.com/pravasith/image/upload/v1657572977/Portfolio%202022/meal-delivery-app-01-cover-image.png",
        alt: "Meal Delivery App, cover image.",
        type: EMediaType.IMAGE,
        page: "meal-delivery-app",
        width: 1222,
        height: 982,
        caption: null,
        showCaption: false,
        hyperlink: null,
        order: 4,
    }

    const mediaGroup = await MediaGroupModel.create({
        name: "meal-delivery-app",
        mediaBlocks: [mediaBlock1, mediaBlock2],
    })

    res.send(mediaGroup)
}

export const getMediaGroups: RequestHandler = async (req, res) => {
    const { page } = req.query

    const mediaGroup = await MediaGroupModel.find({
        page,
    })

    res.send(mediaGroup)
}
