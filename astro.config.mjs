// @ts-check
import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [react(), tailwind()],
  env: {
    schema: {
      API_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
