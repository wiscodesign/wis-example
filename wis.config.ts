import type { WisConfig } from "@wisdesign/wis-plugin";

const config: WisConfig = {
  name: "example",

  remotes: {
    wis: "https://static.wis.design"
  },

  exposes: {
    "./page": {
      "pc": "./src/packages/page/pc/index",
      "mobile": "./src/packages/page/mobile/index",
    },
    "./actions": {
      "pc": "./src/packages/actions/pc/index",
      "mobile": "./src/packages/actions/mobile/index",
    },
    "./button": {
      "pc": "./src/packages/button/pc/index",
      "mobile": "./src/packages/button/mobile/index",
    },
    "./list": {
      "pc": "./src/packages/list/pc/index",
      "mobile": "./src/packages/list//mobile/index",
    },
    "./modal": {
      "pc": "./src/packages/modal/pc/index",
      "mobile": "./src/packages/modal/mobile/index",
    },
    "./form": {
      "pc": "./src/packages/form/pc/index",
      "mobile": "./src/packages/form/mobile/index",
    },
    "./input": {
      "pc": "./src/packages/input/pc/index",
      "mobile": "./src/packages/input/mobile/index",
    },
    "./select": {
      "pc": "./src/packages/select/pc/index",
      "mobile": "./src/packages/select/mobile/index",
    },
  },
};

export default config;
