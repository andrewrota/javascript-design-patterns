var chai = require('chai');
var assert = chai.assert;
var module = require('../src/module');
var Constructor = require('../src/Constructor');
var ConstructorProto = require('../src/ConstructorProto');
var singleton = require('../src/singleton');
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
describe('Constructor Pattern', function(){
  it('should be defined', function(){
    assert.isDefined(Constructor);
  });
  it('should be a function', function(){
    assert.isFunction(Constructor);
  });
  it('should be able to be used as a constructor', function(){
    var constructor = new Constructor();
    assert.isObject(constructor);
  });
  it('should have an instance method', function(){
    var constructor = new Constructor('Hello', 'World');
    assert.isFunction(constructor.instanceMethod);
  });
  it('should have an instance method that returns a string', function(){
    var constructor = new Constructor('Hello', 'World');
    assert.strictEqual(constructor.instanceMethod(), 'Hello, World');
  });
  it('should be able to be pass parameters to constructor', function(){
    var constructor = new Constructor('Hello', 'World');
    assert.isObject(constructor);
    assert.isString(constructor.greeting);
    assert.isString(constructor.name);
    assert.strictEqual(constructor.greeting, 'Hello');
    assert.strictEqual(constructor.name, 'World');
  });
  it('should be able to create multiple instances of constructor', function(){
    var englishConstructor = new Constructor('Hello', 'World');
    var spanishConstructor = new Constructor('Hola', 'Mundo');
    assert.strictEqual(englishConstructor.greeting, 'Hello');
    assert.strictEqual(englishConstructor.name, 'World');
    assert.strictEqual(spanishConstructor.greeting, 'Hola');
    assert.strictEqual(spanishConstructor.name, 'Mundo');
    assert.strictEqual(englishConstructor.instanceMethod(), 'Hello, World');
    assert.strictEqual(spanishConstructor.instanceMethod(), 'Hola, Mundo');
  });
  it('should have instanceMethod property on the instance object', function() {
    var constructor = new Constructor('Hello', 'World');
    assert.ok(constructor.hasOwnProperty('instanceMethod'));
  });
});
describe('Constructor Pattern using Prototypes', function(){
  it('should be defined', function(){
    assert.isDefined(ConstructorProto);
  });
  it('should be a function', function(){
    assert.isFunction(ConstructorProto);
  });
  it('should be able to be used as a constructor', function(){
    var constructor = new ConstructorProto();
    assert.isObject(constructor);
  });
  it('should have an instance method', function(){
    var constructor = new ConstructorProto('Hello', 'World');
    assert.isFunction(constructor.instanceMethod);
  });
  it('should have an instance method that returns a string', function(){
    var constructor = new ConstructorProto('Hello', 'World');
    assert.strictEqual(constructor.instanceMethod(), 'Hello, World');
  });
  it('should be able to be pass parameters to constructor', function(){
    var constructor = new ConstructorProto('Hello', 'World');
    assert.isObject(constructor);
    assert.isString(constructor.greeting);
    assert.isString(constructor.name);
    assert.strictEqual(constructor.greeting, 'Hello');
    assert.strictEqual(constructor.name, 'World');
  });
  it('should be able to create multiple instances of constructor', function(){
    var englishConstructor = new ConstructorProto('Hello', 'World');
    var spanishConstructor = new ConstructorProto('Hola', 'Mundo');
    assert.strictEqual(englishConstructor.greeting, 'Hello');
    assert.strictEqual(englishConstructor.name, 'World');
    assert.strictEqual(spanishConstructor.greeting, 'Hola');
    assert.strictEqual(spanishConstructor.name, 'Mundo');
    assert.strictEqual(englishConstructor.instanceMethod(), 'Hello, World');
    assert.strictEqual(spanishConstructor.instanceMethod(), 'Hola, Mundo');
  });
  it('should not have instanceMethod property on the instance object', function() {
    var constructor = new ConstructorProto('Hello', 'World');
    assert.notOk(constructor.hasOwnProperty('instanceMethod'));
  });
});
describe('Singleton Pattern', function(){
  it('should be defined', function(){
    assert.isDefined(singleton);
  });
  it('should be an object', function(){
    assert.isObject(singleton);
  });
  it('should have a getInstance method', function(){
    assert.isFunction(singleton.getInstance);
  });
  it('should return the same random number twice', function() {
    assert.strictEqual(singleton.getInstance().randomNumber, singleton.getInstance().randomNumber);
  });
});
