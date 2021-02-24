let countCompare = 0;
let hero = document.querySelector(".hero");
let compareBTN = document.querySelector(".compare");
let arr = [["nameHero", "Intelligence", "Strength", "Speed"]];
let search = document.querySelector(".search").addEventListener("click", () => {
  startSearch(hero);
});
let random = document.querySelector(".random").addEventListener("click", () => {
  heroes = [
    "Cyborg Superman",
    "Batman II",
    "Batwoman",
    "Scarlet Spider II",
    "Nina Theroux",
    "Big Man",
    "X-Man",
    "Aquaman",
    "Darkman",
    "Deadman",
    "Giant-Man",
    "Mandarin",
    "Ironman",
  ];
  hero.value = "";
  hero.value = heroes[Math.floor(Math.random() * heroes.length)];
  startSearch(hero);
});
let box = document.querySelector("#box");
function startSearch(heroes) {
  fetch(`https://superheroapi.com/api.php/1855323681298471/search/${heroes.value}`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let her = "";

      for (let i = 0; i < data.results.length; i++) {
        let item = data.results[i];

        let nameHero = item.name;
        let nameHuman = item.biography["full-name"];

        let template = `<div class="cardHeroName">
        <div><span class="nameHero">${nameHero}</span><br><span>${nameHuman}</span></div></div>`;
        her += template;
      }
      function compare(compNam) {
        fetch(`https://superheroapi.com/api.php/1855323681298471/search/${compNam}`)
          .then(function (resp) {
            return resp.json();
          })
          .then(function (dataCompare) {
            let itemCompare = dataCompare.results[0];
            let nameHero = itemCompare.name;
            let intelligence = itemCompare.powerstats.intelligence;
            let strength = itemCompare.powerstats.strength;
            let speed = itemCompare.powerstats.speed;
            if (arr.length < 21) {
              arr.push([nameHero, intelligence, strength, speed]);
            } else {
              alert("To many heroes COMPARE !!!");
            }
            startTable();
          });
      }
      box.innerHTML = `<div class="textSearch"><h1>Search Results</h1><br>(Click to add to comparison)</div>${her}`;
      let nameHero = document.querySelectorAll(".nameHero");
      nameHero.forEach((el) => {
        el.onclick = function () {
          if (countCompare <= 19) {
            countCompare++;
          } else {
            countCompare = 20;
          }
          compareBTN.innerHTML = `COMPARE:${countCompare}`;
          let compareName = el.textContent;
          compare(compareName);
        };
      });
    })
    .catch(function () {
      alert("character wish given name not found");
    });
}
function startTable() {
  google.charts.load("current", { packages: ["bar"] });
  google.charts.setOnLoadCallback(drawChart);
}
function drawChart() {
  let dataGoogle = google.visualization.arrayToDataTable(arr);
  let options = {
    title: "Super hero power statistic",
    vAxis: { title: "Power range" },
    hAxis: { title: "Heroes" },
    seriesType: "bars",
  };

  var chart = new google.charts.Bar(
    document.getElementById("columnchart_material")
  );

  chart.draw(dataGoogle, google.charts.Bar.convertOptions(options));
}
