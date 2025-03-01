import { lazy } from "react"

export default lazy(() => {
  return import(/* webpackChunkName: "page~404" */"../../pages/404/NotFound.page")
})
