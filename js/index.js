import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://playground-d500d-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

// setup the ref
const shoppingListInDB = ref(database, "shoppingList");

const text = document.getElementById("input-field");
const addBtn = document.getElementById("add-button");

addBtn.addEventListener("click", () => {
  let inputText = text.value;
  push(shoppingListInDB, inputText);
  console.log(inputText);
});
