const add = function(a,b) {
    return a + b;
};
const subtract = function(a,b) {
    return a -b;
};
const multiply = function(arr) {
 return arr.reduce(function(a,b){
    return a * b;
  }, 1)
};
const divide = function(a,b) {
    return a/b;
}
console.log(add(8,8))