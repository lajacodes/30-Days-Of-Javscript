const earningsStatement = "I got paid 45000 as salary, 100000 as car maintenance allowance and 70000 for wardrobe allowance."

console.log(earningsStatement.match(/\d+/gi).reduce((acc,curr) => acc + Number(curr),0));

let numStatement = 'The position of some particles on the horizontal x-axis -1 -2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles'

let laja = numStatement.match(/-*\d+/gi).sort((a,b) => a - b)
console.log(Math.abs(Number(laja[0]) - Number(laja[laja.length - 1])));




const is_valid_variable_name = (word) => {
  const regex = /^[a-z_$][a-z0-9$_]*$/i
  const reserved = 'await break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import in instanceof interface let new null package private protected public return super switch static this throw try True typeof var void while with yield'.split(' ');

   if (reserved.includes(word)) return true;

  return regex.test(word) && !regex.test(word)
}

is_valid_variable_name('first_name')
console.log(is_valid_variable_name());


const paragraphs = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


const tenMostFrequentWords = (p,count=10) => {
 const change = p.match(/\w+/gi)
  const words = {}
  change.forEach(word => {
    if (words[word]){
       words[word] += 1
    }
    else {
       words[word] = 1
    }
  })
  // console.log(words);
  return Object.entries(words).sort((a,b) => b[1]- a[1]).map(count => {
    return { words: count[0], counts:count[1]}
  }).slice(0,10)
}
console.log(tenMostFrequentWords(paragraphs,10));



 const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

 const cleanText = (p) => p.replace(/[^\w ]/g, '')

 console.log(cleanText(sentence))
 console.log(tenMostFrequentWords(cleanText(sentence))[0])







