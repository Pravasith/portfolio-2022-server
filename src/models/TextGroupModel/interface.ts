import { BlockGroupTypes } from "@models/interface"

export enum ETextBlockTypes {
    H3 = "h3",
    H1 = "h1",
    P = "p",
}

export type TextBlockType = {
    type: ETextBlockTypes
    text: string
    order: number
}

export enum GroupPages {
    HOME_PAGE = "HOME_PAGE",
    PROJECT_SECTION = "PROJECT_SECTION",
    BLOGS = "BLOGS",
}

export type TextSectionType = {
    name: string
    order: number
    textBlocks: TextBlockType[]
}

export type TextGroupsType = {
    page: string
    type: BlockGroupTypes.TEXT_GROUP
    sections: TextSectionType[]
}
