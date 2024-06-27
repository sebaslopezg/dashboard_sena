//leer un archivo externo tipo json
//usamos promesas
fetch('./assets/js/aprendiz.json')
//primer salida .then serializada(transformada)
.then((respuesta)=>respuesta.json())
//la accion a desarrollar con ese objeto transformado
.then((datos) =>{

console.log(datos)

})