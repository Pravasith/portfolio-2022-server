import models from "@models/index"

import { RequestHandler } from "express"

const { MediaGroupModel } = models

export const addMediaGroup: RequestHandler = async (req, res) => {
    // const mediaBlock1 = {
    //     id: "meal-delivery-app-" + random15Id(),
    //     src: "https://res.cloudinary.com/pravasith/image/upload/v1657572977/Portfolio%202022/meal-delivery-app-01-cover-image.png",
    //     alt: "Meal Delivery App, cover image.",
    //     type: EMediaType.IMAGE,
    //     page: "meal-delivery-app",
    //     width: 1222,
    //     height: 982,
    //     caption: null,
    //     showCaption: false,
    //     hyperlink: null,
    //     order: 1,
    // }

    // const mediaBlock2 = {
    //     id: "meal-delivery-app-" + random15Id(),
    //     src: "https://res.cloudinary.com/pravasith/image/upload/v1657572977/Portfolio%202022/meal-delivery-app-01-cover-image.png",
    //     alt: "Meal Delivery App, cover image.",
    //     type: EMediaType.IMAGE,
    //     page: "meal-delivery-app",
    //     width: 1222,
    //     height: 982,
    //     caption: null,
    //     showCaption: false,
    //     hyperlink: null,
    //     order: 4,
    // }

    // const mediaGroup = await MediaGroupModel.create({
    //     name: "meal-delivery-app",
    //     mediaBlocks: [mediaBlock1, mediaBlock2],
    // })

    let response: any = { message: "media group database error" }

    try {
        response = await MediaGroupModel.create(req.body)
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}

export const getMediaGroups: RequestHandler = async (req, res) => {
    const { page } = req.query

    let response: any = { message: "media group database error" }

    try {
        response = await MediaGroupModel.find({
            page,
        })
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}
