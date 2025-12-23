import { RefObject } from "react";

export default interface MobileNavInterface {
  props: {
    navRef: RefObject<HTMLDivElement | null>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
