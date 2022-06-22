import { Schema, model } from "mongoose"
import { TextBlocksType, TextBlockType } from "./interface"

const textBlockSchema = new Schema<TextBlockType>({
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
})

const textBlocksSchema = new Schema<TextBlocksType>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
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

export default model<TextBlocksType>("TextBlock", textBlocksSchema)
