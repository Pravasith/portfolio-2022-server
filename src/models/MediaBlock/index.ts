import { ImageBlockType, VideoBlockType } from "./interface"
import { Schema } from "mongoose"

export const mediaBlockSchema = new Schema<ImageBlockType | VideoBlockType>({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    type: { type: String, required: true },
    id: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    caption: { type: String, required: true },
    showCaption: Boolean,
    hyperlink: String,
})
