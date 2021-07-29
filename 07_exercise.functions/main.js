
/*function printFullName () {
    let firstName = 'Adelaja'
    let lastNAme = 'Goodness'
    let space = ' '
    let fullName = firstName + space + lastNAme
    console.log(fullName);
}
printFullName()

function printFullName () {
    let firstName = 'Adelaja'
    let lastNAme = 'Goodness'
    let space = ' '
    let fullName = firstName + space + lastNAme
    return fullName
}
console.log(printFullName())

function addNumbers () {
    let numOne = 2
    let numTwo = 4
    let sum = numOne + numTwo
    return sum
}
console.log(addNumbers());


function areaOfRectangle() {
 let lenght = 2
 let width = 4
 let area = lenght * width
 return area
}
console.log(areaOfRectangle());

function perimeterOfRectangle() {
    let lenght = 3
    let width = 5
    perimeter = 2*(lenght * width)
    return perimeter
}
console.log(perimeterOfRectangle());

function volumeOfRectPrism() {
    let lenght = 2
    let width = 5
    let height = 6
    perimeter = lenght * width * height
    return perimeter
}
console.log(volumeOfRectPrism());

function areaOfCircle() {
    let r = 2
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle());

function circumOfCircle() {
     let r = 3
     let cicumfrence = 2 * Math.PI * r
     return cicumfrence
 }
 console.log(circumOfCircle());

function density() {
   mass = 12  
   volume = 10
   let densityMassVolume =  mass / volume
   return densityMassVolume 
}
console.log(density());

function SpeedOfObject() {
   let distance = 12
   let timeTaken = 4
   let speed = distance / timeTaken
   return speed
}
console.log(SpeedOfObject());

function weightOfSubstance(mass,gravity) {

   let  weight = mass * gravity 
   return weight
}
console.log(weightOfSubstance(12,2.3));

function convertCelciusToFahrenheit(oC) {
    let Fahrenheit =  (oC * 9/5) + 32
    return Fahrenheit 
}
console.log(convertCelciusToFahrenheit(30));*/

function Bmi(weight,height) {
  let  Bmi = weight  / (height * height) 
    if (Bmi < 18.5) {
         return 'underweight';
    } else if (Bmi >= 18.5 && Bmi <= 24.9){
        return 'normal weight';
    }  
     else if (Bmi >= 25 && Bmi <= 29.9){
         return 'over weight';
     } 
     else if (Bmi >= 30) {
         return 'obese';
     }
}
console.log(Bmi(70,1.7));

function checkSeason(season) {
    switch (season) {
        case 'jan':
            case 'feb':
            case 'mar' :
            return 'Autumn';
            break
        case 'apr':
            case 'may':
            case 'jun':  
            return 'Winter';
            break
        case 'july,':
            case 'aug':
            case 'sep':
             return 'spring';  
            break
        case 'oct':
            case 'nov':
            case 'dec':
              return 'summer';
            break
    }
}
console.log(checkSeason('mar'));

let num1 = 0
let num2 = 10
let num3 = 5
function Maximum() {
    if (num2 > num1) {
        return num2
    }
    else if (num2 > num1 && num1 > num2 ) {
        return num1
    }
    else if (num2 > num3 && num2 < num1) {
        return num3
    }
}
console.log(Maximum(num2));





function linearEquation(w, e, f) {
  y = -f / e;
  x = -f / w;
  return { y, x };
}
console.log(linearEquation(25, 10, 5)); 
function quadraticEquation(a, b, c) {
  let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  if (x1 === x2) {
    return { x: x1 };
  } else {
    return { x1, x2 };
  }
}
console.log(quadraticEquation())
console.log(quadraticEquation(1, 4, 4));
console.log(quadraticEquation(1, -1, -2));
console.log(quadraticEquation(1, 7, 12))
console.log(quadraticEquation(1, 0, -4))
console.log(quadraticEquation(1, -1, 0))

