//leer un archivo externo tipo json
//usamos promesas
fetch('./assets/js/aprendiz.json')
.then((res)=>res.json())
.then((datos) =>{

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

})