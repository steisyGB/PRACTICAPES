function N() {
    let n = parseInt(prompt("Ingrese la cantidad de números:"));
    let numeros = [];

    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt(`Ingrese el número ${i+1}:`));
        numeros.push(numero);
    }

    return numeros;
}
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const medio = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, medio);
    const derecha = arr.slice(medio);

    return fusionar(mergeSort(izquierda), mergeSort(derecha));
}

function fusionar(izquierda, derecha) {
    let resultado = [];
    let i = 0;
    let j = 0;

    while (i < izquierda.length && j < derecha.length) {
        if (izquierda[i] < derecha[j]) {
            resultado.push(izquierda[i]);
            i++;
        } else {
            resultado.push(derecha[j]);
            j++;
        }
    }

    return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivote = arr[arr.length - 1];
    const izquierda = [];
    const derecha = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivote) {
            izquierda.push(arr[i]);
        } else {
            derecha.push(arr[i]);
        }
    }

    return [...quickSort(izquierda), pivote, ...quickSort(derecha)];
}
function Menu() {
    let numeros = N();
    let opcion = prompt(`Seleccione el método de ordenamiento:
1. Bubble Sort
2. Merge Sort
3. Quick Sort`);

    switch (parseInt(opcion)) {
        case 1:
            console.log(bubbleSort(numeros));
            break;
        case 2:
            console.log(mergeSort(numeros));
            break;
        case 3:
            console.log(quickSort(numeros));
            break;
        default:
            console.log("Opción inválida");
            break;
    }
}
mostrarMenu();
