//! FreeCodeCamp Link: https://www.freecodecamp.org/catalina-tech

//* Flight booking fullname function

//*To add the Lady or Lord in front of the fullName, I created two radio buttons, one for female and another one for male
//* If you select useFormalName && male, it will appear Lord at the beggining
//* If you select userFormalName && Female, it will appear Lady at the beginning
//* This is how I fixed that the getFullname also works for women
//!Codepen link: https://codepen.io/Catalina-Bernal/pen/MWRdorw?editors=1010


function getFullname(firstName, surName, useFormalName, male, female) {

  let fullName = firstName + " " + surName;

  if (useFormalName && male) {
    fullName = "Lord " + fullName;
  } else if (useFormalName && female) {
    fullName = "Lady " + fullName;
  }

  return fullName;
}

console.log(getFullname("Benjamin ", "Hughes", true, true, false));

let fullname1 = getFullname("Catalina ", "Bernal", true, false, true);
let fullname2 = getFullname("Samuel ", "Lopez", true, true, false);

console.log(fullname1);
console.log(fullname2);

//* Formal fullname

// You dont neew to understand this just yet :)
const firstnameInput = document.querySelector('main input.firstname');
const lastnameInput = document.querySelector('main input[name="lastname"]');
const useFormalNameInput = document.querySelector('main input[name="use-formal-name"]');
const genderRadioInputs = document.querySelectorAll('main input[name="gender"]');
const boardingcardButton = document.querySelector("main button");
const boardingcard = document.querySelector("main div.boardingcard");
const fullnameElement = document.querySelector("main div.boardingcard .fullname");

boardingcardButton.addEventListener("click", () => {
  const firstname = firstnameInput.value;
  const lastname = lastnameInput.value;
  const useFormalName = useFormalNameInput.checked;
  
  let male = false;
    let female = false;

    genderRadioInputs.forEach(input => {
        if (input.checked) {
            if (input.value === 'male') {
                male = true;
            } else if (input.value === 'female') {
                female = true;
            }
        }
    });

  const fullname = getFullname(
    firstname,
    lastname,
    useFormalName,
    male, 
    female
  );

  fullnameElement.innerHTML = fullname;
  boardingcard.classList.remove("hidden");
});

//*EVENT APPLICATION

const day = new date();

console.log(day);