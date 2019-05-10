/*https://github.com/facebook/metro/issues/287#issuecomment-470026886*/
/*Gets read of really annoting errors that are of absolutely no use */
const fs = require('fs');

const codeToObscure = /console.warn\([\s]*`Require cycle[^;]*;/;
const problemFilePath = './node_modules/metro/src/lib/polyfills/require.js';
const problemFileContent = fs.readFileSync(problemFilePath, 'utf8');
fs.writeFileSync(
  problemFilePath,
  problemFileContent.replace(codeToObscure, ''),
  { encoding: 'utf8' }
);
