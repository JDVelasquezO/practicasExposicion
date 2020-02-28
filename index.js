const form = document.getElementById('form')
const info = document.getElementById('info')

let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')

form.addEventListener('click', e => {
    e.preventDefault()
    
    if (!name.value || !email.value ||!password.value) {
        info.innerHTML = `
            <p style='color:red'>Debes colocar todos tus datos</p>
        `
        setTimeout(() => {
            info.innerHTML = ``
        }, 2000)
    } else {
        window.location = '/home.html'
    }
})