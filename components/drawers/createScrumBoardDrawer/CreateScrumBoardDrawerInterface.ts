export interface CreateScrumBoardForm {
   name: string;
   description?: string;
}

export default interface CreateScrumBoardDrawerInterface {
   close?: () => void;
}
