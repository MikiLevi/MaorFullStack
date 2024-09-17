// 1
function big(num1, num2) {
    return Math.max(num1, num2);
}
// 2
function printNum(num3, num4) {
    console.log(Math.max(num3, num4));
}
// 3
var Shem = 90;
function duble(num5) {
    if (num5 % 2 === 0) {
        return "The number is Ok";
    }
    else {
        return "The number is not Ok";
    }
}
// 4
var Gadi = "Miki the king";
function long(str) {
    return str.length;
}
console.log(long(Gadi));
// 5
function allNumbersTheLowInItem(item) {
    var list = [];
    for (var i = 1; i < item; i++) {
        list.push(i);
    }
    list.push(item);
    return list;
}
console.log(allNumbersTheLowInItem(60));
