// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {
    presets: ['latest', 'react'],
    plugins: [
      'transform-decorators-legacy',
      'transform-object-rest-spread',
      [
        'transform-runtime',
        {
          regenerator: true
        }
      ]
    ]
  }
};
