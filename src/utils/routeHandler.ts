import router from "next/router";

export const routeHandler = (path: string, endpoint?: string) => {
  endpoint
    ? router.push({
        pathname: `${path}/${endpoint}`,
      })
    : router.push({
        pathname: `/${path}`,
      });
  return;
};
export const idRouteHandler = (endpoint: string) => {
  router.push({
    pathname: endpoint,
  });
  return;
};
