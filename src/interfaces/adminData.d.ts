export interface IAdmin {
    _id: string;
    email: string;
    password: string;
    name: string;
    hashedRefreshToken: string;
    permission: string;
    createdAt: string;
    updatedAt: string;
    isDeleted?: boolean;
  }

  export interface INewAdmin {
    email: string;
    password: string;
    name: string;
    permission: string;
  }
