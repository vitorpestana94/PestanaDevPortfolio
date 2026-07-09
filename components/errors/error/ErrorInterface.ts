type Poistion = "left" | "top" | "bottom" | "right";

export default interface ErrorInterface {
   shouldRender: boolean;
   message: string;
   styles?: string;
   position?: Poistion;
}
