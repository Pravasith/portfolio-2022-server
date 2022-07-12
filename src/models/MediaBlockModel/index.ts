import { MediaBlockType } from "./interface"
import { model, Schema } from "mongoose"

export const mediaBlockSchema = new Schema<MediaBlockType>({
    id: { type: String, required: true, unique: true },
    src: { type: String, required: true },
    alt: { type: String, required: true },
    type: { type: String, required: true },
    page: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    caption: { type: String },
    showCaption: Boolean,
    hyperlink: String,
    order: { type: Number, required: true },
})

const MediaBlockModel = model<MediaBlockType>("MediaBlock", mediaBlockSchema)

export default MediaBlockModel
