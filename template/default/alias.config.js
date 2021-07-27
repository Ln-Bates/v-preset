/**
 * Created by bates on 19/2/11.
 */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      apis: resolve('src/apis'),
      business: resolve('src/components/business'),
      public: resolve('src/components/public'),
      utils: resolve('src/utils'),
      constant: resolve('src/utils/constant'),
      helper: resolve('src/utils/helper'),
      tools: resolve('src/utils/tools'),
      views: resolve('src/views'),
      mixins: resolve('src/resources/mixins'),
      plugins: resolve('src/resources/plugins'),
      directives: resolve('src/resources/directives')
    }
  }
};
