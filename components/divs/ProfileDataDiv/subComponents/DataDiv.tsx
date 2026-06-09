export default function DataDiv({
   data,
   label,
}: {
   data: string;
   label: string;
}) {
   return (
      <div className="profileDiv">
         <p className="profileDataLabel">{label}</p>
         <div className="profileDataDiv">
            <p className="text-gray-500 text-xs">{data}</p>
         </div>
      </div>
   );
}
