import PIndex from "./pIndex";
import P404 from "./p404";

export const routes = [
  {
    path: "",
    Component: PIndex,
    index: true,
  },
  {
    path: "*",
    Component: P404,
  },
]
