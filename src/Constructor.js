/**
 * A Constructor design pattern
 *
 * @class Constructor
 */

module.exports = function(greeting, name) {
  /**
   * The greeting property
   *
   * @property greeting
   * @type {String}
   */
  this.greeting = greeting;
  /**
   * The name property
   *
   * @property name
   * @type {String}
   */
  this.name = name;
  /**
   * An instance method that concatenates
   * name and greeting
   *
   * @method instanceMethod
   * @return {String}
   */
  this.instanceMethod = function() {
    return this.greeting + ', ' + this.name;
  };
};
