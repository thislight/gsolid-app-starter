#! /usr/bin/env -S gjs -m
import {set, requireResource} from "gsolid/package";
import system from "system";

set({
    id: "org.example.MyApp",
    name: "Hello World",
    version: "1.0.0",
    prefix: "install",
    libdir: "install/lib"
})

requireResource(["org.example.MyApp.gresource"]);

import("resource://org/example/MyApp/dist/index.js").then(({default: main}) => {
    system.exit(main(system.programArgs));
});
