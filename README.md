# gulp-github-md2html
> Gulp plugin for github markdown to html.

## installation
```shell
# public
yarn add --dev @jswork/gulp-github-md2html
```

## usage
```js
"use strict";

const gulp = require('gulp');
const md2html = require('@jswork/gulp-github-md2html');
const rename = require('gulp-rename');

gulp.task('demo', function () {
  return gulp
    .src('src/*.md')
    .pipe(md2html())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(['demo']));
```
