module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname + "/bin/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                loader: "babel-loader",
                exclude: /node-modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};