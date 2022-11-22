import { IconType } from "react-icons";

export interface ISideBarItem {
  id: number;
  title: string;
  icon: IconType;
  href: string;
  badge?: number;
}
