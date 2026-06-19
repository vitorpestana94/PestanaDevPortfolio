import { isNumericalString } from "motion/react";
import { isNumberObject } from "util/types";

export default function getStatusCodeAsInt(error: string): number {
   if (!isNumericalString(error)) {
      throw Error("Not a number!");
   }

   return parseInt(error);
}
