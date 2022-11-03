export interface IUser {
  _id: string;
  email: string;
  firstName: string;
  googleId?: string;
  hashedRefreshToken: string;
  isActivated: boolean;
  isDeleted: boolean;
  lastName: string;
  updatedAt: string;
  createdAt: string;
}

export interface ListUserResponse<T> {
  offset: number;
  limit: number;
  total: number;
  totalPages: number;
  data: T[];
}
