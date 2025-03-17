import {
  RouterProvider,
  createHashRouter as createRouter,
} from "wiscore/router";

import { Layout } from "./layouts/Index";
import { useApplication } from "./useApplication";

// @ts-ignore
window.$__wis_router__ = "hashRouter";

export default function Root() {
  const { routes, basename, ready } = useApplication()

  if (!ready) {
    return null
  }

  const rootRoutes = [
    {
      Component: Layout,
      children: routes,
    }
  ]

  return (
    <RouterProvider router={createRouter(rootRoutes, { basename })} />
  )
}