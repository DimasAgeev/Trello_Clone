import { getLocalCardArray } from "./getDataFromLocalStorage.js";
import { render } from "./render.js";
//
export function createElement(tag, className, text) {
  let el = document.createElement(tag);
  className ? el.classList.add(className) : null;
  text ? (el.innerText = text) : null;
  return el;
}

export function createInput(className, type, placeholdertext) {
  let el = document.createElement("input");
  className ? el.classList.add(className) : null;
  el.setAttribute("type", type);
  el.setAttribute("placeholder", placeholdertext);
  return el;
}

export function createButton(className, type, text) {
  let el = document.createElement("button");
  className ? el.classList.add(className) : null;
  el.setAttribute("type", type);
  text ? (el.innerText = text) : null;
  return el;
}
//Прорисовка карточки в todo столбце
export let todoContent = document.querySelector(".todo__column");
export function createCard() {
  let todo__card = createElement("div", "todo__card");
  todoContent.append(todo__card);
  let editBtn = createButton("editBtn", "button", "EDIT");
  todo__card.append(editBtn);
  let deleteBtn = createButton("deleteBtn", "button", "DELETE");
  todo__card.append(deleteBtn);
  let todoTitle = createElement("div", "todo__title");
  todo__card.append(todoTitle);
  let todoTitleText = createElement("p", "todo__title-text", "");
  todoTitle.append(todoTitleText);
  let todoDescription = createElement("div", "todo__description");
  todo__card.append(todoDescription);
  let todoDescriptionText = createElement("p", "todo__description-text", "");
  todoDescription.append(todoDescriptionText);
  let pushBtn = createButton("pushBtn", "button", ">");
  todoDescription.append(pushBtn);
  let todoData = createElement("div", "todo__data");
  todo__card.append(todoData);
  let todoUser = createElement("div", "todo__user");
  todoData.append(todoUser);
  let todoTime = createElement("div", "todo__time");
  todoData.append(todoTime);
}
//Прорисовка карточки в столбце inprogress
export let progressContent = document.querySelector(".progress__column");
export function createCardInProgress() {
  let todo__card = createElement("div", "todo__card");
  progressContent.append(todo__card);
  let editBtn = createButton("backBtn", "button", "BACK");
  todo__card.append(editBtn);
  let deleteBtn = createButton("completeBtn", "button", "COMPLETE");
  todo__card.append(deleteBtn);
  let todoTitle = createElement("div", "todo__title");
  todo__card.append(todoTitle);
  let todoTitleText = createElement("p", "todo__title-text", "");
  todoTitle.append(todoTitleText);
  let todoDescription = createElement("div", "todo__description");
  todo__card.append(todoDescription);
  let todoDescriptionText = createElement("p", "todo__description-text", "");
  todoDescription.append(todoDescriptionText);
  let todoData = createElement("div", "todo__data");
  todo__card.append(todoData);
  let todoUser = createElement("div", "todo__user");
  todoData.append(todoUser);
  let todoTime = createElement("div", "todo__time");
  todoData.append(todoTime);
}
//Прорисовка карточки в столбце done
export let doneContent = document.querySelector(".done__column");
export function createCardInDone() {
  let todo__card = createElement("div", "todo__card");
  doneContent.append(todo__card);
  let deleteBtn = createButton("deleteDoneBtn", "button", "DELETE");
  todo__card.append(deleteBtn);
  let todoTitle = createElement("div", "todo__title");
  todo__card.append(todoTitle);
  let todoTitleText = createElement("p", "todo__title-text", "");
  todoTitle.append(todoTitleText);
  let todoDescription = createElement("div", "todo__description");
  todo__card.append(todoDescription);
  let todoDescriptionText = createElement("p", "todo__description-text", "");
  todoDescription.append(todoDescriptionText);
  let todoData = createElement("div", "todo__data");
  todo__card.append(todoData);
  let todoUser = createElement("div", "todo__user");
  todoData.append(todoUser);
  let todoTime = createElement("div", "todo__time");
  todoData.append(todoTime);
}
// Созадине объекта карточки
export function createObject(id, title, description, user, date) {
  let cardObj = {
    id: id,
    title: title,
    description: description,
    date: date,
    user: user,
    status: "neutral",
  };
  return cardObj;
}

