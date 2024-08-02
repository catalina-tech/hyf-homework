//! The first digit indicates the provider: Mastercard numbers start with a 2 or 5. 
//!Visa card numbers start with a 4. American Express numbers start with a 3.

function getCardInfo(cardNumber){
   
    const cleanedNumber = cardNumber.replace(/\D/g, '');

    // Get the first digit of the cleaned number
    const firstDigit = cleanedNumber.charAt(0);

    // Check the first digit to identify the card type
    if (firstDigit === '4') {
        return "Visa";
    } else if (firstDigit === '2') {
        return "Mastercard";
    } else if (firstDigit === '5') {
        return "Mastercard";
    }else if (firstDigit === '3') {
        return "American Express";
    } else {
        return "Unknown";
    }
}

console.log(getCardInfo("582919024242")); //Mastercard
console.log(getCardInfo("4781321334789876")); // 'visa'