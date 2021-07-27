const path = require('path');

//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

// const publicPath = isProd ? './' : '/';
module.exports = {
  publicPath: '/',
  css: {
    // 注入变量
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/_variable.scss";'
      }
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: true,
  chainWebpack: config => {
    // 别名配置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('apis', resolve('src/apis'))
      .set('business', resolve('src/components/business'))
      .set('public', resolve('src/components/public'))
      .set('utils', resolve('src/utils'))
      .set('constant', resolve('src/utils/constant'))
      .set('helper', resolve('src/utils/helper'))
      .set('tools', resolve('src/utils/tools'))
      .set('views', resolve('src/views'))
      .set('mixins', resolve('src/resources/mixins'))
      .set('plugins', resolve('src/resources/plugins'))
      .set('directives', resolve('src/resources/directives'));
    // 自动修复eslint报错
    config.module.rule('eslint')
      .use('eslint-loader')
      .options({
        fix: true
      });
  },
  productionSourceMap: false
};
