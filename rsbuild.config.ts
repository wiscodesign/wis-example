import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginWis } from "@wisdesign/wis-plugin/rsbuild";

export default defineConfig({
  server: {
    port: 8000,
  },

  html: {
    title: "Wis Example",
    favicon: "public/favicon.ico",
  },

  plugins: [pluginReact(), pluginSass(), pluginWis()],
});
