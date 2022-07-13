import { RequestHandler, Router } from "express"

import { API_ROUTE_URLS, BASE_URLS } from "@lib/server/api"

import { addTextGroup, getTextGroup } from "@routes/TextGroupRoutes"
import { addProject, getProjects } from "@routes/ProjectRoutes"
import { addBlog, getBlogs } from "@routes/BlogRoutes"
import { addMediaGroup, getMediaGroups } from "@routes/MediaGroupRoutes"
import { addMediaBlock, getMediaBlocks } from "@routes/MediaBlockRoutes"

const router = Router()

const homeRoute: RequestHandler = (_, res) => {
    res.send({
        hello: "Welcome to Pravasith's BE Server!",
    })
}

router.get(BASE_URLS.HOME, homeRoute)

// TextGroup Routes
router.get(API_ROUTE_URLS.ADD_TEXT_GROUP, addTextGroup)
router.get(API_ROUTE_URLS.GET_TEXT_GROUPS, getTextGroup)

// MediaGroup Routes
router.get(API_ROUTE_URLS.ADD_MEDIA_GROUP, addMediaGroup)
router.get(API_ROUTE_URLS.GET_MEDIA_GROUPS, getMediaGroups)

// MediaBlock Routes
router.get(API_ROUTE_URLS.ADD_MEDIA_BLOCK, addMediaBlock)
router.get(API_ROUTE_URLS.GET_MEDIA_BLOCKS, getMediaBlocks)

// Project Routes
router.get(API_ROUTE_URLS.ADD_PROJECT, addProject)
router.get(API_ROUTE_URLS.GET_PROJECTS, getProjects)

// Blog Routes
router.post(API_ROUTE_URLS.ADD_BLOG, addBlog)
router.get(API_ROUTE_URLS.GET_BLOG, getBlogs)

export default router
