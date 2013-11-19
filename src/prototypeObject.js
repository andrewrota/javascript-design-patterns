/**
 * A prototype design pattern
 *
 * @class prototypeObject
 * @return {Object} Returns an object with methods and properties
 */

module.exports = {
    /**
     * A public method which returns a string
     *
     * @method publicMethod
     * @type {Function}
     */
    publicMethod: function() {
      return 'foo';
    },
    /**
     * A public property
     *
     * @property publicProperty
     * @type {String}
     * @default 'bar'
     */
    publicProperty: 'bar'
};
