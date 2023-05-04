import { Breakpoints, UTM_expiry_days } from "@/configs/config";
import { UseWindowSize } from "@/configs/windowSizeHook";
import {
  AppLink,
  BaseLink,
  GoogleUtmParams,
  PartnerLink,
  QUERY_PARAMS,
  StoreKey,
  WhatsAppLink,
} from "@/configs/constants";

export const isMobile: () => boolean = () => {
  const screen = UseWindowSize();
  // console.log("width 123: ", screen.width);
  if (screen && screen.width && screen?.width < Breakpoints.WEB) {
    return true;
  }
  return false;
};

//@ts-ignore
export const getScreenX: () => number = () => {
  const screen = UseWindowSize();
  if (screen && screen.width) {
    return screen.width;
  } else {
    return 360;
  }
};
//@ts-ignore
export const getScreenY: () => number = () => {
  const screen = UseWindowSize();
  if (screen && screen.width) {
    return screen.width;
  } else {
    return 360;
  }
};

export const redirectToFaq = () => {
  window.open(`${PartnerLink}faq`, "_blank");
};
export const redirectToPartner = (url?: string) => {
  window.open(`${PartnerLink}?${getParamsLink()}`, "_self");
};
export const redirectToPartnerInviteAndEarn = (url?: string) => {
  window.open(
    `${PartnerLink}?${QUERY_PARAMS.REFERRED_PARTNER}=true&${getParamsLink()}`,
    "_self"
  );
};
export const redirectToPartnerLanding = (url?: string) => {
  window.open(`${BaseLink}/partner?${getParamsLink()}`, "_self");
};
export const redirectToPartnerLandingWithoutBase = (url?: string) => {
  window.open(`/partner?${getParamsLink()}`, "_self");
};
export const redirectToVoltApp = () => {
  window.open(`${AppLink}${getParamsLink()}`, "_blank");
};
export const handleWhatAppClick = () => {
  window.open(WhatsAppLink.help, "_blank");
};
export const handleOurPartnerLinks = (Link: string) => {
  window.open(Link, "_blank");
};
export const redirectTo = (
  url: string,
  target?: string,
  passQueryParams?: boolean
) => {
  if (target) {
    window.open(`${url}?${passQueryParams ? getParamsLink() : ''}`, target);
  } else {
    window.open(url, "_blank");
  }
};
export const redirectToWithQueryParam = (url: string, target?: string) => {
  if (target) {
    window.open(`${url}${getParamsLink()}`, target);
  } else {
    window.open(`${url}${getParamsLink()}`, "_blank");
  }
};
export const redirectToPrivacy = (Link: string) => {
  window.open(`${BaseLink}/privacy/`, "_blank");
};

export const handleWhatAppClickInvestor = () => {
  window.open(WhatsAppLink.default, "_blank");
};

export const addDaysToEpochTime = (epochTime: number, days: number) => {
  const date = new Date(epochTime);
  const dateAfterAddingDays = date.setDate(date.getDate() + days);
  return dateAfterAddingDays.valueOf();
};

export const isGoogleUTMParams: (param: string) => boolean = (param) => {
  if (
    param === GoogleUtmParams.UTM_SOURCE ||
    param === GoogleUtmParams.UTM_CONTENT ||
    param === GoogleUtmParams.UTM_ID ||
    param === GoogleUtmParams.UTM_CAMPAIGN ||
    param === GoogleUtmParams.UTM_MEDIUM
  ) {
    return true;
  }
  return false;
};

export const getParameters: () => {
  [key in string]: string;
} = () => {
  const params = {};
  if(window) {
    const url = window.location.href;
    const paramString = url.split("?")[1];
    const queryString = new URLSearchParams(paramString);
    //@ts-ignore
    for (const pair of queryString.entries()) {
      //@ts-ignore
      params[pair[0].includes("/") ? pair[0].split("/")[1] : pair[0]] =
          pair[1].includes("/") ? pair[1].split("/")[0] : pair[1];
    }
  }
  return params;
};

export const getParamsLink = (url?: string) => {
  let resultString = "";

  const params = getParameters();

  let localStoredParams = {};
  // check if params exist in localstorage if not present in query string
  const utm_campaign = params?.utm_campaign;
  const utm_content = params?.utm_content;
  const utm_id = params?.utm_id;
  const utm_medium = params?.utm_medium;
  const utm_source = params?.utm_source;
  let cachedUtm = localStorage.getItem(StoreKey.UTM_PARAMS);

  if (utm_campaign || utm_content || utm_id || utm_medium || utm_source) {
    Object.keys(params).forEach((param) => {
      //store google utm params in localStorage
      if (isGoogleUTMParams(param)) {
        localStoredParams = {
          ...localStoredParams,
          time: addDaysToEpochTime(Date.now().valueOf(), UTM_expiry_days),
          [`${param}`]: params[param],
        };
      }
      if (param !== "time") {
        resultString += `${param}=${params[`${param}`]}&`;
      }
    });
    localStorage.removeItem(StoreKey.UTM_PARAMS);
    localStoredParams &&
      localStorage.setItem(
        StoreKey.UTM_PARAMS,
        JSON.stringify(localStoredParams)
      );
  } else {
    if (cachedUtm) {
      const cachedUtmJson = JSON.parse(cachedUtm);
      if (cachedUtmJson?.time && Date.now().valueOf() <= cachedUtmJson.time) {
        Object.keys(cachedUtmJson).forEach((param) => {
          //store google utm params in localStorage
          if (param !== "time") {
            resultString += `${param}=${cachedUtmJson[`${param}`]}&`;
          }
        });
      } else {
        //remove google utm params in localStorage when token expires
        localStorage.removeItem(StoreKey.UTM_PARAMS);
      }
    }
    Object.keys(params).forEach((param) => {
      resultString += `${param}=${params[`${param}`]}&`;
    });
  }

  console.log("resultString: ", resultString);

  return `${resultString}`;
};

export const convertTo2DArray = (data: any, count: number) => {
  const result = [];

  for (let i = 0; i < data.length; i += count) {
    result.push(data.slice(i, i + count));
  }

  return result;
};

export const checkRegexEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

export const GoogleAnalytics = (
  eventName: string,
  customData: { [keys in string]: any }
) => {
  //@ts-ignore
  window.dataLayer.push({
    event: eventName,
    customData,
  });
};

export const lottieLinks = {
  gift: ''
}