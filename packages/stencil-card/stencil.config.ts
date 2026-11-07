import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "stencil-card",
  outputTargets: [
    {
      type: "dist-custom-elements",
      customElementsExportBehavior: "auto-define-custom-elements",
    },
  ],
  testing: {
    browserHeadless: true,
  },
};
