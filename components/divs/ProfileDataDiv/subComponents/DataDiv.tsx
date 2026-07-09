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
         <div className="profileDataDiv">
            <p className="text-gray-500 text-xs">{data}</p>
         </div>
      </div>
   );
}
