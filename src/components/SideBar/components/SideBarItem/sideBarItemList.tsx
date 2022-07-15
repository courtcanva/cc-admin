import { AiFillHome } from "react-icons/ai";
import { IoPersonCircleSharp } from "react-icons/io5";
import { CgMicrosoft } from "react-icons/cg";
import { TbRectangle } from "react-icons/tb";
import { ISideBarItem } from "../../../../interfaces/navigationItem";

const sideBarItemList: ISideBarItem[] = [
  {
    id: 1,
    title: "Home",
    icon: <AiFillHome />,
    href: "/",
  },
  {
    id: 2,
    title: "Accounts",
    icon: <IoPersonCircleSharp />,
    href: "/accounts",
  },
  {
    id: 3,
    title: "Tiles",
    icon: <CgMicrosoft />,
    href: "/tiles",
  },
  {
    id: 4,
    title: "Courts",
    icon: <TbRectangle />,
    href: "/courts",
  },
];
export default sideBarItemList;
