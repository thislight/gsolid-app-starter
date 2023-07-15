import * as esbuild from "esbuild";
import GjsPlugin from "esbuild-gjs";
import GSolidPlugin from "esbuild-plugin-gsolid";

await esbuild.build({
  entryPoints: ["index.tsx"],
  target: "firefox68", // Spider Monkey 68
  format: "esm",
  bundle: true,
  outfile: "dist/index.js",
  plugins: [GjsPlugin({}), GSolidPlugin()],
  treeShaking: true,
});
