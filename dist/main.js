// ts config
//run tsc --init or npx tsc --init
// basic setup
//include below in tsconfig.json file
{
    "compilerOptions";
    {
        "target";
        "ES3",
            "module";
        "ES2015",
            "declaration";
        false,
            "sourceMap";
        true,
            "outDir";
        "./dist",
            "rootDir";
        "./src",
            "watch";
        true;
    }
    "include";
    [
        "src/**/*"
    ];
}
//# sourceMappingURL=main.js.map