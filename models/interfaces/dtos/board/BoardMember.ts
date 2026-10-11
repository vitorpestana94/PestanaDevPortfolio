import BoardUser from "./BoardUser";

export default interface BoardMember extends BoardUser {
   isOwner: boolean;
}
