const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethopia",
  "Finland",
  "Germany",
  "Hungry",
  "Ireland",
  "Japan",
  "Kenya",
];

if (countries.includes("Ethopia")) {
  console.log("EThOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

// console.log(countries.slice(0, length - 1));

let arrLength = countries.length - 1;
let middleLength = arrLength / 2;
let middleArray = countries[middleLength];

if (arrLength % 2 == 0) {
  console.log(middleArray);
} else if (arrLength % 2 > 0) {
  let midd1 = Math.floor(middleLength);
  let midd2 = Math.ceil(middleLength);
  let middle = `${countries[midd1]} and ${countries[midd2]} are the middle value`;
  console.log(middle);
}

if (countries.length % 2 == 0) {
  let divide1 = countries.slice(0, countries.length / 2);
  let divide2 = countries.slice(countries.length / 2 + 1, countries.length);
  console.log(divide1);
  console.log(divide2);
} else if (countries.length % 2 == 1) {
  let divide3 = countries.slice(0, countries.length / 2);
  let divide4 = countries.slice(countries.length / 2, countries.length);
  addition3 = divide3.push("England");
  console.log(divide3);
  console.log(divide4);
}
