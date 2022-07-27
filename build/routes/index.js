"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("@lib/server/api");
const TextGroupRoutes_1 = require("@routes/TextGroupRoutes");
const ProjectRoutes_1 = require("@routes/ProjectRoutes");
const BlogRoutes_1 = require("@routes/BlogRoutes");
const MediaGroupRoutes_1 = require("@routes/MediaGroupRoutes");
const EmailRoutes_1 = require("@routes/EmailRoutes");
const router = (0, express_1.Router)();
const homeRoute = (_, res) => {
    res.send({
        hello: "Welcome to Pravasith's BE Server!",
    });
};
router.get(api_1.BASE_URLS.HOME, homeRoute);
// TextGroup Routes
router.post(api_1.API_ROUTE_URLS.ADD_TEXT_GROUP, TextGroupRoutes_1.addTextGroup);
router.get(api_1.API_ROUTE_URLS.GET_TEXT_GROUPS, TextGroupRoutes_1.getTextGroup);
// MediaGroup Routes
router.post(api_1.API_ROUTE_URLS.ADD_MEDIA_GROUP, MediaGroupRoutes_1.addMediaGroup);
router.get(api_1.API_ROUTE_URLS.GET_MEDIA_GROUPS, MediaGroupRoutes_1.getMediaGroups);
// Project Routes
router.get(api_1.API_ROUTE_URLS.ADD_PROJECT, ProjectRoutes_1.addProject);
router.get(api_1.API_ROUTE_URLS.GET_PROJECTS, ProjectRoutes_1.getProjects);
// Blog Routes
router.post(api_1.API_ROUTE_URLS.ADD_BLOG, BlogRoutes_1.addBlog);
router.get(api_1.API_ROUTE_URLS.GET_BLOGS, BlogRoutes_1.getBlogsByPage);
router.get(api_1.API_ROUTE_URLS.GET_BLOGS_CATEGORIES, BlogRoutes_1.getBlogsByCategory);
// Email Routes
router.post(api_1.BASE_URLS.EMAIL, EmailRoutes_1.sendEmail);
const routes = router;
exports.default = routes;
