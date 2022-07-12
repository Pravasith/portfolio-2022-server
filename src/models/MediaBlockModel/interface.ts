export enum EMediaType {
    VIDEO = "VIDEO",
    IMAGE = "IMAGE",
}

export type ImageBlockType = {
    src: string
    alt: string
    type: EMediaType.IMAGE
    id: string
    width: number
    height: number
    caption?: string
    page: string
    showCaption?: boolean
    hyperlink?: string
}

export type VideoBlockType = {
    src: string
    alt: string
    type: EMediaType.VIDEO
    id: string
    width: number
    height: number
    caption?: string
    page: string
    order: number
    showCaption?: boolean
    hyperlink?: string
}

export type MediaBlockType = ImageBlockType | VideoBlockType