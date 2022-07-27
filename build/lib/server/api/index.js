"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ROUTE_URLS = exports.BASE_URLS = exports.BASE_URL_API = exports.BASE_URL = void 0;
exports.BASE_URL = "/";
const API_VERSION = "/v1";
exports.BASE_URL_API = exports.BASE_URL + "api" + API_VERSION;
exports.BASE_URLS = {
    HOME: exports.BASE_URL,
    TEXT_GROUPS: exports.BASE_URL_API + "/text-groups",
    PROJECTS: exports.BASE_URL_API + "/projects",
    MEDIA: exports.BASE_URL_API + "/media",
    MEDIA_GROUPS: exports.BASE_URL_API + "/media-groups",
    BLOG: exports.BASE_URL_API + "/blog",
    EMAIL: exports.BASE_URL_API + "/email",
};
exports.API_ROUTE_URLS = {
    ADD_TEXT_GROUP: exports.BASE_URLS.TEXT_GROUPS + "/add",
    GET_TEXT_GROUPS: exports.BASE_URLS.TEXT_GROUPS,
    ADD_PROJECT: exports.BASE_URLS.PROJECTS + "/add",
    GET_PROJECTS: exports.BASE_URLS.PROJECTS,
    ADD_MEDIA_BLOCK: exports.BASE_URLS.MEDIA + "/add",
    GET_MEDIA_BLOCKS: exports.BASE_URLS.MEDIA,
    ADD_MEDIA_GROUP: exports.BASE_URLS.MEDIA_GROUPS + "/add",
    GET_MEDIA_GROUPS: exports.BASE_URLS.MEDIA_GROUPS,
    ADD_BLOG: exports.BASE_URLS.BLOG + "/add",
    GET_BLOGS: exports.BASE_URLS.BLOG,
    GET_BLOGS_CATEGORIES: exports.BASE_URLS.BLOG + "/categories",
};
