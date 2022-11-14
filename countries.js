const countries = [
  {
    name: "Portugal",
    capital: "Lisboa",
    population: 10310000,
    minimumSalary: 740,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
  {
    name: "Spain",
    capital: "Madrid",
    population: 47350000,
    minimumSalary: 1050,
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
  {
    name: "France",
    capital: "Paris",
    population: 67390000,
    minimumSalary: 1539,
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: 83240000,
    minimumSalary: 1584,
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  },
  {
    name: "United Kingdom",
    capital: "London",
    population: 67220000,
    minimumSalary: 1598,
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    name: "The Netherlands",
    capital: "Amsterdam",
    population: 17440000,
    minimumSalary: 1635,
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
];

// Exercise for only one country
// const Portugal = countries[0];

// document.querySelector(".country-name span").innerHTML = Portugal.name;
// document.querySelector(".country-population span").innerHTML =
//   Portugal.population;
// document.querySelector(".country-capital span").innerHTML = Portugal.capital;
// document.querySelector(".country-minimum-salary span").innerHTML =
//   Portugal.minimumSalary;
// document.querySelector(".country-flag img").src = Portugal.flag;

// Exercise for all countries
countries.forEach((country) => {
  let buttonCountry = document.createElement("button");
  buttonCountry.innerHTML = country.name;
  buttonCountry.setAttribute("class", "country-buttons");
  buttonCountry.setAttribute("value", country.name);
  buttonCountry.setAttribute("onclick", `displayCountry("${country.name}")`);

  document
    .querySelector(".country-buttons-container")
    .appendChild(buttonCountry);
});

function displayCountry(countryName) {
  const selectedCountry = countries.find(
    (country) => country.name === countryName
  );

  document.querySelector(".country-name span").innerHTML = selectedCountry.name;
  document.querySelector(".country-population span").innerHTML =
    selectedCountry.population;
  document.querySelector(".country-capital span").innerHTML =
    selectedCountry.capital;
  document.querySelector(".country-minimum-salary span").innerHTML =
    selectedCountry.minimumSalary;
  document.querySelector(".country-flag img").src = selectedCountry.flag;

  document.querySelector(".country-container").style.display = "flex";
}

const countryLargestPopulation = countries.reduce(function (prev, current) {
  return prev.population > current.population ? prev : current;
});
// Alternative Francisco showed at the class
// const countryLargestPopulation = countries.sort(
//   (countryA, countryB) => countryB.population - countryA.population
// )[0];
document.querySelector(".country-largest-population span").innerHTML =
  countryLargestPopulation.name;

const countryLargestSalary = countries.reduce(function (prev, current) {
  return prev.minimumSalary > current.minimumSalary ? prev : current;
});
document.querySelector(".country-largest-salary span").innerHTML =
  countryLargestSalary.name;
