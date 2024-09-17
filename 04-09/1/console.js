1
let input = prompt("Please enter a number");

if (input > 10){
    console.log(input);
}

2
let input1 = prompt("Please enter a number");
let input2 = prompt("Please enter a number");
if (input1 > input2) {
    console.log(input1);
} else if (input2 > input1) {
    console.log(input2);
} else{
    console.log(input1)
}

let string = prompt("Please enter your request")
if (string.length > 20) {
    console.log("There are 20 characters in the string");
}else if
    (string.length > 10) {
    console.log("There are 10 characters in the string");
} else
    console.log("There are less than 10 characters");

4
let lengths = prompt("Please enter your request")
if (lengths.length > 20){
    console.log(lengths.substring(20));
}else{
    console.log(lengths);
}
fun