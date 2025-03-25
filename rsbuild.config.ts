import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginWis } from "@wisdesign/wis-plugin/rsbuild";

export default defineConfig({
  server: {
    port: 4001,
    host: "localhost",
  },

  plugins: [pluginReact(), pluginBasicSsl(), pluginSass(), pluginWis()],
});
