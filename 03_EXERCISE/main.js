let firstName = "laja";
let lastName = "codes";
let country = "Nigeria";
let city = "Lagos";
let age = 18;
let isMarried = true;
let year = 2021;

console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);
console.log(year);

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// console.log(typeof ('10') === 10);
console.log(typeof Number("10") === 10);
console.log(parseInt("9.8") === 10);

let _isLight = true;
let _isOn = true;
let _isMorning = true;
console.log(_isLight);
console.log(_isOn);
console.log(_isMorning);

let _isDark = false;
let _isOff = false;
let _isEvening = false;
console.log(_isDark);
console.log(_isOff);
console.log(_isEvening);

console.log(5 > 3);
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

console.log("phython".length !== "jargon".length);

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); //true
console.log("dragon".includes !== "python".includes);

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

//    let height = prompt("Enter Height");
//    let base = prompt("Enter Base");
//    let area = 0.5 * height * base;
//    console.log(area);

//    let a = parseInt(prompt('Enter Side a'));
//    let b  = parseInt(prompt('Enter Side b'));
//    let c  = parseInt(prompt('Enter Side c'));
//    let perimeter = a + b + c;
//    console.log(perimeter);

//    let lenght = parseInt(prompt('Enter Length'));
//    let width = parseInt(prompt('Enter Width'));
//    let rectangleArea = lenght * width;
//    console.log(rectangleArea);

//    let rectanglePerimeter = 2 + (length * width);
//    console.log(rectanglePerimeter);

//    const PI = 3.14
//    let radius = parseInt(prompt('Enter Radius'));
//    let area = (PI * radius * radius)
//    console.log(area);
//    let circumference = (2 * PI * radius)
//    console.log(circumference);

// let Hours = parseInt(prompt("Enter hour"));
// let perHour = parseInt(prompt("Enter perhour"));
// const allEarning = Hours * perHour;
// console.log(allEarning);

let xone = 1;
let yone = 0;
let xtwo = 0;
let ytwo = -2;
let secondSlope = (ytwo - yone) / (xtwo - xone);
console.log(secondSlope);

// let x1 = 2;
// let y1 = 2;
// let x2 = 6;
// let y2 = 10;
// let firstSlope=((y2-y1)/(x2-x1));
// console.log(firstSlope);

// console.log(secondSlope == firstSlope);

// let x = 1
// console.log(x ** 2 + 6*x + 9);
// let y = 16
// let x1 = -3
// console.log(x1 ** 2 + 6*x1 + 9);
// let y = 0

let _myName = "goodnesslaja";
_myName.length > 7
  ? console.log("ur name is long")
  : console.log("ur name is short");

let _firstName = "Asabenah";
let _lastName = "Yetayeh";
_firstName.length !== _lastName.length
  ? console.log(
      `Your first name, ${_firstName} is longer than your family name, ${_lastName}`
    )
  : "";

// let myAge = 18;
// let yourAge = 10;
// let myAgeyourAge = 18 - 10;
// myAgeyourAge ? console.log(`i am ${myAgeyourAge} years older than you`) : "";

// let birthYear = Number(prompt("Enter birth year"));
// let recentAge = 2021 - birthYear;
// if (recentAge >= 18) {
//   console.log(`You are ${recentAge}. You are old enough to drive`);
// }

// let smallBirth = Number(prompt("Enter birth year"));
// let simpleAge = 2021 - smallBirth;
// if (simpleAge <= 18) {
//   console.log(
//     `You are ${simpleAge}.You will be allowed to drive after ${
//       18 - simpleAge
//     } years.`
//   );
// }

// let numberOfYears = prompt("Enter number of years you live");
// let getTime = Date.now();
// console.log(getTime);

//  let _now = new Date()
// console.log(_now.getTime());*/

const days = now.getDay();
const years = now.getFullYear();
const month = now.getMonth() + 1;
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`${years}-${month}-${days}-${hours}:${minutes}`);
console.log(`${days}-${month}-${year}-${hours}:${minutes}`);
console.log(`${days}/${month}/${years}/${hours}:${minutes}`);

const _years = now.getFullYear();
const _month = now.getMonth() + 1;
const day = now.getDay();
const hour = now.getHours();
const minute = now.getMinutes();
console.log(`${year}/${month}/${days} ${hours}:${minutes}`);
