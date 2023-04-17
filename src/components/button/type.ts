import {string} from "prop-types";

export enum ButtonTypeTokens {
    PRIMARY_LARGE = 'PRIMARY_LARGE',
    OUTLINE_LARGE ='OUTLINE_LARGE',
    OUTLINE_TRANSPARENT_LARGE = 'OUTLINE_TRANSPARENT_LARGE',
    DISABLED_LARGE = 'DISABLED_LARGE'
}
export enum ButtonWidthTypeTokens {
    CONTENT = 'CONTENT',
    FULL ='FULL',
}

export type ImageProps = {
    url: string,
    width: number,
    height: number,
    alt?: string
}

export type ButtonProps = {
    label: string
    onClick?: () => void,
    type: ButtonTypeTokens,
    width?: ButtonWidthTypeTokens,
    leftIcon?: ImageProps | null,
    imageUrl?: string,
    fontSize?: number,
    loading?: boolean,
}