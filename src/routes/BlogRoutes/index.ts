import models from "@models/index"

import { RequestHandler } from "express"

const { BlogModel } = models

export const addBlog: RequestHandler = async (_, res) => {
    const userDetails = {
        username: "pravasith",
        fullName: "Pravasith Chinthoju",
        profileImage:
            "https://res.cloudinary.com/pravasith/image/upload/v1657645403/Portfolio%202022/users/pravasith/pravas-front-pic-new.png",
    }

    // const metaData = {
    //     pageTitle: 'Meal Delivery App - UX Design.',
    //     ogSiteName: ''
    //     ogTitle: string
    //     ogType: string
    //     ogUrl: string
    //     twitterCreator: string
    //     description: string
    //     twitterDescription: string
    //     ogDescription: string
    //     ogImageAlt: string
    //     twitterImageAlt: string
    //     ogImage: string
    //     twitterImage: string
    // }

    // export interface BlogsType {
    //     metaData: MetaDataType
    //     page: string
    //     id: string
    //     title: string
    //     timestamp: Date
    //     thumbnail: string
    //     userDetails: UserDetailsType
    //     tags: string[]
    // }

    // res.send(textBlock)
}

export const getBlogs: RequestHandler = async (req, res) => {
    const { page } = req.query

    const textBlock = await BlogModel.find({
        page,
    })

    res.send(textBlock)
}
