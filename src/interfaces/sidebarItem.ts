import { IconType } from "react-icons";

export interface ISidebarItem {
  id: number;
  title: string;
  icon: IconType;
  href: string;
  badge?: number;
}
