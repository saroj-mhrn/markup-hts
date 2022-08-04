let mix = require('laravel-mix');
require('mix-html-builder');
require('browser-sync');

mix.disableSuccessNotifications();
mix.setPublicPath('dist');

mix.html({
    htmlRoot: './src/*.html',
    output: './',
    minify: { removeComments: true },
    // versioning: true
  })
  .sourceMaps(false, 'source-map')
  .sass('src/assets/sass/app.scss', 'css/app.css')
  .js('src/assets/js/app.js', 'js/app.js')
  .browserSync({
    files: ['**/*.js', '**/*.css', 'src/**/*.html'],
    server: {
      baseDir: 'dist',
      index: 'index.html'
    }
  })
  .version();