const buttons = document.querySelectorAll(".btn")
const textarea = document.querySelector("textarea")
const del = document.querySelector('.del')
const space = document.querySelector('.space')
const shift = document.querySelector('.shift')
let characters = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        characters = textarea.value.split('')
        console.log(characters);
    })
})


del.addEventListener('click', () => {
    characters.pop()
    textarea.value = characters.join('')
})


space.addEventListener('click', () => {
    characters.push(' ')
    textarea.value = characters.join('')

})

shift.addEventListener('click', () => {
   buttons.forEach(btn => {
    btn.classList.toggle('upper')
   })

})