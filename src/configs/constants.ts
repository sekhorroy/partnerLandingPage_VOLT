export enum BUILD_TYPE {
  PARTNER_PRODUCTION = "PARTNER_PRODUCTION",
  PARTNER_STAGING = "PARTNER_STAGING",
}
export const getBuildType = () => {
  const buildType = BUILD_TYPE.PARTNER_STAGING;
  return buildType;
};
export const PartnerLink =
  getBuildType() === BUILD_TYPE.PARTNER_PRODUCTION
    ? "https://voltmoney.in/partner/signup"
    : "https://staging.voltmoney.in/partner/signup";
export const AppLink =
  getBuildType() === BUILD_TYPE.PARTNER_PRODUCTION
    ? "https://app.voltmoney.in/?startNew=true"
    : "https://app.staging.voltmoney.in/?startNew=true";

export const helpLineNumberLink = "tel:+919611749295";

export const WhatsAppLink = {
  help: "https://wa.me/919611749295",
};

export const Links = {
  BAJAJ: "https://www.bajajfinserv.in/",
  KFIN: "https://www.kfintech.com/",
  CAMS: "https://www.camsonline.com/",
  NSDL: "https://nsdl.co.in/",
  CDSL: "https://www.cdslindia.com/",
  CERSAI: "https://www.cersai.org.in/CERSAI/home.prg",
  DIGILOCKER: "https://www.digilocker.gov.in/",
  STARTUP_INDIA: "https://www.startupindia.gov.in/",
  Linkedin: "https://in.linkedin.com/company/voltmoney",
  Instagram: "https://www.instagram.com/voltmoney_in/",
  Facebook: "https://www.facebook.com/people/Volt-Money/100091543358366/",
  Twitter: "https://twitter.com/voltmoney_in",
};

export enum StoreKey {
  UTM_PARAMS = "UTM_PARAMS",
}

export const UTM_expiry_days = 28;

export enum GoogleUtmParams {
  UTM_CAMPAIGN = "utm_campaign",
  UTM_CONTENT = "utm_content",
  UTM_ID = "utm_id",
  UTM_MEDIUM = "utm_medium",
  UTM_SOURCE = "utm_source",
}