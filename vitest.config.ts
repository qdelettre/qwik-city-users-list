import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikVite(), tsconfigPaths()],
    test: {
      coverage: {
        provider: "c8",
        exclude: ["**/*.spec.tsx", "**/tests/**/*"],
      },
    },
  };
});
