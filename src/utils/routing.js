import { trim } from "lodash";
import { basePath as root } from "../config";

export const pathTemplate = (name) => {
  const pathName = trim(name, "/").replace("//", "/");
  return [root, pathName].join("/").replace("//", "/");
};

export const appendPathTemplate = (currentPath, appendage) => {
  if (currentPath.includes(appendage)) return currentPath;
  const current = currentPath === "/" ? "" : currentPath;
  return [current, appendage].join("/".replace("//", "/"));
};