const countries = ['Canada', 'naija', 'usa', 'india', 'quilox'];
function printArray(arr) {
  let m = '';
  for (let i = 0; i < arr.length; i++) {
    m = m + '' + arr[i];
  }
  return m;
}
console.log(printArray(countries));
function showDateTime() {
  let now = new Date();
  let year = `${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}/${
    now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
  }/${now.getFullYear()} ${
    now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
  }:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}`;
  return year;
}
console.log(showDateTime());
function swapvalues(x, y) {
  return ` X => ${y}, Y => ${x} `;
}
console.log(swapvalues(50, 10));
function reverseArray(arr) {
  let reverse = arr.reverse();
  return reverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
function capitalizeArray(arr) {
  let empty = [];
  for (let i = 0; i < arr.length; i++) {
    empty.push(arr[i].toUpperCase());
  }
  return empty;
}
console.log(capitalizeArray(countries));
function addItem(item) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let newArr = item.concat(arr);
  return newArr;
}
console.log(addItem(countries));
function removeItem(index) {
  index.splice(0, 2);
  return index;
}
console.log(removeItem(countries));
let numb = [5, 10, 4, 24, 50, 20, 45, 12, 32];
function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(25));
function sumOfOdds(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(25));
 function sumOfEvens(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEvens(25));
function evenAndOdds(num) {
  let sum = 0;
  let summ = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) sum += 1;
  }
  for (let j = 0; j <= num; j++) {
    if (j % 2 == 1) summ += 1;
  }
  return `The  numbers of odds are ${summ}\nThe numbers of evens are ${sum}`
}
console.log(evenAndOdds(100));
function sumOfArgs(){
    let sum = 0
    for(let i = 0; i < arguments.length;i++){
        sum+= arguments[i]
    }
    return sum
}
console.log(sumOfArgs(1,2,3,4,5,10,5,20))
function randomUserIp(){
      let sum = ''
      for(let i = 0; i <2; i++){
      let random = Math.floor(Math.random() * 256)
        sum = sum + '.' + random
    }
    return sum.replace('.','')
}
console.log(randomUserIp());
function randomMacNumber(){
  let number = '0123456789ABCDEFGH'
  let number2 = '0123456789ABCDEFGH'
  let sum = '';
  for(let i = 0; i <4;i++){
    let random = number[Math.floor(Math.random() * number.length)]
    let random2 = number2[Math.floor(Math.random() * number2.length)]
    sum = sum + ';' + random + random2
  }
  return sum.replace(':','')
}
  console.log(randomMacNumber());
function randomHexaDecimal(){
    let number = 'a1ab2c3d4e5f6g123456789'
    let constant = '#'
    for(i = 0; i < 6;i++){
        let random = number[Math.floor(Math.random() * number.length)]
        constant+=random
    }
    return constant
}
console.log(randomHexaDecimal());
function userIdGenerator(){
  let sum = ''
  let numbers = '123456789'
  let lowercase = 'abcdefghi'
  let id = 'ABCDEFGHI'
  for(k = 0; k < 2;k++ ){
    random2 = numbers[Math.floor(Math.random() * numbers.length)]
    sum+= random2
  }
  for(i = 0; i < 3; i++){
    random = id[Math.floor(Math.random() * id.length)]
    sum+= random
  }
    for(j = 0; j < 2;j++ ){
      random1 = lowercase[Math.floor(Math.random() * lowercase.length)]
      sum+= random1
    }
    return sum
}
console.log(userIdGenerator());
function userIdGeneratedByUser(){
  let arrOfRand = []
  let randomString = '123456798ABCDEFGHIabcdefghi'
  let numberOfChar = parseInt(prompt('Enter number of id charcters'));
  let numberOfId = parseInt(prompt('Enter number of id'));
  for(i = 0; i < numberOfId;i++){
    let sum = ''
    for(let j=0; j < numberOfChar; j++){
      random = randomString[Math.floor(Math.random() * randomString.length)]
      sum+=random
    }
    arrOfRand.push(sum)
  }
  return arrOfRand.join('\n')
}
console.log(userIdGeneratedByUser());





