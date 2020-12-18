const errCity = document.querySelector(".errorcity");

const key = "Xaaf01Pbpf42CkKgSrgAQW223TIgg1NA";

const getWeather = async (id) => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

//getCity information
const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  if (data.length == 0) alert("Please Enter a valid city name:");
  if (city.toLowerCase() == "hyderabad") return data[1];

  return data[0];
};
