import { api } from "./axios";

export const handleSubmit = (event: React.SyntheticEvent) => {
  event.preventDefault();
    // try {
    //   api(process.env.NEXT_PUBLIC_API_COURTS as string, {
    //     method: "post",
    //     requestData: {
    //       name,
    //       length,
    //       width,
    //       centreCircleRadius,
    //       threePointRadius,
    //       threePointLine,
    //       lengthOfCorner,
    //       restrictedAreaLength,
    //       restrictedAreaWidth,
    //       sideBorderWidth,
    //       lineBorderWidth,
    //       description,
    //     },
    //   });
    //   routeHandler();
    // } catch (error) {
    //   console.log(error);
    // }
}