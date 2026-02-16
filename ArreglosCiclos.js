let frutas = ['Manzana', 'Pera', 'Lulo', 'Cereza', 'Mango', 'Papaya'];

console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[0])

console.log(frutas.length)

for (let indice = 0; indice < frutas.length; indice++){
    console.log("Fruta = ", frutas[indice])
}

let contador = 0;

while (contador < frutas.length){
    console.log("Fruta = ", frutas[contador])
    contador++;
}