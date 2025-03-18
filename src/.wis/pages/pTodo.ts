import { lazy } from "react"

export default lazy(() => {
  return import(/* webpackChunkName: "page~todo" */"../../pages/todo/Todo.page")
})
