/**
 * A singleton design pattern
 *
 * @class singleton
 * @return {Object} Returns an object
 * with a getInstance function
 */

module.exports = (function() {
  /**
   * Reference to the singleton
   *
   * @property _instance
   * @type {Object}
   * @private
   */
  var _instance;
  /**
   * Singleton API
   *
   * @method init
   * @return {Object} Returns the API for singleton functionality
   */
  var init = function() {
    /**
     * Example of a property on the singleton API.  Uses
     * Math.random() to generate a random number to prove
     * whether the pattern is returning the same instance
     *
     * @property _value
     * @type {Number}
     * @private
     */
    var _value = Math.random();
    return {
      /**
       * Get a unique number for this pattern.
       *
       * @property uniqueNumber
       * @type {Number}
       */
      uniqueNumber: _value
    };
  };

  return {
    /**
     * A method to get the instance of the singleton
     *
     * @method getInstance
     * @return {Object} Returns the instance of the singleton
     */
    getInstance: function() {
      if(!_instance) {
        _instance = init();
      }
      return _instance;
    }
  };
}());