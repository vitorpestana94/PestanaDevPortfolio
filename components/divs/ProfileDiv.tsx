import User from "@/models/interfaces/dtos/responses/GetUserResponseDto";

export default function ProfileDiv({ user }: { user: User }) {
   return (
      <div className="authForm">
         <p>profile</p>
      </div>
   );
}
