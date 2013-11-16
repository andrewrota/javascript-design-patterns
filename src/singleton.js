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
   * to check if it exists
   *
   * @property _instance
   * @type {Boolean}
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
    var value = Math.random();
    return {
      randomNumber: value
    };
  };

  return {
    getInstance: function() {
      return init();
    }
  };
}());