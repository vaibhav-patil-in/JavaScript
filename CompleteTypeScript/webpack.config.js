module.exports = {
    entry: "./section-10/app_section10.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};