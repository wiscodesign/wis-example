import {
  HashRouter as Router,
  Routes,
  Route,
} from "wiscore/router";

import PIndex from "./pIndex";
import P404 from "./p404";

// @ts-ignore
window.$__wis_router__ = "hashRouter";

interface ApplicationProps {
  basename: string;
};

export function Application({ basename }: ApplicationProps) {
  return (
    <Router>
      <Routes>
        <Route path={basename}>
          <Route index element={<PIndex />} />
          <Route path="*" element={<P404 />} />
        </Route>
      </Routes>
    </Router>
  )
}
