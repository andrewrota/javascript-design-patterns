/**
 * A module design pattern
 *
 * @class module
 * @return {Object} Returns the module API as an object
 */

module.exports = (function() {
  /**
   * A private property
   *
   * @property _privateProperty
   * @type {String}
   * @default 'bar'
   * @private
   */
  var _privateProperty = 'bar';
  return {
    /**
     * A public method which returns this.publicProperty
     * concatenated with _privateProperty
     *
     * @method publicMethod
     * @type {Function}
     */
    publicMethod: function() {
      return this.publicProperty + ' ' + _privateProperty;
    },
    /**
     * A public property'
     *
     * @property publicProperty
     * @type {String}
     * @default 'foo'
     */
    publicProperty: 'foo'
  };
}());