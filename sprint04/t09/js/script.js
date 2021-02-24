//Получаем прогноз в массив data
fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=50.520302&lon=30.790202&exclude=alerts&appid=1e73e0bb4de79addc1555e0dc662b196")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    start();
    document.querySelector(".weather__city").textContent = data.timezone;

    function start() {
      let box = document.querySelector('.box');
      let forecasts = '';

      for (let i = 0; i < 6; i++) {
        let item = data.daily[i];
        let icon = item.weather[0]["icon"];
        let temp = (item.temp.day - 273).toFixed(0);
        let days = new Date(item.dt * 1000);
        let day = days.getUTCDate();
        let month = days.getUTCMonth() + 1;

        if (month >= 0 && month <= 9) {
          month = "0" + month;
        }
        if (day >= 0 && day <= 9) {
          day = "0" + day;
        }

        let template = `<div class="card">
            <div class="hours">${day}.${month}</div>
            <hr/>
            <div class="weather__icon"><img src='https://openweathermap.org/img/wn/${icon}@2x.png'></div>
            <div class="weather__forecast">${temp}	°C</div></div>`;
        forecasts += template;
      }

      box.innerHTML = forecasts;
    }
  })
  .catch(function () {
    //Обрабатываем ошибки
    console.log("error");
  });


