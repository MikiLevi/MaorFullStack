// 1
function big(num1: number, num2: number): number {
    return Math.max(num1, num2)
}

// 2
function printNum(num3: number, num4: number) {
    console.log(Math.max(num3, num4));
}

// 3
const Shem: number = 90;
function duble(num5: number) {
    if (num5 % 2 === 0) {
        return "The number is Ok"
    }
    else {
        return "The number is not Ok"
    }
}

// 4
const Gadi: string = `Miki the king`;
function long(str: string) {
    return str.length
}
console.log(long(Gadi));

// 5
function allNumbers(item: number): number[] {
    const list: number[] = [];
    for (let i = 1; i < item; i++) {
        list.push(i);
    }
    list.push(item);
    return list;
}
console.log(allNumbers(60));
