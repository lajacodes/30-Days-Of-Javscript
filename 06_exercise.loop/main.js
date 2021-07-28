for (let i = 0; i <= 10; i++ ) {
    console.log(i);
}
let i = 0
while (i <= 10) {
    console.log(i);
    i++
}
let i = 10
do {
    console.log(i);
    i++
} while(i <= 10)

for (let r = 10; r >= 0;  r--) {
    console.log(r);
}
let r = 10
while (r >= 0) {
    console.log(r);
    r--
}
let _r = 10
do {
    console.log(r);
    r--
} while(r >= 0)

for (let e = 0; e <= n; e--) {
     console.log(n);
 }
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i))  
}

for (let i=0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

console.log(`i  i^2 i^3`)
 for (let i = 0; i <= 10; i++) {
   console.log(`${i} ${i*i}  ${i*i*i}`)
 }

 
for (let i =0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}
function isPrime (n) {
  if (!n) return false
  let prime = true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      prime = false
      break
    }
  }
  return prime
}
for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i)
  }  
}

let sum = 0
 for (let i = 0; i <= 100; i++) {
     sum += i
}
console.log( sum );

let ssum = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        ssum += i;
    }
       
}
      console.log(ssum);

let sssum = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        sssum += i;
    }
       
}
      console.log(sssum);

let arr = []
arr.push(ssum,sssum)
console.log(arr);


let arrr = []
for(let i = 0; i < 5; i++){
     let random = Math.floor(Math.random() * 100);
          arrr.push(random);
       }
   console.log(arrr);

let   numbers = "34221"
  let strings = "" ;
  for(let i = 0;i <= 5; i++){
     let random =numbers[Math.floor(Math.random() * numbers.length )];
        strings+=random;
  }  console.log(strings);


let   number = "a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v21w22x23y24z0"
  let string = "" ;
  for(let i = 0;i < 6; i++){
     let random =number[Math.floor(Math.random() * number.length )];
        string+=random;
  }  console.log(string);



exercise:2

   let   numberss = "a1b2c3d4e5f6g7h8i9j10k11l12m13n14o15p16q17r18s19t20u21v21w22x23y24z0"
  let stringer ="";
  for(let i = 0;i < 15; i++){
    let random =numberss[Math.floor(Math.random() * numberss.length )];
       stringer+=random;
   }
          console.log(stringer)




  let   _number = "a1b2c3d4e5f6g7h8i9j1a0k1b1l1c2m1d3n1e4o1f5p1g6q1h7r1i8s1j9t2k0u2l1v2m1w2n2x2o3y2p4z0"
  let strin ="";
  for(let i = 0;i < 25; i++){
    let random =number[Math.floor(Math.random() * number.length )];
       strin+=random
   }
   console.log(strin)











  empty = []
   const countries = [
   "Albania",
   "Bolivia",
   "Canada",
   "Denmark",
   "Ethiopia",
   "Finlands",
   "Germany",
   "Hungary",
   "Ireland",
   "Japan",
   "Kenya",
  ];
     for(i = 0; i < countries.length;i++){
     empty.push(countries[i].toUpperCase());
 }
   console.log(empty)

      const length = () => {
          let empty = []
         countries.forEach(item => {
           empty.push(item.length)

         })
            return empty
      }

      console.log(length())
      
             let emptiness = [];
   for(i = 0; i < countries.length;i++){
     let m =  countries[i];
      let length = m.length
     let first  = m.substr(0,3).toUpperCase();
     console.log(first);
      empty.push([countries[i],first,length]);
   }
         console.log(emptiness)



    let arrContainLand = [];
         if(arrContainLand.includes('land')){
      console.log(arrContainLand);
    }
   else{
       arrContainLand.shift('land')
          console.log("All this are without land")
    }
    

let arrEndWithIa = [];
 for(let i = 0; i < countries.length; i++){
    if(countries[i].endsWith("ia") == true){
       arrEndWithIa.push(countries[i])
    }
 }
 if(arrEndWithIa.length > 0){
    console.log(arrEndWithIa)
 } else{
    console.log("These are countries ends without ia");
 }

