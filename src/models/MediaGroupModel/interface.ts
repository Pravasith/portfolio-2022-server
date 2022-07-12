import { BlockGroupTypes } from "@models/interface"
import { MediaBlockType } from "@models/MediaBlockModel/interface"

export type MediaGroupType = {
    id: string
    name: string
    type: BlockGroupTypes.MEDIA_GROUP
    mediaBlocks: MediaBlockType[]
}
