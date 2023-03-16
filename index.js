'use strict';

const through = require('through2');
const md2html = require('@jswork/github-md2html');
const PLUGIN_NAME = 'gulp-github-md2html';

function Plugin() {
  return through.obj(async (file, enc, cb) => {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new Error('Streams not supported.'));
    }

    try {
      const content = file.contents.toString();
      const html = await md2html(content);
      file.contents = Buffer.from(html);
      cb(null, file);
    } catch (err) {
      cb(new Error(`Failed to convert Markdown to HTML: ${err.message}`));
    }
  });
}

module.exports = Plugin;
