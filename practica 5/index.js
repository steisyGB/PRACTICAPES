// //llamda antes de inicializar la funcio
// saludar()

// //funcion de primer orden
// function saludar(){
//     console.log('hola mundo')
// }

// //llamada despues de inicializar
// saludar()

// const saludarAnonimo = function(){
//     saludar()
// }

// //llamada a funcion anonima

// //objeto
// const usuario = {
//     nombre: 'sBenitez',
//     correo: 'sin agragar correo'
// }

// function agrgarcorreo(nuevocorreo){
//     usuario.correo = nuevocorreo
// }

// console.log(usuario)
// agrgarcorreo('sbenitez05@gmail.com')
// console.log(usuario)

// let a = 5
// let b = 10

// function suma(){
//     return a+b
// }

// console.log(suma());

// let suma = function(a,b){
//     return a + b
// }

// console.log(suma(10,10))

// suma = 'hola, esta es una suma'
// console.log(suma())

//crear una funcion que permita determinar multiplicar a partir de suma

// const multiplicacion = function suma(a, b) {
//     return (b != 0) ? a + suma(a, b-1) : 0
// }
// console.log(multiplicacion(5,2));

//dunciones recursivas

let numero = 0 
while(numero < 10) {
    console.log(numero)
    numero++

}

function contador(numero=0) {
    if (numero >= 10 ){
        return
    }

    console.log(numero);

    contador(numero+1)
}

console.log("funcion recursiva");
contador()


function media(datos){
    function sumatoria(serie){
        let suma = 0
        serie.forEach(numero => {
            suma += numero
        });

        return suma
    }

    return sumatoria(datos) / datos.length
}

function mediana(datos){
    const largo = datos.length
    if (datos.length %2 == 0){
        let mitadArreglo = largo / 2
        let anterior = mitadArreglo -1 
        let siguiente = mitadArreglo 

        return (datos[anterior] + datos[siguiente]) / 2
    }else{
        let mitadArreglo = Math.round((largo)/2)
        return datos[mitadArreglo-1]
    }
}

function varianza(datos){
    function sumatoria(serie){
        let mediaDatos = media(series)
        let suma = 0
        serie.forEach(numero => {
            let resultado = numero - mediaDatos
            suma += Math.pow(resultado, 2)
        });

        return suma
    }

    return sumatoria(datos) / datos.length
}

const misdatos=[5,6,19,3]
console.log(`la media de ${misdatos} es ${media(misdatos)}`)
console.log(`la mediana es ${mediana(misdatos)}`)
console.log(`La varianza es ${varianza(misdatos)}`)

// function multiplicar(a, ...argumento){
//     argumento.forEach(numero => {
//         a*=numero
//     })
//     return a 
// }

// console.log('funcion de varios parametros')
// console.log(multiplicar(2));
// console.log(multiplicar(2,4))
// //calcular la varianza




