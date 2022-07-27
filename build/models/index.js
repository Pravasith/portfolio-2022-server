"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MediaGroupModel_1 = __importDefault(require("@models/MediaGroupModel"));
const ProjectModel_1 = __importDefault(require("@models/ProjectModel"));
const TextGroupModel_1 = __importDefault(require("@models/TextGroupModel"));
const BlogModel_1 = __importDefault(require("@models/BlogModel"));
const models = {
    ProjectModel: ProjectModel_1.default,
    MediaGroupModel: MediaGroupModel_1.default,
    TextGroupModel: TextGroupModel_1.default,
    BlogModel: BlogModel_1.default,
};
exports.default = models;
