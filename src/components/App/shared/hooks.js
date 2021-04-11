import { matchPath, useRouteMatch } from "react-router-dom";

export const useMatchPath = () => (
  (pathToCheck, pathList = []) => !!matchPath(pathToCheck, { path: [Object.values(pathList)], exact: true })
);

export const useCheckRoutePath = () => {
  const match = useRouteMatch();
  return routePath => routePath ? [routePath].includes(match.path) : [];
};
