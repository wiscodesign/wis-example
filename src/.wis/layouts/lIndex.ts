import { lazy } from "react"

export default lazy(() => {
  return import(/* webpackChunkName: "layout~index" */"../../layouts/index/Index.layout")
})
