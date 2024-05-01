//*EVENT APPLICATION

let todayDay = new Date();

let getEventWeekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function dateEvent(eventDay) {
  let eventDate = new Date(todayDay);
  eventDate.setDate(todayDay.getDate() + eventDay);

  let eventWeekday = eventDate.getDay();

  return getEventWeekday[eventWeekday];
}

console.log(dateEvent(5));

//*Weather wear

let temperature = 20;
let clothesToWear;

if (-20 <= temperature && temperature <= 0) {
  clothesToWear = "Please do not go out from home and watch a movie";
} else if (1 <= temperature && temperature <= 10) {
  clothesToWear = "Use a winter Jacket and boots";
} else if (11 <= temperature && temperature <= 15) {
  clothesToWear = "Use a sweater and sunglases";
} else {
  clothesToWear =
    "it is summer in Denmark, you can go to the beach, go for your sandals";
}

console.log(clothesToWear);

//*Student manager

const class07Students = [];

function addStudentToClass(studentName) {
  // You write code here

  if (studentName) {
    if(class07Students.length >= 6){
        return "Cannot add more students to class 07";
    }else if (class07Students.includes(studentName)) {
    return "Student " + studentName + " is already in the class";
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
    return "There is always space for the queen of Denmark";
  } else {
    class07Students.push(studentName);
    return "Student " + studentName + " added to class 07";
  }
} else {
    return "Please provided a valir name";
}
}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}

console.log(addStudentToClass("Benjamin"));
console.log(addStudentToClass("Catalina"));
console.log(addStudentToClass("Jose"));
console.log(addStudentToClass("Oscar"));
console.log(addStudentToClass("Jose"));
console.log(addStudentToClass("Tomaso"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Jose"));

console.log(getNumberOfStudents());
