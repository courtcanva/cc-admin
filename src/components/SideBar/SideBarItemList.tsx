import { AiFillHome, AiOutlineKey } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { CgMicrosoft, CgTemplate } from "react-icons/cg";
import { TbRectangle } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { ISidebarItem } from "../../interfaces/navigationItem";
import { RiPercentLine } from "react-icons/ri";

const SidebarItemList: ISidebarItem[] = [
  {
    id: 1,
    title: "Home",
    icon: AiFillHome,
    href: "/",
  },
  {
    id: 2,
    title: "Users",
    icon: IoPersonCircleSharp,
    href: "/accounts",
  },
  {
    id: 3,
    title: "Tiles",
    icon: CgMicrosoft,
    href: "/tiles",
  },
  {
    id: 4,
    title: "Courts",
    icon: TbRectangle,
    href: "/courts",
  },
  {
    id: 5,
    title: "Admin",
    icon: AiOutlineKey,
    href: "/admin",
  },
  {
    id: 6,
    title: "Quotation",
    icon: HiOutlineShoppingCart,
    href: "/quotation",
  },
  {
    id: 7,
    title: "Deposit",
    icon: RiPercentLine,
    href: "/deposit",
  },
  {
    id: 8,
    title: "Orders",
    icon: CgNotes,
    href: "/orders",
  },
  {
    id: 9,
    title: "Templates",
    icon: CgTemplate,
    href: "/templates",
  },
];
export default SidebarItemList;
