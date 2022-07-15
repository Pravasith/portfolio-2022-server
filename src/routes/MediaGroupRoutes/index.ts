import models from "@models/index"

import { RequestHandler } from "express"

const { MediaGroupModel } = models

export const addMediaGroup: RequestHandler = async (req, res) => {
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
