export interface ICourt {
  _id: string;
  name: string;
  length: number | string;
  width: number | string;
  centreCircleRadius: number | string;
  threePointRadius: number | string;
  threePointLine: number | string;
  lengthOfCorner: number | string;
  restrictedAreaLength: number | string;
  restrictedAreaWidth: number | string;
  sideBorderWidth: number | string;
  lineBorderWidth: number | string;
  description: string;
  createdAt: string;
  updatedAt: string;
  isDeleted?: boolean;
  isHidden: boolean;
}
