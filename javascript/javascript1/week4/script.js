//import "./styles.scss";
let saveName = null;
let todoList = [];

function getReply(command) {
  const currentDate = new Date().toLocaleDateString();
  let reply = "";

  if (command.startsWith("Hello my name is")) {
    const name = command.slice(17).trim();
    if (saveName) {
      const reply = "Nice to meet you again " + saveName;
      console.log(reply);
    } else {
      saveName = name;
      const reply = "Nice to meet you " + saveName;
      console.log(reply);
    }
  } else if (command === "What is my name") {
    if (saveName) {
      const reply = "Your name is " + saveName;
      console.log(reply);
    } else {
      const reply = "I do not know your name yet";
      console.log(reply);
    }
  } else if (command === "Add fishing to my todo") {
    todoList.push("Fishing");
    const reply = "fishing added to your todo";
    console.log(reply);
  } else if (command === "Add singing in the shower to my todo") {
    todoList.push("Singing");
    const reply = "Singing in the shower added to your todo";
    console.log(reply);
  } else if (command === "Remove fishing from my todo") {
    const index = todoList.indexOf("Fishing");
    if (index !== -1) {
      todoList.splice(index, 1);
      reply = "Removed fishing from your todo";
      console.log(reply);
    }
  } else if (command === "What is on my todo?") {
    if (todoList.length > 0) {
      reply = "Your todo list: " + todoList.join(", and ");
      console.log(reply);
    } else {
      reply = "Your todo list is empty";
      console.log(reply);
    }
  } else if (command === "What day is it today?") {
    const date = new Date();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    reply = "Today is " + dayOfMonth + "/" + month + "/" + year;
    console.log(reply);
    return date;
  } else if (command === "what is 3 + 3") {
    const sum = 3 + 3;
    reply = "6";
    console.log(reply);
  } else if (command === "Set a timer for 4 minutes") {
    const timer = setTimeout(() => {
      alert("Timer done");
    }, 240000);
  } else if (command === "Add sleep to my todo") {
    todoList.push("Sleep");
    reply = "Sleep added to your todo";
    console.log(reply);
  } else {
    reply = "I am sorry, I did not understand the command";
  }
  console.log(reply);
  return reply;
}

console.log(getReply("Hello my name is Catalina"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Add sleep to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What is on my todo?"));

import "./styles.scss";
import Artyom from "artyom.js";
// const artyom = require("artyom.js"); // if using CommonJS
const artyom = new Artyom();

function isGetReplyAvailable() {
  return typeof getReply !== "undefined" && typeof getReply === "function";
}

if (isGetReplyAvailable()) {
  let command = "";
  let timeoutId;
  let setIntervalTimer;

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    button.innerHTML = "Talk now 🙂";
    setIntervalTimer = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 2;
      if (randomNumber % 2 === 0) {
        button.innerHTML = "Talk now 😮";
      } else {
        button.innerHTML = "Talk now 🙂";
      }
    }, 100);
    clearTimeout(timeoutId);

    command = "";
    UserDictation.start();

    timeoutId = setTimeout(() => {
      clearInterval(setIntervalTimer);
      UserDictation.stop();
      const response = getReply(command);

      artyom.say(response);

      button.innerHTML = "Give a new command";
    }, 5000);
  });

  const UserDictation = artyom.newDictation({
    continuous: false, // Enable continuous if HTTPS connection
    onResult: function (text) {
      command = text.trim();
      console.log(`Received command: ${command}`);
    },
    onStart: function () {
      console.log("Dictation started by the user");
    },
    onEnd: function () {
      console.log("Dictation stopped by the user");
    },
  });
} else {
  alert("Please add the getReply function!");
}
