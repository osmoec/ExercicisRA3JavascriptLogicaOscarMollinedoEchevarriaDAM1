//ex3 Donat un enter (x), mostra per pantalla la qualificació de l’examen

var nota = 8.98

    if (nota > 0 && nota <= 4.99) {
        console.log("suspes")
    }

    else if (nota > 5 && nota <= 5.99) {
    console.log("aprovat")
    }

    else if(nota > 6 && nota <= 6.99) {
        console.log("be")
    }

    else if (nota > 7 && nota <= 8.99) {
        console.log("notable")
    }

    else if (nota === 9 || nota === 10) {
        console.log("excel·lent")
    }

    else {
        console.log("valor invalid")
    }

