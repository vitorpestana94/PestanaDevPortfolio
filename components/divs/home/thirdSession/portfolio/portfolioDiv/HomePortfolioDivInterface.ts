export type ComponentType = "gifOrImage" | "link" | "bgColors";
export type ComponetIcon = "next" | "dotnet" | "tailwind" | "claude";

export default interface HomePortfolioDivInterface {
   type?: ComponentType;
   props: {
      size: {
         widthAndHeight: string;
      };
      picture?: {
         pictureUrl: string;
         routeOrSiteUrl: string;
         style?: string;
      };
      bgColors?: string[];
      bgImage?: string;
      text?: string;
      title?: string;
      icons?: ComponetIcon[];
   };
}
