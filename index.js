const form = document.getElementById('form')
const info = document.getElementById('info')

let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')

form.addEventListener('click', e => {
    e.preventDefault()
    
    if (!name.value || !email.value ||!password.value) {
        info.innerHTML = `
            <div class="col s12">
                <div class="card red darken-1">
                <div class="card-content white-text">
                    <p>Debes llenar todos los campos</p>
                </div>
                </div>
            </div>
        `
        setTimeout(() => {
            info.innerHTML = ``
        }, 2000)
    } else {
        window.location = '/home.html'
    }
})