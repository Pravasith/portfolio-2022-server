export const BASE_URL = "/"
const API_VERSION = "/v1"
export const BASE_URL_API = BASE_URL + "api" + API_VERSION

export const BASE_URLS = {
    HOME: BASE_URL,
    TEXT_GROUPS: BASE_URL_API + "/text-groups",
    PROJECTS: BASE_URL_API + "/projects",
    MEDIA: BASE_URL_API + "/media",
    MEDIA_GROUPS: BASE_URL_API + "/media-groups",
    BLOG: BASE_URL_API + "/blog",
    EMAIL: BASE_URL_API + "/email",
}
