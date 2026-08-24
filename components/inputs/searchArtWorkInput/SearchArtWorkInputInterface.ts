import { Ref } from "react";

export default interface SearchArtWorkInputInterface {
    search: string;
    setSearch: (search: string) => void;
}