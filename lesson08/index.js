setTimeout(() => {
  document.body.style.background = "yellow";
}, 5000);

setTimeout(() => {
  document.body.style.background = "";
}, 10000);

let li = document.createElement("li");
let fragment = new DocumentFragment();

li.append("1");

let li1 = document.createElement("li");

let li2 = document.createElement("li");

li1.append("2");

li2.append("3");

fragment.append(li, li1, li2);

let ol = document.querySelector("ol");

ol.append(fragment);
