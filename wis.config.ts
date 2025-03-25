import type { WisConfig } from "@wisdesign/wis-plugin";

const config: WisConfig = {
  name: "example",

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
    "./detail": {
      "pc": "./src/packages/detail/pc/index",
      "mobile": "./src/packages/detail/mobile/index",
    },
    "./modal": {
      "pc": "./src/packages/modal/pc/index",
      "mobile": "./src/packages/modal/mobile/index",
    },
    "./form": {
      "pc": "./src/packages/form/pc/index",
      "mobile": "./src/packages/form/mobile/index",
    },
  },
};

export default config;
