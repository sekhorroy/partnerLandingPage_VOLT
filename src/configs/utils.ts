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
  if(screen) {
    return screen.width;
  }
  return Breakpoints.WEB
}
