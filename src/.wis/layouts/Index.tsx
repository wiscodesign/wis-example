import { useState } from "react";
import type { ReactNode, ComponentType } from "react";
import { useRouterChange } from "wiscore/router";


// @ts-ignore
window.$__wis_layouts__ = {
}

export function hasLayout(name: string) {
  // @ts-ignore
  return name in window.$__wis_layouts__;
}

function getLayout(): undefined | ComponentType<Record<string, unknown>>{
  const pathname = window.location.hash.replace("#", "").split("?")[0]
  const [layoutName] = pathname.split("/").filter(Boolean);

  // @ts-ignore
  return window.$__wis_layouts__[layoutName];
}

function useLayout() {
  const [Layout, setLayout] = useState<undefined | ComponentType<Record<string, unknown>>>(getLayout())

  useRouterChange(() => {
    setLayout(getLayout())
  })

  return Layout;
}

export function Layout({ children }: { children: ReactNode }) {
  const Layout = useLayout();

  if (!Layout) {
    return children;
  }

  return <Layout>{children}</Layout>;
}
