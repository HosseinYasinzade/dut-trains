"use strict";

const text = document.querySelector(".quote-txt");
const author = document.querySelector(".quote-author");

let request = new XMLHttpRequest();
request.open("Get", " https://api.quotable.io/quotes/random", true);

request.send();

request.addEventListener("load", () => {
  const result = JSON.parse(request.responseText);

  text.textContent = result[0].content;
  author.textContent = result[0].author;
});
