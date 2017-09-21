// build our blueprint object
var MyBluePrint = function MyBluePrintObject() {
  
  this.someFunction = function someFunction() {
   	console.log( 'some function' );
  };
  
  this.someOtherFunction = function someOtherFunction() {
    console.log( 'some other function' );
  };
  
  this.showMyName = function showMyName() {
	console.log( this.name );
  };
  
};

function MyObject() {
	this.name = 'testing';
	this.age = 20;
}
MyObject.prototype = new MyBluePrint();

//another may to add prototype method
MyObject.prototype.showAge = function(){
	console.log(this.age);
}

// example usage
var testObject = new MyObject();
testObject.someFunction(); // logs "some function"
testObject.someOtherFunction(); // logs "some other function"
testObject.showMyName(); // logs "testing"
testObject.showAge(); // logs "20"
