import { useState, useEffect } from "react";
import { useGetArts } from "@/hooks/api/artExhibition/queries";

export default function useArtExhibitionFirstSection(){
    const [search, setSearch] = useState<string>("Van Gogh");
    const { data } = useGetArts(search);
    const setNewSearch = (search: string) => setSearch(search);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSearch(search);
        }, 300);

        return () => clearTimeout(timeout);
    }, [search, setSearch]);

    return { data, search, setNewSearch };
}