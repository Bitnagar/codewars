"use strict"
function squareSum(numbers) {
  return numbers.reduce((total, num) => total + num * num, 0);
}

const arr = [0, 3, 4, 5];

console.log(squareSum(arr));

function sum(numbers) {
  'use strict';
  if (numbers.length === 0) return 0;
  return numbers.reduce((total, num) => total + num, 0);
}

// const arr = [];

console.log(sum(arr));

function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(false));

function abbrevName(name) {
  return name
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('.');
}

console.log(abbrevName('shivam bhatnagar'));

function areYouPlayingBanjo(name) {
  // Implement me
  return name.match(/^R/gi)
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Wandy'));

function sumArray(array) {
  if (array === null || array === undefined) {
    return 0;
  }

  if (array.length < 3) {
    return 0;
  }

  array.sort(function (a, b) {
    return a - b;
  });
  console.log(array);
  let sum = 0;
  for (let i = 1; i < array.length - 1; i++) {
    sum += array[i];
  }

  return sum;
}

const array = [1, 1, 11, 2, 3];
console.log(sumArray(array));

function sumArray(array) {
  return array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((total, num) => total + num, 0)
    : 0;
}

console.log(sumArray(array));

// const rps = (p1, p2) => {
//     if (p1 === p2) {
//         return "Draw!"
//     }
    
//     if(p1 === "scissors" && p2 === "paper") {
//         return `Player ${1} won`
//     }
    
//     if(p1 === "scissors" && p2 === "rock") {
//         return `Player ${2} won`
//     }
    
//     if(p1 === "paper" && p2 === "rock") {
//         return `Player ${1} won`
//     }
    
//     if(p1 === "paper" && p2 === "scissors") {
//         return `Player ${2} won`
//     }
    
//     if(p1 === "rock" && p2 === "scissors") {
//         return `Player ${1} won`
//     }
    
//     if(p1 === "rock" && p2 === "paper") {
//         return `Player ${2} won`
//     }
// }



const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }

    // return rules["scissors"];

};

console.log(rps("paper", "scissors"));

function countPositivesSumNegatives(input) {
    let posCount = 0;
    let negSum = 0;
  
    if(input === null || input.length === 0) return [];
  
    input.filter(num => num != 0).forEach(res => {
        if(res < 0) negSum += res;
        else posCount++;
    });
    return [posCount, negSum];
}

const input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

console.log(countPositivesSumNegatives(input));

function litres(time) {
    return ~~(time / 2);
}

console.log(litres(12.3));

const binaryArrayToNumber = arr => {
    let result = 0;
    let n = arr.length - 1;
    let exponent = 0;
    for(let i = n; i > 0; i--) {
        while(exponent < n) {
            result += arr[i]*2**exponent;
            exponent++;
        }
    }
    return result;
};

const arrExp = [0, 0, 0, 1];
console.log(binaryArrayToNumber(arrExp));