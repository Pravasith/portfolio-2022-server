"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@configs/index"));
const mongoose_1 = __importDefault(require("mongoose"));
const { uri } = index_1.default.mongodbConfig;
const connectToMongoDBWithMongoose = () => {
    mongoose_1.default
        .connect(uri)
        .then(() => {
        console.log("Connected to MongoDB!");
    })
        .catch(err => console.error(err));
};
const mongooseService = { connectToMongoDBWithMongoose };
exports.default = mongooseService;
