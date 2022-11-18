import { ITemplateManageTab } from "@/interfaces/template";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiListCheck } from "react-icons/bi";

const FunctionalTabList: ITemplateManageTab[] = [
  {
    id: "Template List",
    title: "Template List",
    icon: <AiOutlineUnorderedList />,
  },
  {
    id: "Template Audit",
    title: "Template Audit",
    icon: <BiListCheck />,
  },
];
export default FunctionalTabList;
