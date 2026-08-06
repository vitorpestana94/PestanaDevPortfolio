export default function NasaMediaTitle({ title } : { title?:string }){
    return (
        <>
            {
                title && <h3 className="nasaParagrah text-nowrap mx-auto md:mx-0">{title}</h3>
            }
        </>
    )
}