var assert = require('assert');
var File = require('vinyl');
var md2html = require('..');

describe('gulp-md2html', function() {
  describe('in buffer mode', function() {
    it('should convert markdown to html', function(done) {
      // create the fake file
      var fakeFile = new File({
        contents: Buffer.from('Hello **world**')
      });

      // Create a prefixer plugin stream
      var myPlugin = md2html();

      // write the fake file to it
      myPlugin.write(fakeFile);

      // wait for the file to come back out
      myPlugin.once('data', function(file) {
        // make sure it came out the same way it went in
        assert(file.isBuffer());

        // check the contents
        assert.equal(file.contents.toString('utf8'), '<p>Hello <strong>world</strong></p>');
        done();
      });
    });
  });
});
