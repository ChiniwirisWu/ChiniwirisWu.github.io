const header =  document.querySelector('header')
let date = new Date()
let day = date.getDay()
let month = date.getMonth()
let year = date.getFullYear()

header.innerHTML = `${day} ${month} ${year}`