// a simple facade that masks the various browser-specific methods
var window = window || null;

function addEvent( element, event, callback ) {
  
  if( window.addEventListener ) {
    element.addEventListener( event, callback, false );
  } else if( document.attachEvent ) {
    element.attachEvent( 'on' + event, callback );
  } else {
    element[ 'on' + event ] = callback;
  }
  
}

// another example of a module which usages facade pattern to hide the direct access to 
// internal method
var MyModule = ( function( window, undefined ) {

    
    function someMethod() {
      console.log( 'some method' );
    }
    
    function someOtherMethod() {
      console.log( 'some other method' );
    }
    
    // expose publicly available methods
    return {
      
      // in our normal revealing module pattern, we'd do the following:
      someMethod : someMethod,
      
      // in the facade pattern, we mask the internals so no one has direct access by doing this:
      someOtherMethodFacade : function() {
        someOtherMethod();
      }
      
    };
    
  
  
} )( window );

//example usages

MyModule.someMethod(); // logs "some method"
MyModule.someOtherMethodFacade(); //logs "some other method"
MyModule.someOtherMethod(); // throw error "MyModule.someOtherMethod is not a function"
