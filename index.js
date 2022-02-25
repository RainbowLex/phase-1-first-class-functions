function receivesAFunction(callBack) {
    callBack();
}
function returnsANamedFunction () {
    return function namedFunc(){};
  }
function returnsAnAnonymousFunction(){
    return function(){};
}