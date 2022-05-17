import { saveCardArray, getContentFromTitle } from "./createElements.js";
import { render } from "./render.js";
import { cardArray } from "./createElements.js";
import { createModalWindowEdit } from "./modalWindow.js";
import {
  pushTitleFromLocalToModalEdit,
  pushDescriptionFromLocalToModalEdit,
} from "./getDataFromLocalStorage.js";

export function editCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");
  cardArray.forEach((el) => {
    if (el.id == idCard) {
      createModalWindowEdit();
      pushTitleFromLocalToModalEdit(el);
      pushDescriptionFromLocalToModalEdit(el);
    }
  });
  return idCard;
}
// Delete card//////////////////////
export function deleteCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");
  cardArray.forEach((el) => {
    if (el.id == idCard) {
      el.status = "deleted";
    }
  });
  saveCardArray(cardArray);
  render(cardArray);
}

// Go In progress card//////////////////////
export function inProgressCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");
  cardArray.forEach((el) => {
    if (el.id == idCard) {
      el.status = "inprogress";
    }
  });
  saveCardArray(cardArray);
  render(cardArray);
}
//GoBack card//////////////////////
export function goBackCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");
  cardArray.forEach((el) => {
    if (el.id == idCard) {
      el.status = "neutral";
    }
  });
  saveCardArray(cardArray);
  render(cardArray);
}
//GoDone card//////////////////////
export function goDoneCard(event, idCard) {
  idCard = event.target.closest(".todo__card").getAttribute("data-id");
  cardArray.forEach((el) => {
    if (el.id == idCard) {
      el.status = "done";
    }
  });
  saveCardArray(cardArray);
  render(cardArray);
}
//Delete all card//////////////////////
export function deleteAllCard(event, idCard) {
  cardArray.forEach((el) => {
    if (
      el.status == "inprogress" ||
      el.status == "neutral" ||
      el.status == "done"
    ) {
      el.status = "deleted";
    }
  });
  saveCardArray(cardArray);
  render(cardArray);
}
