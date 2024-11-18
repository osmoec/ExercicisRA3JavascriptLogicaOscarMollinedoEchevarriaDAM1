//ex10 Utilitza un do..while per sumar els múltiples de 3 i 5 fins al número 1000

var cont = 0

var suma = 0

    do {
        cont++
        if ((cont % 3 === 0) || (cont % 5 === 0)) {
            suma += cont
        }

    } while (cont !== 1000)

console.log("la suma dels mutiples de 3 i 5 fins a 1000 es: "+suma)