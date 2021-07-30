  let dog = {}
    console.log(dog)

dog.name = 'jack',
dog.legs = 'two',
dog.color = 'brown',
dog.age = 2,
dog.bark = 'woof woof',
console.log(dog)

let values = Object.values(dog);
console.log(values);

dog.breed = 'rottweiler',

dog.getDogInfo = function () {
   return `this is ${this.name},\n a  ${this.breed} dog with ${this.color} body `  
 
}
console.log(dog.getDogInfo());

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

 let highestUsersKey = Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
console.log(highestUsersKey);


let highest = { name: '', skills: []}
for (let userKey in users) {
  const user = users[userKey]
  if (user.skills && user.skills.length > highest.skills.length) {
    highest = { name: userKey, skills: user.skills };
  }
}
console.log(highest)



 let keys = Object.keys(users)
 let count = 0
 for (let i = 0; i < keys.length; i++){
let points = values[i]
 if (points >= 50) {
    count++
 }

 }
 console.log(`${count} users have more than or equal to 50 points`);

let mern = ['MongoDB', 'Express', 'React', 'Node']
let valuesChecker = Object.entries(users).filter(user => mern.every(skill => user[1].skills.includes(skill)))
console.log(valuesChecker);

/*let sum = "";
for (let i = 0; i < values.length; i++) {
  let counter = ""; 
  for (let j = 0; j < values[i].skills.length; j++) {
    counter += values[i].skills[j][0];
  }
  if (counter.includes("MERN")) {
    sum = sum + keys[i] + ",";
  }
}
console.log(`${sum} object key names have "MERN" in their skill`);*/ 

laja = {
    emails: 'laja@laja.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 18,
    isLoggedIn : false,
    points : 'not yet'
  }
  let mood = (Object.assign(users,laja));
   console.log(Object.values(users));
  console.log(users);
  console.log(Object.keys(users));

   countries = {
     countryName : 'America',
    capital:'New York',
    populations: 2000000,
    languages: 'English' 
  }
  console.log(countries);

  personAccount = {
  firstName : 'Laja',
  lastName : 'Codes',
  incomes : [
    {
      desc : "Jan Salary",
      amount : 2_000_000
    }, 
    {
      desc : "Feeding Allowance",
      amount : 10_000 
    }  
  ],
  expenses : [
    {
      desc : "Food stuff",
      amount : 80_000 
    },
    {
      desc : "House rent",
      amount : 640_000
    },
  ],

totalIncome: function ()  {
  return this.incomes.reduce((total,current) => total + current.amount, 1)
 },
 totalExpense: function ()  {
  return this.expenses.reduce((total, current) => total + current.amount, 1)
 },
 accountInfo: function () {
  return `Your name is ${this.firstName} ${this.lastName},your total expenses ${this.totalExpense()} and your total income is ${this.totalIncome()}. Your account balance is ${this.totalIncome() - this.totalExpense()}`
 },
 addIncome: function (desc,amount) {
  this.incomes.push({desc,amount})
 },
 addExpense: function (desc,amount) {
  this.expenses.push({desc: desc, amount: amount})
 },
 accountBalance: function (){
  return this.totalIncome() - this.totalExpense()
 }
}
console.log(personAccount.accountBalance())
console.log(personAccount.accountInfo())


const userr = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username:'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
];
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
const generateId = () => Math.random().toString(36).substring(5)
const signup = (username,email,password) => {
  const userExist = userr.find(user =>userr.name === username || userr.email === email)
  if (userExist) return console.log("You already have an account")
  userr.push({
    _id: generateId,
    username,
    email,
    password,
    createdAt:new Date().toLocaleString(),
    isLoggedIn: true
  }
  )
}
signup("laja","laja@gmail.com","codes")
console.log(userr);

const login = (username, email, password) => {
  const userIndex = userr.findIndex(userr => userr.username === username || userr.email === email)

  if (userIndex === -1){
    return console.log("User does not exist");
  }
  const user = userr[userIndex]
  if (user.password !== password) {
    return console.log("password is incorrect");
  }
 if(userr[userIndex].isLoggedIn = true ){
    return console.log("Welcome Back");
 }
}
login("laja","laja@gmail.com","codes")
console.log(userr);


const rateProduct = (userId, productId, rating) => {
  const productIndex = products.findIndex(product => product._id === productId)

  if (productIndex === -1) {
    return console.log('Product does not exist');
  }
  products[productIndex].ratings.push({ userId, rate:rating })
  return (products[productIndex])
}
console.log(rateProduct("a","aegfal",4));


const averageRating = (productId) => {
  const product = products.find(prd => prd._id === productId)
  if (!product) {
    return console.log('product not found')
  }
  const totalRating = product.ratings.reduce((total, current) => total + current.rate, 0)
  console.log(totalRating / product.ratings.length)
   return totalRating
}
averageRating('hedfcg')


const likeProduct = (id,productId) => {
  const productLike = products.find(product => product.likes == id ){
  if (productLike == -1  && products.name === productId)
  return console.log("It was like");
  productLike.push(id)
  return productLike
}

}

console.log(likeProduct());


 



















      













  
      