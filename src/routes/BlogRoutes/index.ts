import models from "@models/index"

import { RequestHandler } from "express"

const { BlogModel } = models

export const addBlog: RequestHandler = async (req, res) => {
    let response: any = { message: "blog database error" }

    try {
        response = await BlogModel.create(req.body)
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}

export const getBlogsByPage: RequestHandler = async (req, res) => {
    const { page } = req.query

    let response: any = { message: "blog database error" }

    try {
        response = await BlogModel.find({
            page,
        })
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}

export const getBlogsByCategory: RequestHandler = async (req, res) => {
    const { category } = req.query

    let response: any = { message: "blog database error" }

    try {
        response = await BlogModel.find({
            category,
        })
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}
