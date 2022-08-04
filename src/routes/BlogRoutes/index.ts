import models from "@models/index"

import { RequestHandler } from "express"

const { BlogModel } = models

import HttpStatusCode from "@lib/server/statusCodes"
import SendResponse from "@utils/SendResponse"

export const addBlog: RequestHandler = async (req, res) => {
    const sendResponse = new SendResponse()

    try {
        const response = await BlogModel.create(req.body)
        sendResponse.setMessage = "Blog added successfully"
        sendResponse.setBody = response
        res.status(HttpStatusCode.CREATED)
    } catch (e) {
        console.error(e)
        sendResponse.setMessage = "Error adding Blog"
        sendResponse.setError = "Database error"
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    } finally {
        res.send(sendResponse)
    }
}

export const getBlogs: RequestHandler = async (req, res) => {
    const sendResponse = new SendResponse()

    try {
        const { page, category } = req.query
        const response = await BlogModel.find(page ? { page } : { category })
        sendResponse.setMessage = "Blog fetched successfully"
        sendResponse.setBody = response
        res.status(HttpStatusCode.OK)
    } catch (e) {
        console.error(e)
        sendResponse.setMessage = "Error fetching Blog"
        sendResponse.setError = "Database error"
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    } finally {
        res.send(sendResponse)
    }
}
