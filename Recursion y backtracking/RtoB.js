// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Función recursiva
function findGift(gifts, giftName, index = 0) {
    // Caso base: llegamos al final
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    // Caso base: encontramos el regalo
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }

    return findGift(gifts, giftName, index + 1);
}

// Pruebas
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));