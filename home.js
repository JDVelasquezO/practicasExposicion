const form = document.getElementById("petForm")
const info = document.getElementById("info")

let name = document.getElementById("name")
let weigth = document.getElementById("weigth")
let type = document.getElementById("type")

let array = []

form.addEventListener('submit', e => {
    e.preventDefault()

    pet = {
        name: name.value,
        weigth: weigth.value,
        type: type.value
    }

    array.push(pet)
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
                <td>1</td>
                <td>${p.name}</td>
                <td>${p.weigth}</td>
                <td>${p.type}</td>
                <td>
                    <button>Eliminar</button>
                    <button>Actualizar</button>
                </td>
            </tr>
        `
    })

    table += `
        </table>
    `
    info.innerHTML = table

    resetForm()
})

let resetForm = () => {
    name.value = ''
    name.focus()
    weigth.value = ''
    type.value = ''
}
