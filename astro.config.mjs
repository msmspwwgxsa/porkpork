import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [tailwind(), icon()],
});
