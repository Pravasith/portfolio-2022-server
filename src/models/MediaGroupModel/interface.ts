import { BlockGroupTypes } from "@models/interface"

export enum EMediaType {
    VIDEO = "VIDEO",
    IMAGE = "IMAGE",
}

export type ImageBlockType = {
    src: string
    alt: string
    type: EMediaType.IMAGE
    width: number
    height: number
    caption?: string
    showCaption?: boolean
    hyperlink?: string
}

export type VideoBlockType = {
    src: string
    alt: string
    type: EMediaType.VIDEO
    width: number
    height: number
    caption?: string
    showCaption?: boolean
    hyperlink?: string
}

export type MediaBlockType = ImageBlockType | VideoBlockType

export type MediaSectionType = {
    name: string
    order: number
    mediaBlocks: MediaBlockType[]
}

export type MediaGroupType = {
    page: string
    type: BlockGroupTypes.MEDIA_GROUP
    sections: MediaSectionType[]
}
