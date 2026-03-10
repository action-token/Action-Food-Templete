import { defineConfig } from "eslint/config";

import { baseConfig } from "@actionverse/eslint-config/base";
import { reactConfig } from "@actionverse/eslint-config/react";

export default defineConfig(
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  baseConfig,
  reactConfig,
);
