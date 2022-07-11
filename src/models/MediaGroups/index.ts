import { BlockGroupTypes } from "@models/interface"
import { model, Schema } from "mongoose"

import { MediaGroupType } from "./interface"
import { mediaBlockSchema } from "@models/MediaBlocks"

export const mediaGroupSchema = new Schema<MediaGroupType>({
    id: { type: String, auto: true, unique: true },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        default: BlockGroupTypes.MEDIA_GROUP,
        auto: true,
    },
    mediaBlocks: {
        type: [mediaBlockSchema],
        required: true,
    },
})

export default model<MediaGroupType>("MediaGroup", mediaGroupSchema)
