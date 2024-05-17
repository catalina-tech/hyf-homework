
function formatCreditCardNumber(number){

const formattedNumber = number.toString().replace(/\d{4}(?=.)/g, '$& ');
//console.log(formattedNumber);
return formattedNumber;
} // Output: "1234 5678 9"

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",
}
*/