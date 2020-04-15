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
        <table border="1">
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
                    <button onclick='delPet(${p.id})'>Eliminar</button>
                    <button onclick='updatePet()'>Actualizar</button>
                </td>
            </tr>
        `
    })

    table += `
        </table>
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

let updatePet = () => {

}

let resetForm = () => {
    name.value = ''
    weigth.value = ''
    type.value = ''
    name.focus()
}
