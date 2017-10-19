var Canopy = require('canopy');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  return Canopy.compile(source);
}
