export enum IconToken {
    BAJAJ = 'BAJAJ',
    TOPSECTIONIMAGE1 = 'TOPSECTIONIMAGE1',
    WHATSAPP = 'WHATSAPP',
    GOLDEN_SHIELD = 'GOLDEN_SHIELD',
    VOLT_PARTNER = 'VOLT_PARTNER',
    THREE_BAR = 'THREE_BAR',
}

export type IconRegistryType = {
    [key in IconToken]: string;
};

export const registry: IconRegistryType = {
    [IconToken.BAJAJ]: '../../public/images/BajajFinserv.svg',
    [IconToken.GOLDEN_SHIELD]: '/images/GoldenShield.svg',
    [IconToken.THREE_BAR]: '',
    [IconToken.TOPSECTIONIMAGE1]: '/images/topSectionImage1.svg',
    [IconToken.VOLT_PARTNER]: '/images/topSectionImage1.svg',
    [IconToken.WHATSAPP]: '',
}