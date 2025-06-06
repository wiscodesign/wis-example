import type { ComponentType } from "react";
import { useState, useEffect } from "react";
import { useRouterChange } from "wiscore/router";
import { remote } from "wiscore/runtime";

import { hasLayout } from "./layouts/Index";
import { routes as defaultRoutes } from "./pages/index";

// @ts-ignore
window.$__wis_app__ = [
  "wis",
]

export function hasApplication(name: string) {
  // @ts-ignore
  return window.$__wis_app__.includes(name);
}

function getRouteParts(): string[] {
  const pathname = window.location.hash.replace("#", "").split("?")[0]

  return pathname.split("/").filter(Boolean);
}

interface Route {
  path: string;
  Component: ComponentType<Record<string, unknown>>;
}

interface ApplicationInfo {
  basename: string;
  ready: boolean;
  routes: Route[];
}

export function useApplication() {
  const [info, setInfo] = useState<ApplicationInfo>({ basename: "/", ready: false, routes: [] });

  async function install() {
    let [maybeLayout, maybeApp] = getRouteParts();

    let layout: string | undefined;
    if (hasLayout(maybeLayout)) {
      layout = maybeLayout;
    } else {
      maybeApp = maybeLayout;
    }

    let app: string | undefined;
    if (hasApplication(maybeApp)) {
      app = maybeApp;
    }

    let basename = [layout, app].filter(Boolean).join("/");
    if (basename) {
      basename = basename.startsWith("/") ? basename : `/${basename}`
    }

    let applicationRoutes: Route[] = [];
    if (app) {
      const { routes } = await remote(`${app}/$application`);
      applicationRoutes = routes;
    } else {
      applicationRoutes = defaultRoutes;
    }

    setInfo({
      routes: applicationRoutes,
      basename,
      ready: true,
    })
  }

  function reset() {
    setInfo({ basename: "/", ready: false, routes: [] });
  }

  useRouterChange(() => {
    reset();
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!info.ready) {
      install();
    }
  }, [info]);

  return info;
}