function userIdGeneratedByUser(){
  let arrOfRand = []
  let randomString = "123456798ABCDEFGHIabcdefghi"
  let numberOfChar = parseInt(prompt("Enter number of id charcters"));
  let numberOfId = parseInt(prompt("Enter number of id"));
  for(i = 0; i < numberOfId;i++){
    let sum = ""
    for(let j=0; j < numberOfChar; j++){
      random = randomString[Math.floor(Math.random() * randomString.length)]
      sum+=random
    }
    arrOfRand.push(sum)
  }
  return arrOfRand.join('\n')
}
console.log(userIdGeneratedByUser());
function rgbColorGenerator(){
  let sum = "rgb("
  for(let i = 0;i < 3; i++ ){
    let random = Math.floor(Math.random() * 256)
    sum = sum + "," + random
  }
    sum+= ")"
  return sum.replace(",", "")
}
console.log(rgbColorGenerator());
function arrayOfHexadecimal(){
  let number = "a1ab2c3d4e5f6g123456789"
    let constant = "#"
    let constant2 = "#"
    let constant3 = "#"
    let toPushArray = []
    for(i = 0; i < 6;i++){
        let random = number[Math.floor(Math.random() * number.length)]
        let random1 = number[Math.floor(Math.random() * number.length)]
        let random2 = number[Math.floor(Math.random() * number.length)]
        constant+= random
        constant2+=random1
        constant3+=random2
      }
      toPushArray.push(constant,constant2,constant3)
    return toPushArray
}
console.log(arrayOfHexadecimal());
function arrayOfRgbColors(){
  let array = []
  for(let j = 0; j < 4;j++){
    let sum = "rgb("
  for(let i = 0;i < 3; i++ ){
    let random = Math.floor(Math.random() * 256);
    sum = sum +  "," + random
  }
  sum+= ")"
array.push(sum.replace(",",""))
}
  return array
}
console.log(arrayOfRgbColors())
function convertHexToRgb(numb){
     let slice1 = numb.slice(1,3)
     let slice2 = numb.slice(3,5)
     let slice3 = numb.slice(5,7)
      let rgb = parseInt(slice1,16)
      let rgb1 = parseInt(slice2,16)
      let rgb2 = parseInt(slice3,16)
      let completeRgb = `rgb(${rgb},${rgb1},${rgb2})`
      return completeRgb
}
console.log(convertHexToRgb("#12FF3D"));
function convertRgbToHexColor(numbs){
   let rgbRemoval = numbs.slice(4).replace(")","")
   let array = rgbRemoval.split(",")
  let firstConvert = array.slice(0,1).toString()
  let convert2 = array.slice(1,2).toString()
  let convert3 = array.slice(2,3).toString()
   let hex1 = parseInt(firstConvert,10).toString(16)
   let newHex1 = hex1 == 0 ? "0" + hex1 : hex1
   let hex2 =  parseInt(convert2,10).toString(16)
   let newHex2 = hex2 == 0 ? "0" + hex1 : hex2
   let hex3 = parseInt(convert3,10).toString(16)
   let newHex3 = hex3 == 0 ? "0" + hex3 : hex3
   let hexColor  = "#" + newHex1 + newHex2 + newHex3
   return  hexColor
}
console.log(convertRgbToHexColor("rgb(255,255,255)"))
function generateColors(type,numb){
      let array1 = []
      let randomHexDec = "123456789abcdefgh"
      if(type == "rgb"){
        for(i = 0; i < numb; i++){
          let sum = "rgb("
          for(j = 0; j < 3; j++){
           let  random = Math.floor(Math.random() * 256)
            sum = sum + "," + random
          }
            sum+=")"
            array1.push(sum.replace(",",""))
        }
      }
      if(type == "hexa"){
        for(k = 0; k < numb; k++){
          let sum1 = "#"
          for(let l= 0; l < 6; l++){
            let random1 = randomHexDec[Math.floor(Math.random() * randomHexDec.length )]
            sum1+= random1
          }
          array1.push(sum1)
        }
      }
      return array1
}
console.log(generateColors("rgb", 10))
function shuffleArray(array){
      return array.sort()
}
countries1 = ["mali", "england","afgnaistan", "japan","kenya"]
console.log(shuffleArray(countries1))
 function factorial(number){
   let sum = 1;
   for(let i = number; i > 0; i--){
    sum*=i
   }
   return sum
 }
 console.log(factorial(7));
 let emptyArrays = []
 function isEmpty(string){
      if(string.length == 0){
          return "Empty Data Type"
      } else{
       return "Is not empty"
      }
 }
 console.log(isEmpty(emptyArrays))
 function sum(){
  let sum = 0
  for(let i = 0; i < arguments.length;i++){
      sum+= arguments[i]
  }
  return sum
 }
 console.log(sum(10,50,3,4,5,6,7,8,9))
   let no =[1,3,4,5,6,7,8,9,12]
 const sumOfArrayItems = (arrays) => {
    if(!arrays.every(value => typeof value ==="number")){
      return Error("Every item of the array must be a number")
    }
  return arrays.reduce((acc,c) => acc + c,0)
 }
 console.log(sumOfArrayItems(no));
 function average(array){
  if (!array.every(value => typeof value === 'number')) {
    return Error("every item of the array must be a number")
}
  return array.reduce((acc,c) => acc + c,0) /2
 }
