export enum HeaderType {
    DEFAULT = 'DEFAULT',
    CONTACT_US = 'CONTACT_US',
    ABOUT = 'ABOUT',
    INVESTOR = 'INVESTOR',
    INVITE_AND_EARN = 'INVITE_AND_EARN'
}

export type HeaderProps = {
    type?: HeaderType
    ref?: React.RefObject<HTMLInputElement>
    maxWidth?: number
}