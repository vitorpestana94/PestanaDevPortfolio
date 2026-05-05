export const keys = [
  "firstCode",
  "secondCode",
  "thirdCode",
  "fourthCode",
] as const;

export type ValidationKey = (typeof keys)[number];

export type ValidationCodeState = Record<ValidationKey, string>;

export type ValidationRefs = Record<
  ValidationKey,
  React.RefObject<HTMLInputElement | null>
>;
