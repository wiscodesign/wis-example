import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";
import { wisRsbuildPlugin } from "@wisdesign/wis-plugin/rsbuild"

export default defineConfig({
  server: {
    port: 4001,
  },

  plugins: [pluginReact(), pluginBasicSsl(), wisRsbuildPlugin()],
});
