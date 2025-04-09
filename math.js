const sum = (a,b) => a+b;
 const mul = (a,b) => a*b;
 const g = 9.8;
 const PI = 3.14;

//  option-1
 let obj = {
    sum:sum,
    mul:mul,
    g:g,
    PI:PI,
 };

 module.exports  = obj;

//  option-2:direct use of module.exports
module.exports.Suum = (a,b) => a+b;
module.exports.mul = (a,b) => a*b;
module.exports.g = 9.8;
module.exports.PI = 3.14;

//  option-3: direct use of exports
exports.Suum = (a,b) => a+b;
exports.mul = (a,b) => a*b;
exports.g = 9.8;
exports.PI = 3.14;