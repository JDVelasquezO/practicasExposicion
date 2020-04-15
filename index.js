const form = document.getElementById('form')
const info = document.getElementById('info')

let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')

let users = [];
let marker = true;

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {
    return res.json();
})
.then(resJSON => {
    users = resJSON
    console.log(users);
})

form.addEventListener('click', e => {
    e.preventDefault()

    for (let index = 0; index < users.length; index++) {
        if (name.value == users[index].name) {
            marker = true
            break
        } else {
            marker = false
        }
    }

    if (marker) {
        // console.log('Encontrado');
        window.location = '/home.html'
        localStorage.setItem('name', name.value)
    } else {
        // console.log('No encontrado');
        info.innerHTML = `
            <div class="col s12">
                <div class="card red darken-1">
                <div class="card-content white-text">
                    <p>Debes llenar todos los campos con datos existentes</p>
                </div>
                </div>
            </div>
        `
        resetForm()

        setTimeout(() => {
            info.innerHTML = ``
        }, 2000)
    }
})

let resetForm = () => {
    name.value = ''
    name.focus()
    email.value = ''
    password.value = ''
}