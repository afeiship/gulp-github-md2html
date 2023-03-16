(function () {
  'use strict';

  var gulp = require('gulp');
  var md2html = require('..');
  var rename = require('gulp-rename');
  var wrap = require('gulp-wrap');

  gulp.task('demo', function () {
    return gulp
      .src('src/*.md')
      .pipe(md2html())
      .pipe(rename({ extname: '.html' }))
      .pipe(
        wrap(
          `<!DOCTYPE html><html><head><meta charset="utf-8">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css" integrity="sha512-bm684OXnsiNuQSyrxuuwo4PHqr3OzxPpXyhT66DA/fhl73e1JmBxRKGnO/nRwWvOZxJLRCmNH7FII+Yn1JNPmg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          </head><body class="markdown-body"><%= contents %></body></html>`
        )
      )
      .pipe(gulp.dest('dist'));
  });

  gulp.task('default', gulp.series(['demo']));
})();
