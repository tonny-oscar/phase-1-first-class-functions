function receivesAFunction(callback) {
    callback();
  }
  
function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  //returnsAnAnonymousFunction
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }
