import { MediaBlockType } from "./interface"
import { model, Schema } from "mongoose"

export const mediaBlockSchema = new Schema<MediaBlockType>({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    type: { type: String, required: true },
    page: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    caption: { type: String, required: true },
    showCaption: Boolean,
    hyperlink: String,
})

export default model<MediaBlockType>("MediaBlock", mediaBlockSchema)
