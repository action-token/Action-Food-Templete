import { defineConfig } from "eslint/config";

import { baseConfig, restrictEnvAccess } from "@actionverse/eslint-config/base";
import { nextjsConfig } from "@actionverse/eslint-config/nextjs";
import { reactConfig } from "@actionverse/eslint-config/react";

export default defineConfig(
  {
    ignores: [".next/**"],
  },
  baseConfig,
  reactConfig,
  nextjsConfig,
  restrictEnvAccess,
);
