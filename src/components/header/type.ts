export enum HeaderType {
    DEFAULT = 'DEFAULT',
    CONTACT_US = 'CONTACT_US',
    ABOUT = 'ABOUT',
    INVESTOR = 'INVESTOR'
}

export type HeaderProps = {
    type?: HeaderType
    ref?: React.RefObject<HTMLInputElement>
    maxWidth?: number
}