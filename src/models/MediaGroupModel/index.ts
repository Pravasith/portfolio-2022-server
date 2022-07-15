import { BlockGroupTypes } from "@models/interface"
import { model, Schema } from "mongoose"

import { MediaBlockType, MediaGroupType, MediaSectionType } from "./interface"

export const mediaBlockSchema = new Schema<MediaBlockType>({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    type: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    caption: { type: String },
    showCaption: Boolean,
    hyperlink: String,
})

const sectionSchema = new Schema<MediaSectionType>({
    name: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
    mediaBlocks: {
        type: [mediaBlockSchema],
        required: true,
    },
})

export const mediaGroupSchema = new Schema<MediaGroupType>({
    page: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        default: BlockGroupTypes.MEDIA_GROUP,
        auto: true,
    },
    sections: {
        type: [sectionSchema],
        required: true,
    },
})

const MediaGroupModel = model<MediaGroupType>("MediaGroup", mediaGroupSchema)

export default MediaGroupModel
