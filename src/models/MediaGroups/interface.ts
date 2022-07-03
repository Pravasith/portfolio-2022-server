import { BlockGroupTypes } from "@models/interface"
import { MediaBlockType } from "@models/MediaBlocks/interface"

export type MediaGroupType = {
    id: string
    name: {
        type: String
        required: true
        unique: true
    }
    type: {
        type: BlockGroupTypes.MEDIA_GROUP
        auto: true
    }
    mediaBlocks: MediaBlockType[]
}
