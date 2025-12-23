import { TargetAndTransition, VariantLabels, Transition } from "motion/react";
export default interface HomePortfolioDivsGroups {
  children: React.ReactNode;
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels;
  delay: number;
}
