module.exports = {
    entry: './app/js/main.js',
    output: {
        filename: './app/js/bundle.js'
    },
    watch: true,

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ],
    }
};