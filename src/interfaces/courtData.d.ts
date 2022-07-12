export interface ICourt {
  _id: string;
  name: string;
  length: number;
  width: number;
  centreCircleRadius: number;
  threePointRadius: number;
  threePointLine: number;
  lengthOfCorner: number;
  restrictedAreaLength: number;
  restrictedAreaWidth: number;
  sideBorderWidth: number;
  lineBorderWidth: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  isDeleted?: boolean;
}