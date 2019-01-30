module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(?:sass|scss)$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                {
                    loader: 'sass-loader',
                    query: {
                        includePaths: [__dirname +  'node_modules']
                    }
                }
            ]
        }]
    }
}
