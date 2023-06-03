const hideInfo = document.querySelector(".info");
const infoElement = document.querySelector(".info");

let weather = {
  APIkey: "ebfcbb280fd8bfd18e2205f75fc7f228",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lang=en&appid=" +
        this.APIkey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  search: function () {
    this.fetchWeather(document.querySelector(".searchBtn").value);
  },

  displayWeather: function (data) {
    const { name } = data;
    const { temp, temp_min, temp_max } = data.main;
    const { description, icon } = data.weather[0];

    console.log(
      "V " +
        name +
        " je " +
        temp +
        " °C\n" +
        "Minimalni teplota: " +
        temp_min +
        "\nMaximalni teplota: " +
        temp_max +
        ">>ICON>>> " +
        icon
    );
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp.toFixed(1) + "°C";
    document.querySelector(".img").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".weather").innerText = description;
  },
};

function search() {
  hideInfo.classList.remove("hidden");
  weather.search();
}

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    console.log("searching...");
    search();
  }
});