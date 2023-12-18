console.log('JS OK')


// 1 
const prezzo = document.getElementById('prezzo')
console.log('prezzo: ', prezzo)
// 2
const userKm = parseInt(prompt('Quanti chilometri vuoi fare?'))
console.log('userKm: ', userKm)
// 3
const userAge = parseInt(prompt('Quanti anni hai?'))
console.log('userAge: ', userAge)
// 4 
const fixedPrice = 0.21
console.log('fixedPrice: ', fixedPrice)
// 5
let totalPrice = fixedPrice * userKm
console.log('totalPrice: ', totalPrice)
// 6
let discountPrice = .20
console.log('discountPrice: ', discountPrice)
// 7
let message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €' 
// 8, 9, 10, 11
if (userAge < 18 ){
    totalPrice += - (totalPrice * discountPrice)
    console.log('totalPrice: ', totalPrice)  
    message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €' 
} else if (userAge > 65) {
    discountPrice = .40
    totalPrice += - (totalPrice * discountPrice)
    console.log('totalPrice: ', totalPrice) 
    message = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + ' €' 
}
// 12
prezzo.innerText = message
