#! /usr/bin/env -S gjs -m
imports.package.init({
    name: "org.example.MyApp",
    version: "1.0.0",
    prefix: "install",
    libdir: "install/lib"
});

// We must use import(), or it will be reordered by esbuild
import("resource://org/example/MyApp/dist/index.js").then(imports.package.run);
