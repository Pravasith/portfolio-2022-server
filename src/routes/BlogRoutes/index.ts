import { random15Id } from "@utils/index"
import models from "@models/index"

import { RequestHandler } from "express"

const { BlogModel } = models

export const addBlog: RequestHandler = async (req, res) => {
    const userDetails = {
        username: "pravasith",
        fullName: "Pravasith Chinthoju",
        profileImage:
            "https://res.cloudinary.com/pravasith/image/upload/v1657645403/Portfolio%202022/users/pravasith/pravas-front-pic-new.png",
    }

    const metaData = {
        pageTitle: "Meal Delivery App, A UX Case Study 🔶 ",
        ogSiteName: "pravasith.com",
        ogTitle: "Meal Delivery App, A UX Case Study 🔶 ",
        ogType: "website",
        ogUrl: "https://pravasith.com/blogs/meal-delivery-app",
        twitterCreator: "@pravasith",
        description:
            "A case study on Meal-Delivery Apps, User-Experience design that values great food, local restaurants, and authenticity. Etsy for food!",
        twitterDescription:
            "A case study on Meal-Delivery Apps, User-Experience design that values great food, local restaurants, and authenticity. Etsy for food!",
        ogDescription:
            "A case study on Meal-Delivery Apps, User-Experience design that values great food, local restaurants, and authenticity. Etsy for food!",
        ogImageAlt:
            "Meal Delivery App Screenshot. designed by Pravasith Chinthoju (https://pravasith.com/)",
        twitterImageAlt:
            "Meal Delivery App Screenshot. designed by Pravasith Chinthoju (https://pravasith.com/)",
        ogImage:
            "https://res.cloudinary.com/pravasith/image/upload/v1657655540/Portfolio%202022/projects/meal-delivery-app-cover.png",
        twitterImage:
            "https://res.cloudinary.com/pravasith/image/upload/v1657655540/Portfolio%202022/projects/meal-delivery-app-cover.png",
    }

    const blogData = {
        metaData,
        page: "meal-delivery-app",
        id: "meal-delivery-app-" + random15Id(),
        title: "Meal Delivery App, A UX Case Study",
        timestamp: Date.now(),
        thumbnail:
            "https://res.cloudinary.com/pravasith/image/upload/v1657655540/Portfolio%202022/projects/meal-delivery-app-cover.png",
        userDetails: userDetails,
        tags: ["UX Design", "Product Design"],
    }

    const blog = await BlogModel.create(req.body)

    // console.log()

    res.send(blog)
}

export const getBlogs: RequestHandler = async (req, res) => {
    const { page } = req.query

    const blog = await BlogModel.find({
        page,
    })

    res.send(blog)
}
