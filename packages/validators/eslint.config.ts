import { defineConfig } from "eslint/config";

import { baseConfig } from "@actionverse/eslint-config/base";

export default defineConfig(
  {
    ignores: ["dist/**"],
  },
  baseConfig,
);
