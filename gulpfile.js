/* 
  Split out gulp tasks
*/

const requireDir = require('require-dir');

requireDir('./gulp', {recurse: true});