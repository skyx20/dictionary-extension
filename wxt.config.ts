import { defineConfig } from "wxt";

export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-react"],
  manifest: {
    host_permissions: ["<all_urls>"],
    background: {
      scripts: ["src/entrypoints/backgroud.ts"],
    },
  },
});
