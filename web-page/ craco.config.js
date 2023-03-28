const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const lessRegex = /\.less$/;
      const lessModuleRegex = /\.module\.less$/;

      // Exclude the existing CSS modules rule
      webpackConfig.module.rules = webpackConfig.module.rules.filter(
        (rule) => !rule.test?.toString().includes('css')
      );

      // Add the new Less modules rule
      webpackConfig.module.rules.push({
        test: lessRegex,
        exclude: lessModuleRegex,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // Modify less options as needed
              },
            },
          },
        ],
        sideEffects: true,
      });

      // Add the new Less modules (local) rule
      webpackConfig.module.rules.push({
        test: lessModuleRegex,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // Modify less options as needed
              },
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};
