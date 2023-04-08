import { Breakpoints } from "@/configs/config";
import { UseWindowSize } from "@/configs/windowSizeHook";

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
      screen.height) {
    return screen.height;
  } else {
    return 360
  }
}
