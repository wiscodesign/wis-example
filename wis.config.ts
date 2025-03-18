import type { WisConfig } from "@wisdesign/wis-plugin";

const config: WisConfig = {
  name: "example",

  exposes: {
    "./page": {
      "pc": "./src/packages/page/pc/index",
      "mobile": "./src/packages/page/mobile/index",
    },
  },
};

export default config;
