// Removing Books
let delBtns = document.querySelectorAll("div.books ul li button");
delBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector("div.books ul").removeChild(e.target.parentElement);
  });
});

//Hiding
let hideBox = document.querySelector("#check");
let books = document.querySelector("div.books div.cont");

hideBox.addEventListener("change", () => {
  if (hideBox.checked) {
    books.style.display = "none";
  } else {
    books.style.display = "block";
  }
});

//Adding
let addField = document.querySelector("#add");
let addBtn = document.querySelector("#btnId");
let ul = document.querySelector("div.books ul");

addBtn.addEventListener("click", () => {
  let text = addField.value;
  let liAdded = document.createElement("li");
  let span = document.createElement("span");
  let btn = document.createElement("button");
  btn.classList.add("btnCont");
  btn.textContent = "delete";
  span.textContent = text;
  liAdded.appendChild(span);
  liAdded.appendChild(btn);
  ul.appendChild(liAdded);
  btn.addEventListener("click", (e) => {
    ul.removeChild(e.target.parentElement);
  });
});

//Search
let inputSearch = document.querySelector("#bannerField");
let spanText = document.querySelectorAll("span.cont");
inputSearch.addEventListener("keyup", () => {
  let searchedText = inputSearch.value.toLowerCase();
  spanText.forEach((span) => {
    let comparedText = span.textContent.toLowerCase();
    if (comparedText.indexOf(searchedText) != -1) {
      span.parentElement.style.display = "flex";
    } else {
      span.parentElement.style.display = "none";
    }
  });
});
