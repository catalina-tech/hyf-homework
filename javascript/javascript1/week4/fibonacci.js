//* Fibonacci Sequence

const myArray = [0,1,1,2,3,5,8,13,21,34];

function fibonacci(num){
    var num1 = 0;
    var num2 = 1;
    var sum;
    i = 0;

    for(i=0;i<num;i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
}

fibonacci(5);
fibonacci(10);

console.log(fibonacci(0));
console.log(fibonacci(1));

function fib(n){
    const fiboNumbers = [0,1];

    for(let i=2;i<n;i++){
        fiboNumbers.push(fiboNumbers[i-1] + fiboNumbers[i-2]);
    }
    return fiboNumbers[n-1];
}

console.log(fib(5));
console.log(fib(10));


