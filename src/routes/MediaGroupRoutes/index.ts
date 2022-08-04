import models from "@models/index"

import { RequestHandler } from "express"

const { MediaGroupModel } = models
import SendResponse from "@utils/SendResponse"

import HttpStatusCode from "@lib/server/statusCodes"

export const addMediaGroup: RequestHandler = async (req, res) => {
    const sendResponse = new SendResponse()

    try {
        const response = await MediaGroupModel.create(req.body)
        sendResponse.setMessage = "MediaGroup added successfully"
        sendResponse.setBody = response
        res.status(HttpStatusCode.CREATED)
    } catch (e) {
        console.error(e)
        sendResponse.setMessage = "Error adding MediaGroup"
        sendResponse.setError = "Database error"
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    } finally {
        res.send(sendResponse)
    }
}

export const getMediaGroups: RequestHandler = async (req, res) => {
    const sendResponse = new SendResponse()

    try {
        const { page } = req.query
        const response = await MediaGroupModel.find({ page })
        sendResponse.setMessage = "MediaGroup fetched successfully"
        sendResponse.setBody = response
        res.status(HttpStatusCode.OK)
    } catch (e) {
        console.error(e)
        sendResponse.setMessage = "Error fetching MediaGroup"
        sendResponse.setError = "Database error"
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    } finally {
        res.send(sendResponse)
    }
}
