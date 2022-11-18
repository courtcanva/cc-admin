export interface ITemplate {
  _id: string;
  user_id: string;
  description: string | undefined | null;
  design: ISaveDesign;
  image: string;
  tags: ITags;
}

export interface ITemplateDataDb extends ITemplate {
  createdAt: string;
  updatedAt: string;
  status: string;
  isOfficial: boolean;
  isDeleted: boolean;
  __v: number;
}

export interface ITemplateManageTab {
  id: string;
  title: string;
  icon: IconType;
}