var chai = require('chai');
var assert = chai.assert;
var module = require('../src/module');
describe('Module Pattern', function(){
  it('should be defined', function(){
    assert.isDefined(module);
  });
  it('should be an object', function(){
    assert.isObject(module);
  });
  it('should have a public method', function(){
    assert.isFunction(module.publicMethod);
  });
  it('should have a public property', function(){
    assert.isString(module.publicProperty);
  });
  it('should have a private property', function(){
    assert.isUndefined(module._privateProperty);
  });
  it('should have a public method that can return private and public properties', function(){
    assert.strictEqual(module.publicMethod(), 'foo bar');
  });
});