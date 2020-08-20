var number = 2.26544;
var result = Math.floor(number) //The Math.floor() function returns the largest integer less than or equal to a given number.
console.log(result); //output : 2
//Ceil understand
console.log(Math.ceil(7.004)); //The Math.ceil() function always rounds a number up to the next largest integer
// expected output: 8

//round understand
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); //The Math.round() function returns the value of a number rounded to the nearest integer.
// expected output: 6 6 5

//random number
var randomNumber = 0;
var randomResult = Math.random() *6
var output = Math.round(randomResult)
console.log(output);