"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ROUTE_URLS = exports.BASE_URLS = exports.BASE_URL_API = exports.BASE_URL = void 0;
exports.BASE_URL = "/";
exports.BASE_URL_API = exports.BASE_URL + "/api";
exports.BASE_URLS = {
    HOME: exports.BASE_URL,
    TEXT_BLOCKS: exports.BASE_URL_API + "/textblocks",
};
exports.API_ROUTE_URLS = {
    CREATE_TEXT_BLOCK: exports.BASE_URLS.TEXT_BLOCKS + "/create",
};
