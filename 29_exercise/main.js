// utility
randColor = () => {
    return  Math.floor(Math.random() * 256)
}
let fontFace = ['Times New Roman, Times, Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sanif']
 let fontWeight = '100,200,300,400,500,600,800,900'.split(',')



const bodyEl = document.querySelector('body')
const congEl = document.createElement('div')
bodyEl.appendChild(congEl)
const pEl = document.createElement('p')
congEl.appendChild(pEl)

pEl.innerHTML = 'CONGRATULATIONS !'

pEl.style.display = 'flex'
pEl.style.justifyContent = 'center'
pEl.style.fontSize = '4rem'
pEl.style.heigth = '25rem'
pEl.style.marginTop = '20rem'

congEl.style.backgroundColor ='green'
congEl.style.borderRadius = '2px'
congEl.style.padding = '1px 3px 3px 1px'





// stylings

setInterval(() => {
let font = fontFace[Math.floor(Math.random() * fontFace.length)]
let weight = fontWeight[Math.floor(Math.random() * fontWeight.length)]
pEl.style.fontFamily = `${font}`
pEl.style.fontWeight = weight
const sentences = pEl.textContent
pEl.innerHTML = ''
sentences.split('').forEach((letter) => {
  const newEl = document.createElement('span')
  newEl.textContent  = letter
  newEl.style.color = `rgb(${randColor()},${randColor()},${randColor()},${randColor()})
   `
   pEl.appendChild(newEl)
})
   
},1000)
 

