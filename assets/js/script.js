let cantidad = prompt('ingrese la cantidad de colores que va a insertar')

cantidad = parseInt(cantidad)

let colores = new Array()

for(i = 0; i < cantidad; i++){
colores[i] = prompt('inserte color').toLocaleLowerCase()
}

let arrColoresNoRepetidos = noRepetidos(colores)
let arrConteoColores = new Array()

//inicializar el array de conteo
for(i = 0; i < arrColoresNoRepetidos.length; i++){
    arrConteoColores[i] = 0
}


for(i = 0; i < arrColoresNoRepetidos.length; i++){

    for(j = 0; j < colores.length; j++){
        if(arrColoresNoRepetidos[i] == colores[j]){
            arrConteoColores[i]++
        }
    }
}

console.log(colores)
console.log(arrColoresNoRepetidos)
console.log(arrConteoColores)


function noRepetidos(arrColores){
    let noRepetidos = new Array()
    let seRepite
    
    for(i = 0; i < arrColores.length;i++){
        seRepite = false
        if(i == 0){
            noRepetidos.push(arrColores[0])
        }else{

            for(j = 0; j < noRepetidos.length; j++){
                if(noRepetidos[j] == arrColores[i]){
                    seRepite = true
                }
            }
    
            if(!seRepite){
                noRepetidos.push(arrColores[i])
            }
        }

    }

    return noRepetidos
}