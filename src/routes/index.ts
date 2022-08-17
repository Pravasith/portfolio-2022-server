import { Router } from "express"

import { BASE_URLS } from "@lib/server/api"

import { rateLimiter } from "@utils/index"

import { home } from "@routes/HomeRoutes"
import { getTextGroup } from "@routes/TextGroupRoutes"
import { getProjects } from "@routes/ProjectRoutes"
import { getMediaGroups } from "@routes/MediaGroupRoutes"
import { getBlogs } from "@routes/BlogRoutes"
import { sendEmail } from "@routes/EmailRoutes"

const router = Router()

// Home Route
router.get(BASE_URLS.HOME, home)

// TextGroup Routes
// TODO: Change these later
// router.post(BASE_URLS.TEXT_GROUPS, addTextGroup)
router.get(BASE_URLS.TEXT_GROUPS, getTextGroup)

// MediaGroup Routes
// TODO: Change these later
// router.post(BASE_URLS.MEDIA_GROUPS, addMediaGroup)
router.get(BASE_URLS.MEDIA_GROUPS, getMediaGroups)

// Project Routes
// TODO: Change these later
// router.post(BASE_URLS.PROJECTS, addProject)
router.get(BASE_URLS.PROJECTS, getProjects)

// Blog Routes
// TODO: Change these later
// router.post(BASE_URLS.BLOG, addBlog)
router.get(BASE_URLS.BLOG, getBlogs)

// Email Routes
router.post(BASE_URLS.EMAIL, rateLimiter, sendEmail)

const routes = router

export default routes
