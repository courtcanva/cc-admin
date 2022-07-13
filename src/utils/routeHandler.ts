import router from "next/router";

export const routeHandler = (endpoint?: string) => {
  endpoint? router.push({
    pathname: "courts/" + endpoint,
  }): router.push({
    pathname: "/courts",
  });
  return
};
export const idRouteHandler = (endpoint: string) => {
   router.push({
    pathname: endpoint,
  });
  return
};