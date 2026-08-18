import Interface from "./SearchArtWorkInputInterface";
import Icon from "@/components/icons/Icons";
import { motion } from "motion/react";
import useEffetInView from "@/hooks/useEffetInView";

export default function SearchArtWorkInput({ search, setSearch }: Interface) {
    const { ref, isInView } = useEffetInView();
    
    return (
    <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 1 }} className="bg-black w-[70%] md:w-[60%] lg:w-[40%] h-10 mx-auto rounded-full">
        <div
            className="
            flex gap-x-4 transition-all w-full h-full px-10
            bg-gray-100/35 border-black text-white rounded-full
            focus-within:outline-none
            focus-within:ring-2
            focus-within:ring-[#38b6ff]/80
            focus-within:border-transparent"
        >
            <Icon
                iconName="search"
                className="aspect-square w-6 stroke-white/30"
            />
            <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="focus:outline-none focus:ring-0 w-full text-xs lg:text-[0.875rem]"
            />
        </div>
    </motion.div>
    );
}