console.log(average(no));
const techComp = ['Google',"Facebook", 'Facebook','Apple', 'Amazon','Microsoft',  'IBM',"me"]
const modifyArray = (newArr) => {
  if(newArr.length < 5){
    return "item not found"
  }
      let fourth = newArr[4].toUpperCase()
      newArr.splice(4,1,fourth)
  return newArr
}
console.log(modifyArray(techComp))
function isPrime (n) {
  // if (!n) return false
  let prime = true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false
      break
    }
  }
  return prime
}
console.log(isPrime(21))
    function isValidVar(validVar){
      let alphabets = 'abcdefghijklmnopqrstuvwxyz'
      for(let i = 0; i < alphabets.length;i++){
      if(validVar.startsWith(alphabets[i])){
        return "Valid variable"
        break;
       }
      }
     if(validVar.startsWith("_") || validVar.startsWith("$")){
       return "Valid variable"
    } else{
      return "Invalid Variable"
    }
  }
    console.log(isValidVar("zmma"))
    function uniqueArray(array){
      let result ='Array is unique'
      for(let i=0; i<array.length; i++){
        let arrItemCount=0;
        for(let j=0; j<array.length; j++){
          if(array[i] === array[j]) arrItemCount++
        }
        if(arrItemCount > 1) {
          result='Array is not Unique'
          break;
        }
      }
      return result
    }
    console.log(uniqueArray(techComp));
    function arrayDataTypes(array){
      let arrayOfdata = ["number","string","undefined","null","boolean"]
      let empt = []
      for(let i = 0; i < arrayOfdata.length;i++){
      if(!array.every(value => typeof value === arrayOfdata[i])){
        empt.push(arrayOfdata[i])
      }
    }
    if(empt.length == arrayOfdata.length){
      return "Array is not containing the same data type"
    }else{
    return "Array is containing same data type"
  }
}
  console.log(arrayDataTypes(techComp))
  // Another method to check for type of data type
  const  dataTypesOfArray = (array) => {
    let arrayOfdata = [1,"string",undefined,null,true]
    for(let i = 0; i < arrayOfdata.length; i++){
        let count = 0;
      for(let j = 0; j < array.length;j++){
        if(typeof(arrayOfdata[i]) === typeof(array[j])){
              count++
        }
      }
      if(count == array.length){
        return "Array is containing same data type"
      }
    }
    return "Array is containing different data type"
   }
   console.log(dataTypesOfArray([true,true,true,true,false,false,]))
  function randomNumber(){
    let sum = "("
    // emptyArray = [];
    for(let i = 0; sum.length < 15;i++){
      let random = Math.floor(Math.random() * 10)
      // console.log(random)
      if(sum.indexOf(random) == -1) {
        sum = sum + "," + random
        }
  }
    sum = sum + ")"
   return  sum.replace(",","").split()
  }
  console.log(randomNumber())
 const newArrayOfCountry = ["kisi","lagos","oyo","igboho","saki","koji","yola","akwa ibom"]
  function reverseCountries(countryArray){
    return countryArray.reverse()
}
  console.log(reverseCountries(newArrayOfCountry));
  console.log(typeof(1))



























 


