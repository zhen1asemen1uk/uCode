let characters = document.getElementById("characters").children,
  div;

function createDiv(div, getData) {
  div = document.createElement("div");

  div.setAttribute("class", "elem " + getData);

  if (getData == "none") {

    let divLine = document.createElement("div");

    divLine.setAttribute("class", "line");
    div.appendChild(divLine);
  }
  return div;
}

for (i = 0; i < characters.length; i++) {

  let getClass = characters[i].getAttribute("class"),
    getData = characters[i].getAttribute("data-element");

  if (!getClass || (getClass != "good" && getClass != "evil")) {
    characters[i].classList.add("unknown");
  }
  if (!getData) {
    characters[i].setAttribute("data-element", "none");
  }
  getData = characters[i].getAttribute("data-element");
  getSplitedDataLi = getData.split(" ");

  myBr = document.createElement("br");
  characters[i].appendChild(myBr);

  for (let j = 0; j < getSplitedDataLi.length; j++) {

    div = createDiv(div, getSplitedDataLi[j]);
    characters[i].appendChild(div);
    
  }
}
