import { getTime } from "./clock.js";
import {
  createModalWindow,
  deleteModalWindow,
  deleteModalWindowEdit,
  createModalWindowWarning,
  deleteModalWindowWarning,
  createModalWindowLimitation,
  deleteModalWindowLimitation,
  cleaningInput,
} from "./modalWindow.js";
import { createCard } from "./createElements.js";
import { saveCardArray } from "./createElements.js";
import { createCardInLocal, changeCardInLocal } from "./createElements.js";
import { getLocalCardArray } from "./getDataFromLocalStorage.js";
import { render } from "./render.js";
import { cardArray } from "./createElements.js";
import {
  deleteCard,
  deleteAllCard,
  editCard,
  inProgressCard,
  goBackCard,
  goDoneCard,
} from "./changeSatusCard.js";
// Пользователи
let idCard;
fetch("https://api.sampleapis.com/futurama/characters")
  .then((response) => response.json())
  .then((data) => {
    users = data;
    renderUsers(users);
    renderUsersEdit(users);
    console.log(data);
  });
let users = [];
function renderUsers(users) {
  users.forEach((el) => {
    let select = document.querySelector("#select");
    let option = document.createElement("option");
    option.innerText = `${el.name.first} ${el.name.middle} ${el.name.last}`;
    select.append(option);
  });
}
function renderUsersEdit(users) {
  users.forEach((el) => {
    let selectEdit = document.querySelector("#selectEdit");
    let option = document.createElement("option");
    option.innerText = `${el.name.first} ${el.name.middle} ${el.name.last}`;
    selectEdit.append(option);
  });
}
//Часы/////////////////////////////////////////////////
window.onload = getTime();
//Прослушка по нажатию на "add todo"
let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
  createModalWindow();
});
//Прослушка по нажатию на "confirm" при добавлении карточки
let confirmBtn = document.querySelector(".confirmBtn");
confirmBtn.addEventListener("click", () => {
  createCard();
  createCardInLocal();
  saveCardArray(cardArray);
  getLocalCardArray(cardArray);
  deleteModalWindow();
  render(cardArray);
  cleaningInput();
});
//Прослушка по нажатию на "cancel" при добавлении карточки
let cancelBtn = document.querySelector(".cancelBtn");
cancelBtn.addEventListener("click", () => {
  deleteModalWindow();
});
//Прослушка по нажатию на "delete", "edit","">""
let trello__row = document.querySelector(".trello__row");
trello__row.addEventListener("click", (event) => {
  if (event.target.className == "deleteBtn") {
    idCard = deleteCard(event, idCard);
  }
  if (event.target.className == "editBtn") {
    idCard = editCard(event, idCard);
  }
  if (event.target.className == "pushBtn") {
    let numberProgress =
      document.getElementById("progress__number").textContent;
    if (numberProgress < 6) {
      idCard = inProgressCard(event, idCard);
    } else {
      createModalWindowLimitation();
      let limitationConfirmBtn = document.querySelector(
        ".limitation__confirmBtn"
      );
      limitationConfirmBtn.addEventListener("click", () => {
        deleteModalWindowLimitation();
      });
    }
  }
  if (event.target.className == "backBtn") {
    idCard = goBackCard(event, idCard);
  }
  if (event.target.className == "completeBtn") {
    idCard = goDoneCard(event, idCard);
  }
  if (event.target.className == "deleteDoneBtn") {
    idCard = deleteCard(event, idCard);
  }
});
let confirmEditBtn = document.querySelector(".confirmEditBtn");
confirmEditBtn.addEventListener("click", () => {
  console.log(idCard);
  changeCardInLocal(idCard);
  saveCardArray(cardArray);
  deleteModalWindowEdit();
  render(cardArray);
});
//Прослушка по нажатию на "cancel" при редактировании карточки
let cancelEditBtn = document.querySelector(".cancelEditBtn");
cancelEditBtn.addEventListener("click", () => {
  deleteModalWindowEdit();
});
let url = "https://jsonplaceholder.typicode.com/users";
//Прослушка по нажатию 'Delete All'
let deleteAllBtn = document.querySelector(".deleteAllBtn");
deleteAllBtn.addEventListener("click", () => {
  createModalWindowWarning();
});
//Прослушка по нажатию на 'confirm' в модальном окне delete All
let warningConfirmBtn = document.querySelector(".warning__confirmBtn");
warningConfirmBtn.addEventListener("click", () => {
  deleteAllCard();
  deleteModalWindowWarning();
});
//Прослушка по нажатию на 'cancel' в модальном окне delete All
let warningCancelBtn = document.querySelector(".warning__canselBtn");
warningCancelBtn.addEventListener("click", () => {
  deleteModalWindowWarning();
});

//Прослушка по нажатию на 'cancel' в модальном окне limitation
let limitationCancelBtn = document.querySelector(".limitation__canselBtn");
limitationCancelBtn.addEventListener("click", () => {
  deleteModalWindowLimitation();
});
