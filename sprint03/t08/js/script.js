

let placeholder = document.getElementById("placeholder"),
  notification = document.getElementById("notification"),
  arr = ["Name", "Strength", "Age"],
  checkSort = false,
  reg = new Intl.Collator('EN');


notification.innerHTML = "Soting by Name, order: ASC";

const hero = [
  { name: "Black\nPanther", strength: 66, age: 53 },
  { name: "Captain\nAmerica", strength: 79, age: 137 },
  { name: "Captain\nMarvel", strength: 97, age: 26 },
  { name: "Hulk", strength: 80, age: 49 },
  { name: "Iron\nMan", strength: 88, age: 48 },
  { name: "Spider-\nMan", strength: 78, age: 16 },
  { name: "Thanos", strength: 99, age: 1000 },
  { name: "Thor", strength: 95, age: 1000 },
  { name: "Yon-\nRogg", strength: 73, age: 52 }
];

ftable(placeholder, 3, 10);

function ftable(parent, col, row) {
  table = document.createElement("table");
  for (i = 0; i < row; i++) {
    let tr = document.createElement("tr");
    for (j = 0; j < col; j++) {
      let td = document.createElement("td");
      if (i == 0) {
        td.innerText = arr[j];
      } else {
        if (j == 0) {
          td.innerText = hero[i - 1].name;
        }
        if (j == 1) {
          td.innerText = hero[i - 1].strength;
        }
        if (j == 2) {
          td.innerText = hero[i - 1].age;
        }
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);
}

function Sort1(whatSort) {

  if (whatSort.target.innerHTML === "Name") {
    if (!checkSort) {
      hero.sort((a, b) => reg.compare(a.name, b.name))
      notification.innerHTML = "Sorting by Name, order: ASC";

      checkSort = true;
    } else {
      hero.sort((a, b) => reg.compare(b.name, a.name))
      notification.innerHTML = "Sorting by Name, order: DESC";

      checkSort = false;
    }
  } else if (whatSort.target.innerHTML === "Strength") {
    if (!checkSort) {
      hero.sort((a, b) => (a.strength - b.strength))
      notification.innerHTML = "Sorting by Strength, order: ASC";

      checkSort = true;
    } else {
      hero.sort((a, b) => (b.strength - a.strength))
      notification.innerHTML = "Sorting by Strength, order: DESC";

      checkSort = false;
    }
  } else if (whatSort.target.innerHTML === "Age") {
    if (!checkSort) {
      hero.sort((a, b) => (a.age - b.age))
      notification.innerHTML = "Sorting by Age, order: ASC";

      checkSort = true;
    } else {
      hero.sort((a, b) => (b.age - a.age))
      notification.innerHTML = "Sorting by Age, order: DESC";

      checkSort = false;
    }
  }
  clearTabel();
}


let red = document.querySelector("tr");

red.classList.add("red");

red.addEventListener("click", Sort1);

function clearTabel() {
  let count = 0,
    tdTabel = document.querySelectorAll("td");

  for (k = 3; tdTabel[k]; k++) {

    if (k % 3 == 0) {
      tdTabel[k].innerHTML = hero[count].name;
      tdTabel[k + 1].innerHTML = hero[count].strength;
      tdTabel[k + 2].innerHTML = hero[count].age;

      count++;
    }
  }
}



















    //   if (whatSort.target.innerHTML === "Name") {
    //     hero.sort(function (a, b) {
    //       var nameA = a.name.toLowerCase(),
    //         nameB = b.name.toLowerCase();
    //       if (nameA < nameB) return -1;
    //       if (nameA > nameB) return 1;
    //       return 0;
    //     });
    //   } else {
    //     hero.sort(function (a, b) {
    //       var nameA = a.name.toLowerCase(),
    //         nameB = b.name.toLowerCase();
    //       if (nameA > nameB) return -1;
    //       if (nameA < nameB) return 1;
    //       return 0;
    //     });
    //   }
    //   if (whatSort.target.innerHTML === "Strength") {
    //     hero.sort(function (a, b) {
    //       return a.strength - b.strength;
    //     });
    //   } else {
    //     hero.sort(function (a, b) {
    //       return b.strength - a.strength;
    //     });
    //   }
    //   if (whatSort.target.innerHTML === "Age") {
    //     hero.sort(function (a, b) {
    //       return a.age - b.age;
    //     });
    //   } else {
    //     hero.sort(function (a, b) {
    //       return b.age - a.age;
    //     });