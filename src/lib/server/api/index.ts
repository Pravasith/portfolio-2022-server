export const BASE_URL = "/"
export const BASE_URL_API = BASE_URL + "api"

export const BASE_URLS = {
    HOME: BASE_URL,
    TEXT_GROUPS: BASE_URL_API + "/text-groups",
    PROJECTS: BASE_URL_API + "/projects",
    MEDIA: BASE_URL_API + "/media",
    MEDIA_GROUPS: BASE_URL_API + "/media-groups",
    BLOG: BASE_URL_API + "/blog",
}

export const API_ROUTE_URLS = {
    ADD_TEXT_GROUP: BASE_URLS.TEXT_GROUPS + "/add",
    GET_TEXT_GROUPS: BASE_URLS.TEXT_GROUPS,

    ADD_PROJECT: BASE_URLS.PROJECTS + "/add",
    GET_PROJECTS: BASE_URLS.PROJECTS,

    ADD_MEDIA_BLOCK: BASE_URLS.MEDIA + "/add",
    GET_MEDIA_BLOCKS: BASE_URLS.MEDIA,

    ADD_MEDIA_GROUP: BASE_URLS.MEDIA_GROUPS + "/add",
    GET_MEDIA_GROUPS: BASE_URLS.MEDIA_GROUPS,

    ADD_BLOG: BASE_URLS.BLOG + "/add",
    GET_BLOGS: BASE_URLS.BLOG,
    GET_BLOGS_CATEGORIES: BASE_URLS.BLOG + "/categories",
}
