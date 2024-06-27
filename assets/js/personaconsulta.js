//let datos = [9, "Juan", "arias", "wall@pizza.com"]
//Capturamos la tabla

let datos = [
    {
        id:123,
        first: "Juan",
        last: "Perez",
        handle: "hola@gmail.com"
    },
    {
        id:12448,
        first: "carlos",
        last: "pelaez",
        handle: "carlitoax@gmail.com"
    },
    {
        id:45687,
        first: "andres",
        last: "paez",
        handle: "paez@gmail.com"
    },
    {
        id:123,
        first: "jualian",
        last: "alvarez",
        handle: "che@gmail.com"
    }
]

let miTabla = document.getElementById('miTabla')

for (let i = 0; i < datos.length; i++) {
    //crear fila
    let fila = `
    <tr>
        <th>${datos[i].id}</th>
        <td>${datos[i].first}</td>
        <td>${datos[i].last}</td>
        <td>${datos[i].handle}</td>
        <td><a href="#"><i class="bi bi-pencil"></i></a></td>
        <td><a href="#"><i class="bi bi-trash"></i></a></td>
    </tr>
    `
    //actualizamos el elemento del dom (la pagina web especificamente)

    miTabla.innerHTML += fila
    
}