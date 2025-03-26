import type { ReactNode } from "react";
import touchAction from "touch-action";

import "./Index.scss";

touchAction();

function IndexLayout({ children }: { children: ReactNode }) {
  return children
}

export default IndexLayout;
