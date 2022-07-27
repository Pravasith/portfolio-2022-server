import { RequestHandler } from "express"
import models from "@models/index"

const { TextGroupModel } = models

// To be deleted
export const addTextGroup: RequestHandler = async (req, res) => {
    let response: any = { message: "text block error" }

    try {
        response = await TextGroupModel.create(req.body)
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}

export const getTextGroup: RequestHandler = async (req, res) => {
    const { page } = req.query

    let response: any = { message: "text block error" }

    try {
        response = await TextGroupModel.find({
            page,
        })
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}
