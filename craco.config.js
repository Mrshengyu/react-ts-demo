const path = require('path')
module.exports = {
    // webpack配置
    webpack: {
        //配置别名
        alias: {
            //约定：使用@表示 src文件所在路径
            '@': path.resolve(__dirname, 'src')
                    },
            //         test: /\.s[ac]ss$/i,
            //   use: [
            //     'style-loader',
            //     'css-loader',
            //     {
            //       loader: 'resolve-url-loader',
            //       options: { sourceMap: true }
            //     },
            //     {
            //       loader: 'sass-loader',
            //       options: { sourceMap: true }
            //     }
            //   ]

        }
    }