//данні фільмів
let objFilms = {
  00001: {
    title: "Фильм Волк с Уолл-стрит",
    image: "./assets/images/1.jpeg",
    data: "2013",
    info:
      "Нашумевший, скандальный, резонансный – именно таким получился фильм «Волк с Уолл-стрит» Мартина Скорсезе, который мы предлагаем смотреть онлайн. Основанная на реальных событиях криминальная драма, больше похожая на черную комедию, получила 5 номинаций на «Оскар», в том числе за «Лучшую мужскую роль», которую блестяще исполнил Леонардо Ди Каприо. Несмотря на надежды миллионов поклонников, заветная статуэтка так и не досталась культовому актеру, зато он утешился «Золотым глобусом». За основу проекта, на съемочной площадке которого американский режиссер с итальянскими корнями отметил свое семидесятилетие, были взяты одноименные мемуары Джордана Белфорта, бывшего нью-йоркского брокера. В конце 80-х он основал одну из крупнейших брокерских контор. Он купался в деньгах, славе, развлечениях и наркотическом угаре, ловко проворачивая махинации. В этом безудержном веселье прошли 10 лет, а потом Белфорта осудили за отмывание денег и другие финансовые преступления. Порвав с алкоголем и наркотиками и отсидев положенные три года, Джордан пишет пару книг и рассказывает молодому поколению, как прийти к успеху.",
    actors_1: "Леонардо ДиКаприо",
    actors_2: "Марго Робби",
    actors_3: "Кайл Чандлер",
    actors_4: "Мартин Скорсезе",
  },
  00002: {
    title: "Во всё тяжкое",
    image: "./assets/images/2.jpeg",
    data: "2018",
    info:
      "Профессор литературы из консервативного колледжа Ричард Браун узнает, что смертельно болен. Забыв о своей репутации, он пускается во все тяжкие, чтобы напоследок насладиться жизнью и свободой. Эмоциональный бенефис Джонни Деппа в трагикомичной истории прощания от режиссера и сценариста Уэйна Робертса. Ричард носит строгие костюмы, преподает литературу равнодушным студентам и старается быть хорошим семьянином. Он уже не молод, но и закат жизни кажется ему чем-то далеким, пока однажды врачи не объявляют, что у него безнадежная стадия рака легких. Всё может кончиться совсем скоро. Ричард решает не терять времени зря и пожить без оглядки и без обмана, позволяя себе то, что никогда не позволял. Он распускает студентов, которым нет дела до его предмета, и обучает только лучших из лучших по «авторской методике». Он в лицо говорит начальству всё, что думает, а свободное время проводит в полном отрыве. При этом он признается в своем диагнозе только лучшему другу, оставляя в неведении даже жену и дочь-подростка. Но момент прощания приближается, а Ричард твердо намерен быть честным до конца.",
    actors_1: "Джонни Депп",
    actors_2: "Одесса Янг",
    actors_3: "Розмари ДеУитт",
    actors_4: "Дэнни Хьюстон",
  },
  00003: {
    title: "Джон Уик 2",
    image: "./assets/images/3.jpg",
    data: "2017",
    info:
      "Киану Ривз в ироничном продолжении криминального экшна 2014 года. Некогда бесподобный киллер Джон Уик отошел от дел. Но ему приходится снова взяться за оружие, когда его бывший напарник решает приструнить международную гильдию профессиональных убийц. Джон Уик готовится достойно встретить старость: он похоронил любимую жену и окружил себя уютом, надеясь больше никогда не возвращаться к оружию, но у судьбы на него другие планы. К нему в гости наведывается старый знакомый, итальянец Сантино Д’Антонио, который когда-то помог Джону стать успешным киллером. Сегодня он пришел к Уику для того, чтобы вернуть долг. Сантино просит киллера расправиться с его сестрой, которая нехило продвинулась по криминальной карьерной лестнице и возглавила гигантскую мафиозную сеть. Уик не имеет права не сделать этого, ведь отказ означает грубое нарушение священного кодекса всех киллеров. Джон отправляется в Рим, чтобы выполнить задание. Но одна смерть тянет за собой другую, и бывший убийца снова оказывается в самом центре сумасшедшего водоворота преступлений. Смотреть онлайн этот безупречный боевик, оригинально сделанный по всем канонам жанра, можно на нашем сайте.",
    actors_1: "Киану Ривз",
    actors_2: "Риккардо Скамарчо",
    actors_3: "Иэн МакШейн",
    actors_4: "Чад Стахелски",
  },
  00004: {
    title: "Добро пожаловать в Zомбилэнд",
    image: "./assets/images/4.jpg",
    data: "2009",
    info:
      "Зомбилэнд - это не новый парк развлечений. Весь мир превратился в мир зомби. Сохранить человеческий облик удалось меньше чем одному проценту всего населения. И надо отметить, что остаться в здравом уме получилось далеко не у самых достойных, смелых или умных. Один из выживших - неловкий ботаник и любитель компьютерных игр, мечтающий только о том, чтобы, наконец, заполучить девушку. Он решает выяснить, не удалось ли выжить его родителям, и отправляется в путешествие в другой штат. Его стратегия выживания – осторожность, граничащая с трусостью. В пути он встречает настоящего ковбоя, любителя батончика «Твинки», готового на все ради обожаемого лакомства. Второе его любимое занятие – убийство зомби, в этом вопросе он стопроцентный профи. Настоящие проблемы у наших героев, по традиции, появляются при знакомстве с двумя обаятельными сестричками. Барышни тоже стремятся выжить в этом зомби-апокалипсисе, стараясь при этом не размазать косметику.Джесси Айзенберг и Вуди Харрельсон в роли самых странных и нелепых героев в комедии ужасов «Добро пожаловать в Зомбилэнд». Кто выживет после апокалипсиса, вы можете смотреть онлайн в нашем кинотеатре.",
    actors_1: "Джесси Айзенберг",
    actors_2: "Вуди Харрельсон",
    actors_3: "Эмма Стоун",
    actors_4: "Эбигейл Бреслин",
  },
  00005: {
    title: "Довод",
    image: "./assets/images/5.jpg",
    data: "2020",
    info:
      "В скрытом мире международного шпионажа главный герой, секретный агент, проходит суровый тест на надежность и присоединяется к невероятной миссии по спасению целого поколения. Для успеха придется отбросить все прежние представления о времени и пространстве. Одно из главных кинособытий 2020 года – масштабный и эффектный научно-фантастический экшн-триллер Кристофера Нолана.«Довод» – кодовое слово тайной организации, призванной предотвратить мировую катастрофу. У этой угрозы нет аналогов в прошлом: она пришла из будущего. В наши дни появляется оружие, которое мы еще не умеем производить. Оно основано на сложной технологии инверсии, позволяющей предметам перемещаться назад во времени. Главный герой, новобранец организации «Довод», вместе со своим напарником Нилом выясняет, что оружие будущего использует русский олигарх Андрей Сатор. Но какие именно возможности и угрозы несет инверсия, и как действовать в потоке времени, обращенном вспять? Вопросов намного больше, чем ответов.Большое кино, от которого сложно оторваться: предлагаем посмотреть онлайн фильм-зрелище и фильм-головоломку «Довод».",
    actors_1: "Джон Дэвид Вашингтон",
    actors_2: "Кристофер Нолан",
    actors_3: "Роберт Паттинсон",
    actors_4: "Элизабет Дебики",
  },
  00006: {
    title: "Иллюзия обмана",
    image: "./assets/images/6.jpg",
    data: "2013",
    info:
      "Они не просто фокусники и даже не иллюзионисты, они нечто большее, нечто, на первый взгляд, не поддающееся анализу или разгадке. Группа, состоящая из четырех, казалось бы, обычных молодых людей, не просто развлекает публику, а проворачивает совершенно невероятные и не совсем законные трюки. Они способны за пару секунд преодолеть пространство и время, чтобы похитить из парижского банка несколько миллионов. Готовы ли вы поверить своим глазам? Смотрите онлайн захватывающий зрелищный триллер «Иллюзия обмана» и, возможно, вы узнаете их секрет. Отчаянную четверку сыграли Джесси Айзенберг («Социальная сеть», «Добро пожаловать в Zомбилэнд», «Римские приключения»), Дэйв Франко («Мачо и ботан»), Айла Фишер («Да, возможно...») и Вуди Харрельсон («Прирожденные убийцы», «Старикам тут не место», «Семь психопатов»). Также в картине снялись оскароносцы Морган Фриман и Майкл Кейн, Марк Руффало («Остров проклятых», «Мстители») и Мелани Лоран («Бесславные ублюдки»).",
    actors_1: "Айла Фишер",
    actors_2: "Джесси Айзенберг",
    actors_3: "Марк Руффало",
    actors_4: "Вуди Харрельсон",
  },
  00007: {
    title: "Молодость",
    image: "./assets/images/7.jpg",
    data: "2015",
    info:
      "Майкл Кейн, Харви Кейтель, Рейчел Вайс и Пол Дано в драме Паоло Соррентино «Молодость». Два старинных друга Фред и Мик проводят лето в элегантном отеле у подножья Альп. Фред когда-то был известным композитором и дирижером, но теперь окончательно отошел от дел. Майк – знаменитый кинорежиссер. Сейчас он пытается закончить сценарий фильма, который должен подвести итог всей его карьере. Старость стала для героев временем созерцания, когда у них появилась возможность спокойно понаблюдать за окружающими, переосмыслить свое творчество, задуматься о вопросах бытия. Они видят метания своих взрослых детей, запутавшихся в собственной жизни. Своей неуемной энергией и жизнелюбием Мик вдохновляет молодых сценаристов и голливудского актера, который тоже является постояльцем отеля, на новые свершения. В отличие от друга Фред пребывает в апатии, он не планирует возвращаться к своей профессии. Но сама английская королева хочет вновь увидеть его за дирижерским пультом. Для того чтобы узнать, как дальше будут развиваться события и что из этого получится, предлагаем смотреть онлайн фильм «Молодость».",
    actors_1: "Харви Кейтель",
    actors_2: "Майкл Кейн",
    actors_3: "Рэйчел Вайс",
    actors_4: "Паоло Соррентинo",
  },
};

