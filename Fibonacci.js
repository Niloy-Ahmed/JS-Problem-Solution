//fibo [i] = fibo[i-1] + fibo[i-2]
function fibonacci(n) {
    var fibo = [0, 1]
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);


function fibonacci(num) {
    var fibo = [0,1];
    for (let i = 2; i < num; i++) {
       fibo[i] = fibo[i -1] + fibo[i -2]
    }
    return fibo
}
var res = fibonacci(5);
console.log(res);