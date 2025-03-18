import PIndex from "./pIndex";
import PTodo from "./pTodo";
import P404 from "./p404";

export const routes = [
  {
    path: "",
    Component: PIndex,
    index: true,
  },
  {
    path: "todo",
    Component: PTodo,
  },
  {
    path: "*",
    Component: P404,
  },
]
