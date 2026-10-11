export default interface DrawerInterface {
   title: string;
   children: React.ReactNode;
   close?: () => void;
}
