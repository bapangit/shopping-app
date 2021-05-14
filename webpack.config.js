const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"],extensions: [ '.ts', '.js', '.tsx', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      /* '@buttons': path.resolve(__dirname, 'src/components/buttons') */
    } },
    devServer: { contentBase: path.join(__dirname, "src"),port:8080,open:true },
    module: {
        rules: [
            /* { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            }, */{ 
                test: /\.(ts|tsx)$/, 
                exclude: /node_modules/, 
                use: ["ts-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
};