import { BlogsType, MetaDataType, UserDetailsType } from "./interface"

import { Schema, model } from "mongoose"

const userDetailsSchema = new Schema<UserDetailsType>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
})

const metaDataSchema = new Schema<MetaDataType>({
    pageTitle: {
        type: String,
        required: true,
    },
    ogSiteName: {
        type: String,
        required: true,
    },
    ogTitle: {
        type: String,
        required: true,
    },
    ogType: {
        type: String,
        required: true,
    },
    ogUrl: {
        type: String,
        required: true,
    },
    twitterCreator: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    twitterDescription: {
        type: String,
        required: true,
    },
    ogDescription: {
        type: String,
        required: true,
    },
    ogImageAlt: {
        type: String,
        required: true,
    },
    twitterImageAlt: {
        type: String,
        required: true,
    },
    ogImage: {
        type: String,
        required: true,
    },
    twitterImage: {
        type: String,
        required: true,
    },
})

const blogSchema = new Schema<BlogsType>({
    metaData: {
        type: metaDataSchema,
        required: true,
    },
    page: {
        type: String,
        required: true,
        unique: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    userDetails: {
        type: userDetailsSchema,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
})

const BlogModel = model<BlogsType>("Blog", blogSchema)

export default BlogModel
