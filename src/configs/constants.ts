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
export const AppLink =
    getBuildType() === BUILD_TYPE.PARTNER_PRODUCTION
        ? 'https://app.voltmoney.in/?startNew=true'
        : 'https://app.staging.voltmoney.in/?startNew=true';

export const helpLineNumberLink = 'tel:+919611749295';

export const WhatsAppLink = {
    help: 'https://wa.me/919611749295',
}

export const Links = {
    BAJAJ: 'https://www.bajajfinserv.in/',
    KFIN : 'https://www.kfintech.com/',
    CAMS : 'https://www.camsonline.com/',
    NSDL : 'https://nsdl.co.in/',
    CDSL : 'https://www.cdslindia.com/',
    CERSAI: 'https://www.cersai.org.in/CERSAI/home.prg',
    DIGILOCKER: 'https://www.digilocker.gov.in/',
    STARTUP_INDIA: 'https://www.startupindia.gov.in/'
}
