const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'pt-BR'],
  },
}
