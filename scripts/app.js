const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  const cityDet = data.cityDet;
  const weather = data.weather;

  details.innerHTML = `
    <h5 class="my-3">${cityDet.EnglishName}</h5>
    <div class="my-2">${weather.WeatherText}</div>
    <div class="display-4 my-4 ml-2">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }

  //update the night/day & icons

  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "img/day.svg";
  } else {
    timeSrc = "img/night.svg";
  }

  time.setAttribute("src", timeSrc);
  icon.setAttribute("src", iconSrc);
};

const updateCity = async (city) => {
  const cityDet = await getCity(city);
  const weather = await getWeather(cityDet.Key);

  return {
    cityDet: cityDet,
    weather: weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();

  cityForm.reset();

  updateCity(city)
    .then((res) => updateUI(res))
    .catch((err) => console.log(err));
});
