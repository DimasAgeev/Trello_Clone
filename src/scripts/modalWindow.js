export function createModalWindow() {
  let p = document.querySelector(".popup");
  let c = document.querySelector(".popup__content");
  c.classList.add("open");
  p.classList.add("open");
}
export function deleteModalWindow() {
  let p = document.querySelector(".popup");
  let c = document.querySelector(".popup__content");
  c.classList.remove("open");
  p.classList.remove("open");
}
export function createModalWindowEdit() {
  let p = document.querySelector(".edit");
  let c = document.querySelector(".edit__content");
  c.classList.add("open");
  p.classList.add("open");
}
export function deleteModalWindowEdit() {
  let p = document.querySelector(".edit");
  let c = document.querySelector(".edit__content");
  c.classList.remove("open");
  p.classList.remove("open");
}
export function createModalWindowWarning() {
  let p = document.querySelector(".delete__all");
  let c = document.querySelector(".delete__content");
  c.classList.add("open");
  p.classList.add("open");
}
export function deleteModalWindowWarning() {
  let p = document.querySelector(".delete__all");
  let c = document.querySelector(".delete__content");
  c.classList.remove("open");
  p.classList.remove("open");
}
export function deleteModalWindowLimitation() {
  let p = document.querySelector(".limitation");
  let c = document.querySelector(".limitation__content");
  c.classList.remove("open");
  p.classList.remove("open");
}
export function createModalWindowLimitation() {
  let p = document.querySelector(".limitation");
  let c = document.querySelector(".limitation__content");
  c.classList.add("open");
  p.classList.add("open");
}
export function cleaningInput() {
  let it = document.getElementById("input__title");
  it.value = "";
  let id = document.getElementById("input__description");
  id.value = "";
}
