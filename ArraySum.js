var marks = [45, 65, 25, 94, 70, 30, 45, 15, 32];
function getArraySum(marks) {
    var sum = 0;
    for (let i = 0; i < marks.length; i++) {
        const element = marks[i];
        sum = sum + element;
    }
    return sum;
}
var result = getArraySum(marks)
console.log(result);

var total = getArraySum([12,25,15]);
console.log(total);