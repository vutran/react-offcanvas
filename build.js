/**
 * Compiles and builds for the gh-pages branch into the gh-pages folder.
 */

import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import config from './examples/webpack.config';

const ghpConfig = Object.assign({}, config);
ghpConfig.output.path = path.resolve(__dirname, 'gh-pages');
ghpConfig.devtool = null;

config.entry.shift(); // remove eventsource-polyfill
config.entry.shift(); // remove hmr entry
config.plugins.shift(); // remove hmr plugin

// create a webpack compiler
const compiler = webpack(ghpConfig);

// build!
compiler.run((err, stats) => {
  if (err) {
    console.error(err);
  }
});

// copies the index.html to the dist folder
const ghpPath = path.resolve(__dirname, 'gh-pages');
const indexFile = path.resolve(__dirname, 'examples', 'index.html');
const outIndexFile = path.resolve(ghpPath, 'index.html');
try {
  fs.mkdir(ghpPath, (err) => {
    if (err) {
      console.error(err);
    }
    fs.createReadStream(indexFile).pipe(fs.createWriteStream(outIndexFile));
  });
} catch (copyErr) {
  if (copyErr.code === 'EEXIST') {
    fs.createReadStream(indexFile).pipe(fs.createWriteStream(outIndexFile));
  } else {
    console.error(copyErr);
  }
}