//назви фільмів
let card_0 = "";
let set = new Set();

//запуск функцій
creatCard(objFilms);
createAll(objFilms);

//створюю першу карточку
document.querySelector(".card0").classList.add("hid");

//назви фільмів відмальовуються за обєктом який надається
function createAll(ob) {
  card_0 = "";

  for (var key in ob) {
    card_0 += "<div class='Title'>";
    card_0 += '<span class="title"><b>' + ob[key].title + "</b></span>";
    card_0 += "</div>";
  }
  document.getElementById("nameTitle").innerHTML = card_0;
}

//назви фільмів відмальовуються за обєктом який надається
function createFavorite(ob) {
  card_0 = "";
  for (var key of ob) {
    card_0 += "<div class='Title'>";
    card_0 += '<span class="title"><b>' + key + "</b></span>";

    card_0 += "</div>";
  }
  document.getElementById("nameTitle").innerHTML = card_0;
}

//відслідковую кліки на показ 1 картки фільму
document.querySelector("#nameTitle").addEventListener("click", (event) => {
  if (event.target.innerHTML == "Фильм Волк с Уолл-стрит") {
    document.querySelector(".hid").classList.remove("hid");
    document.querySelector(".card0").classList.add("hid");
  }
  if (event.target.innerHTML == "Во всё тяжкое") {
    document.querySelector(".hid").classList.remove("hid");
    document.querySelector(".card1").classList.add("hid");
  }
  if (event.target.innerHTML == "Джон Уик 2") {
    document.querySelector(".hid").classList.remove("hid");
    document.querySelector(".card2").classList.add("hid");
  }
  if (event.target.innerHTML == "Добро пожаловать в Zомбилэнд") {
    document.querySelector(".hid").classList.remove("hid");
    document.querySelector(".card3").classList.add("hid");
  }
  if (event.target.innerHTML == "Довод") {
    document.querySelector(".hid").classList.remove("hid");
    document.querySelector(".card4").classList.add("hid");
  }
  if (event.target.innerHTML == "Иллюзия обмана") {
    document.querySelector(".hid").classList.remove("hid");
    document.querySelector(".card5").classList.add("hid");
  }
  if (event.target.innerHTML == "Молодость") {
    document.querySelector(".hid").classList.remove("hid");
    document.querySelector(".card6").classList.add("hid");
  }
});

