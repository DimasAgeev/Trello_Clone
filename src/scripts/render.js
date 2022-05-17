import { getDateFromLocal } from "./getDataFromLocalStorage.js";
import { getTitleFromLocal } from "./getDataFromLocalStorage.js";
import { getDescriptionFromLocal } from "./getDataFromLocalStorage.js";
import { getUserFromLocal } from "./getDataFromLocalStorage.js";

import {
  createCard,
  createCardInProgress,
  createCardInDone,
  todoNumberCard,
  progressNumberCard,
  doneNumberCard,
  rove,
} from "./createElements.js";
import { dataIdToCard } from "./createElements.js";
import { todoContent, progressContent, doneContent } from "./createElements.js";

export function render(array) {
  todoContent.innerHTML = "";
  progressContent.innerHTML = "";
  doneContent.innerHTML = "";
  if (array.status != "deleted") {
    array.forEach((el) => {
      if (el.status == "neutral") {
        createCard();
        let currentCard = todoContent.lastChild;
        getDateFromLocal(el, currentCard);
        getTitleFromLocal(el, currentCard);
        getDescriptionFromLocal(el, currentCard);
        getUserFromLocal(el, currentCard);
        dataIdToCard(el, currentCard);
      }
      if (el.status == "inprogress") {
        createCardInProgress();
        let currentProgressCard = progressContent.lastChild;
        getTitleFromLocal(el, currentProgressCard);
        getDateFromLocal(el, currentProgressCard);
        getDescriptionFromLocal(el, currentProgressCard);
        getUserFromLocal(el, currentProgressCard);
        dataIdToCard(el, currentProgressCard);
      }
      if (el.status == "done") {
        createCardInDone();
        let currentDoneCard = doneContent.lastChild;
        getTitleFromLocal(el, currentDoneCard);
        getDateFromLocal(el, currentDoneCard);
        getDescriptionFromLocal(el, currentDoneCard);
        getUserFromLocal(el, currentDoneCard);
        dataIdToCard(el, currentDoneCard);
      }
      todoNumberCard();
      progressNumberCard();
      doneNumberCard();
    });
  }
  rove();
}
