let arr=[];
console.log(arr);

let element = [1, 2, 3, 4, 5, 6, 7] 
console.log(element.length); 
 console.log(element[0]);
 console.log(element[4]); 
 console.log(element[6]); 
 
 let mixedDataTypes = ['right', 3, null, undefined,true, 8];
console.log(mixedDataTypes.length);

 let itCompanies = [ 
    'Facebook',
    'Google', 
    'Microsoft',
    'Apple', 
    'IBM', 
    'Oracle', 
    'Amazon'
 ];
 console.log(itCompanies);
 console.log(itCompanies.length);
 console.log(itCompanies[0]);
 console.log(itCompanies[3]);
 console.log(itCompanies[6]);


console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
                                        
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
  
console.log(`${itCompanies.join(', ')} are big IT companies`)

 let company = prompt('enter company');
if (
    company == itCompanies[0] ||
    company == itCompanies[1] ||
    company == itCompanies[2] ||
    company == itCompanies[3] ||
    company == itCompanies[4] ||
    company == itCompanies[5] ||
    company == itCompanies[6] 
) {
    console.log(company);
} else {
   console.log('company is not found'); 
}

let first = itCompanies[0].match(/o/g);
let second = itCompanies[1].match(/o/g);
let third = itCompanies[2].match(/o/g);
let fourth = itCompanies[3].match(/o/g);
let fifth = itCompanies[4].match(/o/g);
let sixth = itCompanies[5].toUpperCase().match(/o/g);
let seventh = itCompanies[6].match(/o/g);
 let check = ['o'].length;
  let check2 = ['o'].length;

if (first.length > ['o'].length) {
 console.log(itCompanies[0] + ' has more than one letter o');   
} else if (first.length == check) {
    console.log(itCompanies[0] + ' has  one letter o');
} else if (first.length < null) {
    console.log(itCompanies[0] + ' contains no letter o');
}

if (second.length > ['o'].length) {
 console.log(itCompanies[1] + ' has more than one letter o');   
} else if (first.length == check) {
    console.log(itCompanies[0] + ' has  one letter o');
} else if (second.length < null) {
    console.log(itCompanies[1] + ' contains no letter o');
}

if (third.length > check) {
 console.log(itCompanies[2] + ' has more than one letter o');   
} else if (third.lenght == check) {
    console.log(itCompanies[2] + 'has  one letter o');
} else if (third.lenght < null) {
    console.log(itCompanies[2] + 'contains no letter o');
}

/*if (fourth == check) {
 console.log(itCompanies[3] + ' ha more than one letter o');   
} else if (fourth == check) {
    console.log(itCompanies[0] + 'has just one letter o');
} else if (fourth < check) {
    console.log(itCompanies[3] + 'contains no leeter o');
}


if (fifth < check) {
 console.log(itCompanies[4] + ' has more than one letter o');   
} else if (fifth == check) {
    console.log(itCompanies[4] + 'has  one letter o');
} else if (first < check) {
    console.log(itCompanies[4] + 'contains no leeter o');
}

if (sixth > check) {
 console.log(itCompanies[0] + ' has more than one letter o');   
} else if (sixth == check) {
    console.log(itCompanies[0] + 'has  one letter o');
} else if (sixth == null) {
    console.log(itCompanies[5] + 'contains no leeter o');
}

if (seventh.lenght > check) {
 console.log(itCompanies[6] + ' ha more than one letter o');   
} else if (first.lenght == check) {
    console.log(itCompanies[6] + 'has  one letter o');
} else if (first.lenght == null) {
    console.log(itCompanies[6] + 'contains no leeter o');
}*/

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(3, 7));
console.log(itCompanies.slice(3, 4));
console.log(itCompanies.splice(0, 1));
console.log(itCompanies.splice(3, 1));
console.log(itCompanies.splice(itCompanies.lenght -1, itCompanies.lenght));
console.log(itCompanies.splice(0, itCompanies.lenght));

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
Word = text.replace(/[^a-zA-Z ]/gi, '');
Words = Word.split(' ');
console.log(Word);
console.log(Word.length);
const shoppingCart = ['Milk', 'coffe', 'tea', 'Honey' ]; 

shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(4, 1);
shoppingCart[3] = 'GreenTea';
console.log(shoppingCart);

 

const ages = [19,22,19,24,20,25,26,24,25,24];

ages.sort();
// median = ((n+1)/2)
let medianPosition = (ages.length + 1) / 2;
let median = ages[medianPosition - 1];
if (medianPosition % Math.floor(medianPosition) != 0) {
    median =
    (ages[Math.floor(medianPosition) - 1] +
     ages[Math.ceil(medianPosition) - 1]) / 2;

}

console.log({ median });

let min = ages[0]
let max = ages[ages.lenght-1];
console.log(`The min age is ${min}, while the max age is ${max} `);
let mid1 = ages[4];
let mid2 = ages[5];
let MedianAnotherMethod = (mid1 + mid2) / 2;
console.log(`The median is $ {medianAnotherMethod}`);

let average = 
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) / 2;

    console.log(`The average age is $(average)`);

    let range = max - min;
    console.log({ range });
    let comparism1 = Math.abs(min - average);
     let comparism2 = Math.abs(max - average);
    if (comparism1 == comparism2) {
        console.log(`They are equal`);
    }else if (comparism1 > comparism2) {
    console.log(`min average is greater than max-average`);
    } else {
        console.log(`${comparism2} is greater than ${comparism1}`);
    }
    
    

// const itCompanies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', ');
// const result = itCompanies.reduce(function (acc, current) {
//   if (current.includes('oo')) {
//     return acc.concat(current)
//   } else {
//     return acc
//   }
// }, [])
// const doubleO = itCompanies.reduce(function (a, c) {
//   if (c.replace(/[^o]/g, '').length === 2) {
//     return a.concat(c)  
//   } else {
//     return a
//   }
// }, [])
// const nums = [1, 2, 3, 5].reduce(function (acc, current) {
//   return acc + (current * 2)
// }, 0)
// const filtered = itCompanies.filter(function (name) {
//   return name.includes('oo')
// })*/

/*let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 ages = ages.sort()
 const max = ages[ages.length - 1]
 const min = ages[0]
 const median = ages[Math.floor(ages.length / 2)];
 const range = max - min
 const average = ages.reduce(function (acc, n) {
   return acc + n
 }, 0) / ages.length
 console.log(ages.reduce((acc, n) => acc + n) / ages.length)*/
