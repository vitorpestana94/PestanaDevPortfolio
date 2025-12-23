import { RefObject } from "react";

export default interface useHandleMouseDown {
  ref: RefObject<HTMLDivElement | HTMLInputElement | null>;
  mouseDownCallBack: () => void;
  shouldHandleNow: boolean;
}
