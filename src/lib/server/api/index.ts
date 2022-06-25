export const BASE_URL = "/"
export const BASE_URL_API = BASE_URL + "api"

export const BASE_URLS = {
    HOME: BASE_URL,
    TEXT_BLOCKS: BASE_URL_API + "/textblocks",
    PROJECTS: BASE_URL_API + "/projects",
}

export const API_ROUTE_URLS = {
    ADD_TEXT_BLOCK: BASE_URLS.TEXT_BLOCKS + "/add",
    ADD_PROJECTS: BASE_URLS.PROJECTS + "/add",
    GET_TEXT_BLOCKS: BASE_URLS.TEXT_BLOCKS,
    GET_PROJECTS: BASE_URLS.PROJECTS,
}
