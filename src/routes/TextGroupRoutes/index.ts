import { RequestHandler } from "express"
import models from "@models/index"

import HttpStatusCode from "@lib/server/statusCodes"
import SendResponse from "@utils/SendResponse"

const { TextGroupModel } = models

export const addTextGroup: RequestHandler = async (req, res) => {
    const sendResponse = new SendResponse()

    try {
        const response = await TextGroupModel.create(req.body)
        sendResponse.setMessage = "TextGroup added successfully"
        sendResponse.setBody = response
        res.status(HttpStatusCode.CREATED)
    } catch (e) {
        console.error(e)
        sendResponse.setMessage = "Error adding TextGroup"
        sendResponse.setError = "Database error"
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    } finally {
        res.send(sendResponse)
    }
}

export const getTextGroup: RequestHandler = async (req, res) => {
    const sendResponse = new SendResponse()

    try {
        const { page } = req.query
        const response = await TextGroupModel.find({ page })
        sendResponse.setMessage = "TextGroup fetched successfully"
        sendResponse.setBody = response
        res.status(HttpStatusCode.OK)
    } catch (e) {
        console.error(e)
        sendResponse.setMessage = "Error fetching TextGroup"
        sendResponse.setError = "Database error"
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    } finally {
        res.send(sendResponse)
    }
}
