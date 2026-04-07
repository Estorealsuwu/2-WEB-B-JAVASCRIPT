// Función principal
function encontrarMaximo(arreglo, inicio = 0, fin = arreglo.length - 1) {

    // Caso base:
    // Si solo hay un elemento, ese es el máximo
    if (inicio === fin) {
        return arreglo[inicio];
    }

    // Paso 1: Dividir
    // Calculamos el punto medio del arreglo
    let medio = Math.floor((inicio + fin) / 2);

    // Paso 2: Conquistar
    // Encontramos el máximo en la mitad izquierda
    let maxIzquierda = encontrarMaximo(arreglo, inicio, medio);

    // Encontramos el máximo en la mitad derecha
    let maxDerecha = encontrarMaximo(arreglo, medio + 1, fin);

    // Paso 3: Combinar
    // Comparamos ambos resultados y devolvemos el mayor
    if (maxIzquierda > maxDerecha) {
        return maxIzquierda;
    } else {
        return maxDerecha;
    }
}

// Prueba
let numeros = [3, 9, 202, 15, 6, 20, 1];
console.log("Máximo:", encontrarMaximo(numeros));