import {ImageProps} from "@/components/button/type";

export enum CardTypes {
    VOLT_BENEFIT = 'VOLT_BENEFIT',
    TESTIMONY = 'TESTIMONY',
    CONTACT_US = 'CONTACT_US',
    TEAM_CARD = 'TEAM_CARD'
}
export type CardProps = {
    type: CardTypes,
    leftIcon?: ImageProps,
    title?: string,
    subTitle?: string,
    name?: string,
    cta?: boolean
    ctaLabel?: string,
    imageUrl?: string,
    onClickCta?: ()=>void
}