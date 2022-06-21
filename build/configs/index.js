"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDBConfig_1 = __importDefault(require("@configs/mongoDBConfig"));
const configs = {
    mongodbConfig: mongoDBConfig_1.default,
};
exports.default = configs;
