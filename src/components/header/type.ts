export enum HeaderType {
    DEFAULT = 'DEFAULT',
    CONTACT_US = 'CONTACT_US',
    ABOUT = 'ABOUT'
}

export type HeaderProps = {
    type?: HeaderType
    ref?: React.RefObject<HTMLInputElement>
}