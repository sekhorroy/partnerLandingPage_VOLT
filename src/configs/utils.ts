import { Breakpoints } from "@/configs/config";
import { UseWindowSize } from "@/configs/windowSizeHook";
import {AppLink, PartnerLink, WhatsAppLink} from "@/configs/constants";
import {useEffect} from "react";

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
export const redirectToPartner = () => {
  window.open(`${PartnerLink}`, '_blank');
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