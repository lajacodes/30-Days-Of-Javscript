let myName = '30 Days Of JavaScript';
 console.log(myName);
 console.log(myName.length); 
 console.log(myName.toUpperCase());
 console.log(myName.toLowerCase());
 console.log(myName.substr(0,2));
 console.log(myName.substr(3,20));
 console.log(myName.includes('Script'));

let mySite = '30 Days Of JavaScript';
console.log(mySite.split(' ,'));

let myTalk = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(myTalk.split(' ,'));

console.log(myName.replace('JavaScript', 'Python'));
console.log(myName.charAt(15));
console.log(myName.charCodeAt('j'));
console.log(myName.indexOf('a'));
console.log(myName.lastIndexOf('a'));

let myTake = 'You cannot end a sentence with because because because is a conjunction';
console.log(myTake.indexOf('because'));
console.log(myTake.lastIndexOf('because'));



console.log(myName.trim());
console.log(myName.startsWith('30'));
console.log(myName.endsWith('JavaScript'));
console.log(myName.match('a'));
console.log(myName.repeat('30 Days Of JavaScript'));

let _myTake = '30'
console.log(_myTake.concat('Days Of JavaScript'));

let _myName ='30 Days Of JavaScript'
console.log(_myName.repeat(2));





let _myTalk = '\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(_myTalk);

let _mySite = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
console.log(_mySite);

 console.log(typeof "10"=== 10);
 console.log(parseInt("10")===(10));
 console.log(parseFloat("9.8")===(10));
 console.log(Math.round("9.8")=== (10));
 console.log('pyton'.includes('on'));
 console.log('jargon'.includes('on'));
 console.log('I hope this course is not full of jargon'.includes('jargon'));
 console.log(Math.round(Math.random()*100));
 console.log(Math.round(Math.random()*51)+50);
 console.log(Math.round(Math.random()*255));

 let page = 'javasript'
 console.log(page[Math.floor(Math.random() * page.length)]);

 console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

 let nut = 'You cannot end a sentence with because because because is a conjunction'
 console.log(nut.substr(31,24));



 
let string='Love is the best thing in this world. Some found their love and some are still looking for their love';
console.log(string.match(/love/gi).length);


 console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/gi).length)


let plate=('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching');console.log(plate.replace(/[^a-zA-Z ]/g,''))

console.log((5000*12)+10000+(15000*12))




