// localStorage.setItem takes two parameters in the parathesis : keys and value
// localStorage.getItem takes only one parameters in the parathesis :key only






// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('first name', 'Laja')
localStorage.setItem('last name', 'Codes')
localStorage.setItem('age', 18)
localStorage.setItem('country', 'Canada')

console.log(localStorage.getItem('first name'));



// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys.
const students  =  {
    firstName:'OlOlade',
    lastName: 'Goodness',
    age: '17',
    skills: [
        'HTML','CSS','REACT','NODES'
    ],
    country: 'cyprus',

}
localStorage.setItem('studentInfo', JSON.stringify(students))
console.log(JSON.parse(localStorage.getItem('studentInfo')));



