import { ETextColorClassNames } from "@lib/client/interfaces"

export enum ETextTypes {
    H3 = "h3",
    H1 = "h1",
    P = "p",
}

export type TextBlockType = {
    type: ETextTypes
    text: string
    textColorClassName?: ETextColorClassNames
    spanColorClassName?: ETextColorClassNames
}

export type TextBlocksType = {
    name: string
    textBlocks: TextBlockType[]
}
