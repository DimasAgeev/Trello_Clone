// fetch("https://api.sampleapis.com/futurama/characters")
//   .then((response) => response.json())
//   .then((data) => {
//     users = data;
//     renderUsers(users);
//     console.log(data);
//   });
// let users = [];

// function renderUsers(users) {
//   users.forEach((el) => {
//     let select = document.querySelector("#select");
//     let selectEdit = document.querySelector("#selectEdit");
//     let option = document.createElement("option");
//     option.innerText = `${el.name.first} ${el.name.middle} ${el.name.last}`;
//     select.append(option);
//     selectEdit.append(option);
//   });
// }
// export async function renderUsersEdit(users) {
//   users.forEach((el) => {
//     let selectEdit = document.querySelector("#selectEdit");
//     let option = document.createElement("option");
//     option.innerText = `${el.name.first} ${el.name.middle} ${el.name.last}`;
//     selectEdit.append(option);
//   });
// }
