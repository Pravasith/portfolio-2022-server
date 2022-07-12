import models from "@models/index"
import { API_ROUTE_URLS } from "@lib/server/api"

import { RequestHandler, Router } from "express"

const { MediaBlockModel } = models

export const addMediaBlock: RequestHandler = async (_, res) => {
    // const textBlock = await MediaBlockModel.create({
    //     src: "https://folio-pics.s3.eu-west-2.amazonaws.com/project-3-cover.jpg",
    //     alt: "AR Helmet",
    //     type: EMediaType.IMAGE,
    //     id: "ar-helmet",
    //     width: 1000,
    //     height: 572,
    //     page: "fun",
    //     caption: "AR Helmet",
    //     showCaption: true,
    //     hyperlink: "/blogs/ar-helmet",
    // })
    // res.send(textBlock)
}

export const getMediaBlocks: RequestHandler = async (req, res) => {
    const { page } = req.query

    const textBlock = await MediaBlockModel.find({
        page,
    })

    res.send(textBlock)
}
