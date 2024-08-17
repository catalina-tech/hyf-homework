

const arguments = process.argv.slice(2);

//Check if there is any argument
if (arguments.length === 0) {
    console.log('No arguments provided');
    process.exit(1);
}



//Convert the arguments to numbers
const numbers = arguments.map(arg => {
    const num = Number(arguments); 
    if (isNaN(num)) {
        console.log(`Error: "${arg}" is not a valid number.`);
        process.exit(1);
    }
    return num; 
});

//Calculate the sum of the numbers
//Reduce, sums up the numbers.
const sum = numbers.reduce((acc,num) => acc + num, 0);

//Calculate the average
//Computes the average.

const average = sum / numbers.length;

//Output the average
console.log("Average:", average); 