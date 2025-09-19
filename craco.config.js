const path = require('path')
// const CracoAlias = require('craco-alias');

module.exports = {
    
    // webpack配置
    webpack: {
        //配置别名
        alias: {
            //约定：使用@表示 src文件所在路径
            '@': path.resolve(__dirname, 'src')
        },

        devServer: {
            port: 3001, // 设置端口号为3001
        },


    }
}

