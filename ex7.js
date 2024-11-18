//ex7 Donat tres enters, ordena de major a menor.

var numero1 = 10000

var numero2 = 10

var numero3 = 98

if ((numero1 > numero2) && (numero1 > numero3)) {
    console.log(numero1)
    if (numero2 > numero3) {
        console.log(numero2)
        console.log(numero3)
    }
    else {
        console.log(numero3)
        console.log(numero2)
    }
}
else if ((numero1 > numero2) && (numero2 > numero3)) {
    console.log(numero2)
    if (numero1 > numero3) {
        console.log(numero1)
        console.log(numero3)
    }
    else {
        console.log(numero3)
        console.log(numero1)
    }
}
else{
    console.log(numero3)
    if (numero1 > numero2) {
        console.log(numero1)
        console.log(numero2)
    }
    else {
        console.log(numero2)
        console.log(numero1)
    }
}
