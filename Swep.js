var a = 2;
var b = 4;
console.log("before swap: a=" ,a , "b=" ,b);

var temp = a;
a = b;
b = temp;

console.log("after swap: a=" ,a , "b=" ,b);

let p = 1;
let q = 2;

p = p + q;
q = p - q;
p = p - q;
console.log(p,q);

//Javascript special 
let x = 10;
let y = 20;

[x,y] = [y,x]
console.log(x,y);