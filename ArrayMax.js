var marks = [45,65,25,94,70,30,45,15,32];
var max = marks[0]
for(var i =0; i< marks.length; i++){
    const element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log(max);