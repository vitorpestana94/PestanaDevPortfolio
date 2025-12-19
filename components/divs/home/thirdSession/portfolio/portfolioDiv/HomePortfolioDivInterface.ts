export type componentType = "gifOrImage" | "link" | "bgColors";

export default interface HomePortfolioDivInterface {
  type?: componentType;
  props: {
    size: {
      widthAndHeight: string;
    };
    picture?: {
      pictureUrl: string;
      routeOrSiteUrl: string;
    };
    bgColors?: string[];
    bgImage?: string;
  };
}
