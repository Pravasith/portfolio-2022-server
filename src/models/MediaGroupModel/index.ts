import { BlockGroupTypes } from "@models/interface"
import { model, Schema } from "mongoose"

import { MediaGroupType } from "./interface"
import { mediaBlockSchema } from "@models/MediaBlockModel"

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

const MediaGroupModel = model<MediaGroupType>("MediaGroup", mediaGroupSchema)

export default MediaGroupModel
