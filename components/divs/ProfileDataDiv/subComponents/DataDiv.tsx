export default function DataDiv({
   data,
   label,
   className,
}: {
   data: string;
   label: string;
   className?: string;
}) {
   return (
      <div className={`profileDiv ${className}`}>
         <p className="profileDataLabel">{label}</p>
         <div className="profileDataInputs">
            <p className="text-white text-[0.625rem] py-1 sm:py-0 sm:text-xs">
               {data}
            </p>
         </div>
      </div>
   );
}
