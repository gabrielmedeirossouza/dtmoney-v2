const CracoAlias = require('craco-alias');
const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: path.resolve(__dirname, './'),
        aliases: {
          '@': path.resolve(__dirname, 'src/'),
        },
      },
    },
  ],
};
