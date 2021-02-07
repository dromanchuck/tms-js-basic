// function createArr(...args) {
//   let [first, ...rest] = args;

//   return first.reduce((acc, curr) => {
//     let hasEvery = rest.every((item) => item.includes(curr));
//     // console.log(acc, curr, rest);
//     if (hasEvery) {
//       rest = rest.map((item) => {
//         let onlyOne = true;
//         return item.filter((value) => {
//           if (onlyOne) {
//             onlyOne = false;
//             return value !== curr;
//           }

//           return true;
//         });
//       });

//       acc.push(curr);
//     }

//     return acc;
//   }, []);
// }

// // console.log(
// //   "First:",
// //   createArr([1, 2, 2, 3, 5], [2, 2, 3, 4, 5], [2, 2, 5, 4, 3])
// // );
// // console.log(
// //   "Second:",
// //   createArr([1, 2, 3, 5], [2, 2, 3, 4, 5], [2, 2, 5, 4, 3])
// // );
// // console.log("Third:", createArr([1, 2, 2, 3, 5], [2, 4, 5], [2, 2, 5, 4, 3]));

// //DOM

// // document.body.style.background = "white";

// // setTimeout(() => {
// //   document.body.style.background = "white";
// // }, 5000);

// //getElementsByTagName

// let li = document.getElementsByTagName("li");
// let arrLi = [...li];

// arrLi.forEach((item) => {
//   item.style.fontFamily = "arial";
// });

// //getElementsByClassName

// let liWithClass = document.getElementsByClassName("list_item");

// //getElementById
// let ul = document.getElementById("unordered_list");
// /**
//  * <div>
//  *  <ul>
//  *    li
//  *    li
//  *    li
//  * </ul>
//  * </div>
//  */

// //ul.innerHTML

// /**
//  * <ul>
//  *    li
//  *    li
//  *    li
//  * </ul>
//  */

// // ul.outerHTML

// /**
//  * <div>
//  *  <ul>
//  *    li
//  *    li
//  *    li
//  * </ul>
//  * </div>
//  */

// // querySelector & querySelectorAll

// let lis = document.querySelectorAll("li");
// let div = document.querySelector("div");

// //navigation

// document.body.childNodes; //всех детей вместе с текстовыми узлами

// document.body.children; //всех детей

// document.body.firstElementChild.nextElementSibling; //соседи
// document.body.firstElementChild.previousElementSibling; //соседи

// //document.createElement

// let container = document.createElement("div");
// let title = document.createElement("h1");
// let subtitle = document.createElement("p");

// //elem.append(someElem)

// let body = document.body;
// title.innerText = "TeachmeSkills / FE42";
// subtitle.innerText = "Coded with love=)";

// body.style = `
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background: black;
// `;

// title.style = `
//   color: #fff;
//   font-family: arial;
// `;

// subtitle.style = `
//   color: #fff;
//   font-family: arial;
// `;

// container.style = `
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// body.append(container);

// container.prepend(title);
// container.append(subtitle);

// setTimeout(() => {
//   subtitle.remove();
// }, 1000);

// setTimeout(() => {
//   title.remove();
// }, 3000);
