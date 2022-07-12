import { BlockGroupTypes } from "../interface"
import { Schema, model } from "mongoose"
import { TextGroupsType, TextBlockType } from "./interface"

const textBlockSchema = new Schema<TextBlockType>({
    type: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
})

const textGroupsSchema = new Schema<TextGroupsType>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        default: BlockGroupTypes.TEXT_GROUP,
        auto: true,
    },
    page: {
        type: String,
        required: true,
    },
    textBlocks: [
        {
            type: textBlockSchema,
            required: true,
        },
    ],
})

const TextGroupModel = model<TextGroupsType>("TextGroup", textGroupsSchema)

export default TextGroupModel
