const path = require('path');

module.exports = {
    entry: './src/index.js', // punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: [
                    /node_modules[\\/]@react-aria[\\/]ssr/,
                    // otros módulos que quieras excluir
                ],
            },
            // otras reglas
        ],
    },
    // otras configuraciones de webpack
};