//GetDate///////////////////////////////////////////////////
export function getDate() {
  let date = new Date();
  return `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}\n ${date.getHours()}:${date.getMinutes()}`;
}
//GetContentFromInputTitle//////////////////////////////////////////////////////////////////////////
let inputTitle = document.querySelector(".input__title");
export function getContentFromTitle() {
  if (inputTitle.value !== "") {
    let content = inputTitle.value;
    return content;
  }
}
//GetContentFromInputDescription////////////////////////////
let InputDescription = document.querySelector(".input__description");
export function getContentFromDescription() {
  if (InputDescription.value !== "") {
    let content = InputDescription.value;
    return content;
  }
}
//GetUserFromUserSelect////////////////////////////
let userSelect = document.querySelector("#select");
export function getUserFromUserSelect() {
  if (userSelect.value !== "") {
    let content = userSelect.value;
    return content;
  }
}
//GetUniqueIdFromLocalStorage//////////////////////////////////////////////////////////////
export function getUniqueId() {
  let uniqueId = Number(localStorage.getItem("UniqueId"));
  return uniqueId ? uniqueId : 0;
}
//Созддание пустого массива//////////////////////////////
export let cardArray = [];
//SaveToLocalStorageCardArray///////////////////////////////
export function saveCardArray(cardArray) {
  let cardArrayPush = JSON.stringify(cardArray);
  localStorage.setItem("cardArray", cardArrayPush);
}

//ObjectFillingAndPushToArray//////////////////////////////////////////////////////////////////////////
export function createCardInLocal() {
  let id = getUniqueId() + 1;
  let title = getContentFromTitle();
  let description = getContentFromDescription();
  let user = getUserFromUserSelect();
  let date = getDate();
  let object = createObject(id, title, description, user, date);
  cardArray.push(object);
  saveCardArray(cardArray);
  localStorage.setItem("UniqueId", id);
}
///AppropriationData-idToCard////////////////////////////
export function dataIdToCard(el, card) {
  let id = el.id;
  card.setAttribute("data-id", id);
}
//GetContentFromEditInputTitle//////////////////////////////////////////////////////////////////////////
let inputEditTitle = document.querySelector(".editInput__title");

export function getContentFromEditTitle() {
  if (inputEditTitle.value !== "") {
    let content = inputEditTitle.value;
    return content;
  }
}
//GetContentFromEditInputDescription///////////////////////////
let InputEditDescription = document.querySelector(".editInput__description");
export function getContentFromEditDescription() {
  if (InputEditDescription.value !== "") {
    let content = InputEditDescription.value;
    return content;
  }
}

//ChangeObjectFillingAndPushToArray//////////////////////////////////////////////////////////////////////////
export function changeCardInLocal(idCard) {
  console.log("привет");
  let title = getContentFromEditTitle();
  let description = getContentFromEditDescription();
  cardArray.forEach((el) => {
    console.log(el.id, idCard);
    if (el.id === +idCard) {
      el.title = title;
      el.description = description;
      console.log(true, el);
    }
  });
}

//todoNumberCard///////////////////////////////////////////////
let numberTodo = document.querySelector(".todo__number");
export function todoNumberCard() {
  let numberTodoCard = 0;
  cardArray.forEach((el) => {
    if (el.status == "neutral") {
      ++numberTodoCard;
    }
    numberTodo.innerText = numberTodoCard;
  });
}
//progressNumberCard///////////////////////////////////////////
let numberProgress = document.querySelector(".progress__number");
export function progressNumberCard() {
  let numberProgressCard = 0;
  cardArray.forEach((el) => {
    if (el.status == "inprogress") {
      ++numberProgressCard;
    }
    numberProgress.innerText = numberProgressCard;
  });
}
//doneNumberCard///////////////////////////////////////////
let numberDone = document.querySelector(".done__number");
export function doneNumberCard() {
  let doneProgressCard = 0;
  cardArray.forEach((el) => {
    if (el.status == "done") {
      ++doneProgressCard;
    }
    numberDone.innerText = doneProgressCard;
  });
}

//
function createTodoCat() {
  let p = document.querySelector("#todo__img");
  p.classList.add("active");
}
function deleteTodoCat() {
  let p = document.querySelector("#todo__img");
  p.classList.remove("active");
}
function createProgressCat() {
  let p = document.querySelector("#progress__img");
  p.classList.add("active");
}
function deleteProgressCat() {
  let p = document.querySelector("#progress__img");
  p.classList.remove("active");
}
function createDoneCat() {
  let p = document.querySelector("#done__img");
  p.classList.add("active");
}
function deleteDoneCat() {
  let p = document.querySelector("#done__img");
  p.classList.remove("active");
}

// ///////////////////////////////////////////
let doneImg = document.querySelector("#done__img");
export function rove() {
  let doneCard = 0;
  let numberProgressCard = 0;
  let numberTodoCard = 0;
  cardArray.forEach((el) => {
    if (el.status == "done") {
      ++doneCard;
    }
    if (el.status == "inprogress") {
      ++numberProgressCard;
    }
    if (el.status == "neutral") {
      ++numberTodoCard;
    }
  });
  if (numberTodoCard > 0) {
    createProgressCat();
    deleteDoneCat();
  }
  if (numberProgressCard > 0) {
    deleteProgressCat();
    createDoneCat();
  }
  if (doneCard > 0) {
    deleteDoneCat();
  }
}

//Прослушка при перезагрузке
window.addEventListener("load", () => {
  let localCardArray = getLocalCardArray(cardArray);
  localCardArray ? (cardArray = localCardArray) : (cardArray = []);
  render(cardArray);
});
