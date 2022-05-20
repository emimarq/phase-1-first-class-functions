function receivesAFunction(theCallback) {
  return theCallback();
}

function returnsANamedFunction() {
  return function funky() {

  };
}

function returnsAnAnonymousFunction() {
  return function() {

  }
}