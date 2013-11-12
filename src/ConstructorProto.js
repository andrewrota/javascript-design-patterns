/**
 * A Constructor design pattern using
 * prototypes
 *
 * @class ConstructorProto
 */

module.exports = (function() {
  var ConstructorProto = function(greeting, name) {
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
  /**
   * An instance method that concatenates
   * name and greeting
   *
   * @method instanceMethod
   * @return {String}
   */
  ConstructorProto.prototype.instanceMethod = function() {
    return this.greeting + ', ' + this.name;
  };
  return ConstructorProto;
}());
