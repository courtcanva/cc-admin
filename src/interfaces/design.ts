export interface IDesign {
  designName: string;
  courtSize: ICourtSize;
  tileColor: ITileColor[];
}

interface ICourtSize {
  name: string;
  length: number;
  width: number;
  threePointLine: number;
  threePointRadius: number;
  centreCircleRadius: number;
  restrictedAreaLength: number;
  restrictedAreaWidth: number;
  sideBorderWidth: number;
  lengthOfCorner: number;
  lineBorderWidth: number;
}

interface ITileColor {
  location: string;
  color: string;
}

export interface ISaveDesign extends IDesign{
  designer: string;
  image: string;
}
