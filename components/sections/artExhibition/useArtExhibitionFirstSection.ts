import { useState, useEffect, useRef } from "react";
import { useGetArts } from "@/hooks/api/artExhibition/queries";
import useHandleEnterKey from "@/hooks/useHandleEnterKey";

export default function useArtExhibitionFirstSection(){
    const [search, setSearch] = useState<string>("Van Gogh");
    const [debouncedSearch, setDebouncedSearch] = useState("Van Gogh");
    const { data } = useGetArts(debouncedSearch);
    const setNewSearch = (search: string) => setSearch(search);
    const setDebounce = (search: string) => {
        if(search){
            setDebouncedSearch(search)
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(search);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [search]);

    useHandleEnterKey({
        enterKeyCallback: () => {
          setDebounce(search);
        },
    });

    return { data, search, setNewSearch };
}