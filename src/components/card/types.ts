import {ImageProps} from "@/components/button/type";

export enum CardTypes {
    VOLT_BENEFIT = 'VOLT_BENEFIT',
    TESTIMONY = 'TESTIMONY'
}
export type CardProps = {
    type: CardTypes,
    leftIcon?: ImageProps,
    title?: string,
    subTitle?: string,
    name?: string,
}