


const withdraw = (amount) => new Promise((resolve, reject) => {
  const balance = 50_000

  setTimeout(() => {
    if (amount > balance) {
      reject('insufficient fund')
    } else {
        resolve({cash: amount,balance: balance - amount
      })
    }
  }, 3000)
})
 console.log(withdraw);

  withdraw(5_000)
    .then(response => console.log(response))
    .catch(err => console.error(err))


const such = async function (n)  {
  return  (n + n)
}


// callback esxample
const cook = (food) => {
  console.log('Be patient...work in progress...')
  setTimeout(() => {
    console.log(`${food} is ready 🍲`)
  }, 5_000)
}

const hungry = (isHungry, cb) => {
  if (isHungry) {
    return cb('yam')
  } else {
    return 'Have a nice day'
  }
}
hungry(false, cook)
