import UserDataInterface from "@/models/interfaces/UI/UserDataInterface";

export default interface UserMenuSpanInterface extends UserDataInterface {
   openMenu: () => void;
   closeMenu: () => void;
}
