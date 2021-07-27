module.exports = (api, options, rootOptions) => {
  // 安装一些基础公共库
  // api.extendPackage({
  //   dependencies: {
  //     "axios": "^0.18.0",
  //     "lodash": "^4.17.10",
  //     "keymirror": "^0.1.1"
  //   },
  //   devDependencies: {
  //     "mockjs": "^1.0.1-beta3"
  //   }
  // });

  // 安装 vuex
  if (options.test) {
    api.render('./template/test');
  }

  // 公共基础目录和文件
  api.render('./template/default');
}
