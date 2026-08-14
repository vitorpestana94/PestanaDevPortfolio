import Link from "next/link";
import VP from "../icons/Icons";

export default function VPLink({ className, linkClassName }:{ className?:string; linkClassName?: string}){
    return (
    <Link href={"/"} className={linkClassName}>
        <VP iconName="vP" className={`homeVp ${className}`} />
    </Link>)
}