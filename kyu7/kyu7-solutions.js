"use strict"

function repeatStr (n, s) {
    let string = '';
    for(let i = 0; i < n; i++) {
        string += s;
    }
    return string;
}

function repeatStr(n, s) {
    return s.repeat(n);
}
console.log(repeatStr(10, "Hello"));

const str = "hola hello namaste";

const smallest = str.split(" ").sort((a, b) => {
    return a.localeCompare(b);
});

function findShort(s){
    const smallest = s.split(" ").sort((a, b) => a.length - b.length);
    return smallest[0].length;
}

const string = "bitcoin take over the world maybe who knows perhaps";

console.log(findShort(string));


function isNumber(value) {
    if(typeof value === "number") {
        return true
    } else return false
} 

function filter_list(l) {
    let numsArray = [];
    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] === "number") {
            numsArray.push(l[i]);
        }
    }
    return numsArray;
}

// function filter_list(l) {
//     return l.filter(element => typeof element === "number")
// }



let arr = [1, 'a', 'b', 0, 15];
console.log(filter_list(arr));

var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(3));

function highAndLow(numbers){
  const sortArr = numbers.split(" ").sort((a , b) => a - b );
  let n = sortArr.length;
  return `${Number(sortArr[n - 1])} ${Number(sortArr[0])}`;
}

console.log(highAndLow("1 9 3 4 -5"));

function digitize(n) {
  return n.toString().split('').reverse().map(number => Number(number))
}

console.log(digitize(0));

const array = [];

const reverseSeq = n => {
    if(n === 0) return array;
    array.push(n);
    reverseSeq(n - 1);
    return array;
};

console.log(reverseSeq(100));

String.prototype.toJadenCase = function () {
   return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
};

// String.prototype.capitalize = function(){
// 	return this.charAt(0).toUpperCase() + this.slice(1);
// }


console.log("shivam is a good boy".toJadenCase());

function squareDigits(num){
    const numArr =  String(num).split("").map(str => Number(str));
    // for(let i = 0; i < numArr.length; i++) {
    //     numArr[i] *= numArr[i];
    // }
    const sqNumArr = Array.from(numArr, element => element *= element)
    const joinedNums = Number(sqNumArr.join(""));
    return joinedNums;
}

// function modSqDigits() {
//     return String(num).split(" ").map(str => Number(str));
// }

console.log(squareDigits(9119));

function DNAStrand(dna){
   const dnaObject = {
        T: "A",
        A: "T",
        C: "G",
        G: "C"
    };
    return dna.split("").map(char => dnaObject[String(char)]).join("");
}

console.log(DNAStrand("ATGC"));

function printerError(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] > "m" || s[i] < "a") {
            count++;
        }
    }
    return `${count}/${s.length}`
}

let stringy = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

console.log(printerError(stringy));


function getMiddle(s) {
    const len = s.length
    if(len < 2) return s;
    return len % 2 === 0 ? `${s.charAt((len / 2) - 1)}${s.charAt(len / 2)}` : `${s.charAt(len / 2)}`
}

console.log(getMiddle("shivam"));
console.log("shivamw".length() / 2);

function rowSumOddNumbers(n) {
    let level = 0;
    let result = 0;
    for(let i = 0; i < n.length; i++) {

    }
}
console.log(rowSumOddNumbers(1))


function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));

function calculateYears(principal, interest, tax, desired) {
    var years = 0;
    while(principal < desired){
      principal = principal + (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("shivam"));

function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
        default:
            break;
    }
}

function otherAngle(a, b) {
    return 180 - (a + b);
}

console.log(otherAngle(3, 3));

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((total, sheeps) => {
        if(sheeps === null) total = 0;
        if(sheeps) total++;
        return total;
    })
}

const sheeps = [true,  null,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
];

console.log(countSheeps(sheeps));

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++) {
        z.push(i * x);
    }
    return z;
}

console.log(countBy(2, 5));