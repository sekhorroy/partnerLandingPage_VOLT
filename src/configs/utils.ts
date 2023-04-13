import {Breakpoints, UTM_expiry_days} from "@/configs/config";
import { UseWindowSize } from "@/configs/windowSizeHook";
import {
  AppLink,
  BUILD_TYPE,
  getBuildType,
  GoogleUtmParams,
  PartnerLink,
  StoreKey,
  WhatsAppLink
} from "@/configs/constants";
import {useEffect} from "react";
import {useRouter} from "next/router";

export const isMobile: () => boolean = () => {
  const screen = UseWindowSize();
  // console.log("width 123: ", screen.width);
  if (screen &&
      screen.width &&
      screen?.width < Breakpoints.WEB
  ) {
    return true;
  }
  return false;
};

//@ts-ignore
export const getScreenX: () => number = () => {
  const screen = UseWindowSize();
  if(screen &&
      screen.width) {
    return screen.width;
  } else {
    return 360
  }
}
//@ts-ignore
export const getScreenY: () => number = () => {
  const screen = UseWindowSize();
  if(screen &&
      screen.width) {
    return screen.width;
  } else {
    return 360
  }
}

export const redirectToFaq = () => {
  window.open(`${PartnerLink}faq`, '_blank');
};
export const redirectToPartner = (url: string) => {
  window.open(`${PartnerLink}${getParamsLink(url)}`, '_blank');
  // window.open(`${PartnerLink}}`, '_blank');
};
export const redirectToVoltApp = () => {
  window.open(`${AppLink}`, '_blank');
};
export const handleWhatAppClick = () => {
  window.open(WhatsAppLink.help, '_blank' )
}
export const handleOurPartnerLinks = (Link: string) => {
  window.open(Link, '_blank' );
}
export const redirectTo = (url: string) =>{
  window.open(url, '_self');
}

export const addDaysToEpochTime = (epochTime: number, days: number) => {
  const date = new Date(epochTime);
  const dateAfterAddingDays = date.setDate(date.getDate() + days);
  return dateAfterAddingDays.valueOf();
};




export const isGoogleUTMParams: (param: string) => boolean = param => {
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

export const getParameters: (url: string) => {
  [key in string]: string
} = (url: string) => {
  const params = {}
  const paramString = url.split('?')[1]
  console.log('test param string', paramString)
  const queryString = new URLSearchParams(paramString)
  console.log('test query', queryString)
  //@ts-ignore
  for (const pair of queryString.entries()) {
    //@ts-ignore
    params[pair[0].includes('/') ? pair[0].split('/')[1] : pair[0]] = pair[1].includes('/') ? pair[1].split('/')[0] : pair[1]
  }
  return params
}

export const getParamsLink = (url: string) => {
  let resultString = '';

    const params =  getParameters(url);
    let localStoredParams = {};
    // check if params exist in localstorage if not present in query string
    const utm_campaign = params?.utm_campaign;
    const utm_content = params?.utm_content;
    const utm_id = params?.utm_id;
    const utm_medium = params?.utm_medium;
    const utm_source = params?.utm_source;
    let cachedUtm = localStorage.getItem(StoreKey.UTM_PARAMS);

    if (utm_campaign || utm_content || utm_id || utm_medium || utm_source) {
      Object.keys(params).forEach(param => {
        //store google utm params in localStorage
        if (isGoogleUTMParams(param)) {
          localStoredParams = {
            ...localStoredParams,
            time: addDaysToEpochTime(Date.now().valueOf(), UTM_expiry_days),
            [`${param}`]: params[param],
          };
        }
        if (param !== 'time') {
          resultString += `${param}=${params[`${param}`]}&`;
        }
      });
      localStorage.removeItem(StoreKey.UTM_PARAMS);
      localStoredParams &&
      localStorage.setItem(
          StoreKey.UTM_PARAMS,
          JSON.stringify(localStoredParams),
      );
    } else {
      if (cachedUtm) {
        const cachedUtmJson = JSON.parse(cachedUtm);
        if (cachedUtmJson?.time && Date.now().valueOf() <= cachedUtmJson.time) {
          Object.keys(cachedUtmJson).forEach(param => {
            //store google utm params in localStorage
            if (param !== 'time') {
              resultString += `${param}=${cachedUtmJson[`${param}`]}&`;
            }
          });
        } else {
          //remove google utm params in localStorage when token expires
          localStorage.removeItem(StoreKey.UTM_PARAMS);
        }
      }
    }

    console.log('resultString: ', resultString);

  return `?${resultString}`;
};