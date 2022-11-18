import { ITemplateDataDb } from "@/interfaces/template";

export const mockTemplateData: ITemplateDataDb[] = [
  {
    _id: "632a6741439020e45d11aa2a",
    user_id: "117321211547215290439",
    design: {
      designer: "test designer",
      designName: "Small Court example",
      image:
        "https://courtcanva-image-node.s3.ap-southeast-2.amazonaws.com/preview-image/1g6J0CR1fVV7OKQAWJ2CS.jpeg",
      courtSize: {
        name: "Small Court",
        length: 9000,
        width: 5000,
        threePointLine: 900,
        threePointRadius: 6600,
        centreCircleRadius: 1800,
        restrictedAreaLength: 5790,
        restrictedAreaWidth: 4800,
        sideBorderWidth: 0,
        lengthOfCorner: 1575,
        lineBorderWidth: 200,
      },
      tileColor: [
        {
          location: "threePoint",
          color: "#7088B1",
        },
        {
          location: "courtArea",
          color: "#E18E11",
        },
        {
          location: "topKeyArea",
          color: "#B6B6B6",
        },
        {
          location: "border",
          color: "#834085",
        },
        {
          location: "keyArea",
          color: "#2C4E8A",
        },
        {
          location: "circleArea",
          color: "#B6B6B6",
        },
      ],
    },
    image:
      "https://courtcanva-image-node.s3.ap-southeast-2.amazonaws.com/preview-image/1g6J0CR1fVV7OKQAWJ2CS.jpeg",
    createdAt: "2022-10-27T14:06:21.850+00:00",
    updatedAt: "2022-11-16T10:29:10.981+00:00",
    status: "censoring",
    description: "loreamsdhuhihuhuihu",
    tags: {
      CourtType: "SMALLCOURT",
      CourtCategory: "BASKETBALL",
    },
    isOfficial: false,
    isDeleted: false,
    __v: 0,
  },
];

export default mockTemplateData;
