import * as esbuild from "esbuild";
import GjsPlugin from "esbuild-gjs";
import GSolidPlugin from "esbuild-plugin-gsolid";

await Promise.all([
  esbuild.build({
    entryPoints: ["index.tsx"],
    target: "firefox68", // Spider Monkey 68
    format: "esm",
    bundle: true,
    outfile: "dist/index.js",
    plugins: [GjsPlugin({
      writeResourceManifest: {
        prefix: "/org/example/MyApp",
        filename: "org.example.MyApp.src.gresource.xml"
      }
    }), GSolidPlugin()],
    treeShaking: true,
  }),

  esbuild.build({
    entryPoints: ["entrypoint.ts"],
    target: "firefox68",
    format: "esm",
    bundle: true,
    outfile: "install/share/org.example.MyApp/org.example.MyApp",
    treeShaking: true,
    plugins: [GjsPlugin({}), GSolidPlugin()],
  }),
])
