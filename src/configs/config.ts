export const Breakpoints = {
    WEB: 1024
}

export const BuildTypes = Object.freeze({
    STAGING:  Symbol("STAGING"),
    PRODUCTION:  Symbol("PRODUCTION"),
});

export const StorageKeys = Object.freeze({
    UTM_PARAMS: 'UTM_PARAMS'
});

export const AppBuildType = BuildTypes.STAGING

export const EXTERNAL_URLS = {
    "INSTAGRAM" : "",
    "LINKEDIN" : "https://www.linkedin.com/company/voltmoney/",
    "TWITTER" : "",
}
export const PARTNER_BASE_URL = (AppBuildType === BuildTypes.STAGING)?'https://staging.voltmoney.in/partner':'https://voltmoney.in/partner';
export const BASE_URL = (AppBuildType === BuildTypes.STAGING)?'https://app.staging.voltmoney.in/':'https://app.voltmoney.in/';
export const LANDING_URL = (AppBuildType === BuildTypes.STAGING)?'https://staging.voltmoney.in/':'https://voltmoney.in/';

export const REGEX_PATTERN =  {
    MOBILE_NUMBER : "^[0-9]{10}$"
}

export const UTM_expiry_days = 28;