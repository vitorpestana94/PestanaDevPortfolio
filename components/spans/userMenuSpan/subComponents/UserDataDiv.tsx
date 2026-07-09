import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";

export default function UserDataDiv({ user }: UserDataInterface) {
   return (
      <span className="text-[#FAF9F6] bgAzulPestana w-full flex flex-col items-start gap-y-0.5 p-4 rounded-md">
         <p className="text-xs">{user.name}</p>
         <p className="text-[0.5rem]">{user.email}</p>
      </span>
   );
}
