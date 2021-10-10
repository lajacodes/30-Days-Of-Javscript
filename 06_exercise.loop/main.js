for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
let t = 10;
do {
  console.log(t);
  t++;
} while (t <= 10);

for (let r = 10; r >= 0; r--) {
  console.log(r);
}
let r = 10;
while (r >= 0) {
  console.log(r);
  r--;
}
let _r = 10;
do {
  console.log(r);
  r--;
} while (r >= 0);

let n = [1, 2, 3, 4];
for (let e = 0; e <= n.length; e++) {
  console.log(e);
}

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

console.log(`i  i^2 i^3`);
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i * i}  ${i * i * i}`);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

const isPrime = (n) => {
  if (!n) return false;
  let prime = true;
  for (let j = 2; j < n; j++) {
    if (n % 2 === 0) {
      prime = false;
    }
  }
  return prime;
};

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

let ssum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    ssum += i;
  }
}
console.log(ssum);

let sssum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    sssum += i;
  }
}
console.log(sssum);
console.log(
  `The sum of all evens from 0 to 100 is ${ssum}. And the sum of all odds from 0 to 100 is ${sssum}.`
);

let arr = [];
arr.push(ssum, sssum);
console.log(arr);

let arrr = [];
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 100);
  arrr.push(random);
}
console.log(arrr);

let numbers = "34221";
let strings = "";
for (let i = 0; i <= 5; i++) {
  let random = numbers[Math.floor(Math.random() * numbers.length)];
  strings += random;
}
console.log(strings);

let number =
  "a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v21w22x23y24z0";
let string = "";
for (let i = 0; i < 6; i++) {
  let random = number[Math.floor(Math.random() * number.length)];
  string += random;
}
console.log(string);

exercise: 2;

let numberss =
  "a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v21w22x23y24z0";
let stringer = "";
for (let i = 0; i < 15; i++) {
  let random = numberss[Math.floor(Math.random() * numberss.length)];
  stringer += random;
}
console.log(stringer);

let _number =
  "a1b2c3d4e5f6g78i9j1a0k1b1l1c2m1d3n1e4o1f5p1g6q1h7r1i8s1j9t2k0u2l1v2m1w2n2x2o3y2p4z0";
let strin = "";
for (let i = 0; i < 25; i++) {
  let random = number[Math.floor(Math.random() * number.length)];
  strin += random;
}
console.log(strin);

let ids =
  "aub2c3###4e5f#g7r8i9j1#l12m13n14o1pp16q##7r18sy9t##u2#v21w22x23y24z0".split(
    ""
  );
let emtyString = "";
for (let i = 0; i < 6; i++) {
  const generated = ids[Math.floor(Math.random() * ids.length)];
  emtyString += generated;
}

console.log(emtyString);

empty = [];
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
for (i = 0; i < countries.length; i++) {
  empty.push(countries[i].toUpperCase());
}
console.log(empty);

const length = () => {
  let emp = [];
  countries.forEach((item) => {
    emp.push(item.length);
  });
  return emp;
};
console.log(length());
let ok = [];
for (let i = 0; i < countries.length; i++) {
  let s = countries[i];
  let lengths = s.length;
  let first = s.substr(0, 3).toUpperCase();
  ok.push(countries[i], first, lengths);
}
console.log(ok);

let emtyArr = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land") === true) {
    emtyArr.push(countries[i]);
  } else if (countries[i].includes("land") === false) {
    ("All these countries are without land");
  }
}
console.log(emtyArr);

let arrEndWithIa = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("ia") == true) {
    arrEndWithIa.push(countries[i]);
  }
}
if (arrEndWithIa.length > 0) {
  console.log(arrEndWithIa);
} else {
  console.log("These are countries ends without ia");
}

let newRisk = [];
for (i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    newRisk.push(countries[i]);
  }
}
console.log(newRisk);

const country = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

emptyArr = [];
for (let i = 0; i < country.length; i++) {
  emptyArr.push(country[i].length);
}
console.log(emptyArr);
let max = Math.max(...emptyArr);
console.log(max);

for (let j = 0; j < country.length; j++) {
  if (max == country[j].length) {
    console.log(country[j]);
  }
}

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
let newQuick = [];
for (x = 0; x < webTechs.length; x++) {
  if (webTechs[x].length === 10) {
    newQuick.push(webTechs[x]);
  }
}
console.log(newQuick);

[
  ["HTML", 4],
  ["CSS", 3],
  ["JavaScript", 10],
  ["React", 5],
  ["Redux", 5],
  ["Node", 4],
  ["MongoDB", 7],
];

let firstOne = ["HTML", 4];
let secondOne = ["CSS", 3];
let thirdOne = ["JavaScript", 10];
let fourthOne = ["React", 5];
let fifthOne = ["Redux", 5];
let sixthOne = ["Node", 4];
let seventhOne = ["MongoDB", 7];
let arrayOfArrs = [
  firstOne,
  secondOne,
  thirdOne,
  fourthOne,
  fifthOne,
  sixthOne,
  seventhOne,
];
console.log(arrayOfArrs);

let mernStack = ["MongoDB", "Express", "React", "Node"];
let sums = "";
for (const merns of mernStack) {
  sums += merns[0];
}
console.log(sums);

cont = [];
let plate = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (i = 0; i < plate.length; i++) {
  cont.push(plate[i]);
}
console.log(cont);

rec = [];
let fruitArr = ["banana", "orange", "mango", "lemon"];
for (i = 0; i < fruitArr.length; i++) {
  rec.unshift(fruitArr[i]);
}
console.log(rec);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let emptys = [];
for (let i = 0; i < fullStack.length; i++) {
  emptys.push(...fullStack[i]);
}
console.log(emptys.join("\n"));

let sortedCountries = countries.sort();
console.log(sortedCountries);

let rush = webTechs.sort();
console.log(rush);

let retink = mernStack.sort();
console.log(retink);

let newLet = [];
for (x = 0; x < sortedCountries.length; x++) {
  if (sortedCountries[x].includes("land") === true) {
    newLet.push(sortedCountries[x]);
  }
}
console.log(newLet);

let onlyFour = [];
for (let i = 0; i < sortedCountries.length; i++) {
  if (sortedCountries[i].length == 4) {
    onlyFour.push(sortedCountries[i]);
  }
}
if (onlyFour.length > 0) {
  console.log(onlyFour);
} else {
  console.log("None of the countries have just 4 characters ");
}

let twoOrMore = [];
for (let i = 0; i < sortedCountries.length; i++) {
  if (sortedCountries[i].length >= 2) {
    twoOrMore.push(sortedCountries[i]);
  }
}
console.log(twoOrMore);

let reverseArray = [];
for (let i = 0; i < sortedCountries.length; i++) {
  reverseArray.push(sortedCountries[i].toUpperCase());
}
reverseArray.reverse();
console.log(reverseArray);

function generateChars(n = 10) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let chars = "";
  for (let i = 0; i < n; i++) {
    const randomNo = Math.floor(Math.random() * alphabets.length);
    chars += alphabets[randomNo];
  }
  return chars;
}
let generated = generateChars();
console.log(generated);

let fiveRandom = [];
for (i = 0; i <= 4; i++) {
  fiveRandom.push(Math.round(Math.random() * 100));
}
console.log(fiveRandom);
