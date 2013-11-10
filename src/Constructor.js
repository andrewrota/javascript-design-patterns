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
};