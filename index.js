// enter input with "Enter" key
document.getElementById("check-btn").addEventListener("click", checkVowel);
window.addEventListener("keydown", function (event) {
  if (event.which === 13) {
    event.preventDefault();
    document.getElementById("check-btn").click();
  }
});

let oldText = "";

function checkVowel() {
  let text = document.getElementById("ta-input").value.trim();

  if (text === "") {
    alert("You did not write anything! ");
  } else {
    countVowel(text);
  }
  document.getElementById("ta-input").value = "";
}

function countVowel(text) {
  text = String(text);

  let a = text.match(/[a]/gi);
  let e = text.match(/[e]/gi);

  let i = text.match(/[i]/gi);
  let o = text.match(/[o]/gi);
  let u = text.match(/[u]/gi);
  let total = text.match(/[aeiou]/gi);

  if (a === null) {
    a = [];
  }
  if (e === null) {
    e = [];
  }
  if (i === null) {
    i = [];
  }
  if (o === null) {
    o = [];
  }
  if (u === null) {
    u = [];
  }
  if (total === null) {
    total = [];
  }
  oldText = text;
  createResultHolder(a, e, i, o, u, total);
}

function createResultHolder(a, e, i, o, u, total) {
  let section = document.getElementById("res-section");
  if (section.children.length === 1) {
    let oldArticle = document.getElementById("result");
    oldArticle.remove();
  }
  let article = document.createElement("article");
  article.id = "result";
  let table = createTable(a, e, i, o, u, total);

  let totalTitle = document.createElement("span");
  totalTitle.id = "vowel-total-title";
  totalTitle.innerHTML = "Total";

  let totalSpan = document.createElement("span");
  totalSpan.id = "vowel-total";
  totalSpan.innerHTML = total.length;

  article.appendChild(table);
  article.appendChild(totalTitle);
  article.appendChild(totalSpan);

  section.appendChild(article);
}

function createTable(a, e, i, o, u) {
  let resultTable = document.createElement("table");
  let headTr = document.createElement("tr");
  let thOne = document.createElement("th");
  let thTwo = document.createElement("th");
  let thThree = document.createElement("th");
  let thFour = document.createElement("th");
  let thFive = document.createElement("th");

  resultTable.id = "result-table";

  thOne.innerHTML = "a";
  thTwo.innerHTML = "e";
  thThree.innerHTML = "i";
  thFour.innerHTML = "o";
  thFive.innerHTML = "u";

  headTr.appendChild(thOne);
  headTr.appendChild(thTwo);
  headTr.appendChild(thThree);
  headTr.appendChild(thFour);
  headTr.appendChild(thFive);

  resultTable.appendChild(headTr);

  let bodyTr = document.createElement("tr");
  let tdOne = document.createElement("td");
  let tdTwo = document.createElement("td");
  let tdThree = document.createElement("td");
  let tdFour = document.createElement("td");
  let tdFive = document.createElement("td");

  tdOne.innerHTML = a.length;
  tdTwo.innerHTML = e.length;
  tdThree.innerHTML = i.length;
  tdFour.innerHTML = o.length;
  tdFive.innerHTML = u.length;

  bodyTr.appendChild(tdOne);
  bodyTr.appendChild(tdTwo);
  bodyTr.appendChild(tdThree);
  bodyTr.appendChild(tdFour);
  bodyTr.appendChild(tdFive);

  resultTable.appendChild(bodyTr);
  return resultTable;
}
