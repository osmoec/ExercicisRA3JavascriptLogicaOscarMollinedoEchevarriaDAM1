//ex6 6.- Donat un String (x), sumar els caràcters que siguin números.

var paraula = "5 ho5la 5 5 5 5 5 kek5fk5fkf5k 5"
var suma = 0

for (var i = 0; i < paraula.length; i++) {
    if(!(isNaN(Number(paraula.charAt(i))))) {
        suma += Number(paraula.charAt(i))
    }
}

console.log("total sumat de numeros trobats: "+suma)