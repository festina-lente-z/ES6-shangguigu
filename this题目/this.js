//"use strict";
function foo () {
  console.log(this.a)
}
var a = 10;
(function(){
  console.log(this)
  
  foo();debugger;
})();