//створюю картку фiльму
function creatCard(ob) {
  let Movie = "";
  let count = 0;
  for (var key in ob) {
    Movie += '<div class="card' + count++ + ' Movie">';
    Movie += '<span class="title"><b>' + ob[key].title + "</b></span >";
    Movie += '<img class="im" src="' + ob[key].image + '">';
    Movie += '<img class="like" src="./assets/images/like.png">';
    Movie += '<span class="data"> Дата: ' + ob[key].data + "</span > <br>";
    Movie +=
      '<div class="actorDiv"><span class="actors">' +
      ob[key].actors_1 +
      "</span > ";
    Movie += '<span class="actors">' + ob[key].actors_2 + "</span > ";
    Movie += '<span class="actors">' + ob[key].actors_3 + "</span > ";
    Movie += '<span class="actors">' + ob[key].actors_4 + "</span ></div>";
    Movie += '<div class="info"><span>' + ob[key].info + "</span></div> ";
    Movie += "</div>";
  }
  document.getElementById("list").innerHTML = Movie;
}

let like = document.querySelectorAll(".like");
let Title = document.querySelectorAll(".Title");
let title = document.querySelectorAll(".title");
let im0 = document.createElement("img");
let im1 = document.createElement("img");
let im2 = document.createElement("img");
let im3 = document.createElement("img");
let im4 = document.createElement("img");
let im5 = document.createElement("img");
let im6 = document.createElement("img");

