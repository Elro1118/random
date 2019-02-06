const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const getRandomColor = () => {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
  // const c = () => {
  //   let hex = Math.floor(Math.random() * 256).toString(16)
  //   return ('0' + String(hex)).substr(-2) // pad with zero
  // }
  // return '#' + c() + c() + c()
}

const changeColor = () => {
  document.body.style.background = getRandomColor()
}

document.addEventListener('DOMContentLoaded', main)

document.querySelector('.ChangeBtn').addEventListener('click', changeColor)
