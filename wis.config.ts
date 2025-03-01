import type { WisConfig } from "@wisdesign/wis-plugin";

const config: WisConfig = {
  name: "example",

  exposes: {
    "./Button": "./src/packages/button/Button",
  },
};

export default config;
