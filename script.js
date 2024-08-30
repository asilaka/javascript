const qu1 = prompt('Введите первую картину')
const qu11 = prompt('Введите вторую картину')
const qu2 = prompt('Введите имя')
const qu3 = prompt('Введите фамилия')
const qu4 = prompt('Введите врзраст')

const box = document.createElement('div')
const photo1 = document.createElement('img')
const photo = document.createElement('img')
const name = document.createElement('h1')
const surname = document.createElement('h2')
const age = document.createElement('h3')

const body = document.querySelector('body')

// const body = document.querySelector('body')
photo1.src = qu1
photo.src = qu11
name.innerText = qu2
surname.innerText = qu3
age.innerText = qu4
// body.appened(name)


box.append(photo1)
box.append(photo)
box.append(name)
box.append(surname)
box.append(age)


box.classList = 'box'
photo.style.width = '300px'
photo1.style.width = '300px'
photo1.style.margin = '10px'
photo.style.margin = '10px'
box.style.border = '1px solid black'
box.style.width = '400px'
box.style.margin = '0 auto'



body.append(box)
