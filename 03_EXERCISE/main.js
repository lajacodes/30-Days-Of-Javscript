let firstName = 'laja'; 
let lastName = 'codes';  
let country = 'Nigeria'; 
let city = 'Lagos'; 
let age = 18;
let isMarried = true;
let year = 2021

console.log(firstName);
console.log(lastName);
console.log(country);
console.log(city);
console.log(age);
console.log(isMarried);

console.log(typeof 'laja')
console.log(typeof 'codes');
console.log(typeof 'Nigeria');
console.log(typeof'lagos'); 
console.log(typeof 18);
console.log(typeof isMarried);

// console.log(typeof ('10') === 10);
console.log(typeof parseInt ('10') === 10);
console.log(parseInt ('9.8') === 10);

let _isLight = true
let _isOn = true
let _isMorning = true
console.log(_isLight);
console.log(_isOn);
console.log(_isMorning);

 let _isDark = false
 let _isOff = false
 let _isEvening = false
 console.log(_isDark);
 console.log(_isOff);
 console.log(_isEvening);

 let check = 5 > 3
 let chec = 4 > 3
 let chek = 4 >= 3
 let chck = 4 < 3
 let ceck  = 4 <= 3
 let chk = 4 == 4
 let heck = 4 === 4
  let eck = 4 != 4
  let hec = 4 !== 4
  let pec  =4 != '4' 
 let peck = 4 == '4'
  let deck = 4 === '4'
 console.log(check);
 console.log(chec);
 console.log(chek);
 console.log(chck);
 console.log(chk);
 console.log(heck);
 console.log(eck);
 console.log(hec);
 console.log(pec);
 console.log(peck);
 console.log(deck);
 console.log('phython'.length == "jargon".length);

   console.log(4 > 3 && 10 < 12); //true         
   console.log(4 > 3 && 10 > 12); // false
   console.log(4 > 3 || 10 < 12); //true
   console.log(4 > 3 || 10 > 12); //true
   console.log(!(4 > 3));//false
   console.log(!(4 < 3));//true
   console.log(!(false));//true
   console.log(!(4 > 3 && 10 < 12));//false
   console.log(!(4 > 3 && 10 > 12));//true
   console.log(!(4 === '4'));//true
   console.log('dragon'.includes !== 'python'.includes);

   const now = new Date()
   console.log(now.getFullYear())
   console.log(now.getMonth()+1)
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

let xone = 1
let yone = 0
let xtwo = 0
let ytwo =-2
let secondSlope =((ytwo-yone)/(xtwo-xone));
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


 let _myName = 'good';
 if (_myName.length > 7) {
    console.log('my name is long');
 } else {console.log('my name is short');
}
   

 let _firstName = 'Asabenah'
  let _lastName = 'Yetayehh'
  console.log(_firstName.lenght !== _lastName.lenght);

let myAge = 18
let yourAge = 10
let myAgeyourAge = 18 -10;
 console.log(parseInt(18 - 10));
console.log(`i am ${myAgeyourAge} years older than you`);

// let birthYear = (prompt('Enter birth year'));
//  let Age = 18
//     if (Age >= 18) {console.log('You are 25. You are old enough to drive')
        
//     }
// let _birthYear = (prompt('Enter birth year'));
//  let _Age = 18
//     if (Age <= 18) {console.log('You are 15. You will be allowed to drive after 3 years.')
        
//     }

/*let numberOfYears = (prompt('Enter number of years you live'))
 let _now = new Date()
console.log(_now.getTime());*/



const days = now.getDay()
const years = now.getFullYear() 
const month = now.getMonth() + 1  
const hours = now.getHours() 
const minutes = now.getMinutes() 


console.log(`${years}-${month}-${days}-${hours}:${minutes}`)
console.log(`${days}-${month}-${year}-${hours}:${minutes}`)
console.log(`${days}/${month}/${years}/${hours}:${minutes}`)



const _years = now.getFullYear()
const _month = now.getMonth() + 1
const day = now.getDay()
const hour = now.getHours()
const minute = now.getMinutes()
console.log(`${year}/${month}/${days} ${hours}:${minutes}`)



