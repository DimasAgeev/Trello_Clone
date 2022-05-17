//Получение данных из Локал
///GetDateFromLocalStorage//////////////////////////////////
export function getDateFromLocal(el, card) {
  let p = card.querySelector(".todo__time");
  let cardDate = el.date;
  p.innerText = cardDate;
}
///GetTitleFromLocalStorage/////////////////////////////////
export function getTitleFromLocal(el, card) {
  let p = card.querySelector(".todo__title-text");
  let cardTitle = el.title;
  p.innerText = cardTitle;
}
//GetDescriptionFromLocalStorage////////////////////////////
export function getDescriptionFromLocal(el, card) {
  let p = card.querySelector(".todo__description-text");
  let cardDescription = el.description;
  p.innerText = cardDescription;
}
//GetUserFromLocalStorage////////////////////////////
export function getUserFromLocal(el, card) {
  let p = card.querySelector(".todo__user");
  let cardUser = el.user;
  p.innerText = cardUser;
}
//GetFromLocalCardArray////////////////////////////
export function getLocalCardArray(cardArray) {
  cardArray = JSON.parse(localStorage.getItem("cardArray"));
  return cardArray;
}
///PushTitleFromLocalStorageToModalEdit ///////////////////////
export function pushTitleFromLocalToModalEdit(el) {
  let p = document.querySelector(".editInput__title");
  let cardTitle = el.title;
  p.value = cardTitle;
}
///PushDescriptionFromLocalStorageToModalDescription //////////
export function pushDescriptionFromLocalToModalEdit(el) {
  let p = document.querySelector(".editInput__description");
  let cardTitle = el.description;
  p.value = cardTitle;
}
//GetNumberTodo///////////////////////////////////////////////
let numberTodo = document.querySelector(".todo__number");
function getNumberTodoCard() {
  let numberTodoCard = 0;
  cardArray.forEach((el) => {
    if (el.status == "neutral") {
      ++numberTodoCard;
    }
    numberTodo.innerText = numberTodoCard;
  });
}
