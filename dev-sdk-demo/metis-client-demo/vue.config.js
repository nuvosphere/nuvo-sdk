// vue.config.js
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    },
    devServer: {
        disableHostCheck: true,
        hot: true,
        open: true,
        // 域名
        host: '0.0.0.0',
        // 端口
        port: 8000,
        // 代理
        proxy: {
            '/api': {
                // target: 'https://rocket.metis.io/',
                target: 'http://localhost:5000/',
                pathRewrite: {
                    '^/api': '/api'
                },
                logLevel: 'debug'
            }
        }
    }
}