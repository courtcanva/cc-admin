export interface IAdmin {
    _id: string;
    email: string;
    password?: string;
    name: string;
    hashedRefreshToken?: string;
    permission: string;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    __v?: number;
  }

  export interface INewAdmin {
    email: string;
    password: string;
    name: string;
  }
