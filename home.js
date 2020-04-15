const form = document.getElementById("petForm")
const info = document.getElementById("info")

let name = document.getElementById("name")
let weigth = document.getElementById("weigth")
let type = document.getElementById("type")

let array = []
let id = 1

form.addEventListener('submit', e => {
    e.preventDefault()
    addPet()
})

let addPet = () => {

    pet = {
        id: id,
        name: name.value,
        weigth: weigth.value,
        type: type.value
    }

    array.push(pet)
    showPet()
}

let showPet = () => {

    info.innerHTML = ''

    table = `
    <div class="card">
        <table class='striped' border="1">
            <th>
                <td>Nombre</td>
                <td>Edad</td>
                <td>Tipo</td>
                <td>Acciones</td>
            </th>
    `   

    array.map(p => {
        table += `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.weigth}</td>
                <td>${p.type}</td>
                <td>
                    <a class='red btn' onclick='delPet(${p.id})'>Eliminar</a>
                    <a class='green btn' onclick='viewUpdatePet(${p.id})'>Actualizar</a>
                </td>
            </tr>
        `
    })

    table += `
        </table>
    </div>
    `
    info.innerHTML = table

    resetForm()
    id += 1
}

let delPet = (id) => {
    
    petToDelete = array.find(pet => pet.id == id)
    index = array.indexOf(petToDelete)
    array.splice(index, 1)
    showPet();
}

let viewUpdatePet = (id) => {

    info.innerHTML = ''
    petFinded = array.find(pet => pet.id == id)
    let name = petFinded.name
    let weigth = petFinded.weigth
    let type = petFinded.type

    let formPet = `
    <div class="row">
        <div class="col s12">
            <div class="card">
                <form onsubmit='updatePet(event, ${id})'>
                <div class="card-content">
                        <input autofocus value='${name}' />
                        <label for="name">Nombre de mascota</label>
                        <input value='${weigth}' type='number' />
                        <label for="email">Peso de mascota</label>
                        <input value='${type}' type='text' />
                        <label for="password">Tipo</label>
                    </div>
                    <div class="card-action">
                        <button class="btn green" type="submit" name="action">
                            Actualizar
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `   
    info.innerHTML = formPet
}

let updatePet = (e, id) => {

    e.preventDefault()
    // console.log(e)
    let name = e.path[0].elements[0].value
    let weigth = e.path[0].elements[1].value
    let type = e.path[0].elements[2].value
    petFinded = array.find(pet => pet.id == id)

    pet.name = name
    pet.weigth = weigth
    pet.type = type

    showPet();
}

let resetForm = () => {
    name.value = ''
    weigth.value = ''
    type.value = ''
    name.focus()
}