//кліки на сердечка
document.querySelector("#list").addEventListener("click", (event) => {
  if (event.target == like[0]) {
    im0.classList.add("likeCheck");
    im0.src = "./assets/images/likeDone.png";
    like[0].replaceWith(im0);
    addToFavorite(objFilms[1].title);
  } else if (event.target == im0) {
    im0.replaceWith(like[0]);
    removeFromFavorite(objFilms[1].title);
    createFavorite(set);
  }
  if (event.target == like[1]) {
    title[1].style.background='black';
    title[1].style.color='white';
    im1.classList.add("likeCheck");
    im1.src = "./assets/images/likeDone.png";
    like[1].replaceWith(im1);
    addToFavorite(objFilms[2].title);
  } else if (event.target == im1) {
    im1.replaceWith(like[1]);
    removeFromFavorite(objFilms[2].title);
    createFavorite(set);
  }
  if (event.target == like[2]) {
    im2.classList.add("likeCheck");
    im2.src = "./assets/images/likeDone.png";
    like[2].replaceWith(im2);
    addToFavorite(objFilms[3].title);
  } else if (event.target == im2) {
    im2.replaceWith(like[2]);
    removeFromFavorite(objFilms[3].title);
    createFavorite(set);
  }
  if (event.target == like[3]) {
    im3.classList.add("likeCheck");
    im3.src = "./assets/images/likeDone.png";
    like[3].replaceWith(im3);
    addToFavorite(objFilms[4].title);
  } else if (event.target == im3) {
    im3.replaceWith(like[3]);
    removeFromFavorite(objFilms[4].title);
    createFavorite(set);
  }
  if (event.target == like[4]) {
    im4.classList.add("likeCheck");
    im4.src = "./assets/images/likeDone.png";
    like[4].replaceWith(im4);
    addToFavorite(objFilms[5].title);
  } else if (event.target == im4) {
    im4.replaceWith(like[4]);
    removeFromFavorite(objFilms[5].title);
    createFavorite(set);
  }
  if (event.target == like[5]) {
    im5.classList.add("likeCheck");
    im5.src = "./assets/images/likeDone.png";
    like[5].replaceWith(im5);
    addToFavorite(objFilms[6].title);
  } else if (event.target == im5) {
    im5.replaceWith(like[5]);
    removeFromFavorite(objFilms[6].title);
    createFavorite(set);
  }
  if (event.target == like[6]) {
    im6.classList.add("likeCheck");
    im6.src = "./assets/images/likeDone.png";
    like[6].replaceWith(im6);
    addToFavorite(objFilms[7].title);
  } else if (event.target == im6) {
    im6.replaceWith(like[6]);
    removeFromFavorite(objFilms[7].title);
    createFavorite(set);
  }
});

function addToFavorite(added) {
  set.add(added);
}

function removeFromFavorite(del) {
  set.delete(del);
}

document.querySelector(".all").addEventListener("click", () => {
  createAll(objFilms);
});

document.querySelector(".favorite").addEventListener("click", () => {
  createFavorite(set);
});
