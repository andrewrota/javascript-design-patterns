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
    var value = Math.random();
    return {
      randomNumber: value
    };
  };

  return {
    getInstance: function() {
      if(!_instance) {
        _instance = init();
      }
      return _instance;
    }
  };
}());