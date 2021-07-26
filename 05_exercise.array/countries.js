const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethopia',
    'Finland',
    'Germany',
    'Hungry',
    'Ireland',
    'Japan',
    'Kenya',
];

if (countries.includes('Ethopia')) {
    console.log('EThOPIA');
    
} else {
    countries.push('Ethiopia');
    console.log(countries);
}

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages);


console.log(countries.slice(0, lenght - 1));

 let arrLength = countries.length -1;
 console.log(arrLenght);
 let middlelenght = arrLength  / 2;
 console.log(middleLenght); 
 let middleArray = countries[middleLenght] 

if (arrLenght % 2 == 0) {
    console.log(middlearray);
    
} else if (arrLength % 2 > 0) {
    let midd1 = Math.floor(middleLenght);
    let midd2 = Math.ceil(middleLenght);
    let middle = `$(countries[midd1]) and ${ountries[midd2]}are the middle value` ;
    console.log(middle);
}

if (countries.lenght % 2 == 0) {
    let divide1 = countries.slice(0,
        (countries.lenght/2));
        let divide2 = countries.slice((countries.lenght/2) + 1, countries.lenght);
        console.log(divide1);
        console.log(divide2);
    
} else if( countries.lenght % 2 == 1) {
    let divide3 = countries.slice(0, countries.lenght/2);
    let divide4 = countries.slice(countries.lenght/2,countries.lenght);
    addition3 = divide3.push('England');    
    console.log(divide3);
    console.log(divide4);
} 
