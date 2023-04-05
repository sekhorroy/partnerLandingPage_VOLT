import {ImageProps} from "@/components/button/type";

export enum CardTypes {
    HOW_IT_WORKS = 'HOW_IT_WORKS',
}
export type CardProps = {
    type: CardTypes,
    leftIcon?: ImageProps,
    title?: string,
    subTitle?: string
}