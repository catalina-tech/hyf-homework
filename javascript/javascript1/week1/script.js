// FreeCodeCamp user: https://www.freecodecamp.org/catalina-tech

// Age-ify (A future age calculator)

let yearOfBirth;
yearOfBirth = 1988;
console.log(typeof yearOfBirth);

let yearFuture;
yearFuture = 2028;
console.log(typeof yearFuture);

let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " in " + yearFuture); 




//Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth;
dogYearOfBirth = 2017;

let dogYearFuture;
dogYearFuture = 2027;

//Human years
let dogYear = dogYearFuture - dogYearOfBirth;

//Dog Years
let dogYearOld = dogYear*7;

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYearOld + " dog years old in " + dogYearFuture);    
} else {
    console.log("Your dog will be " + dogYear + " human years in " + dogYearFuture);  
};




//Housey pricey (A house price estimator)

let peterHouseWide = 8;
let peterHouseDeep = 10;
let peterHouseHigh = 10;
let peterGardenSize = 100;
let peterHousePrice = 2500000;
let volumeInMetersPeterHouse = (peterHouseDeep*peterHouseHigh*peterHouseWide);

let peterHouse;
peterHouse = (volumeInMetersPeterHouse * 2.5 * 1000) + (peterGardenSize * 300);
peterHouseExtraMoney = peterHousePrice - peterHouse;
//console.log(peterHouse);

if(peterHouse < peterHousePrice) {
    console.log("Peter is paying more for the house - the cost of the house is: " + peterHousePrice + " and the actual price of the house is " + peterHouse + " peter is paying " + peterHouseExtraMoney + " extra money");
} else {
    console.log("Peter is paying less for the house, the actual price of the house is: " + peterHouse)
}

let juliaHouseWide = 5;
let juliaHouseDeep = 11;
let juliaHouseHigh = 8;
let juliaGardenSize = 70;
let juliaHousePrice = 1000000;
let volumeInMetersJuliaHouse = (juliaHouseDeep*juliaHouseHigh*juliaHouseWide);

let juliaHouse;
juliaHouse = (volumeInMetersJuliaHouse * 2.5 * 1000) + (juliaGardenSize * 300);
juliaHouseExtraMoney = juliaHouse - juliaHousePrice;
//console.log(juliaHouse);

if(juliaHouse < juliaHousePrice){
    console.log("Julia is paying more for the house - price house is: " + juliaHousePrice + " and the actual price if the house is " + juliaHouse + " julia is paying " + juliaHouseExtraMoney + " extra money");
} else {
    console.log("Julia is paying less for the house, the actual price of the house is: " + juliaHouse + " and not " + juliaHousePrice + " and julia is saving  " + juliaHouseExtraMoney);
};



//Ez Namey (Startup name generator) Optional

let firstWords = ["Bueno", "Awesome", "Smart", "Brown", "Green"];
let secondWords = ["Potential", "Industry", "Tradition", "big Star", "Future"];

const randomNumber = Math.floor(Math.random() * 5);
let startupName = (firstWords[randomNumber] + " " + secondWords[randomNumber]);

console.log(startupName);




