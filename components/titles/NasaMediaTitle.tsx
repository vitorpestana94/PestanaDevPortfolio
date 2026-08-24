export default function NasaMediaTitle({ title } : { title?:string }){
    return (
        <>
            {
                title && <h3 title={title} className="nasaParagrah text-nowrap mx-auto md:mx-0 max-w-70 truncate cursor-default">{title}</h3>
            }
        </>
    )
}