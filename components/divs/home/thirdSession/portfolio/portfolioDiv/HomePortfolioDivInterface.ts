export default interface HomePortfolioDivInterface {
  props: {
    size: {
      widthAndHeight: string;
    };
    picture?: {
      pictureUrl: string;
      routeOrSiteUrl: string;
    };
    bgColor?: string;
  };
}