//    et empt = []
//  for(let i = 0; i < countries.length;i++){
//       empty.push(countries[i].length);
//  }
//  console.log(empt);


let newRisk = []
 for (i = 0; i < countries.length; i++) {
 if (countries[i].length === 5) {
newRisk.push(countries[i])
   }

 }
 console.log(newRisk);
 


 const country = [
   "Albania",
   "Bolivia",
   "Canada",
   "Denmark",
   "Ethiopia",
   "Finlands",
   "Germany",
   "Hungary",
   "Ireland",
   "Japan",
   "Kenya",
  ];
  emptyArr = []
 for(let i  =0; i < country.length; i++ ){
     emptyArr.push(country[i].length)
 }
 console.log(emptyArr)
 let max =Math.max(...emptyArr)
 console.log(max)
    for(let j = 0; j < country.length;j++){
       if(max == country[j].length){
          console.log(country[j])
       }
    }

    const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
  let newQuick = []
  for (x=0; x < webTechs.length;x++) {
     if (webTechs[x].length === 10) {
        newQuick.push(webTechs[x])

     }
  }
  console.log(newQuick);

  [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

  let firstOne = ['HTML', 4]
  let secondOne = ['CSS', 3]
  let thirdOne = ['JavaScript', 10]
  let fourthOne = ['React', 5]
  let fifthOne = ['Redux', 5]
  let sixthOne = ['Node', 4]
  let seventhOne = ['MongoDB', 7]
  let arrayOfArrs = [firstOne,secondOne,thirdOne,fourthOne,fifthOne,sixthOne,seventhOne,]
  console.log(arrayOfArrs);

  let  mernStack = ["MongoDB", "Express", "React",  "Node" ]
  let sum = ""
  for (const merns of mernStack ) {
     sum+=merns[0]
  }
  console.log(sum)


    cont = []
  let plate = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
  for (i=0;i< plate.length;i++ ){ 
      cont.push(plate[i]) 
     }
     console.log(cont);


     rec = []
   let fruitArr = ['banana', 'orange', 'mango', 'lemon']
   for (i=0;i<fruitArr.length;i++) {
      rec.unshift(fruitArr[i])
   }
   console.log(rec);

 const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  let emptys = []

  for(let i = 0; i < fullStack.length;i++){
     emptys.push(...fullStack[i])
  }
  console.log(emptys.join('\n'))








let sortedCountries = countries.sort()
console.log(sortedCountries)

let rush = webTechs.sort()
console.log(rush);

let retink = mernStack.sort()
console.log(retink); 



  /*let newLet = []
  for (x=0; x < webTechs.length;x++) {
     if (webTechs[x].includes(land)) {
        newLet.push(webTechs[x].includes(land))

     }
  }
  console.log(newLet);*/











  let onlyFour = [];
 for(let i = 0; i <countries.length; i++){
    if(countries[i].length == 4){
       onlyFour.push(countries[i])
        }
 }
 if(onlyFour.length > 0){
    console.log(onlyFour)
 } else{
    console.log("None of the countries have just 4 characters ")
 }
 let twoOrMore = [];
 for(let i = 0; i < countries.length; i++){
    if(countries[i].length >= 2){
       twoOrMore.push(countries[i])
    }
 }
    console.log(twoOrMore);
   let reverseArray = [];
 for(let i = 0;i < countries.length; i++){
    reverseArray.push(countries[i].toUpperCase());
 }
  reverseArray.reverse()
  console.log(reverseArray);






  function generateChars (n = 10) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let chars = ''
  for (let i = 0; i < n; i++) {
    const randomNo = Math.floor(Math.random() * alphabets.length)
    chars += alphabets[randomNo]
  }
  return chars
}
let generated = generateChars() 


let fiveRandom=[]
for (i=0; i<=4; i++){
fiveRandom.push(Math.round(Math.random()*100))
}
console.log(fiveRandom);


   