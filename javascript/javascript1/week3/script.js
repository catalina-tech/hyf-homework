//! Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here

if (names.includes(nameToRemove)) {
  let indexAhmad = names.indexOf(nameToRemove);

  names.splice(indexAhmad, 1);
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//! When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function WhenWeWillArrive() {
  let timeToArrive =
    travelInformation.destinationDistance / travelInformation.speed;
  return timeToArrive;
}

let travelTime = WhenWeWillArrive();
//console.log(travelTime);

function hoursAndMinutes(travelTime) {
  // Calculate the number of hours
  let hours = Math.floor(travelTime);

  //Calculate the number of minutes
  let decimalHours = travelTime - hours;

  // Convert decimal part to minutes
  let minutes = Math.round(decimalHours * 60);

  // Result
  return hours + " hours" + " and " + minutes + " minutes";
}

console.log(hoursAndMinutes(travelTime));

//! Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 4,
    hours: 6,
    minutes: 58,
  },
  {
    title: "This is us",
    days: 7,
    hours: 10,
    minutes: 13,
  },
  {
    title: "The Tudors",
    days: 1,
    hours: 10,
    minutes: 50,
  },
  {
    title: "How I meet your mother",
    days: 23,
    hours: 9,
    minutes: 56,
  },
];

function timeISpendWatchingSeries(seriesDurations) {
  let totalDays = 0;
  let totalHours = 0;
  let totalMinutes = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    totalDays += seriesDurations[i].days;
    totalHours += seriesDurations[i].hours;
    totalMinutes += seriesDurations[i].minutes;
  }

  // Calculate the number of hours
  let totalDaysTotal = Math.floor(totalDays);

  //Calculate the number of hours in days
  let totalHoursInDays = totalHours / 24;

  let totalMinutesInDays = totalMinutes / (60 * 24);

  let totalDaysWhatchingSeries =
    totalDaysTotal + totalHoursInDays + totalMinutesInDays;

  //29200 correspond to the days in 80 years
  let percentage = (totalDaysWhatchingSeries / 29200) * 100;

  return percentage.toFixed(4);
}

for (let j = 0; j < seriesDurations.length; j++) {
  let series = seriesDurations[j];
  let percentage = timeISpendWatchingSeries([series]);
  console.log(series.title + " TV serie took " + percentage + " % of my life.");
}

let total = timeISpendWatchingSeries(seriesDurations);
console.log("In total that is " + total + " % of my life");

//!Smart-ease - Back to the basics!
//!NOnoN0nOYes (Note taking app)

let notes = [];

function saveNote(content, id) {
  let notesSaved = { content: content, id: id };
  notes.push(notesSaved);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do weekly lunch schedule", 3);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//! Get a note

function getNote(id) {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

//! Log out notes

function logOutNotesFormatted() {
  let formattedNotes = " ";

  for (let i = 0; i < notes.length; i++) {
    formattedNotes +=
      "The notes with id: " +
      notes[i].id +
      " has the following note text: " +
      notes[i].content +
      "\n";
  }
  return formattedNotes;
}

const allNotes = logOutNotesFormatted();
console.log(allNotes);

//! Unique feature
//! Delete one note by its id

function removeNoteById(id) {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      let removeNotesId = notes[i].id;
      notes.splice(i, 1);
      return removeNotesId;
    }
  }
  return false;
}

const removeNote = removeNoteById(2);
console.log("The note with the id: " + removeNote + " have been remove ");
