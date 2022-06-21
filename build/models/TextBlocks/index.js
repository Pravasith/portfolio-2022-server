"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const textBlockSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    textColorClassName: String,
    spanColorClassName: String,
});
const textBlocksSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    textBlocks: [
        {
            type: textBlockSchema,
            required: true,
        },
    ],
});
exports.default = (0, mongoose_1.model)("TextBlock", textBlocksSchema);
