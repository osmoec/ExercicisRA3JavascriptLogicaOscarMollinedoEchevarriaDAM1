//ex12 Donat un enter de longitud par, intercanvia els dígits adjacents. Exemple: 123456 → 214365

function canvi2D(numero){
    var charac
    var charac2
    var numeroC = ""

    if (numero.length % 2 === 0) {
        numero = String(numero)
        for (var i = 0; i <= numero.length; i += 2) {
            charac = numero.charAt(i)
            charac2 = numero.charAt(i + 1)
            numeroC += charac2 + charac
        }
        numeroC = Number(numeroC)
    }
    else{
        numeroC = String("No es un numero de longitud par")
    }

    return numeroC
}

console.log(canvi2D(123456789))