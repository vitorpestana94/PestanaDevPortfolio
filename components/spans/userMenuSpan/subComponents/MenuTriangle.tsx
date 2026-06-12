export default function MenuTriangle({ color }: { color?: string }) {
   return (
      <span
         className={`border-solid absolute top-10.5 border-b-[${color ?? "#38b6ff"}] border-b-8 border-x-transparent border-x-8 border-t-0`}
      ></span>
   );
}
