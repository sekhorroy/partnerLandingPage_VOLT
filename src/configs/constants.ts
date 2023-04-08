export enum BUILD_TYPE {
    PARTNER_PRODUCTION = 'PARTNER_PRODUCTION',
    PARTNER_STAGING = 'PARTNER_STAGING'
}
export const getBuildType = () => {
    const buildType = BUILD_TYPE.PARTNER_STAGING;
    return buildType;
}
export const PartnerLink =
    getBuildType() === BUILD_TYPE.PARTNER_PRODUCTION
        ? 'https://voltmoney.in/partner/'
        : 'https://staging.voltmoney.in/partner/';

export const helpLineNumberLink = 'tel:+919611749295';