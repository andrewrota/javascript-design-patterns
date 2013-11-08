/**
 * Module design pattern
 *
 * @class module
 */

module.exports = (function() {
  var _privateProperty = 'bar';
  return {
    publicMethod: function() {
      return this.publicProperty + ' ' + _privateProperty;
    },
    publicProperty: 'foo'
  };
}());