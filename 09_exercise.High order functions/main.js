

/*const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


countries.forEach(count => console.log(count));
names.forEach(count => console.log(count));
numbers.forEach(count => console.log(count))
const ika = countries.map(country => country.toUpperCase())
console.log(ika);

const reddevil = countries.map(count => count.length)
console.log(reddevil );

const red  = countries.map(count => count.length ** 2)
console.log(red);

const nice = names.map(nave => nave.toUpperCase())
console.log(nice);

const prd = products.map(count => count  )
console.log(prd);

const fitOutCountries = countries.filter((dark) => dark.includes('land'))
console.log(fitOutCountries)

const fitOutSix = countries.filter((dark) => dark.length === 6)
console.log(fitOutSix)

const fitOutSixMore = countries.filter((dark) => dark.length >= 6)
console.log(fitOutSixMore)

const fitOutLetters = countries.filter((dark) => dark.startsWith('e'))
console.log(fitOutLetters)

const fitOutPricesValue = products.filter((dark) => Object.entries(products))
console.log(fitOutPricesValue)

 const number = [1, 2, 3, 4, 5, 6, 7]
const getStringLists = (arr) => {
 return arr.join(', ') 
 
}
console.log(getStringLists(number));

const numbe = [1, 2, 3, 4, 5, 6, 7]
 let codes = numbe.reduce((acc,curr) => acc + curr,0)
 console.log(codes);

 
const europeaCountries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway',  'IceLand']
console.log(europeaCountries.reduce((acc,curr,index) => {
    if (index === europeaCountries.length - 1) {
         return  acc + `and ${curr} are north European countries.`
    } else {
        return acc += `${curr},` 
    }
},''))


console.log(names.some((nam)=> nam.length > 7))                                
console.log(countries.every((countries) => countries.includes('land')));
console.log(countries.find((countries) => countries.length === 6).split(' '));
console.log(countries.findIndex((countries) => countries.length === 6));
console.log(countries.findIndex((fake) => fake === 'Norway'));
console.log(countries.findIndex((fake) => fake === 'Russia'));


// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
//  ]


console.log(
    products
    .filter((product) => typeof product.price === 'number')
    .map((product) =>  product.price)
    .reduce((acc,curr) => acc + curr ,0)
);

console.log(
    products.reduce((acc,curr) => {

        if(typeof curr.price === 'number')
        {
            return acc + curr.price
        }
        return acc 
    },0)
);
*/












 
 








