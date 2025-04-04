import type { ComponentType } from "react";
import { useState, useEffect } from "react";
import { useRouterChange } from "wiscore/router";
import { remote } from "wiscore/runtime";

import { hasLayout } from "./layouts/Index";
import { routes as defaultRoutes } from "./pages/index";

// @ts-ignore
window.$__wis_app__ = [
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

export function useApplication() {
  const [routes, setRoutes] = useState<Route[]>();
  const [ready, setReady] = useState(false);
  const [basename, setBasename] = useState("/");

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

    const basename = [layout, app].filter(Boolean).join("/");
    if (basename) {
      setBasename(basename.startsWith("/") ? basename : `/${basename}`);
    }

    if (app) {
      const { routes } = await remote(`${app}/$application`);
      setRoutes(routes);
    } else {
      setRoutes(defaultRoutes);
    }

    setReady(true);
  }

  function reset() {
    setRoutes(undefined);
    setReady(false);
    setBasename("/");
  }

  useRouterChange(() => {
    reset();
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!ready) {
      install();
    }
  }, [ready]);

  return { routes, basename, ready };
}
