let numbers;

//TODO - Print number from 0-100;

let a = 3;
let b = 5;

function fizzBuzz(a, b) {
    const numberForMultiples = [];

  for (let i = 1; i <= 100; i++) {
    
    if (i % a === 0 && i % b === 0) {
      numberForMultiples.push("FizzBuzz");
    } else if (i % a === 0) {
      numberForMultiples.push("Fizz");
    } else if (i % b === 0) {
      numberForMultiples.push("Buzz");
    } else {
      numberForMultiples.push(i);
    }
  }
  return numberForMultiples;
}

const output = fizzBuzz(3,15);
console.log(output);

const output2 = fizzBuzz(4,12);
console.log(output2);
