export default function NasaMediaTitle({ title } : { title?:string }){
    return (
        <>
            {
                title && <h3 className="nasaParagrah text-nowrap">{title}</h3>
            }
        </>
    )
}