import { defineConfig } from "vite";
import Userscript from "vite-userscript-plugin";
import svgr from "vite-plugin-svgr";
import { name, version } from "./package.json";

export default defineConfig((config) => {
  return {
    plugins: [
      svgr(),
      Userscript({
        entry: "src/index.tsx",
        header: {
          name,
          version,
          match: ["https://entreprenal.com/*"],
        },
        server: {
          port: 3000,
        },
      }),
    ],
    define: {
      "process.env": process.env,
    },
  };
});
