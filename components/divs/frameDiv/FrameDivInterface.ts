export default interface FrameDivInterface {
  children: React.ReactNode;
  props: {
    className: string;
    waitIsInView?: boolean;
  };
}
