//  let user = (prompt('Enter your age.'));
    //   let age = 18;
//  if (user >= 18) {console.log('You are old enough to drive. ');
//  } else{
//      console.log(`you are too young try in ${18 - user}years`);
//  }

//  let yourAge = prompt('Enter your age');
//   let myAge = 10
//   let myAgeyourAge = 5 - 'yourAge';
//  if (myAge > yourAge) {console.log('I am 5 years older than you ');  
//  } else {
//      console.log(`You are ${yourAge-10} years older than me.`);
// }

//   let a = 4
//   let b = 3
//   if ('a > b') {console.log('4 is greater than 3');
      
//   } else {console.log('4 is less than 3');
      
//   }
//     let ab= 'a > b'
//    ?console.log('4 is greater than 3')
//    :console.log('4 is less than 3')

//    let num = prompt('Enter a number')
//    if ('') {console.log('2 is an even number');
      
//   } else {console.log('9 is is an odd number.');
      
//   }

//  80-100,A 
//  70-89, B
//  60-69, C
//  50-59, D
//  0-49, F

let score = +prompt('enter score');
  let grade
if (score === 100 || score >= 80) {
    grade = 'A'
} else if (score >= 70) {
    grade = 'B'
} else if (score >= 60) {
    grade = 'C'
} else if (score >= 50) {
    grade ='D'
} else if (score < 50) {
    grade ='F'
}
console.log(`Score :${score}    Grade: ${grade}`)

/*let checkSeason = prompt('Enter months');
 if  ('September, October || November') { console.log('Autumn');
} else if ( 'December, January || Febuary') {
    console.log('Winter'); 
}else if ('Match, April || May'){
    console.log('Spring'); 
}else if ( 'june, july, || August'){
    console.log('Summer'); 
}*/

   /* let monthByUser= prompt('Enter month of the year')
let month= monthByUser.toLowerCase()
switch (month){
    case 'january':
    case 'december':
    case 'february':
        console.log(`the season is Winter`);
        break;
    case 'september':
    case 'october':
    case 'november':
        console.log(`the season is Autumn`);
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log(`the season is Spring`);
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log(`the season is Summer`);
        break;
    default:
        console.log(`Entered value is not valid`);
}

let dayUserInput= prompt('What is the day today?')
let dayShow= dayUserInput.toLowerCase()
switch (dayShow){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${dayShow} is a working day`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${dayShow} is a weekend`);
        break;
    default:
        console.log(`enter input correctly`);
}


 let monByInput= prompt('enter a month')
 let mon= monByInput.toLowerCase()
 switch (mon) {
 case 'january':
 case 'march':
 case 'may':
 case 'july':
 case 'august':
 case 'october':
 case 'december':
     console.log(`${mon} has 31 days`);
     break;
 case 'september':
 case 'april':
 case 'june':
 case 'november':
     console.log(`${mon} has 30 days`);
     break;
 case 'febuary':
 case 'february':
     console.log(`${mon} has 29 days`);
     break;
 default:
     console.log(`please confirm input`);
 }*/

    


 